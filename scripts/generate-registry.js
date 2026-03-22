#!/usr/bin/env node
/**
 * Survey Registry Generator (generated layer)
 *
 * i18n-aware version
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

// ---------------- I18N / PATH RESOLUTION ----------------

function pathToFileUrl(filePath) {
  const resolved = path.resolve(filePath);
  const normalized = resolved.split(path.sep).join("/");
  return `file://${normalized.startsWith("/") ? "" : "/"}${normalized}`;
}

async function resolvePaths() {
  // scripts → project root
  const projectRootDir = path.resolve(__dirname, "..");

  const projectPathsModule = await import(
    pathToFileUrl(
      path.resolve(projectRootDir, "./helpers/i18n/projectPaths.mjs")
    )
  );

  const i18nConfigModule = await import(
    pathToFileUrl(
      path.resolve(projectRootDir, "./helpers/i18n/i18nConfig.mjs")
    )
  );

  const { buildProjectPaths } = projectPathsModule;
  const { DEFAULT_LOCALE } = i18nConfigModule;

  const activeLocale = getArg("--lang", DEFAULT_LOCALE);
  const derived = buildProjectPaths(activeLocale, projectRootDir);

  return {
    projectRootDir,
    activeLocale,
    inPath: getArg("--in", derived.masterSurveyPath),
    outPath: getArg("--out", derived.registryPath),
  };
}

// ---------------- Flags ----------------
const includePresentation = hasFlag("--include-presentation");
const includeVisibleIfExpr = hasFlag("--include-visibleif-expr");

// ---------------- Classification ----------------
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

// ---------------- Helpers ----------------
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

  return {
    hasTitle,
    ...(hasTitle ? { title: rawTitle } : {}),
    hasVisibleIf,
    ...(includeVisibleIfExpr && hasVisibleIf ? { visibleIf: rawVisibleIf } : {}),
    ...(isRequired !== undefined ? { isRequired } : {}),
    ...(hasValidators !== undefined ? { hasValidators } : {}),
  };
}

// ---------------- Tree walk ----------------
function walkElements({ elements, pageName, ancestors, outElements }) {
  if (!Array.isArray(elements)) return;

  for (const el of elements) {
    if (!el || typeof el !== "object") continue;

    const elName = el.name;
    const elType = el.type || "unknown";

    if (!elName || typeof elName !== "string") continue;

    const role = classifyRole(elType);

    if (!includePresentation && role === "presentation") {
      if (Array.isArray(el.elements)) {
        walkElements({ elements: el.elements, pageName, ancestors, outElements });
      }
      continue;
    }

    const collect = shouldCollect(role);
    const pathChain = [pageName, ...ancestors];

    if (outElements[elName]) {
      console.warn(
        `[registry] duplicate element name "${elName}" encountered; overwriting previous entry`
      );
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

    if (Array.isArray(el.elements) && el.elements.length > 0) {
      const nextAncestors =
        role === "panel" ? [...ancestors, elName] : ancestors;

      walkElements({
        elements: el.elements,
        pageName,
        ancestors: nextAncestors,
        outElements,
      });
    }

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
function buildRegistryGenerated(surveyJson, inPath) {
  const pages = Array.isArray(surveyJson.pages) ? surveyJson.pages : [];
  const elements = {};

  for (const page of pages) {
    const pageName =
      typeof page?.name === "string" && page.name.trim()
        ? page.name.trim()
        : "UNNAMED_PAGE";

    walkElements({
      elements: page?.elements,
      pageName,
      ancestors: [],
      outElements: elements,
    });
  }

  const calculatedValues = Array.isArray(surveyJson.calculatedValues)
    ? surveyJson.calculatedValues
        .map((cv) => (typeof cv?.name === "string" ? cv.name.trim() : ""))
        .filter(Boolean)
        .sort((a, b) => a.localeCompare(b))
    : [];

  return {
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
    elements,
  };
}

// ---------------- Main ----------------
(async function main() {
  const { projectRootDir, activeLocale, inPath, outPath } =
    await resolvePaths();

  console.log(`\n🌐 generate-registry locale: ${activeLocale}`);
  console.log(`📥 masterSurvey input: ${inPath}`);
  console.log(`📤 registry output: ${outPath}\n`);

  const absIn = path.isAbsolute(inPath)
    ? inPath
    : path.resolve(projectRootDir, inPath);

  const absOut = path.isAbsolute(outPath)
    ? outPath
    : path.resolve(projectRootDir, outPath);

  if (!fs.existsSync(absIn)) {
    console.error(`[registry] input not found: ${absIn}`);
    process.exit(1);
  }

  let survey;
  try {
    survey = JSON.parse(fs.readFileSync(absIn, "utf8"));
  } catch (e) {
    console.error(`[registry] failed to read/parse JSON: ${absIn}`);
    console.error(e);
    process.exit(1);
  }

  const registry = buildRegistryGenerated(survey, inPath);

  ensureDirExists(absOut);
  fs.writeFileSync(absOut, JSON.stringify(registry, null, 2) + "\n", "utf8");

  console.log(`[registry] wrote: ${absOut}`);
})().catch((err) => {
  console.error("❌ generate-registry failed:", err);
  process.exit(1);
});