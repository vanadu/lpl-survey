#!/usr/bin/env node
"use strict";

/**
 * Survey page i18n extractor + merger.
 *
 * Behavior:
 * - First run: creates per-page bilingual i18n JSON files.
 * - Later runs: merges against existing i18n files.
 *
 * Merge rules:
 * 1) Existing key, same source EN text:
 *    - keep existing record unchanged
 *
 * 2) Existing key, changed source EN text:
 *    - update `en`
 *    - update `_source`
 *    - preserve target locales
 *    - set `_needsReview: true`
 *
 * 3) New key:
 *    - add with empty target locale fields
 *
 * 4) Key missing from current extraction but present in existing file:
 *    - keep it
 *    - mark `_stale: true`
 *
 * This intentionally does not attempt full TM/version reconciliation.
 */

const fs = require("fs");
const path = require("path");

const DEFAULT_SOURCE_LOCALE = "en";
const DEFAULT_TARGET_LOCALES = ["lo"];

const PAGE_FILES = [
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

// -----------------------------------------------------------------------------
// BASIC UTILITIES
// -----------------------------------------------------------------------------

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function writeJson(filePath, data) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + "\n", "utf8");
}

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function normalizeText(value) {
  return typeof value === "string" ? value.trim() : "";
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function sanitizeKeySegment(value) {
  return String(value)
    .trim()
    .replace(/\s+/g, "_")
    .replace(/[^A-Za-z0-9_-]/g, "_")
    .replace(/_+/g, "_")
    .replace(/^_+|_+$/g, "") || "item";
}

// -----------------------------------------------------------------------------
// NORMALIZERS
// -----------------------------------------------------------------------------

function normalizeChoiceText(choice) {
  if (typeof choice === "string") return choice.trim();
  if (!choice || typeof choice !== "object") return "";

  const candidate = choice.text ?? choice.title ?? choice.value ?? "";
  return String(candidate).trim();
}

function normalizeRateValueText(rateValue) {
  if (typeof rateValue === "string" || typeof rateValue === "number") {
    return String(rateValue).trim();
  }
  if (!rateValue || typeof rateValue !== "object") return "";

  const candidate = rateValue.text ?? rateValue.title ?? rateValue.value ?? "";
  return String(candidate).trim();
}

function getChoiceKey(choice, index) {
  if (choice && typeof choice === "object") {
    const raw = choice.value ?? choice.text ?? choice.title;
    if (raw !== undefined && raw !== null && String(raw).trim()) {
      return sanitizeKeySegment(String(raw));
    }
  }

  if (typeof choice === "string" && choice.trim()) {
    return sanitizeKeySegment(choice);
  }

  return String(index);
}

function getRateValueKey(rateValue, index) {
  if (rateValue && typeof rateValue === "object") {
    const raw = rateValue.value ?? rateValue.text ?? rateValue.title;
    if (raw !== undefined && raw !== null && String(raw).trim()) {
      return sanitizeKeySegment(String(raw));
    }
  }

  if (typeof rateValue === "string" || typeof rateValue === "number") {
    return sanitizeKeySegment(String(rateValue));
  }

  return String(index);
}

// -----------------------------------------------------------------------------
// ENTRY BUILDING
// -----------------------------------------------------------------------------

function shouldSkipPanelTitle(panel, options) {
  if (!options.skipCardPanelTitles) return false;
  const panelName = typeof panel?.name === "string" ? panel.name : "";
  return /Card/i.test(panelName);
}

function makeFreshEntry(sourceText, sourceLocale, targetLocales) {
  const entry = {
    [sourceLocale]: sourceText,
    _source: sourceText,
  };

  for (const locale of targetLocales) {
    if (locale === sourceLocale) continue;
    entry[locale] = "";
  }

  return entry;
}

function pushEntry({
  entries,
  order,
  key,
  value,
  sourceLocale,
  targetLocales,
  onDuplicateKey,
}) {
  if (!isNonEmptyString(value)) return;

  const normalized = normalizeText(value);
  if (!normalized) return;

  if (entries[key]) {
    if (typeof onDuplicateKey === "function") {
      onDuplicateKey({ key, previous: entries[key], next: normalized });
    }
    delete entries[key];
    const idx = order.indexOf(key);
    if (idx !== -1) order.splice(idx, 1);
  }

  entries[key] = makeFreshEntry(normalized, sourceLocale, targetLocales);
  order.push(key);
}

// -----------------------------------------------------------------------------
// EXTRACTION WALKER
// -----------------------------------------------------------------------------

function walkElements({
  elements,
  entries,
  order,
  sourceLocale,
  targetLocales,
  options,
}) {
  if (!Array.isArray(elements)) return;

  for (const el of elements) {
    if (!el || typeof el !== "object") continue;

    const elType = typeof el.type === "string" ? el.type : "unknown";
    const elName = isNonEmptyString(el.name) ? el.name.trim() : null;

    if (options.excludeElement && options.excludeElement(el)) {
      continue;
    }

    if (elType === "html") {
      if (elName) {
        pushEntry({
          entries,
          order,
          key: `${elName}.html`,
          value: el.html,
          sourceLocale,
          targetLocales,
          onDuplicateKey: options.onDuplicateKey,
        });
      }

      if (Array.isArray(el.elements)) {
        walkElements({
          elements: el.elements,
          entries,
          order,
          sourceLocale,
          targetLocales,
          options,
        });
      }
      continue;
    }

    if (elType === "panel") {
      if (elName && !shouldSkipPanelTitle(el, options)) {
        pushEntry({
          entries,
          order,
          key: `${elName}.title`,
          value: el.title,
          sourceLocale,
          targetLocales,
          onDuplicateKey: options.onDuplicateKey,
        });

        pushEntry({
          entries,
          order,
          key: `${elName}.description`,
          value: el.description,
          sourceLocale,
          targetLocales,
          onDuplicateKey: options.onDuplicateKey,
        });
      }

      walkElements({
        elements: el.elements,
        entries,
        order,
        sourceLocale,
        targetLocales,
        options,
      });
      continue;
    }

    if (elType === "paneldynamic") {
      walkElements({
        elements: el.elements,
        entries,
        order,
        sourceLocale,
        targetLocales,
        options,
      });

      walkElements({
        elements: el.templateElements,
        entries,
        order,
        sourceLocale,
        targetLocales,
        options,
      });
      continue;
    }

    if (!elName) {
      if (Array.isArray(el.elements)) {
        walkElements({
          elements: el.elements,
          entries,
          order,
          sourceLocale,
          targetLocales,
          options,
        });
      }

      if (Array.isArray(el.templateElements)) {
        walkElements({
          elements: el.templateElements,
          entries,
          order,
          sourceLocale,
          targetLocales,
          options,
        });
      }
      continue;
    }

    pushEntry({
      entries,
      order,
      key: `${elName}.title`,
      value: el.title,
      sourceLocale,
      targetLocales,
      onDuplicateKey: options.onDuplicateKey,
    });

    pushEntry({
      entries,
      order,
      key: `${elName}.description`,
      value: el.description,
      sourceLocale,
      targetLocales,
      onDuplicateKey: options.onDuplicateKey,
    });

    pushEntry({
      entries,
      order,
      key: `${elName}.placeholder`,
      value: el.placeholder,
      sourceLocale,
      targetLocales,
      onDuplicateKey: options.onDuplicateKey,
    });

    pushEntry({
      entries,
      order,
      key: `${elName}.labelTrue`,
      value: el.labelTrue,
      sourceLocale,
      targetLocales,
      onDuplicateKey: options.onDuplicateKey,
    });

    pushEntry({
      entries,
      order,
      key: `${elName}.labelFalse`,
      value: el.labelFalse,
      sourceLocale,
      targetLocales,
      onDuplicateKey: options.onDuplicateKey,
    });

    if (Array.isArray(el.choices)) {
      el.choices.forEach((choice, index) => {
        pushEntry({
          entries,
          order,
          key: `${elName}.choices.${getChoiceKey(choice, index)}.text`,
          value: normalizeChoiceText(choice),
          sourceLocale,
          targetLocales,
          onDuplicateKey: options.onDuplicateKey,
        });
      });
    }

    if (Array.isArray(el.rateValues)) {
      el.rateValues.forEach((rateValue, index) => {
        pushEntry({
          entries,
          order,
          key: `${elName}.rateValues.${getRateValueKey(rateValue, index)}.text`,
          value: normalizeRateValueText(rateValue),
          sourceLocale,
          targetLocales,
          onDuplicateKey: options.onDuplicateKey,
        });
      });
    }

    if (Array.isArray(el.validators)) {
      el.validators.forEach((validator, index) => {
        if (!validator || typeof validator !== "object") return;

        pushEntry({
          entries,
          order,
          key: `${elName}.validators.${index}.text`,
          value: validator.text,
          sourceLocale,
          targetLocales,
          onDuplicateKey: options.onDuplicateKey,
        });
      });
    }

    if (Array.isArray(el.elements)) {
      walkElements({
        elements: el.elements,
        entries,
        order,
        sourceLocale,
        targetLocales,
        options,
      });
    }

    if (Array.isArray(el.templateElements)) {
      walkElements({
        elements: el.templateElements,
        entries,
        order,
        sourceLocale,
        targetLocales,
        options,
      });
    }
  }
}

// -----------------------------------------------------------------------------
// EXTRACTION
// -----------------------------------------------------------------------------

function extractSurveyPageContent(pageJson, userOptions = {}) {
  if (!pageJson || typeof pageJson !== "object") {
    throw new Error("extractSurveyPageContent requires a page JSON object.");
  }

  const sourceLocale = userOptions.sourceLocale || DEFAULT_SOURCE_LOCALE;
  const targetLocales =
    Array.isArray(userOptions.targetLocales) && userOptions.targetLocales.length
      ? userOptions.targetLocales
      : DEFAULT_TARGET_LOCALES;

  const pageName = isNonEmptyString(pageJson.name)
    ? pageJson.name.trim()
    : userOptions.fallbackPageName || "UNNAMED_PAGE";

  const options = {
    skipCardPanelTitles: userOptions.skipCardPanelTitles !== false,
    excludeElement:
      typeof userOptions.excludeElement === "function"
        ? userOptions.excludeElement
        : null,
    onDuplicateKey:
      typeof userOptions.onDuplicateKey === "function"
        ? userOptions.onDuplicateKey
        : null,
  };

  const entries = {};
  const order = [];

  walkElements({
    elements: pageJson.elements,
    entries,
    order,
    sourceLocale,
    targetLocales,
    options,
  });

  const orderedEntries = {};
  for (const key of order) {
    orderedEntries[key] = entries[key];
  }

  return {
    page: pageName,
    sourceLocale,
    targets: targetLocales.filter((locale) => locale !== sourceLocale),
    entries: orderedEntries,
  };
}

function extractSurveyPageContentFromFile(inputPath, userOptions = {}) {
  if (!isNonEmptyString(inputPath)) {
    throw new Error("extractSurveyPageContentFromFile requires an input path.");
  }

  const pageJson = readJson(inputPath);
  const fallbackPageName = path.basename(inputPath, path.extname(inputPath));

  return extractSurveyPageContent(pageJson, {
    ...userOptions,
    fallbackPageName,
  });
}

// -----------------------------------------------------------------------------
// MERGE
// -----------------------------------------------------------------------------

function normalizeExistingI18nShape(existing, sourceLocale, targetLocales, fallbackPageName) {
  if (!existing || typeof existing !== "object") {
    return {
      page: fallbackPageName,
      sourceLocale,
      targets: targetLocales.filter((locale) => locale !== sourceLocale),
      entries: {},
    };
  }

  const normalized = clone(existing);

  normalized.page = isNonEmptyString(normalized.page)
    ? normalized.page
    : fallbackPageName;

  normalized.sourceLocale = isNonEmptyString(normalized.sourceLocale)
    ? normalized.sourceLocale
    : sourceLocale;

  normalized.targets =
    Array.isArray(normalized.targets) && normalized.targets.length
      ? normalized.targets
      : targetLocales.filter((locale) => locale !== sourceLocale);

  normalized.entries =
    normalized.entries && typeof normalized.entries === "object"
      ? normalized.entries
      : {};

  return normalized;
}

function mergeExtractedWithExisting({
  extracted,
  existing,
  sourceLocale,
  targetLocales,
}) {
  const merged = {
    page: extracted.page,
    sourceLocale,
    targets: targetLocales.filter((locale) => locale !== sourceLocale),
    entries: {},
  };

  const extractedKeys = Object.keys(extracted.entries);
  const existingKeys = new Set(Object.keys(existing.entries || {}));

  for (const key of extractedKeys) {
    const freshEntry = extracted.entries[key];
    const existingEntry = existing.entries[key];

    if (!existingEntry || typeof existingEntry !== "object") {
      merged.entries[key] = clone(freshEntry);
      continue;
    }

    const previousSource =
      typeof existingEntry._source === "string"
        ? existingEntry._source
        : typeof existingEntry[sourceLocale] === "string"
        ? existingEntry[sourceLocale]
        : "";

    const nextSource = freshEntry[sourceLocale];

    const mergedEntry = clone(existingEntry);

    // Ensure all target locales exist on older files.
    for (const locale of targetLocales) {
      if (locale === sourceLocale) continue;
      if (!(locale in mergedEntry)) {
        mergedEntry[locale] = "";
      }
    }

    // Remove stale flag if key still exists in source.
    delete mergedEntry._stale;

    if (previousSource !== nextSource) {
      mergedEntry[sourceLocale] = nextSource;
      mergedEntry._source = nextSource;
      mergedEntry._needsReview = true;
    } else {
      // Preserve unchanged entry exactly, but normalize _source if absent.
      if (typeof mergedEntry._source !== "string") {
        mergedEntry._source = nextSource;
      }
    }

    merged.entries[key] = mergedEntry;
    existingKeys.delete(key);
  }

  // Preserve stale entries that no longer exist in source.
  for (const key of existingKeys) {
    const staleEntry = clone(existing.entries[key]);
    staleEntry._stale = true;
    merged.entries[key] = staleEntry;
  }

  return merged;
}

function buildOrMergeSurveyPageI18nFile({
  inputPath,
  outputPath,
  options = {},
}) {
  const sourceLocale = options.sourceLocale || DEFAULT_SOURCE_LOCALE;
  const targetLocales =
    Array.isArray(options.targetLocales) && options.targetLocales.length
      ? options.targetLocales
      : DEFAULT_TARGET_LOCALES;

  const extracted = extractSurveyPageContentFromFile(inputPath, options);
  const fallbackPageName = extracted.page;

  let existing = {
    page: fallbackPageName,
    sourceLocale,
    targets: targetLocales.filter((locale) => locale !== sourceLocale),
    entries: {},
  };

  if (fs.existsSync(outputPath)) {
    existing = normalizeExistingI18nShape(
      readJson(outputPath),
      sourceLocale,
      targetLocales,
      fallbackPageName
    );
  }

  const merged = mergeExtractedWithExisting({
    extracted,
    existing,
    sourceLocale,
    targetLocales,
  });

  writeJson(outputPath, merged);
  return merged;
}

// -----------------------------------------------------------------------------
// BATCH
// -----------------------------------------------------------------------------

function runBatchExtractionAndMerge() {
  const PROJECT_ROOT = path.resolve(__dirname, "..", "..");
  const INPUT_DIR = path.join(PROJECT_ROOT, "data", "page-content", "en");
  const OUTPUT_DIR = path.join(PROJECT_ROOT, "data", "page-content", "i18n");

  console.log("[i18n] Starting batch extract/merge...");
  console.log("[i18n] PROJECT_ROOT:", PROJECT_ROOT);
  console.log("[i18n] INPUT_DIR:", INPUT_DIR);
  console.log("[i18n] OUTPUT_DIR:", OUTPUT_DIR);
  console.log("");

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  for (const filename of PAGE_FILES) {
    const inputPath = path.join(INPUT_DIR, filename);

    if (!fs.existsSync(inputPath)) {
      throw new Error(`Missing input file: ${inputPath}`);
    }

    const outputFilename = filename.replace(/\.json$/i, ".i18n.json");
    const outputPath = path.join(OUTPUT_DIR, outputFilename);

    const result = buildOrMergeSurveyPageI18nFile({
      inputPath,
      outputPath,
      options: {
        sourceLocale: DEFAULT_SOURCE_LOCALE,
        targetLocales: DEFAULT_TARGET_LOCALES,
      },
    });

    const keys = Object.keys(result.entries);
    const needsReviewCount = keys.filter(
      (key) => result.entries[key] && result.entries[key]._needsReview === true
    ).length;
    const staleCount = keys.filter(
      (key) => result.entries[key] && result.entries[key]._stale === true
    ).length;

    console.log(
      `✅ ${filename} → ${outputFilename} (${keys.length} entries, ${needsReviewCount} needsReview, ${staleCount} stale)`
    );
  }

  console.log("\n[i18n] Batch extract/merge complete.");
}

// -----------------------------------------------------------------------------
// CLI
// -----------------------------------------------------------------------------

function printUsage() {
  console.log(`Usage:
  node helpers/i18n/extractSurveyPageContent.js --batch

Single file:
  node helpers/i18n/extractSurveyPageContent.js \\
    --in data/page-content/en/02_CMPN_INFO-page.json \\
    --out data/page-content/i18n/02_CMPN_INFO-page.i18n.json

Optional flags:
  --source-locale en
  --targets lo,de,fr
  --include-card-panel-titles
`);
}

function getArg(flag, defaultValue) {
  const idx = process.argv.indexOf(flag);
  if (idx === -1) return defaultValue;
  const value = process.argv[idx + 1];
  if (!value || value.startsWith("--")) return defaultValue;
  return value;
}

function hasFlag(flag) {
  return process.argv.includes(flag);
}

if (require.main === module) {
  if (hasFlag("--help")) {
    printUsage();
    process.exit(0);
  }

  if (hasFlag("--batch")) {
    try {
      runBatchExtractionAndMerge();
    } catch (error) {
      console.error("[i18n] batch failed:");
      console.error(error.message || error);
      process.exit(1);
    }
    process.exit(0);
  }

  const inPath = getArg("--in", "");
  const outPath = getArg("--out", "");

  if (!inPath || !outPath) {
    printUsage();
    process.exit(1);
  }

  const sourceLocale = getArg("--source-locale", DEFAULT_SOURCE_LOCALE);
  const targetsArg = getArg("--targets", DEFAULT_TARGET_LOCALES.join(","));
  const targetLocales = targetsArg
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  try {
    const result = buildOrMergeSurveyPageI18nFile({
      inputPath: path.resolve(process.cwd(), inPath),
      outputPath: path.resolve(process.cwd(), outPath),
      options: {
        sourceLocale,
        targetLocales,
        skipCardPanelTitles: !hasFlag("--include-card-panel-titles"),
      },
    });

    const keys = Object.keys(result.entries);
    const needsReviewCount = keys.filter(
      (key) => result.entries[key] && result.entries[key]._needsReview === true
    ).length;
    const staleCount = keys.filter(
      (key) => result.entries[key] && result.entries[key]._stale === true
    ).length;

    console.log(`[i18n] wrote: ${path.resolve(process.cwd(), outPath)}`);
    console.log(`[i18n] page: ${result.page}`);
    console.log(`[i18n] entries: ${keys.length}`);
    console.log(`[i18n] needsReview: ${needsReviewCount}`);
    console.log(`[i18n] stale: ${staleCount}`);
  } catch (error) {
    console.error("[i18n] extractor failed:");
    console.error(error.message || error);
    process.exit(1);
  }
}

// -----------------------------------------------------------------------------
// EXPORTS
// -----------------------------------------------------------------------------

module.exports = {
  extractSurveyPageContent,
  extractSurveyPageContentFromFile,
  buildOrMergeSurveyPageI18nFile,
  mergeExtractedWithExisting,
  normalizeChoiceText,
  normalizeRateValueText,
  sanitizeKeySegment,
};