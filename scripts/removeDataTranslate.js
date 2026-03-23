#!/usr/bin/env node

/**
 * removeDataTranslate.js
 *
 * Removes only:
 *   data-translate="..."
 *   data-translate='...'
 *   data-translate
 *
 * from a single file.
 *
 * Usage:
 *   node scripts/removeDataTranslate.js pages/survey-faqs.js
 *   node scripts/removeDataTranslate.js src/pages/foo.jsx --dry-run
 */

const fs = require("fs");
const path = require("path");

function printUsage() {
  console.log(`
Usage:
  node scripts/removeDataTranslate.js <path-from-project-root> [--dry-run]

Examples:
  node scripts/removeDataTranslate.js pages/survey-faqs.js
  node scripts/removeDataTranslate.js src/pages/survey-faqs.jsx --dry-run
`);
}

function hasFlag(flag) {
  return process.argv.includes(flag);
}

function getTargetPath() {
  const args = process.argv.slice(2).filter((arg) => !arg.startsWith("--"));
  return args[0] || "";
}

function stripDataTranslate(text) {
  return text
    // Remove data-translate="..."
    .replace(/\s+\bdata-translate\s*=\s*"[^"]*"/g, "")
    // Remove data-translate='...'
    .replace(/\s+\bdata-translate\s*=\s*'[^']*'/g, "")
    // Remove bare data-translate
    .replace(/\s+\bdata-translate\b/g, "");
}

function main() {
  const targetPathArg = getTargetPath();

  if (!targetPathArg || hasFlag("--help")) {
    printUsage();
    process.exit(targetPathArg ? 0 : 1);
  }

  const absolutePath = path.resolve(process.cwd(), targetPathArg);

  if (!fs.existsSync(absolutePath)) {
    console.error(`File not found: ${targetPathArg}`);
    process.exit(1);
  }

  const stat = fs.statSync(absolutePath);
  if (!stat.isFile()) {
    console.error(`Not a file: ${targetPathArg}`);
    process.exit(1);
  }

  const original = fs.readFileSync(absolutePath, "utf8");
  const updated = stripDataTranslate(original);

  if (original === updated) {
    console.log(`No data-translate attributes found: ${targetPathArg}`);
    return;
  }

  if (hasFlag("--dry-run")) {
    console.log(`Would update: ${targetPathArg}`);
    return;
  }

  fs.writeFileSync(absolutePath, updated, "utf8");
  console.log(`Updated: ${targetPathArg}`);
}

main();