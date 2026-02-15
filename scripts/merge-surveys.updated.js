/**
 * merge-surveys.js
 *
 * ----------------------------------------------------------------------------
 * PURPOSE
 * ----------------------------------------------------------------------------
 * Merge multiple SurveyJS per-page JSON files into a single master survey JSON,
 * write both a stable “latest” output and a timestamped snapshot, and perform
 * validations to prevent silent drift.
 *
 * Outputs:
 *  - /data/master-survey/master-survey.json                     (authoritative “latest”)
 *  - /data/master-survey_YYYYMMDD_HHMMSS.json     (snapshot for diff/history)
 *  - /helpers/registry.generated.json             (generated registry layer)
 *
 * ----------------------------------------------------------------------------
 * ARCHITECTURE OVERVIEW
 * ----------------------------------------------------------------------------
 * This script has four conceptual layers:
 *
 * LAYER 0 — Configuration
 *   - Which page JSON files are merged, output paths, CI behavior, registry flags
 *
 * LAYER 1 — Merge (Build Master Survey)
 *   - Loads page files and constructs the master survey object
 *   - Defines calculatedValues centrally (single source of truth for these)
 *
 * LAYER 2 — Validation (Drift Prevention)
 *   - Validation #1: Compare calc names in this script vs existing master-survey.json
 *   - Validation #2: Scan page JSONs for {token} references that don’t resolve
 *
 * LAYER 3 — Write Outputs & Post-Processing
 *   - Write latest + snapshot master survey JSON files
 *   - Generate registry.generated.json from the freshly written master survey
 *
 * ----------------------------------------------------------------------------
 * GOTCHAS / NOTES
 * ----------------------------------------------------------------------------
 * - CI / Non-interactive runs:
 *   When CI=true (or stdin/stdout are not TTY), validations should hard fail
 *   instead of prompting. See IS_CI + isInteractive().
 *
 * - Brace tokens vs regex quantifiers:
 *   Some strings (rarely) can include patterns like {5} or {5,10} (regex quantifiers).
 *   Validation #2 ignores tokens that look purely numeric or numeric ranges.
 *
 * - Registry generation:
 *   generate-registry.js runs AFTER master-survey.json is written, so the registry
 *   reflects the exact “latest” master survey output.
 */

const fs = require("fs");
const path = require("path");
const readline = require("readline");

// Registry generator subprocess
const { spawnSync } = require("child_process");

// -----------------------------------------------------------------------------
// LAYER 0 — CONFIGURATION
// -----------------------------------------------------------------------------

/**
 * REGISTRY BUILD (generated layer)
 *
 * If true, we run generate-registry.js at the end to produce helpers/registry.generated.json.
 */
const BUILD_REGISTRY_GENERATED = true;

/**
 * Registry generator toggles (passed as CLI args to generate-registry.js)
 * - include presentation content (html/expression/image/etc.)?
 * - include visibleIf expression strings?
 */
const REGISTRY_INCLUDE_PRESENTATION = false; // include html/expression/image/etc.
const REGISTRY_INCLUDE_VISIBLEIF_EXPR = true; // include visibleIf string, not just boolean

/**
 * Output paths
 * - registry.generated.json lives in /helpers (so /data stays only page JSONs + master)
 * - master-survey.json lives in /data
 */
const REGISTRY_OUT_PATH = path.resolve(
  __dirname,
  "../helpers/registry.generated.json"
);


// !VA Replacing...
// const MASTER_SURVEY_PATH = path.resolve(__dirname, "../data/master-survey/master-survey.json");

// /**
//  * Source pages directory
//  */
// const DATA_DIR = path.resolve(__dirname, "../data");
// !VA Replacing ...



// ===============================
// DATA DIRECTORY STRUCTURE
// ===============================

const DATA_ROOT_DIR = path.resolve(__dirname, "../data");
const PAGE_CONTENT_DIR = path.join(DATA_ROOT_DIR, "page-content");
const MASTER_SURVEY_DIR = path.join(DATA_ROOT_DIR, "master-survey");

// latest merged survey location
const MASTER_SURVEY_PATH = path.join(MASTER_SURVEY_DIR, "master-survey.json");







/**
 * Ordered list of page files to merge.
 * NOTE: Order matters (defines page order in master survey).
 */
