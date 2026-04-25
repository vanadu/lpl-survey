#!/usr/bin/env node

/**
 * merge-surveys.js
 *
 * Builds canonical survey artifacts:
 *  1) data/master-survey/<locale>/master-survey.json
 *  2) data/master-survey/<locale>/master-survey_YYYYMMDD_HHMMSS.json
 *  3) data/registry/<locale>/registry.generated.json
 *  4) helpers/surveySchema.json
 */

const fs = require("fs");
const path = require("path");
const readline = require("readline");
const { spawnSync } = require("child_process");

// -----------------------------------------------------------------------------
// CONFIG
// -----------------------------------------------------------------------------

const DEFAULT_LOCALE = "en-US";

function getArgValue(flag, fallback = null) {
  const idx = process.argv.indexOf(flag);
  if (idx === -1) return fallback;
  return process.argv[idx + 1] || fallback;
}

const ACTIVE_LOCALE =
  getArgValue("--lang") ||
  getArgValue("--locale") ||
  process.env.SURVEY_LOCALE ||
  DEFAULT_LOCALE;

const ROOT = path.resolve(__dirname, "..");
const DATA_ROOT_DIR = path.join(ROOT, "data");

const PAGE_CONTENT_DIR = path.join(DATA_ROOT_DIR, "page-content", ACTIVE_LOCALE);
const CALCULATED_VALUES_PATH = path.join(PAGE_CONTENT_DIR, "calculatedValues.json");

const MASTER_SURVEY_DIR = path.join(DATA_ROOT_DIR, "master-survey", ACTIVE_LOCALE);
const MASTER_SURVEY_PATH = path.join(MASTER_SURVEY_DIR, "master-survey.json");

const REGISTRY_DIR = path.join(DATA_ROOT_DIR, "registry", ACTIVE_LOCALE);
const REGISTRY_OUT_PATH = path.join(REGISTRY_DIR, "registry.generated.json");

const GENERATE_REGISTRY_SCRIPT = path.join(__dirname, "generate-registry.js");
const BUILD_SCHEMA_SCRIPT = path.join(__dirname, "buildSurveySchema.js");

const BUILD_REGISTRY_GENERATED = true;
const BUILD_SURVEY_SCHEMA = true;

const REGISTRY_INCLUDE_PRESENTATION = false;
const REGISTRY_INCLUDE_VISIBLEIF_EXPR = true;

const IS_CI = String(process.env.CI).toLowerCase() === "true";
const PROMPT_ON_CALC_MISMATCH = true;
const PROMPT_ON_UNKNOWN_REFERENCES = true;

const pageFiles = [
  "00_LANDING-page.json",
  "01_USER_INFO-page.json",
  "02_CMPN_INFO-page.json",
  "03_FACTORS-page.json",
  "04_SYMPTOMS-page.json",
  "05_PRIMARY-page.json",
  "06_DIAGNOSIS-page.json",
  "07_MEDICATION-page.json",
  "08_PROCEDURE-page.json", 
  "08A_PROCEDURE_UAL-page.json",
  "08B_PROCEDURE_ESI-page.json",
  "08C_PROCEDURE_BVEAP-page.json",
  "08D_PROCEDURE_PAE-page.json",
  "08E_PROCEDURE_VCC-page.json",
  "08F_PROCEDURE_PLE-page.json",
  "08G_PROCEDURE_TT-page.json",
  "08H_PROCEDURE_OTHER-page.json",
  "09_THERAPY-page.json",
  "10_BREATHING-page.json",
  "11_NEUROPATHY-page.json",
  "12_CONCLUSION-page.json"
];

// -----------------------------------------------------------------------------
// UTILITIES
// -----------------------------------------------------------------------------

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function pad2(n) {
  return String(n).padStart(2, "0");
}

function buildTimestamp() {
  const d = new Date();
  return [
    d.getFullYear(),
    pad2(d.getMonth() + 1),
    pad2(d.getDate()),
  ].join("") + "_" + [
    pad2(d.getHours()),
    pad2(d.getMinutes()),
    pad2(d.getSeconds()),
  ].join("");
}

function runNodeScript(scriptPath, args = []) {
  const result = spawnSync(process.execPath, [scriptPath, ...args], {
    stdio: "inherit",
    cwd: ROOT,
  });

  if (result.error) {
    console.error(`❌ Failed to run ${path.basename(scriptPath)}:`, result.error);
    process.exit(1);
  }

  if (result.status !== 0) {
    console.error(`❌ ${path.basename(scriptPath)} exited with code ${result.status}`);
    process.exit(result.status || 1);
  }
}

