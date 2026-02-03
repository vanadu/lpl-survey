/**
 * merge-surveys.js
 *
 * Merges SurveyJS page JSON files into a single master-survey.json,
 * writes a timestamped snapshot, and validates calculatedValue / {token}
 * references to prevent drift.
 *
 * Outputs:
 *  - /data/master-survey.json               (authoritative “latest”)
 *  - /data/master-survey_YYYYMMDD_HHMMSS.json  (snapshot)
 */


const fs = require("fs");
const path = require("path");
const readline = require("readline");


// !VA Consts for generating registry.generated.json
const { spawnSync } = require("child_process");

// ------------------------------
// REGISTRY BUILD (generated layer)
// ------------------------------
const BUILD_REGISTRY_GENERATED = true;

// Toggle these based on your preferences:
const REGISTRY_INCLUDE_PRESENTATION = false;   // include html/expression/image/etc.
const REGISTRY_INCLUDE_VISIBLEIF_EXPR = true;  // include visibleIf string, not just boolean

// Where to write registry.generated.json (keeps /data only for page JSONs)
const REGISTRY_OUT_PATH = path.resolve(__dirname, "../helpers/registry.generated.json");

// Where master-survey.json lives (already in /data per your script)
const MASTER_SURVEY_PATH = path.resolve(__dirname, "../data/master-survey.json");




const DATA_DIR = path.resolve(__dirname, "../data");
// console.log("DATA_DIR =", DATA_DIR);

// ------------------------------
// CONFIG
// ------------------------------
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

// In CI/non-interactive contexts, you usually want hard fail
const IS_CI = String(process.env.CI).toLowerCase() === "true";

// If true, mismatches trigger the Abort prompt (or hard-fail in CI)
const PROMPT_ON_CALC_MISMATCH = true;
const PROMPT_ON_UNKNOWN_REFERENCES = true;

// ------------------------------
// UTIL
// ------------------------------
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

// !VA Added for creating registry.generated.json
function runGenerateRegistry() {
  const generatorPath = path.resolve(__dirname, "./generate-registry.js");

  const args = [
    generatorPath,
    "--in",
    MASTER_SURVEY_PATH,
    "--out",
    REGISTRY_OUT_PATH,
  ];

  if (REGISTRY_INCLUDE_PRESENTATION) args.splice(1, 0, "--include-presentation");
  if (REGISTRY_INCLUDE_VISIBLEIF_EXPR) args.splice(1, 0, "--include-visibleif-expr");

  const result = spawnSync(process.execPath, args, {
    stdio: "inherit",
  });

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



// Traverse any JS value and call visitor(obj) on objects
function traverse(value, visitor) {
  if (value === null || value === undefined) return;

  if (Array.isArray(value)) {
    for (const v of value) traverse(v, visitor);
    return;
  }

  if (typeof value === "object") {
    visitor(value);
    for (const k of Object.keys(value)) traverse(value[k], visitor);
    return;
  }
}

function setFromCalculatedValues(calculatedValuesArray) {
  const s = new Set();
  for (const cv of calculatedValuesArray || []) {
    if (cv && typeof cv.name === "string" && cv.name.trim()) {
      s.add(cv.name.trim());
    }
  }
  return s;
}

function setDiff(a, b) {
  // a \ b
  const out = [];
  for (const x of a) if (!b.has(x)) out.push(x);
  return out.sort();
}

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

  // Add page name too (handy if you ever reference {PageName})
  if (typeof pageObj?.name === "string" && pageObj.name.trim()) {
    names.add(pageObj.name.trim());
  }

  return names;
}

// !VA Replace
// function extractBraceRefsFromPage(pageObj) {
//   const refs = new Set();

//   traverse(pageObj, (obj) => {
//     if (!obj || typeof obj !== "object") return;

//     for (const v of Object.values(obj)) {
//       if (typeof v !== "string") continue;

//       // Match {token} occurrences
//       const re = /\{([^}]+)\}/g;
//       let m;
//       while ((m = re.exec(v)) !== null) {
//         const raw = (m[1] || "").trim();
//         if (!raw) continue;

//         // Normalize: take left side before '.' (e.g. {panel.question} -> panel)
//         // Also strip anything after whitespace
//         const base = raw.split(".")[0].trim().split(/\s+/)[0].trim();
//         if (base) refs.add(base);
//       }
//     }
//   });

//   return refs;
// }

