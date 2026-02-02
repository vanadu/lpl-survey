#!/usr/bin/env node
/**
 * Survey Registry Generator (generated layer)
 *
 * Produces registry.generated.json from a SurveyJS master survey JSON.
 *
 * Output schema:
 * {
 *   meta: { registryVersion, builtAt?, builtFrom?, calculatedValues? },
 *   elements: {
 *     [name]: {
 *       name, type, role, collect, path,
 *       hasTitle, title?,
 *       hasVisibleIf, visibleIf?,
 *       isRequired?, hasValidators?
 *     }
 *   }
 * }
 *
 * Usage:
 *   node scripts/generate-registry.js \
 *     --in data/master-survey.json \
 *     --out helpers/registry.generated.json
 *
 * Flags:
 *   --include-presentation     Include presentation elements (html, image, expression, etc.)
 *                             Default: false (skips presentation)
 *
 *   --include-visibleif-expr   Include the visibleIf expression string (visibleIf) when present
 *                             Default: false (only emits hasVisibleIf boolean)
 *
 * Notes:
 * - "path" is the ancestor chain only: [pageName, ...panelNames] (does not include the element itself)
 * - Elements are keyed by element.name
 * - Ordering is stable for diffability
 */

const fs = require("fs");
const path = require("path");

// ---------------- CLI helpers ----------------
function getArg(flag, defaultValue) {
  const idx = process.argv.indexOf(flag);
  if (idx === -1) return defaultValue;
  const val = process.argv[idx + 1];
  if (!val || val.startsWith("--")) return defaultValue;
  return val;
}

function hasFlag(flag) {
  return process.argv.includes(flag);
}

const inPath = getArg("--in", "data/master-survey.json");
const outPath = getArg("--out", "helpers/registry.generated.json");

const includePresentation = hasFlag("--include-presentation");
const includeVisibleIfExpr = hasFlag("--include-visibleif-expr");

// ---------------- Classification ----------------
/**
 * Treat these as presentation-only (non-collecting) elements.
 * (You can add to this list as you discover more.)
 */
const PRESENTATION_TYPES = new Set([
  "html",
  "image",
  "expression",
  "paneltitle",
]);

function classifyRole(type) {
  if (type === "panel" || type === "paneldynamic") return "panel";
  if (PRESENTATION_TYPES.has(type)) return "presentation";
  return "question";
}

function shouldCollect(role) {
  return role === "question";
}

// ---------------- Stable output helpers ----------------
// !VA Order by appearance in master-survey.json. Stop using this function to prevent alphabetization of keys
// function stableSortKeys(obj) {
//   const sorted = {};
//   Object.keys(obj)
//     .sort((a, b) => a.localeCompare(b))
//     .forEach((k) => (sorted[k] = obj[k]));
//   return sorted;
// }

function ensureDirExists(filePath) {
  const dir = path.dirname(filePath);
  fs.mkdirSync(dir, { recursive: true });
}

// ---------------- Field extraction ----------------
function extractGeneratedFlags(el) {
  const rawTitle = typeof el.title === "string" ? el.title.trim() : "";
  const hasTitle = rawTitle.length > 0;

  const rawVisibleIf = typeof el.visibleIf === "string" ? el.visibleIf.trim() : "";
  const hasVisibleIf = rawVisibleIf.length > 0;

  const isRequired =
    typeof el.isRequired === "boolean" ? el.isRequired : undefined;

  const hasValidators =
    Array.isArray(el.validators) && el.validators.length > 0 ? true : undefined;

  const out = {
    hasTitle,
    ...(hasTitle ? { title: rawTitle } : {}),
    hasVisibleIf,
    ...(includeVisibleIfExpr && hasVisibleIf ? { visibleIf: rawVisibleIf } : {}),
    ...(isRequired !== undefined ? { isRequired } : {}),
    ...(hasValidators !== undefined ? { hasValidators } : {}),
  };

  return out;
}

// ---------------- Tree walk ----------------
/**
 * Walk SurveyJS "elements" arrays. Tracks panel ancestry to build path.
 */