const pageFiles = [
  "00_LANDING-page.json",
  "01_USER_INFO-page.json",
  "02_CMPN_INFO-page.json",
  "03_INFO_SOURCES-page.json",
  "04_INTUBATION_HISTORY-page.json",
  "05_BREATHING_CRISIS-page.json",
  "06_EARLY_SYMPTOMS-page.json",
  "07_PRIMARY_DURATION-page.json",
  "08_PRIMARY_VET-page.json",
  "09_DIAGNOSIS-page.json",
  "10_TREATMENT_STATUS-page.json",
  "11_TREATMENT_FACTORS-page.json",
  "12_MANAGEMENT-page.json",
  "13_OTC_PRODUCTS-page.json",
  "14_ASPIRATION-page.json",
  "15_NEUROPATHY-page.json",
  "16_CONCLUSION-page.json",
];

/**
 * CI / prompt behavior
 *
 * In CI/non-interactive contexts you usually want hard fail.
 * Setting CI=true in env forces hard fail (no prompts).
 */
const IS_CI = String(process.env.CI).toLowerCase() === "true";

// If true, mismatches trigger the Abort prompt (or hard-fail in CI)
const PROMPT_ON_CALC_MISMATCH = true;
const PROMPT_ON_UNKNOWN_REFERENCES = true;

// -----------------------------------------------------------------------------
// LAYER 0 — UTILITIES
// -----------------------------------------------------------------------------

function pad2(n) {
  return String(n).padStart(2, "0");
}

