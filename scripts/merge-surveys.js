#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const readline = require("readline");
const { spawnSync } = require("child_process");

// -----------------------------------------------------------------------------
// CLI helpers
// -----------------------------------------------------------------------------

function getArg(flag, defaultValue = null) {
  const idx = process.argv.indexOf(flag);
  if (idx === -1) return defaultValue;
  const val = process.argv[idx + 1];
  if (!val || val.startsWith("--")) return defaultValue;
  return val;
}

function hasFlag(flag) {
  return process.argv.includes(flag);
}

// -----------------------------------------------------------------------------
// PATH / I18N
// -----------------------------------------------------------------------------

function pathToFileUrl(filePath) {
  const resolved = path.resolve(filePath);
  const normalized = resolved.split(path.sep).join("/");
  return `file://${normalized.startsWith("/") ? "" : "/"}${normalized}`;
}

async function resolvePaths() {
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

  return { projectRootDir, activeLocale, derived };
}

// -----------------------------------------------------------------------------
// CONFIG
// -----------------------------------------------------------------------------

const BUILD_REGISTRY_GENERATED = true;

const REGISTRY_INCLUDE_PRESENTATION = false;
const REGISTRY_INCLUDE_VISIBLEIF_EXPR = true;

const IS_CI = String(process.env.CI).toLowerCase() === "true";

const PROMPT_ON_CALC_MISMATCH = true;
const PROMPT_ON_UNKNOWN_REFERENCES = true;

// -----------------------------------------------------------------------------
// PAGE FILES
// -----------------------------------------------------------------------------

const pageFiles = [
  "00_LANDING-page.json",
  "01_USER_INFO-page.json",
  "02_CMPN_INFO-page.json",
  "03_FACTORS-page.json",
  "04_SYMPTOMS-page.json",
  "05_PRIMARY-page.json",
  "06_DIAGNOSIS-page.json"
  // "07_MEDICATION-page.json",
  // "08_PROCEDURE-page.json", 
  // "09_THERAPY-page.json",
  // "10_BREATHING-page.json",
  // "11_NEUROPATHY-page.json",
  // "12_CONCLUSION-page.json"
];

// -----------------------------------------------------------------------------
// UTILITIES
// -----------------------------------------------------------------------------

function pad2(n) {
  return String(n).padStart(2, "0");
}

function buildTimestamp() {
  const d = new Date();
  return `${d.getFullYear()}${pad2(d.getMonth() + 1)}${pad2(d.getDate())}_${pad2(
    d.getHours()
  )}${pad2(d.getMinutes())}${pad2(d.getSeconds())}`;
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function traverse(value, visitor) {
  if (Array.isArray(value)) {
    value.forEach((v) => traverse(v, visitor));
  } else if (value && typeof value === "object") {
    visitor(value);
    Object.values(value).forEach((v) => traverse(v, visitor));
  }
}

function setFromCalculatedValues(arr) {
  return new Set(
    (arr || [])
      .map((cv) => (cv?.name || "").trim())
      .filter(Boolean)
  );
}

function setDiff(a, b) {
  return [...a].filter((x) => !b.has(x)).sort();
}

function collectElementNamesFromPage(pageObj) {
  const names = new Set();

  traverse(pageObj, (obj) => {
    if (obj?.name && obj?.type) {
      names.add(obj.name.trim());
    }
  });

  if (pageObj?.name) names.add(pageObj.name.trim());

  return names;
}

function extractBraceRefsWithContext(pageObj) {
  const hits = [];

  function walk(value, pathParts) {
    if (Array.isArray(value)) {
      value.forEach((v, i) => walk(v, [...pathParts, i]));
    } else if (value && typeof value === "object") {
      Object.entries(value).forEach(([k, v]) =>
        walk(v, [...pathParts, k])
      );
    } else if (typeof value === "string") {
      const re = /\{([^}]+)\}/g;
      let m;

      while ((m = re.exec(value))) {
        const base = m[1].split(".")[0].trim();

        if (!base || /^\d+(,\d*)?$/.test(base)) continue;

        hits.push({
          token: base,
          path: pathParts.join("."),
          value,
        });
      }
    }
  }

  walk(pageObj, []);
  return hits;
}

function isInteractive() {
  return process.stdin.isTTY && process.stdout.isTTY;
}

async function promptAbort(msg) {
  if (IS_CI || !isInteractive()) return true;

  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(`${msg}\nAbort? [Y/N]: `, (a) => {
      rl.close();
      resolve(/^y(es)?$/i.test(a));
    });
  });
}

