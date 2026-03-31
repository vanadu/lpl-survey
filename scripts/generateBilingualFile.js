#!/usr/bin/env node
"use strict";

/**
 * generateBilingualFile.js
 *
 * -----------------------------------------------------------------------------
 * PURPOSE
 * -----------------------------------------------------------------------------
 * Two-way i18n page transformer for SurveyJS page JSON files.
 *
 * MODE A — TO BILINGUAL
 *   Source page JSON  -> bilingual _i18n.json
 *
 * MODE B — FROM BILINGUAL
 *   Bilingual _i18n.json + source page JSON template -> localized page JSON
 *
 * -----------------------------------------------------------------------------
 * FILE FLOW
 * -----------------------------------------------------------------------------
 * Source locale page JSON:
 *   data/page-content/en-US/02_CMPN_INFO-page.json
 *
 * Bilingual file:
 *   data/page-content/de-DE/02_CMPN_INFO-page_i18n.json
 *
 * Rebuilt localized page:
 *   data/page-content/de-DE/02_CMPN_INFO-page.json
 *
 * -----------------------------------------------------------------------------
 * MODE DETECTION
 * -----------------------------------------------------------------------------
 * The script auto-detects mode by input shape:
 *
 *   SurveyJS page JSON:
 *     - has `elements`, or
 *     - has `name` + `elements`
 *     => TO BILINGUAL
 *
 *   Bilingual file:
 *     - has `entries` object
 *     => FROM BILINGUAL
 *
 * -----------------------------------------------------------------------------
 * PATH MODEL
 * -----------------------------------------------------------------------------
 * Uses helpers/i18n/i18nConfig.js and helpers/i18n/projectPaths.js as the
 * canonical source of locale and folder information.
 *
 * -----------------------------------------------------------------------------
 * NOTES
 * -----------------------------------------------------------------------------
 * - This file is CommonJS, but dynamically imports your ESM i18n helpers.
 * - Bilingual entries use generic per-entry fields:
 *     { source, target, source_prev?, _needsReview?, _stale? }
 * - Rebuild mode overlays `target` text when present, otherwise falls back
 *   to `source`, preserving full SurveyJS structure from the source page JSON.
 */

const fs = require("fs");
const path = require("path");

// -----------------------------------------------------------------------------
// PAGE FILES
// -----------------------------------------------------------------------------