function runGenerateRegistry() {
  ensureDir(REGISTRY_DIR);

  const args = ["--in", MASTER_SURVEY_PATH, "--out", REGISTRY_OUT_PATH];

  if (REGISTRY_INCLUDE_PRESENTATION) args.unshift("--include-presentation");
  if (REGISTRY_INCLUDE_VISIBLEIF_EXPR) args.unshift("--include-visibleif-expr");

  runNodeScript(GENERATE_REGISTRY_SCRIPT, args);
  console.log(`✅ Registry generated: ${REGISTRY_OUT_PATH}`);
}

function runBuildSurveySchema() {
  runNodeScript(BUILD_SCHEMA_SCRIPT);
  console.log("✅ Survey schema generated: helpers/surveySchema.json");
}

function traverse(value, visitor) {
  if (value == null) return;

  if (Array.isArray(value)) {
    for (const v of value) traverse(v, visitor);
    return;
  }

  if (typeof value === "object") {
    visitor(value);
    for (const k of Object.keys(value)) traverse(value[k], visitor);
  }
}

function setFromCalculatedValues(calculatedValuesArray) {
  const s = new Set();

  for (const cv of calculatedValuesArray || []) {
    if (cv?.name && typeof cv.name === "string") {
      s.add(cv.name.trim());
    }
  }

  return s;
}

function setDiff(a, b) {
  const out = [];
  for (const x of a) {
    if (!b.has(x)) out.push(x);
  }
  return out.sort();
}

function collectElementNamesFromPage(pageObj) {
  const names = new Set();

  traverse(pageObj, (obj) => {
    if (
      obj &&
      typeof obj.name === "string" &&
      obj.name.trim() &&
      typeof obj.type === "string" &&
      obj.type.trim()
    ) {
      names.add(obj.name.trim());
    }
  });

  if (typeof pageObj?.name === "string" && pageObj.name.trim()) {
    names.add(pageObj.name.trim());
  }

  return names;
}

function extractBraceRefsWithContext(pageObj) {
  const hits = [];

  function walk(value, pathParts) {
    if (value == null) return;

    if (Array.isArray(value)) {
      value.forEach((v, i) => walk(v, pathParts.concat(String(i))));
      return;
    }

    if (typeof value === "object") {
      for (const [k, v] of Object.entries(value)) {
        walk(v, pathParts.concat(k));
      }
      return;
    }

    if (typeof value === "string") {
      const re = /\{([^}]+)\}/g;
      let m;

      while ((m = re.exec(value)) !== null) {
        const raw = String(m[1] || "").trim();
        if (!raw) continue;

        const base = raw.split(".")[0].trim().split(/\s+/)[0].trim();
        if (!base) continue;

        // Ignore regex quantifiers such as {5}, {5,}, {5,10}
        if (/^\d+(,\d*)?$/.test(base)) continue;

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
  return Boolean(process.stdin.isTTY && process.stdout.isTTY);
}

async function promptAbort(reasonLine) {
  if (IS_CI || !isInteractive()) return true;

  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(`${reasonLine}\nAbort? [Y/N]: `, (answer) => {
      rl.close();
      const a = String(answer || "").trim().toLowerCase();
      resolve(a === "y" || a === "yes");
    });
  });
}

// -----------------------------------------------------------------------------
// MAIN
// -----------------------------------------------------------------------------

