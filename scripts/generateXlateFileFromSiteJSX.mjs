#!/usr/bin/env node

/**
 * generateXlateFileFromSiteJSX.mjs
 *
 * Build/update Xlate JSON files from tagged site JS/JSX files.
 *
 * Extraction rule:
 *   Only extract content from elements with:
 *     data-translate="some.stable.key"
 *
 * Example:
 *   <h2 data-translate="survey_faqs.h2.001">Survey FAQs</h2>
 *
 * Output:
 *   {
 *     sourceLocale: "en-US",
 *     targetLocale: "de-DE",
 *     sourceFile: "survey-faqs.js",
 *     entries: {
 *       "survey_faqs.h2.001": {
 *         source: "Survey FAQs",
 *         target: "",
 *         _context: "h2:line34"
 *       }
 *     }
 *   }
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  buildProjectPaths,
  getLocaleConfig,
  logProjectPaths,
} from "../helpers/i18n/projectPaths.mjs";
import {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
} from "../helpers/i18n/i18nConfig.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// --------------------------------------------------
// CLI
// --------------------------------------------------

function hasFlag(flag) {
  return process.argv.includes(flag);
}

function getArg(flag, fallback = "") {
  const i = process.argv.indexOf(flag);
  if (i === -1) return fallback;
  return process.argv[i + 1] ?? fallback;
}

function printUsage() {
  console.log(`
Usage

Single file:
  node scripts/generateXlateFileFromSiteJSX.mjs --file survey-faqs.js --source-lang en-US --target-lang de-DE

Batch:
  node scripts/generateXlateFileFromSiteJSX.mjs --batch --source-lang en-US --target-lang de-DE

Optional:
  --in-dir <dir>          Override source input directory
  --out-dir <dir>         Override xlate output directory
  --ext .js,.jsx          Default: .js,.jsx
  --log-paths
  --debug
  --help
`);
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

// --------------------------------------------------
// FS helpers
// --------------------------------------------------

function readText(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function writeJson(filePath, value) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(value, null, 2) + "\n", "utf8");
}

function fileExists(filePath) {
  return fs.existsSync(filePath);
}

function stripBom(text) {
  return text.replace(/^\uFEFF/, "");
}

function normalizeNewlines(text) {
  return text.replace(/\r\n/g, "\n");
}

// --------------------------------------------------
// Text normalization
// --------------------------------------------------

function decodeEntities(text) {
  return text
    .replace(/&nbsp;/g, " ")
    .replace(/&mdash;/g, "—")
    .replace(/&ndash;/g, "–")
    .replace(/&lsquo;/g, "‘")
    .replace(/&rsquo;/g, "’")
    .replace(/&ldquo;/g, "“")
    .replace(/&rdquo;/g, "”")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function stripJsxTags(text) {
  return text.replace(/<[^>]+>/g, "");
}

function normalizeWhitespace(text) {
  return text.replace(/\s+/g, " ").trim();
}

function normalizeSourceText(text) {
  return normalizeWhitespace(stripJsxTags(decodeEntities(text)));
}

function hasMeaningfulText(text) {
  return typeof text === "string" && text.trim().length > 0;
}

function countLinesBeforeIndex(text, index) {
  return text.slice(0, index).split("\n").length;
}

// --------------------------------------------------
// Extraction
// --------------------------------------------------

/**
 * Extract only tagged blocks:
 *   <tag ... data-translate="key" ...> ... </tag>
 *
 * This is intentionally conservative:
 * - skips self-closing tags
 * - skips dynamic blocks containing `{...}`
 * - strips nested markup to plain text
 *
 * That fits your current tagging model.
 */
function extractTaggedEntries(sourceText, { debug = false } = {}) {
  const cleaned = normalizeNewlines(stripBom(sourceText));
  const results = [];

  const regex =
    /<([A-Za-z][A-Za-z0-9]*)\b([^>]*?)\bdata-translate\s*=\s*["']([^"']+)["']([^>]*)>([\s\S]*?)<\/\1>/g;

  let match;

  while ((match = regex.exec(cleaned))) {
    const tagName = match[1];
    const key = match[3].trim();
    const inner = match[5];

    if (!key) continue;

    // Conservative: skip dynamic JSX expressions for now.
    if (inner.includes("{")) {
      if (debug) {
        console.log(`⚠️  Skipping dynamic tagged block: ${key}`);
      }
      continue;
    }

    const source = normalizeSourceText(inner);
    if (!hasMeaningfulText(source)) continue;

    const line = countLinesBeforeIndex(cleaned, match.index);

    results.push({
      key,
      source,
      tagName,
      line,
      _context: `${tagName}:line${line}`,
    });
  }

  return dedupeByKey(results);
}