const PAGE_FILES = [
  "00_LANDING-page.json",
  "01_USER_INFO-page.json",
  "02_CMPN_INFO-page.json",
  "03_FACTORS-page.json",
  "04_SYMPTOMS-page.json",
  "05_PRIMARY-page.json",
  "06_DIAGNOSIS-page.json",
  "07_MEDICATION-page.json",
  "08_PROCEDURE-page.json", 
  "09_THERAPY-page.json",
  "10_BREATHING-page.json",
  "11_NEUROPATHY-page.json",
  "12_CONCLUSION-page.json"
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

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function isObject(value) {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function normalizeText(value) {
  return typeof value === "string" ? value.trim() : "";
}

function sanitizeKeySegment(value) {
  return (
    String(value)
      .trim()
      .replace(/\s+/g, "_")
      .replace(/[^A-Za-z0-9_-]/g, "_")
      .replace(/_+/g, "_")
      .replace(/^_+|_+$/g, "") || "item"
  );
}

function getArg(flag, defaultValue = null) {
  const idx = process.argv.indexOf(flag);
  if (idx === -1) return defaultValue;
  const value = process.argv[idx + 1];
  if (!value || value.startsWith("--")) return defaultValue;
  return value;
}

function hasFlag(flag) {
  return process.argv.includes(flag);
}

function pathToFileUrl(filePath) {
  const resolved = path.resolve(filePath);
  const normalized = resolved.split(path.sep).join("/");
  return `file://${normalized.startsWith("/") ? "" : "/"}${normalized}`;
}

function stripI18nSuffix(filename) {
  return filename.replace(/_i18n\.json$/i, ".json");
}

function addI18nSuffix(filename) {
  if (/_i18n\.json$/i.test(filename)) return filename;
  return filename.replace(/\.json$/i, "_i18n.json");
}

function ensureJsonExtension(filename) {
  return /\.json$/i.test(filename) ? filename : `${filename}.json`;
}

function isSurveyPageJson(value) {
  return (
    isObject(value) &&
    (Array.isArray(value.elements) ||
      (typeof value.name === "string" && Array.isArray(value.elements)))
  );
}

function isBilingualFile(value) {
  return isObject(value) && isObject(value.entries);
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
    const raw = choice.value ?? choice.text ?? choice.title ?? choice.name;
    if (raw !== undefined && raw !== null) {
      return sanitizeKeySegment(String(raw));
    }
  }

  if (typeof choice === "string" || typeof choice === "number") {
    return sanitizeKeySegment(String(choice));
  }

  return `choice_${index}`;
}

function getRateValueKey(rateValue, index) {
  if (rateValue && typeof rateValue === "object") {
    const raw = rateValue.value ?? rateValue.text ?? rateValue.title ?? rateValue.name;
    if (raw !== undefined && raw !== null) {
      return sanitizeKeySegment(String(raw));
    }
  }

  if (typeof rateValue === "string" || typeof rateValue === "number") {
    return sanitizeKeySegment(String(rateValue));
  }

  return `rate_${index}`;
}

function shouldSkipCardPanelTitle(el, options) {
  return (
    options.skipCardPanelTitles !== false &&
    el &&
    el.type === "panel" &&
    typeof el.cssClasses === "object" &&
    typeof el.cssClasses.root === "string" &&
    el.cssClasses.root.includes("sv-card")
  );
}

// -----------------------------------------------------------------------------
// EXTRACTION HELPERS
// -----------------------------------------------------------------------------

function addEntry(entries, key, sourceText) {
  const normalized = normalizeText(sourceText);
  if (!normalized) return;
  entries[key] = { source: normalized };
}

function extractFromValidatorArray(entries, baseKey, validators) {
  if (!Array.isArray(validators)) return;

  validators.forEach((validator, index) => {
    if (!validator || typeof validator !== "object") return;

    if (isNonEmptyString(validator.text)) {
      addEntry(entries, `${baseKey}.validators.${index}.text`, validator.text);
    }
  });
}

function extractFromChoices(entries, baseKey, choices) {
  if (!Array.isArray(choices)) return;

  choices.forEach((choice, index) => {
    const text = normalizeChoiceText(choice);
    if (!text) return;
    const key = getChoiceKey(choice, index);
    addEntry(entries, `${baseKey}.choices.${key}.text`, text);
  });
}

function extractFromRateValues(entries, baseKey, rateValues) {
  if (!Array.isArray(rateValues)) return;

  rateValues.forEach((rateValue, index) => {
    const text = normalizeRateValueText(rateValue);
    if (!text) return;
    const key = getRateValueKey(rateValue, index);
    addEntry(entries, `${baseKey}.rateValues.${key}.text`, text);
  });
}

function extractElementContent(entries, el, options = {}) {
  if (!el || typeof el !== "object") return;

  const baseKey = isNonEmptyString(el.name)
    ? el.name.trim()
    : sanitizeKeySegment(el.type || "element");

  if (isNonEmptyString(el.title) && !shouldSkipCardPanelTitle(el, options)) {
    addEntry(entries, `${baseKey}.title`, el.title);
  }

  if (isNonEmptyString(el.description)) {
    addEntry(entries, `${baseKey}.description`, el.description);
  }

  if (isNonEmptyString(el.html)) {
    addEntry(entries, `${baseKey}.html`, el.html);
  }

  if (isNonEmptyString(el.placeholder)) {
    addEntry(entries, `${baseKey}.placeholder`, el.placeholder);
  }

  if (isNonEmptyString(el.labelTrue)) {
    addEntry(entries, `${baseKey}.labelTrue`, el.labelTrue);
  }

  if (isNonEmptyString(el.labelFalse)) {
    addEntry(entries, `${baseKey}.labelFalse`, el.labelFalse);
  }

  if (isNonEmptyString(el.requiredErrorText)) {
    addEntry(entries, `${baseKey}.requiredErrorText`, el.requiredErrorText);
  }

  if (isNonEmptyString(el.commentText)) {
    addEntry(entries, `${baseKey}.commentText`, el.commentText);
  }

  if (isNonEmptyString(el.commentPlaceholder)) {
    addEntry(entries, `${baseKey}.commentPlaceholder`, el.commentPlaceholder);
  }

  extractFromChoices(entries, baseKey, el.choices);
  extractFromRateValues(entries, baseKey, el.rateValues);
  extractFromValidatorArray(entries, baseKey, el.validators);

  if (Array.isArray(el.elements)) {
    el.elements.forEach((child) => extractElementContent(entries, child, options));
  }

  if (el.type === "paneldynamic" && Array.isArray(el.templateElements)) {
    el.templateElements.forEach((child) =>
      extractElementContent(entries, child, options)
    );
  }
}

function extractSurveyPageContent(pageJson, options = {}) {
  if (!isSurveyPageJson(pageJson)) {
    throw new Error("extractSurveyPageContent: input is not a SurveyJS page JSON object");
  }

  const pageName = isNonEmptyString(pageJson.name)
    ? pageJson.name.trim()
    : "UnnamedPage";

  const entries = {};

  if (isNonEmptyString(pageJson.title)) {
    addEntry(entries, `${pageName}.title`, pageJson.title);
  }

  if (isNonEmptyString(pageJson.description)) {
    addEntry(entries, `${pageName}.description`, pageJson.description);
  }

  if (Array.isArray(pageJson.elements)) {
    pageJson.elements.forEach((el) => extractElementContent(entries, el, options));
  }

  return {
    page: pageName,
    entries,
  };
}

function extractSurveyPageContentFromFile(inputPath, options = {}) {
  const json = readJson(inputPath);
  return extractSurveyPageContent(json, options);
}

// -----------------------------------------------------------------------------
// BILINGUAL MERGE LOGIC
// -----------------------------------------------------------------------------

function normalizeExistingI18nShape(value, sourceLocale, targetLocale, fallbackPageName) {
  const normalized = {
    page: isNonEmptyString(value?.page) ? value.page.trim() : fallbackPageName,
    sourceLocale,
    targetLocale,
    entries: {},
  };

  const entries = isObject(value?.entries) ? value.entries : {};

  for (const [key, entry] of Object.entries(entries)) {
    if (!isObject(entry)) continue;

    const out = {};

    if (typeof entry.source === "string") out.source = entry.source;
    if (typeof entry.target === "string") out.target = entry.target;
    if (typeof entry.source_prev === "string") out.source_prev = entry.source_prev;
    if (entry._needsReview === true) out._needsReview = true;
    if (entry._stale === true) out._stale = true;

    normalized.entries[key] = out;
  }

  return normalized;
}

function mergeExtractedWithExisting({
  extracted,
  existing,
  sourceLocale,
  targetLocale,
}) {
  const merged = {
    page: extracted.page || existing.page,
    sourceLocale,
    targetLocale,
    entries: {},
  };

  const extractedEntries = extracted.entries || {};
  const existingEntries = existing.entries || {};

  for (const key of Object.keys(extractedEntries)) {
    const currentSource = normalizeText(extractedEntries[key]?.source);
    const prev = existingEntries[key];

    if (!prev) {
      merged.entries[key] = {
        source: currentSource,
        target: "",
      };
      continue;
    }

    const prevSource = normalizeText(prev.source);
    const prevTarget = typeof prev.target === "string" ? prev.target : "";

    if (prevSource === currentSource) {
      merged.entries[key] = {
        source: currentSource,
        target: prevTarget,
      };
      continue;
    }

    merged.entries[key] = {
      source: currentSource,
      target: prevTarget,
      source_prev: prevSource,
      _needsReview: true,
    };
  }

  for (const key of Object.keys(existingEntries)) {
    if (Object.prototype.hasOwnProperty.call(extractedEntries, key)) continue;

    const prev = existingEntries[key];
    const staleEntry = {
      source: typeof prev?.source === "string" ? prev.source : "",
      target: typeof prev?.target === "string" ? prev.target : "",
      _stale: true,
    };

    if (typeof prev?.source_prev === "string") {
      staleEntry.source_prev = prev.source_prev;
    }

    if (prev?._needsReview === true) {
      staleEntry._needsReview = true;
    }

    merged.entries[key] = staleEntry;
  }

  return merged;
}

function buildOrMergeSurveyPageI18nFile({
  inputPath,
  outputPath,
  sourceLocale,
  targetLocale,
  options = {},
}) {
  const extracted = extractSurveyPageContentFromFile(inputPath, options);
  const fallbackPageName = extracted.page;

  let existing = {
    page: fallbackPageName,
    sourceLocale,
    targetLocale,
    entries: {},
  };

  if (fs.existsSync(outputPath)) {
    existing = normalizeExistingI18nShape(
      readJson(outputPath),
      sourceLocale,
      targetLocale,
      fallbackPageName
    );
  }

  const merged = mergeExtractedWithExisting({
    extracted,
    existing,
    sourceLocale,
    targetLocale,
  });

  writeJson(outputPath, merged);
  return merged;
}

// -----------------------------------------------------------------------------
// REBUILD LOCALIZED PAGE LOGIC
// -----------------------------------------------------------------------------

function getEntryText(entry) {
  if (!isObject(entry)) return "";
  const target = typeof entry.target === "string" ? entry.target : "";
  const source = typeof entry.source === "string" ? entry.source : "";
  return normalizeText(target) || normalizeText(source);
}

function overlayString(entryMap, key, currentValue) {
  if (!isNonEmptyString(currentValue)) return currentValue;
  const entry = entryMap[key];
  if (!entry) return currentValue;

  const next = getEntryText(entry);
  return next || currentValue;
}

function rebuildChoices(baseKey, choices, entryMap) {
  if (!Array.isArray(choices)) return choices;

  return choices.map((choice, index) => {
    const key = `${baseKey}.choices.${getChoiceKey(choice, index)}.text`;

    if (typeof choice === "string") {
      return overlayString(entryMap, key, choice);
    }

    if (typeof choice === "number") {
      return choice;
    }

    if (!isObject(choice)) return choice;

    const next = clone(choice);

    if (isNonEmptyString(next.text)) {
      next.text = overlayString(entryMap, key, next.text);
    } else if (isNonEmptyString(next.title)) {
      next.title = overlayString(entryMap, key, next.title);
    }

    return next;
  });
}

function rebuildRateValues(baseKey, rateValues, entryMap) {
  if (!Array.isArray(rateValues)) return rateValues;

  return rateValues.map((rateValue, index) => {
    const key = `${baseKey}.rateValues.${getRateValueKey(rateValue, index)}.text`;

    if (typeof rateValue === "string") {
      return overlayString(entryMap, key, rateValue);
    }

    if (typeof rateValue === "number") {
      return rateValue;
    }

    if (!isObject(rateValue)) return rateValue;

    const next = clone(rateValue);

    if (isNonEmptyString(next.text)) {
      next.text = overlayString(entryMap, key, next.text);
    } else if (isNonEmptyString(next.title)) {
      next.title = overlayString(entryMap, key, next.title);
    }

    return next;
  });
}

function rebuildValidators(baseKey, validators, entryMap) {
  if (!Array.isArray(validators)) return validators;

  return validators.map((validator, index) => {
    if (!isObject(validator)) return validator;

    const next = clone(validator);
    const key = `${baseKey}.validators.${index}.text`;

    if (isNonEmptyString(next.text)) {
      next.text = overlayString(entryMap, key, next.text);
    }

    return next;
  });
}

function rebuildElementContent(el, entryMap, options = {}) {
  if (!isObject(el)) return el;

  const next = clone(el);

  const baseKey = isNonEmptyString(next.name)
    ? next.name.trim()
    : sanitizeKeySegment(next.type || "element");

  if (isNonEmptyString(next.title) && !shouldSkipCardPanelTitle(next, options)) {
    next.title = overlayString(entryMap, `${baseKey}.title`, next.title);
  }

  if (isNonEmptyString(next.description)) {
    next.description = overlayString(
      entryMap,
      `${baseKey}.description`,
      next.description
    );
  }

  if (isNonEmptyString(next.html)) {
    next.html = overlayString(entryMap, `${baseKey}.html`, next.html);
  }

  if (isNonEmptyString(next.placeholder)) {
    next.placeholder = overlayString(
      entryMap,
      `${baseKey}.placeholder`,
      next.placeholder
    );
  }

  if (isNonEmptyString(next.labelTrue)) {
    next.labelTrue = overlayString(
      entryMap,
      `${baseKey}.labelTrue`,
      next.labelTrue
    );
  }

  if (isNonEmptyString(next.labelFalse)) {
    next.labelFalse = overlayString(
      entryMap,
      `${baseKey}.labelFalse`,
      next.labelFalse
    );
  }

  if (isNonEmptyString(next.requiredErrorText)) {
    next.requiredErrorText = overlayString(
      entryMap,
      `${baseKey}.requiredErrorText`,
      next.requiredErrorText
    );
  }

  if (isNonEmptyString(next.commentText)) {
    next.commentText = overlayString(
      entryMap,
      `${baseKey}.commentText`,
      next.commentText
    );
  }

  if (isNonEmptyString(next.commentPlaceholder)) {
    next.commentPlaceholder = overlayString(
      entryMap,
      `${baseKey}.commentPlaceholder`,
      next.commentPlaceholder
    );
  }

  if (Array.isArray(next.choices)) {
    next.choices = rebuildChoices(baseKey, next.choices, entryMap);
  }

  if (Array.isArray(next.rateValues)) {
    next.rateValues = rebuildRateValues(baseKey, next.rateValues, entryMap);
  }

  if (Array.isArray(next.validators)) {
    next.validators = rebuildValidators(baseKey, next.validators, entryMap);
  }

  if (Array.isArray(next.elements)) {
    next.elements = next.elements.map((child) =>
      rebuildElementContent(child, entryMap, options)
    );
  }

  if (next.type === "paneldynamic" && Array.isArray(next.templateElements)) {
    next.templateElements = next.templateElements.map((child) =>
      rebuildElementContent(child, entryMap, options)
    );
  }

  return next;
}

function rebuildLocalizedPageFromBilingual({
  bilingualPath,
  sourcePagePath,
  outputPath,
  options = {},
}) {
  const bilingual = readJson(bilingualPath);
  const sourcePage = readJson(sourcePagePath);

  if (!isBilingualFile(bilingual)) {
    throw new Error(`Input is not a bilingual file: ${bilingualPath}`);
  }

  if (!isSurveyPageJson(sourcePage)) {
    throw new Error(`Source page template is not a SurveyJS page JSON: ${sourcePagePath}`);
  }

  const entryMap = bilingual.entries || {};
  const result = clone(sourcePage);

  const pageName = isNonEmptyString(result.name) ? result.name.trim() : "UnnamedPage";

  if (isNonEmptyString(result.title)) {
    result.title = overlayString(entryMap, `${pageName}.title`, result.title);
  }

  if (isNonEmptyString(result.description)) {
    result.description = overlayString(
      entryMap,
      `${pageName}.description`,
      result.description
    );
  }

  if (Array.isArray(result.elements)) {
    result.elements = result.elements.map((el) =>
      rebuildElementContent(el, entryMap, options)
    );
  }

  writeJson(outputPath, result);
  return result;
}

// -----------------------------------------------------------------------------
// PATH / CONTEXT HELPERS
// -----------------------------------------------------------------------------

async function loadI18nHelpers(projectRootDir) {
  const projectPathsModule = await import(
    pathToFileUrl(path.resolve(projectRootDir, "helpers/i18n/projectPaths.js"))
  );
  const i18nConfigModule = await import(
    pathToFileUrl(path.resolve(projectRootDir, "helpers/i18n/i18nConfig.js"))
  );

  return {
    ...projectPathsModule,
    ...i18nConfigModule,
  };
}

function resolveBatchFilenames(inputDir) {
  if (Array.isArray(PAGE_FILES) && PAGE_FILES.length > 0) {
    return PAGE_FILES.slice();
  }

  return fs
    .readdirSync(inputDir)
    .filter((name) => /\.json$/i.test(name) && !/_i18n\.json$/i.test(name))
    .sort((a, b) => a.localeCompare(b));
}

async function buildRuntimeContext() {
  const projectRootDir = path.resolve(__dirname, "..");
  const helpers = await loadI18nHelpers(projectRootDir);

  const {
    buildProjectPaths,
    getLocaleConfig,
    logProjectPaths,
    DEFAULT_LOCALE,
    SUPPORTED_LOCALES,
  } = helpers;

  const sourceLocale = getArg("--source-lang", DEFAULT_LOCALE);
  const targetLocale = getArg("--target-lang", null);

  if (!targetLocale) {
    throw new Error("Missing required --target-lang");
  }

  if (sourceLocale === targetLocale) {
    throw new Error("--source-lang and --target-lang must be different");
  }

  getLocaleConfig(sourceLocale);
  getLocaleConfig(targetLocale);

  const sourcePaths = buildProjectPaths(sourceLocale, projectRootDir);
  const targetPaths = buildProjectPaths(targetLocale, projectRootDir);

  const context = {
    projectRootDir,
    DEFAULT_LOCALE,
    SUPPORTED_LOCALES,
    logProjectPaths,
    sourceLocale,
    targetLocale,
    sourcePaths,
    targetPaths,
  };

  return context;
}

function resolvePathsForSingleFile(context, inputFilenameRaw) {
  const inputFilename = ensureJsonExtension(inputFilenameRaw);
  const sourcePageFilename = stripI18nSuffix(inputFilename);
  const bilingualFilename = addI18nSuffix(sourcePageFilename);

  return {
    sourcePageFilename,
    bilingualFilename,
    sourcePagePath: path.join(context.sourcePaths.pageContentDir, sourcePageFilename),
    bilingualPath: path.join(context.targetPaths.pageContentDir, bilingualFilename),
    localizedPagePath: path.join(context.targetPaths.pageContentDir, sourcePageFilename),
  };
}

// -----------------------------------------------------------------------------
// RUNNERS
// -----------------------------------------------------------------------------

async function runSingleAuto() {
  const context = await buildRuntimeContext();
  const inputName = getArg("--file", "");

  if (!inputName) {
    throw new Error("Single-file mode requires --file");
  }

  const paths = resolvePathsForSingleFile(context, inputName);

  if (!fs.existsSync(paths.sourcePagePath) && !fs.existsSync(paths.bilingualPath)) {
    throw new Error(
      `Neither source page nor bilingual file found for "${inputName}"\n` +
        `Checked:\n` +
        `  ${paths.sourcePagePath}\n` +
        `  ${paths.bilingualPath}`
    );
  }

  if (hasFlag("--log-paths")) {
    context.logProjectPaths({
      sourceLocale: context.sourceLocale,
      targetLocale: context.targetLocale,
      sourcePagePath: paths.sourcePagePath,
      bilingualPath: paths.bilingualPath,
      localizedPagePath: paths.localizedPagePath,
    });
  }

  if (fs.existsSync(paths.bilingualPath) && /_i18n\.json$/i.test(inputName)) {
    rebuildLocalizedPageFromBilingual({
      bilingualPath: paths.bilingualPath,
      sourcePagePath: paths.sourcePagePath,
      outputPath: paths.localizedPagePath,
      options: {
        skipCardPanelTitles: !hasFlag("--include-card-panel-titles"),
      },
    });

    console.log(`✅ ${path.basename(paths.bilingualPath)} → ${path.basename(paths.localizedPagePath)}`);
    return;
  }

  if (!fs.existsSync(paths.sourcePagePath)) {
    throw new Error(`Missing source page template: ${paths.sourcePagePath}`);
  }

  const result = buildOrMergeSurveyPageI18nFile({
    inputPath: paths.sourcePagePath,
    outputPath: paths.bilingualPath,
    sourceLocale: context.sourceLocale,
    targetLocale: context.targetLocale,
    options: {
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

  console.log(
    `✅ ${path.basename(paths.sourcePagePath)} → ${path.basename(paths.bilingualPath)} ` +
      `(${keys.length} entries, ${needsReviewCount} needsReview, ${staleCount} stale)`
  );
}

async function runBatchToBilingual() {
  const context = await buildRuntimeContext();

  fs.mkdirSync(context.targetPaths.pageContentDir, { recursive: true });

  console.log("[BFG] Starting batch TO bilingual");
  console.log("[BFG] source:", context.sourcePaths.pageContentDir);
  console.log("[BFG] target:", context.targetPaths.pageContentDir);
  console.log("");

  for (const filename of resolveBatchFilenames(context.sourcePaths.pageContentDir)) {
    const sourcePagePath = path.join(context.sourcePaths.pageContentDir, filename);
    const bilingualPath = path.join(
      context.targetPaths.pageContentDir,
      addI18nSuffix(filename)
    );

    if (!fs.existsSync(sourcePagePath)) {
      throw new Error(`Missing input file: ${sourcePagePath}`);
    }

    const result = buildOrMergeSurveyPageI18nFile({
      inputPath: sourcePagePath,
      outputPath: bilingualPath,
      sourceLocale: context.sourceLocale,
      targetLocale: context.targetLocale,
      options: {
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

    console.log(
      `✅ ${filename} → ${path.basename(bilingualPath)} ` +
        `(${keys.length} entries, ${needsReviewCount} needsReview, ${staleCount} stale)`
    );
  }

  console.log("\n[BFG] Batch TO bilingual complete.");
}

async function runBatchFromBilingual() {
  const context = await buildRuntimeContext();

  fs.mkdirSync(context.targetPaths.pageContentDir, { recursive: true });

  console.log("[BFG] Starting batch FROM bilingual");
  console.log("[BFG] bilingual:", context.targetPaths.pageContentDir);
  console.log("[BFG] source template:", context.sourcePaths.pageContentDir);
  console.log("[BFG] localized out:", context.targetPaths.pageContentDir);
  console.log("");

  for (const filename of resolveBatchFilenames(context.sourcePaths.pageContentDir)) {
    const sourcePagePath = path.join(context.sourcePaths.pageContentDir, filename);
    const bilingualPath = path.join(
      context.targetPaths.pageContentDir,
      addI18nSuffix(filename)
    );
    const localizedPagePath = path.join(context.targetPaths.pageContentDir, filename);

    if (!fs.existsSync(sourcePagePath)) {
      throw new Error(`Missing source page template: ${sourcePagePath}`);
    }

    if (!fs.existsSync(bilingualPath)) {
      throw new Error(`Missing bilingual file: ${bilingualPath}`);
    }

    rebuildLocalizedPageFromBilingual({
      bilingualPath,
      sourcePagePath,
      outputPath: localizedPagePath,
      options: {
        skipCardPanelTitles: !hasFlag("--include-card-panel-titles"),
      },
    });

    console.log(`✅ ${path.basename(bilingualPath)} → ${filename}`);
  }

  console.log("\n[BFG] Batch FROM bilingual complete.");
}

// -----------------------------------------------------------------------------
// CLI
// -----------------------------------------------------------------------------

function printUsage() {
  console.log(`Usage:

Batch build bilingual files from source pages:
  node scripts/generateBilingualFile.js --batch-to-bilingual --source-lang en-US --target-lang de-DE

Batch rebuild localized pages from bilingual files:
  node scripts/generateBilingualFile.js --batch-from-bilingual --source-lang en-US --target-lang de-DE

Single file auto mode:
  node scripts/generateBilingualFile.js --file 02_CMPN_INFO-page.json --source-lang en-US --target-lang de-DE
  node scripts/generateBilingualFile.js --file 02_CMPN_INFO-page_i18n.json --source-lang en-US --target-lang de-DE

Optional flags:
  --include-card-panel-titles
  --log-paths
  --help

Behavior:
  --file *.json         source page -> target locale *_i18n.json
  --file *_i18n.json    bilingual -> target locale page JSON
`);
}

async function main() {
  if (hasFlag("--help")) {
    printUsage();
    process.exit(0);
  }

  if (
    !hasFlag("--batch-to-bilingual") &&
    !hasFlag("--batch-from-bilingual") &&
    !getArg("--file", "")
  ) {
    printUsage();
    process.exit(1);
  }

  if (hasFlag("--batch-to-bilingual")) {
    await runBatchToBilingual();
    return;
  }

  if (hasFlag("--batch-from-bilingual")) {
    await runBatchFromBilingual();
    return;
  }

  await runSingleAuto();
}

if (require.main === module) {
  main().catch((error) => {
    console.error("[BFG] failed:");
    console.error(error.message || error);
    process.exit(1);
  });
}

// -----------------------------------------------------------------------------
// EXPORTS
// -----------------------------------------------------------------------------

module.exports = {
  extractSurveyPageContent,
  extractSurveyPageContentFromFile,
  mergeExtractedWithExisting,
  buildOrMergeSurveyPageI18nFile,
  rebuildLocalizedPageFromBilingual,
  normalizeChoiceText,
  normalizeRateValueText,
  sanitizeKeySegment,
  stripI18nSuffix,
  addI18nSuffix,
};