// -----------------------------------------------------------------------------
// REGISTRY CALL (SIMPLIFIED)
// -----------------------------------------------------------------------------

function runGenerateRegistry(activeLocale) {
  const generatorPath = path.resolve(__dirname, "./generate-registry.js");

  const args = [generatorPath, "--lang", activeLocale];

  if (REGISTRY_INCLUDE_PRESENTATION)
    args.splice(1, 0, "--include-presentation");

  if (REGISTRY_INCLUDE_VISIBLEIF_EXPR)
    args.splice(1, 0, "--include-visibleif-expr");

  const result = spawnSync(process.execPath, args, { stdio: "inherit" });

  if (result.error || result.status !== 0) {
    console.error("❌ generate-registry failed");
    process.exit(1);
  }
}

// -----------------------------------------------------------------------------
// MAIN
// -----------------------------------------------------------------------------

async function main() {
  const { projectRootDir, activeLocale, derived } =
    await resolvePaths();

  console.log(`\n🌐 merge-surveys locale: ${activeLocale}`);

  const PAGE_CONTENT_DIR = derived.pageContentDir;
  const MASTER_SURVEY_DIR = derived.masterSurveyDir;
  const MASTER_SURVEY_PATH = derived.masterSurveyPath;
  const CALCULATED_VALUES_PATH = derived.calculatedValuesPath;

  // ---------------------------------------------------------------------------
  // LOAD
  // ---------------------------------------------------------------------------

  const pages = pageFiles.map((f) => {
    const p = path.join(PAGE_CONTENT_DIR, f);
    if (!fs.existsSync(p)) {
      console.error(`❌ Missing: ${p}`);
      process.exit(1);
    }
    return readJson(p);
  });

  const calculatedValues = readJson(CALCULATED_VALUES_PATH);

  const masterSurvey = {
    calculatedValues,
    showProgressBar: "top",
    questionsOnPageMode: "questionPerPage",
    pages,
  };

  // ---------------------------------------------------------------------------
  // VALIDATION #1
  // ---------------------------------------------------------------------------

  if (fs.existsSync(MASTER_SURVEY_PATH)) {
    const existing = readJson(MASTER_SURVEY_PATH);

    const a = setFromCalculatedValues(calculatedValues);
    const b = setFromCalculatedValues(existing.calculatedValues);

    const diff = [...setDiff(a, b), ...setDiff(b, a)];

    if (diff.length) {
      console.error("❌ CalculatedValues mismatch");

      if (PROMPT_ON_CALC_MISMATCH) {
        if (await promptAbort("Mismatch detected")) process.exit(1);
      }
    }
  }

  // ---------------------------------------------------------------------------
  // VALIDATION #2
  // ---------------------------------------------------------------------------

  const elementNames = new Set();
  pages.forEach((p) =>
    collectElementNamesFromPage(p).forEach((n) =>
      elementNames.add(n)
    )
  );

  const calcNames = setFromCalculatedValues(calculatedValues);
  const known = new Set([...elementNames, ...calcNames]);

  for (const file of pageFiles) {
    const page = readJson(path.join(PAGE_CONTENT_DIR, file));
    const unknown = extractBraceRefsWithContext(page).filter(
      (h) => !known.has(h.token)
    );

    if (unknown.length) {
      console.error(`❌ Unknown tokens in ${file}`);

      if (PROMPT_ON_UNKNOWN_REFERENCES) {
        if (await promptAbort("Unknown tokens detected")) process.exit(1);
      }
    }
  }

  // ---------------------------------------------------------------------------
  // WRITE
  // ---------------------------------------------------------------------------

  fs.mkdirSync(MASTER_SURVEY_DIR, { recursive: true });

  fs.writeFileSync(
    MASTER_SURVEY_PATH,
    JSON.stringify(masterSurvey, null, 2)
  );

  const snapshot = path.join(
    MASTER_SURVEY_DIR,
    `master-survey_${buildTimestamp()}.json`
  );

  fs.writeFileSync(snapshot, JSON.stringify(masterSurvey, null, 2));

console.log(`📤 masterSurvey output: ${MASTER_SURVEY_PATH}`);
console.log(`🗂️ snapshot: ${snapshot}`);

  // ---------------------------------------------------------------------------
  // REGISTRY (SAFE: runs AFTER write)
  // ---------------------------------------------------------------------------

  if (BUILD_REGISTRY_GENERATED) {
    runGenerateRegistry(activeLocale);
  }
}

main().catch((err) => {
  console.error("❌ merge-surveys failed:", err);
  process.exit(1);
});