// Compact local timestamp: YYYYMMDD_HHMMSS
function buildTimestamp() {
  const d = new Date();
  const YYYY = d.getFullYear();
  const MM = pad2(d.getMonth() + 1);
  const DD = pad2(d.getDate());
  const hh = pad2(d.getHours());
  const mm = pad2(d.getMinutes());
  const ss = pad2(d.getSeconds());
  return `${YYYY}${MM}${DD}_${hh}${mm}${ss}`;
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

/**
 * Runs generate-registry.js as a Node subprocess to build registry.generated.json.
 * This is run AFTER master-survey.json is written so the registry is aligned.
 */
function runGenerateRegistry() {
  const generatorPath = path.resolve(__dirname, "./generate-registry.js");

  const args = [generatorPath, "--in", MASTER_SURVEY_PATH, "--out", REGISTRY_OUT_PATH];

  // Insert feature flags into args (kept compatible with your existing generator CLI)
  if (REGISTRY_INCLUDE_PRESENTATION) args.splice(1, 0, "--include-presentation");
  if (REGISTRY_INCLUDE_VISIBLEIF_EXPR) args.splice(1, 0, "--include-visibleif-expr");

  const result = spawnSync(process.execPath, args, { stdio: "inherit" });

  if (result.error) {
    console.error("❌ Failed to run generate-registry.js:", result.error);
    process.exit(1);
  }

  if (result.status !== 0) {
    console.error(`❌ generate-registry.js exited with code ${result.status}`);
    process.exit(result.status ?? 1);
  }

  console.log("✅ Registry generated at helpers/registry.generated.json");
}

/**
 * Generic tree traversal helper.
 * Calls visitor(obj) for every object found in an arbitrarily nested structure.
 */
function traverse(value, visitor) {
  if (value === null || value === undefined) return;

  if (Array.isArray(value)) {
    for (const v of value) traverse(v, visitor);
    return;
  }

  if (typeof value === "object") {
    visitor(value);
    for (const k of Object.keys(value)) traverse(value[k], visitor);
  }
}

/**
 * Extracts a Set of calculatedValue names from a calculatedValues array.
 */
function setFromCalculatedValues(calculatedValuesArray) {
  const s = new Set();
  for (const cv of calculatedValuesArray || []) {
    if (cv && typeof cv.name === "string" && cv.name.trim()) {
      s.add(cv.name.trim());
    }
  }
  return s;
}

/**
 * Returns sorted array of (a \ b).
 */
function setDiff(a, b) {
  const out = [];
  for (const x of a) if (!b.has(x)) out.push(x);
  return out.sort();
}

/**
 * Collects all element names (questions/panels/etc.) from a page object.
 * We treat any object with both `name` and `type` as an “element”.
 *
 * Also adds the page's own name (so {PageName} is considered resolvable).
 */
function collectElementNamesFromPage(pageObj) {
  const names = new Set();

  traverse(pageObj, (obj) => {
    if (
      obj &&
      typeof obj === "object" &&
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

/**
 * Extracts {token} references from any string values in the page object,
 * but keeps context (object path and full string value) so errors are actionable.
 *
 * Normalization:
 * - token base is the substring before '.' (e.g. {panel.question} -> panel)
 * - also strips anything after whitespace
 *
 * Gotcha handling:
 * - Ignore regex quantifiers like {5}, {5,}, {5,10} which may appear in strings
 */
function extractBraceRefsWithContext(pageObj) {
  const hits = [];

  function walk(value, pathParts) {
    if (value === null || value === undefined) return;

    if (Array.isArray(value)) {
      value.forEach((v, i) => walk(v, pathParts.concat([String(i)])));
      return;
    }

    if (typeof value === "object") {
      for (const [k, v] of Object.entries(value)) {
        walk(v, pathParts.concat([k]));
      }
      return;
    }

    if (typeof value === "string") {
      const re = /\{([^}]+)\}/g;
      let m;
      while ((m = re.exec(value)) !== null) {
        const raw = (m[1] || "").trim();
        if (!raw) continue;

        const base = raw.split(".")[0].trim().split(/\s+/)[0].trim();
        if (!base) continue;

        // Ignore regex quantifiers like {5}, {5,}, {5,10}
        if (/^\d+(,\d*)?$/.test(base)) continue;

        hits.push({ token: base, path: pathParts.join("."), value });
      }
    }
  }

  walk(pageObj, []);
  return hits;
}

function isInteractive() {
  return Boolean(process.stdin.isTTY && process.stdout.isTTY);
}

/**
 * Prompt user whether to abort on validation failure.
 * - In CI or non-interactive, always abort (true).
 */
async function promptAbort(reasonLine) {
  if (IS_CI || !isInteractive()) return true;

  return new Promise((resolve) => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

    rl.question(`${reasonLine}\nAbort? [Y/N]: `, (answer) => {
      rl.close();
      const a = (answer || "").trim().toLowerCase();
      resolve(a === "y" || a === "yes");
    });
  });
}

// -----------------------------------------------------------------------------
// MAIN
// -----------------------------------------------------------------------------
async function main() {
  // ---------------------------------------------------------------------------
  // LAYER 1 — MERGE: Load pages
  // ---------------------------------------------------------------------------
  const pages = pageFiles.map((filename) => {
    const filePath = path.join(PAGE_CONTENT_DIR, filename);
    if (!fs.existsSync(filePath)) {
      console.error(`❌ Missing page file: data/page-content/${filename}`);
      process.exit(1);
    }
    return readJson(filePath);
  });

  // ---------------------------------------------------------------------------
  // LAYER 1 — MERGE: Build master survey
  // ---------------------------------------------------------------------------

  /**
   * Calculated values are centralized here.
   * Validation #1 ensures these do not drift from existing master-survey.json.
   */
  /**
 * Calculated values are centralized in /helpers/calculatedValues.json.
 * Validation #1 ensures these do not drift from existing master-survey.json.
 */
const calculatedValues = readJson(path.resolve(__dirname, "../helpers/calculatedValues.json"));

  const masterSurvey = {
    calculatedValues,
    title: "Master Survey Build",
    showProgressBar: "top",
    pages,
  };

  // ---------------------------------------------------------------------------
  // LAYER 2 — VALIDATION #1:
  // Compare calc names in THIS script vs existing data/master-survey/master-survey.json
  // ---------------------------------------------------------------------------
  {
    const scriptCalcs = setFromCalculatedValues(calculatedValues);
    const masterPath = MASTER_SURVEY_PATH;

    if (!fs.existsSync(masterPath)) {
      console.warn("⚠️  Validation skipped: data/master-survey/master-survey.json not found (first run?)");
    } else {
      const existing = readJson(masterPath);
      const existingCalcs = setFromCalculatedValues(existing.calculatedValues);

      const missingInExisting = setDiff(scriptCalcs, existingCalcs);
      const extraInExisting = setDiff(existingCalcs, scriptCalcs);

      if (missingInExisting.length || extraInExisting.length) {
        console.error(
          "❌ CalculatedValues mismatch between merge-surveys.js and data/master-survey/master-survey.json"
        );

        if (missingInExisting.length) {
          console.error(
            "  Names present in merge-surveys.js but missing in data/master-survey/master-survey.json:"
          );
          for (const n of missingInExisting) console.error(`    - ${n}`);
        }

        if (extraInExisting.length) {
          console.error(
            "  Names present in data/master-survey/master-survey.json but not in merge-surveys.js:"
          );
          for (const n of extraInExisting) console.error(`    - ${n}`);
        }

        if (PROMPT_ON_CALC_MISMATCH) {
          const abort = await promptAbort("CalculatedValues mismatch detected.");
          if (abort) process.exit(1);
        }
      } else {
        console.log("✅ CalculatedValues match existing data/master-survey/master-survey.json");
      }
    }
  }

  // ---------------------------------------------------------------------------
  // LAYER 2 — VALIDATION #2:
  // Flag any {token} references in page JSONs that are not:
  //  - an element/page name found in the pages, OR
  //  - a calculatedValue name from THIS script
  // ---------------------------------------------------------------------------
  {
    // Known element/page names across all pages
    const elementNames = new Set();
    for (const page of pages) {
      const pageNames = collectElementNamesFromPage(page);
      for (const n of pageNames) elementNames.add(n);
    }

    // Known calculatedValue names (from this script)
    const calcNames = setFromCalculatedValues(calculatedValues);

    // Combined known token set
    const known = new Set([...elementNames, ...calcNames]);

    const unknownRefsByFile = [];

    for (const filename of pageFiles) {
      const page = readJson(path.join(PAGE_CONTENT_DIR, filename));
      const hits = extractBraceRefsWithContext(page);

      // Only keep hits whose token isn't known
      const unknownHits = hits.filter((h) => !known.has(h.token));

      if (unknownHits.length) {
        unknownRefsByFile.push({ filename, unknownHits });
      }
    }

    if (unknownRefsByFile.length) {
      console.error("❌ Unknown {token} references found in page JSONs:");
      for (const item of unknownRefsByFile) {
        console.error(`  ${item.filename}`);

        // De-dupe identical token+path combos to reduce spam
        const seen = new Set();

        for (const h of item.unknownHits) {
          const key = `${h.token}@@${h.path}`;
          if (seen.has(key)) continue;
          seen.add(key);

          // Trim long strings for readability
          const snippet = h.value.length > 160 ? h.value.slice(0, 160) + "…" : h.value;

          console.error(`    - {${h.token}} at ${h.path}`);
          console.error(`      "${snippet.replace(/\s+/g, " ").trim()}"`);
        }
      }

      console.error(
        "\nThese tokens are referenced in a page but are not a question/panel/page name and not a calculatedValue name."
      );

      if (PROMPT_ON_UNKNOWN_REFERENCES) {
        const abort = await promptAbort("Unknown {token} references detected.");
        if (abort) process.exit(1);
      }
    } else {
      console.log("✅ All {token} references in pages resolve to known element names or calculatedValues");
    }
  }

  // ---------------------------------------------------------------------------
  // LAYER 3 — WRITE OUTPUTS
  // ---------------------------------------------------------------------------

  // Ensure output dir exists
  if (!fs.existsSync(MASTER_SURVEY_DIR)) {
    fs.mkdirSync(MASTER_SURVEY_DIR, { recursive: true });
  }

  // 1) Authoritative “latest” file
  fs.writeFileSync(MASTER_SURVEY_PATH, JSON.stringify(masterSurvey, null, 2));
  console.log("✅ Merged survey written to data/master-survey/master-survey.json");

  // 2) Timestamped snapshot for diffing/history
  const stamp = buildTimestamp();
  const snapshotName = `master-survey_${stamp}.json`;
  const snapshotPath = path.join(MASTER_SURVEY_DIR, snapshotName);
  fs.writeFileSync(snapshotPath, JSON.stringify(masterSurvey, null, 2));
  console.log(`🗂️  Snapshot written to data/master-survey/${snapshotName}`);

  // 3) Generate registry.generated.json from the freshly-written master survey
  if (BUILD_REGISTRY_GENERATED) {
    runGenerateRegistry();
  }
}

main().catch((err) => {
  console.error("❌ merge-surveys.js failed:", err);
  process.exit(1);
});