function dedupeByKey(items) {
  const map = new Map();

  for (const item of items) {
    // First occurrence wins; later duplicates are usually accidental.
    if (!map.has(item.key)) {
      map.set(item.key, item);
    }
  }

  return Array.from(map.values());
}

// --------------------------------------------------
// Xlate merge
// --------------------------------------------------

function normalizeExistingXlate(existing, sourceLocale, targetLocale, sourceFile) {
  const out = {
    sourceLocale,
    targetLocale,
    sourceFile,
    entries: {},
  };

  const entries = existing && typeof existing.entries === "object"
    ? existing.entries
    : {};

  for (const [key, entry] of Object.entries(entries)) {
    if (!entry || typeof entry !== "object") continue;

    out.entries[key] = {
      source: typeof entry.source === "string" ? entry.source : "",
      target: typeof entry.target === "string" ? entry.target : "",
    };

    if (typeof entry.source_prev === "string") {
      out.entries[key].source_prev = entry.source_prev;
    }

    if (typeof entry._context === "string") {
      out.entries[key]._context = entry._context;
    }

    if (entry._needsReview === true) {
      out.entries[key]._needsReview = true;
    }

    if (entry._stale === true) {
      out.entries[key]._stale = true;
    }
  }

  return out;
}

function mergeEntries({ extractedEntries, existingXlate, sourceLocale, targetLocale, sourceFile }) {
  const merged = {
    sourceLocale,
    targetLocale,
    sourceFile,
    entries: {},
  };

  const extractedMap = {};
  for (const item of extractedEntries) {
    extractedMap[item.key] = item;
  }

  const existingMap = existingXlate.entries || {};

  // Current extracted keys
  for (const [key, item] of Object.entries(extractedMap)) {
    const prev = existingMap[key];

    if (!prev) {
      merged.entries[key] = {
        source: item.source,
        target: "",
        _context: item._context,
      };
      continue;
    }

    const prevSource = typeof prev.source === "string" ? prev.source : "";
    const prevTarget = typeof prev.target === "string" ? prev.target : "";

    if (prevSource === item.source) {
      merged.entries[key] = {
        source: item.source,
        target: prevTarget,
        _context: item._context,
      };
    } else {
      merged.entries[key] = {
        source: item.source,
        target: prevTarget,
        source_prev: prevSource,
        _needsReview: true,
        _context: item._context,
      };
    }
  }

  // Stale keys
  for (const [key, prev] of Object.entries(existingMap)) {
    if (Object.prototype.hasOwnProperty.call(extractedMap, key)) continue;

    merged.entries[key] = {
      source: typeof prev.source === "string" ? prev.source : "",
      target: typeof prev.target === "string" ? prev.target : "",
      _stale: true,
    };

    if (typeof prev.source_prev === "string") {
      merged.entries[key].source_prev = prev.source_prev;
    }

    if (typeof prev._context === "string") {
      merged.entries[key]._context = prev._context;
    }

    if (prev._needsReview === true) {
      merged.entries[key]._needsReview = true;
    }
  }

  return merged;
}

// --------------------------------------------------
// Path resolution
// --------------------------------------------------

function parseExtensions() {
  return getArg("--ext", ".js,.jsx")
    .split(",")
    .map((x) => x.trim().toLowerCase())
    .filter(Boolean);
}

function matchesExtension(filename, exts) {
  const lower = filename.toLowerCase();
  return exts.some((ext) => lower.endsWith(ext));
}

function buildDefaultInputDir(rootDir) {
  return path.join(rootDir, "pages");
}

function buildDefaultOutputDir(targetLocaleTag, rootDir) {
  const paths = buildProjectPaths(targetLocaleTag, rootDir);
  return path.join(paths.siteLocaleRootDir, "xlate");
}

function buildOutputFilename(inputFilename) {
  return inputFilename.replace(/\.(js|jsx)$/i, ".xlate.json");
}