// !VA With
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


        // !VA Replace
        // const base = raw.split(".")[0].trim().split(/\s+/)[0].trim();
        // if (!base) continue;
        // hits.push({
        //   token: base,
        //   path: pathParts.join("."),
        //   value,
        // });

        // !VA With
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

async function promptAbort(reasonLine) {
  // CI / non-interactive: hard abort
  if (IS_CI || !isInteractive()) return true;

  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(`${reasonLine}\nAbort? [Y/N]: `, (answer) => {
      rl.close();
      const a = (answer || "").trim().toLowerCase();
      resolve(a === "y" || a === "yes");
    });
  });
}

// ------------------------------
// MAIN
// ------------------------------
async function main() {
  // ------------------------------
  // LOAD PAGES
  // ------------------------------
  const pages = pageFiles.map((filename) => {
    const filePath = path.join(DATA_DIR, filename);
    if (!fs.existsSync(filePath)) {
      console.error(`❌ Missing page file: data/${filename}`);
      process.exit(1);
    }
    return readJson(filePath);
  });

  // ------------------------------
  // BUILD MASTER SURVEY
  // ------------------------------
  const calculatedValues = [
    {
      type: "calculatedvalue",
      name: "lvngCmpnInfoAgeYearsAsMonths",
      expression: "{lvngCmpnInfoAgeYears} * 12",
      includeIntoResult: true,
    },
    {
      type: "calculatedvalue",
      name: "lvngCmpnInfoAgeTotalMonths",
      expression: "{lvngCmpnInfoAgeYearsAsMonths} + {lvngCmpnInfoAgeMonths}",
      includeIntoResult: true,
    },
    {
      type: "calculatedvalue",
      name: "dcsdCmpnInfoAgeYearsAsMonths",
      expression: "{dcsdCmpnInfoAgeYears} * 12",
      includeIntoResult: true,
    },
    {
      type: "calculatedvalue",
      name: "dcsdCmpnInfoAgeTotalMonths",
      expression: "{dcsdCmpnInfoAgeYearsAsMonths} + {dscdCmpnInfoAgeMonths}",
      includeIntoResult: true,
    },
    {
      type: "calculatedvalue",
      name: "ageInMonths",
      expression:
        "iif({LifeStatus} = true, {lvngCmpnInfoAgeTotalMonths}, {dcsdCmpnInfoAgeTotalMonths})",
      includeIntoResult: true,
    },
    {
      name: "ageInMonthsAtSymptomOnset",
      expression: "{EarlySymptomsAgeYears} * 12 + {EarlySymptomsAgeMonths}",
    },
    {
      name: "durationOfSymptomsInMonths",
      expression: "{ageInMonths} - {ageInMonthsAtSymptomOnset}",
    },
    {
      type: "calculatedvalue",
      name: "observeTense",
      expression:
        "iif({LifeStatus} = 'true', 'did you observe', 'have you observed')",
      includeIntoResult: true,
    },
    {
      type: "calculatedvalue",
      name: "doTense",
      expression: "iif({LifeStatus} = 'true', 'did', 'does')",
      includeIntoResult: true,
    },
    {
      type: "calculatedvalue",
      name: "doFirstPersonSingularInitialCap",
      expression: "iif({LifeStatus} = 'true', 'Did', 'Do')",
      includeIntoResult: true,
    },
    {
      type: "calculatedvalue",
      name: "genderSubjectPronoun",
      expression: "iif({LifeStatus} = 'true', 'she', 'he')",
      includeIntoResult: true,
    },
    {
      type: "calculatedvalue",
      name: "genderObjectPronoun",
      expression: "iif({LifeStatus} = 'true', 'her', 'his')",
      includeIntoResult: true,
    },
    {
      type: "calculatedvalue",
      name: "stateAdjective",
      expression: "iif({LifeStatus} = 'true', 'last', 'current')",
      includeIntoResult: true,
    },
    {
      type: "calculatedvalue",
      name: "blobText",
      expression:
        "iif({LifeStatus} = 'true', 'towards the end of {genderObjectPronoun} life', 'in {genderObjectPronoun} current state of health')",
      includeIntoResult: true,
    },
  ];

  const masterSurvey = {
    calculatedValues,
    title: "Master Survey Build",
    showProgressBar: "top",
    pages,
  };

  // ------------------------------
  // VALIDATION 1:
  // Compare calc names in THIS script vs existing data/master-survey.json
  // ------------------------------
  {
    const scriptCalcs = setFromCalculatedValues(calculatedValues);
    const masterPath = path.join(DATA_DIR, "master-survey.json");

    if (!fs.existsSync(masterPath)) {
      console.warn(
        "⚠️  Validation skipped: data/master-survey.json not found (first run?)"
      );
    } else {
      const existing = readJson(masterPath);
      const existingCalcs = setFromCalculatedValues(existing.calculatedValues);

      const missingInExisting = setDiff(scriptCalcs, existingCalcs);
      const extraInExisting = setDiff(existingCalcs, scriptCalcs);

      if (missingInExisting.length || extraInExisting.length) {
        console.error(
          "❌ CalculatedValues mismatch between merge-surveys.js and data/master-survey.json"
        );

        if (missingInExisting.length) {
          console.error(
            "  Names present in merge-surveys.js but missing in data/master-survey.json:"
          );
          for (const n of missingInExisting) console.error(`    - ${n}`);
        }

        if (extraInExisting.length) {
          console.error(
            "  Names present in data/master-survey.json but not in merge-surveys.js:"
          );
          for (const n of extraInExisting) console.error(`    - ${n}`);
        }

        if (PROMPT_ON_CALC_MISMATCH) {
          const abort = await promptAbort(
            "CalculatedValues mismatch detected."
          );
          if (abort) process.exit(1);
        }
      } else {
        console.log("✅ CalculatedValues match existing data/master-survey.json");
      }
    }
  }

  // ------------------------------
  // VALIDATION 2:
  // Flag any {token} references in page JSONs that are not:
  //  - an element/page name found in the pages, OR
  //  - a calculatedValue name from THIS script
  // ------------------------------
  {
    const elementNames = new Set();
    for (const page of pages) {
      const pageNames = collectElementNamesFromPage(page);
      for (const n of pageNames) elementNames.add(n);
    }

    const calcNames = setFromCalculatedValues(calculatedValues);
    const known = new Set([...elementNames, ...calcNames]);

    const unknownRefsByFile = [];

    for (const filename of pageFiles) {
      const page = readJson(path.join(DATA_DIR, filename));

      // !VA Replace
      // const refs = extractBraceRefsFromPage(page);
      // const unknown = [...refs].filter((r) => !known.has(r)).sort();
      // if (unknown.length) unknownRefsByFile.push({ filename, unknown });

      // !VA With 
      const hits = extractBraceRefsWithContext(page);

      // Only keep hits whose token isn't known
      const unknownHits = hits.filter((h) => !known.has(h.token));

      if (unknownHits.length) {
        unknownRefsByFile.push({ filename, unknownHits });
      }
    }

    if (unknownRefsByFile.length) {


      // !VA Replace
      // console.error("❌ Unknown {token} references found in page JSONs:");
      // for (const item of unknownRefsByFile) {
      //   console.error(`  ${item.filename}`);
      //   for (const u of item.unknown) console.error(`    - {${u}}`);
      // }

      // !VA With
      console.error("❌ Unknown {token} references found in page JSONs:");
      for (const item of unknownRefsByFile) {
        console.error(`  ${item.filename}`);

        // De-dupe identical token+path combos to reduce spam
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
      console.error(
        "\nThese tokens are referenced in a page but are not a question/panel/page name and not a calculatedValue name."
      );

      if (PROMPT_ON_UNKNOWN_REFERENCES) {
        const abort = await promptAbort(
          "Unknown {token} references detected."
        );
        if (abort) process.exit(1);
      }
    } else {
      console.log(
        "✅ All {token} references in pages resolve to known element names or calculatedValues"
      );
    }
  }

  // ------------------------------
  // WRITE OUTPUTS
  // ------------------------------

  // 1) Authoritative “latest” file
  const latestPath = path.join(DATA_DIR, "master-survey.json");
  fs.writeFileSync(latestPath, JSON.stringify(masterSurvey, null, 2));
  console.log("✅ Merged survey written to data/master-survey.json");

  // 2) Timestamped snapshot for diffing/history
  const stamp = buildTimestamp();
  const snapshotName = `master-survey_${stamp}.json`;
  const snapshotPath = path.join(DATA_DIR, snapshotName);
  fs.writeFileSync(snapshotPath, JSON.stringify(masterSurvey, null, 2));
  console.log(`🗂️  Snapshot written to data/${snapshotName}`);


  // 3) Generate registry.generated.json from the freshly-written master-survey.json
  if (BUILD_REGISTRY_GENERATED) {
    runGenerateRegistry();
  }



}



main().catch((err) => {
  console.error("❌ merge-surveys.js failed:", err);
  process.exit(1);
});