function walkElements({ elements, pageName, ancestors, outElements }) {
  if (!Array.isArray(elements)) return;

  for (const el of elements) {
    if (!el || typeof el !== "object") continue;

    const elName = el.name;
    const elType = el.type || "unknown";

    // Skip anonymous elements (can happen in some SurveyJS structures)
    if (!elName || typeof elName !== "string") continue;

    const role = classifyRole(elType);

    // Optional: exclude presentation elements (html/image/expression/etc.)
    if (!includePresentation && role === "presentation") {
      // If a presentation node somehow nests elements, still traverse them
      if (Array.isArray(el.elements)) {
        walkElements({ elements: el.elements, pageName, ancestors, outElements });
      }
      // paneldynamic templateElements do not apply here typically, but harmless to ignore
      continue;
    }

    const collect = shouldCollect(role);
    const pathChain = [pageName, ...ancestors];


    // !VA Prevent alphabetization. Replace:
    // if (outElements[elName]) {
    //   console.warn(
    //     `[registry] duplicate element name "${elName}" encountered; overwriting previous entry`
    //   );
    // }
    // outElements[elName] = {
    //   name: elName,
    //   type: elType,
    //   role,
    //   collect,
    //   path: pathChain,
    //   ...extractGeneratedFlags(el),
    // };

    // !VA With
    if (outElements[elName]) {
  console.warn(`[registry] duplicate element name "${elName}" encountered; overwriting previous entry`);
    // Move key to the new insertion position to reflect latest appearance:
    delete outElements[elName];
  }
  outElements[elName] = {
    name: elName,
    type: elType,
    role,
    collect,
    path: pathChain,
    ...extractGeneratedFlags(el),
  };





    // Recurse into normal nested elements
    if (Array.isArray(el.elements) && el.elements.length > 0) {
      const nextAncestors = role === "panel" ? [...ancestors, elName] : ancestors;
      walkElements({
        elements: el.elements,
        pageName,
        ancestors: nextAncestors,
        outElements,
      });
    }

    // Recurse into paneldynamic templates (common SurveyJS pattern)
    if (elType === "paneldynamic" && Array.isArray(el.templateElements)) {
      const nextAncestors = [...ancestors, elName];
      walkElements({
        elements: el.templateElements,
        pageName,
        ancestors: nextAncestors,
        outElements,
      });
    }
  }
}

// ---------------- Build registry ----------------
function buildRegistryGenerated(surveyJson) {
  const pages = Array.isArray(surveyJson.pages) ? surveyJson.pages : [];

  const elements = {};

  for (const page of pages) {
    const pageName =
      typeof page?.name === "string" && page.name.trim().length > 0
        ? page.name.trim()
        : "UNNAMED_PAGE";

    walkElements({
      elements: page?.elements,
      pageName,
      ancestors: [],
      outElements: elements,
    });
  }

  // Capture calculatedValues names (useful for validation/drift tooling)
  const calculatedValues = Array.isArray(surveyJson.calculatedValues)
    ? surveyJson.calculatedValues
        .map((cv) => (typeof cv?.name === "string" ? cv.name.trim() : ""))
        .filter((n) => n.length > 0)
        .sort((a, b) => a.localeCompare(b))
    : [];

  const registry = {
    meta: {
      registryVersion: "1.0.0",
      builtAt: new Date().toISOString(),
      builtFrom: inPath,
      ...(calculatedValues.length ? { calculatedValues } : {}),
      flags: {
        includePresentation,
        includeVisibleIfExpr,
      },
    },
    // !VA Order by appearance in master-survey.json. Replace
    // elements: stableSortKeys(elements),
    // !VA With
    elements,

  };

  return registry;
}

// ---------------- Main ----------------
(function main() {
  const absIn = path.resolve(process.cwd(), inPath);
  const absOut = path.resolve(process.cwd(), outPath);

  if (!fs.existsSync(absIn)) {
    console.error(`[registry] input not found: ${absIn}`);
    process.exit(1);
  }

  let survey;
  try {
    const raw = fs.readFileSync(absIn, "utf8");
    survey = JSON.parse(raw);
  } catch (e) {
    console.error(`[registry] failed to read/parse JSON: ${absIn}`);
    console.error(e);
    process.exit(1);
  }

  const registry = buildRegistryGenerated(survey);

  ensureDirExists(absOut);
  fs.writeFileSync(absOut, JSON.stringify(registry, null, 2) + "\n", "utf8");

  console.log(`[registry] wrote: ${absOut}`);
})();