function listSourceFilesFlat(inputDir, extensions) {
  assert(fileExists(inputDir), `Input directory not found: ${inputDir}`);

  return fs
    .readdirSync(inputDir, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((name) => matchesExtension(name, extensions))
    .sort((a, b) => a.localeCompare(b));
}

// --------------------------------------------------
// Main work
// --------------------------------------------------

function buildOrUpdateXlateFile({
  inputPath,
  outputPath,
  sourceLocale,
  targetLocale,
  debug = false,
}) {
  const sourceFile = path.basename(inputPath);
  const sourceText = readText(inputPath);
  const extractedEntries = extractTaggedEntries(sourceText, { debug });

  const existing = fileExists(outputPath)
    ? normalizeExistingXlate(
        readJson(outputPath),
        sourceLocale,
        targetLocale,
        sourceFile
      )
    : {
        sourceLocale,
        targetLocale,
        sourceFile,
        entries: {},
      };

  const merged = mergeEntries({
    extractedEntries,
    existingXlate: existing,
    sourceLocale,
    targetLocale,
    sourceFile,
  });

  writeJson(outputPath, merged);

  return merged;
}

function summarizeXlate(xlate) {
  const entries = Object.values(xlate.entries || {});
  return {
    total: entries.length,
    needsReview: entries.filter((x) => x._needsReview === true).length,
    stale: entries.filter((x) => x._stale === true).length,
  };
}

function validateLocaleTag(localeTag, label) {
  const validTags = SUPPORTED_LOCALES.map((x) => x.tag);
  assert(validTags.includes(localeTag), `Unsupported ${label} locale: ${localeTag}`);
  return getLocaleConfig(localeTag);
}

function runSingle({
  inputDir,
  outputDir,
  sourceLocale,
  targetLocale,
  debug,
}) {
  const filename = getArg("--file");
  assert(filename, "Missing --file");

  const inputPath = path.join(inputDir, filename);
  const outputPath = path.join(outputDir, buildOutputFilename(filename));

  assert(fileExists(inputPath), `Input file not found: ${inputPath}`);

  const result = buildOrUpdateXlateFile({
    inputPath,
    outputPath,
    sourceLocale,
    targetLocale,
    debug,
  });

  const summary = summarizeXlate(result);

  console.log(
    `✅ ${filename} -> ${path.basename(outputPath)} (${summary.total} entries, ${summary.needsReview} needsReview, ${summary.stale} stale)`
  );
}

function runBatch({
  inputDir,
  outputDir,
  sourceLocale,
  targetLocale,
  debug,
}) {
  const extensions = parseExtensions();
  const files = listSourceFilesFlat(inputDir, extensions);

  fs.mkdirSync(outputDir, { recursive: true });

  console.log(`[Site Xlate] input:  ${inputDir}`);
  console.log(`[Site Xlate] output: ${outputDir}`);
  console.log("");

  for (const filename of files) {
    const inputPath = path.join(inputDir, filename);
    const outputPath = path.join(outputDir, buildOutputFilename(filename));

    const result = buildOrUpdateXlateFile({
      inputPath,
      outputPath,
      sourceLocale,
      targetLocale,
      debug,
    });

    const summary = summarizeXlate(result);

    console.log(
      `✅ ${filename} -> ${path.basename(outputPath)} (${summary.total} entries, ${summary.needsReview} needsReview, ${summary.stale} stale)`
    );
  }
}

// --------------------------------------------------
// Entrypoint
// --------------------------------------------------

function main() {
  if (hasFlag("--help")) {
    printUsage();
    process.exit(0);
  }

  const rootDir = process.cwd();
  const sourceLocale = getArg("--source-lang", DEFAULT_LOCALE);
  const targetLocale = getArg("--target-lang", "");

  assert(targetLocale, "Missing --target-lang");

  validateLocaleTag(sourceLocale, "source");
  validateLocaleTag(targetLocale, "target");

  const inputDir = getArg("--in-dir", buildDefaultInputDir(rootDir));
  const outputDir = getArg("--out-dir", buildDefaultOutputDir(targetLocale, rootDir));
  const debug = hasFlag("--debug");

  if (hasFlag("--log-paths")) {
    const paths = buildProjectPaths(targetLocale, rootDir);
    logProjectPaths(paths);
    console.log(`[Site Xlate] inputDir:  ${inputDir}`);
    console.log(`[Site Xlate] outputDir: ${outputDir}`);
    console.log("");
  }

  if (hasFlag("--batch")) {
    runBatch({
      inputDir,
      outputDir,
      sourceLocale,
      targetLocale,
      debug,
    });
    return;
  }

  runSingle({
    inputDir,
    outputDir,
    sourceLocale,
    targetLocale,
    debug,
  });
}

main();