async function main() {
  console.log("\n=== merge-surveys ===");
  console.log(`🌐 locale: ${ACTIVE_LOCALE}`);
  console.log(`📥 pageContentDir: ${PAGE_CONTENT_DIR}`);
  console.log(`📘 calculatedValuesPath: ${CALCULATED_VALUES_PATH}`);
  console.log(`📤 masterSurveyPath: ${MASTER_SURVEY_PATH}`);
  console.log(`🧭 registryPath: ${REGISTRY_OUT_PATH}\n`);

  const pages = pageFiles.map((filename) => {
    const filePath = path.join(PAGE_CONTENT_DIR, filename);

    if (!fs.existsSync(filePath)) {
      console.error(`❌ Missing page file: ${filePath}`);
      process.exit(1);
    }

    return readJson(filePath);
  });

  if (!fs.existsSync(CALCULATED_VALUES_PATH)) {
    console.error(`❌ Missing calculatedValues file: ${CALCULATED_VALUES_PATH}`);
    process.exit(1);
  }

  const calculatedValues = readJson(CALCULATED_VALUES_PATH);

  const masterSurvey = {
    calculatedValues,
    showProgressBar: "top",
    questionsOnPageMode: "questionPerPage",
    pages,
  };

  // ---------------------------------------------------------------------------
  // VALIDATION #1 — calculatedValues drift check
  // ---------------------------------------------------------------------------

  {
    const scriptCalcs = setFromCalculatedValues(calculatedValues);

    if (!fs.existsSync(MASTER_SURVEY_PATH)) {
      console.warn("⚠️  Existing master-survey.json not found; calc drift check skipped.");
    } else {
      const existing = readJson(MASTER_SURVEY_PATH);
      const existingCalcs = setFromCalculatedValues(existing.calculatedValues);

      const missingInExisting = setDiff(scriptCalcs, existingCalcs);
      const extraInExisting = setDiff(existingCalcs, scriptCalcs);

      if (missingInExisting.length || extraInExisting.length) {
        console.error("❌ CalculatedValues mismatch detected.");

        if (missingInExisting.length) {
          console.error("  Present now but missing in existing master:");
          for (const n of missingInExisting) console.error(`    - ${n}`);
        }

        if (extraInExisting.length) {
          console.error("  Present in existing master but missing now:");
          for (const n of extraInExisting) console.error(`    - ${n}`);
        }

        if (PROMPT_ON_CALC_MISMATCH) {
          const abort = await promptAbort("CalculatedValues mismatch detected.");
          if (abort) process.exit(1);
        }
      } else {
        console.log("✅ CalculatedValues match existing master survey");
      }
    }
  }

  // ---------------------------------------------------------------------------
  // VALIDATION #2 — unresolved {tokens}
  // ---------------------------------------------------------------------------

  {
    const elementNames = new Set();

    for (const page of pages) {
      for (const n of collectElementNamesFromPage(page)) {
        elementNames.add(n);
      }
    }

    const calcNames = setFromCalculatedValues(calculatedValues);
    const known = new Set([...elementNames, ...calcNames]);

    const unknownRefsByFile = [];

    for (const filename of pageFiles) {
      const page = readJson(path.join(PAGE_CONTENT_DIR, filename));
      const hits = extractBraceRefsWithContext(page);
      const unknownHits = hits.filter((h) => !known.has(h.token));

      if (unknownHits.length) {
        unknownRefsByFile.push({ filename, unknownHits });
      }
    }

    if (unknownRefsByFile.length) {
      console.error("❌ Unknown {token} references found in page JSONs:");

      for (const item of unknownRefsByFile) {
        console.error(`  ${item.filename}`);
        const seen = new Set();

        for (const h of item.unknownHits) {
          const key = `${h.token}@@${h.path}`;
          if (seen.has(key)) continue;
          seen.add(key);

          const snippet =
            h.value.length > 160 ? h.value.slice(0, 160) + "…" : h.value;

          console.error(`    - {${h.token}} at ${h.path}`);
          console.error(`      "${snippet.replace(/\s+/g, " ").trim()}"`);
        }
      }

      if (PROMPT_ON_UNKNOWN_REFERENCES) {
        const abort = await promptAbort("Unknown {token} references detected.");
        if (abort) process.exit(1);
      }
    } else {
      console.log("✅ All {token} references resolve");
    }
  }

  // ---------------------------------------------------------------------------
  // WRITE OUTPUTS
  // ---------------------------------------------------------------------------

  ensureDir(MASTER_SURVEY_DIR);

  fs.writeFileSync(MASTER_SURVEY_PATH, JSON.stringify(masterSurvey, null, 2), "utf8");
  console.log(`✅ Merged survey written: ${MASTER_SURVEY_PATH}`);

  const snapshotName = `master-survey_${buildTimestamp()}.json`;
  const snapshotPath = path.join(MASTER_SURVEY_DIR, snapshotName);

  fs.writeFileSync(snapshotPath, JSON.stringify(masterSurvey, null, 2), "utf8");
  console.log(`🗂️  Snapshot written: ${snapshotPath}`);

  if (BUILD_REGISTRY_GENERATED) {
    runGenerateRegistry();
  }

  if (BUILD_SURVEY_SCHEMA) {
    runBuildSurveySchema();
  }

  console.log("\n✅ merge-surveys complete\n");
}

main().catch((err) => {
  console.error("❌ merge-surveys.js failed:", err?.stack || err);
  process.exit(1);
});