#!/usr/bin/env node
/**
 * Build FormatMapping.json from surveySchema.json
 *
 * Input:
 *   /helpers/surveySchema.json   (array of strings)
 *
 * Output:
 *   /helpers/FormatMapping.json  (object map)
 *
 * Usage:
 *   node scripts/build-format-mapping.js
 */

const fs = require("fs");
const path = require("path");

const INPUT_PATH = path.join(process.cwd(), "helpers", "surveySchema.json");
const OUTPUT_PATH = path.join(process.cwd(), "helpers", "FormatMapping.json");

function die(msg) {
  console.error(`\nERROR: ${msg}\n`);
  process.exit(1);
}

function isNonEmptyString(x) {
  return typeof x === "string" && x.trim().length > 0;
}

function main() {
  if (!fs.existsSync(INPUT_PATH)) {
    die(`Input file not found: ${INPUT_PATH}`);
  }

  let raw;
  try {
    raw = fs.readFileSync(INPUT_PATH, "utf8");
  } catch (e) {
    die(`Unable to read input file: ${e.message}`);
  }

  let arr;
  try {
    arr = JSON.parse(raw);
  } catch (e) {
    die(`Input is not valid JSON: ${e.message}`);
  }

  if (!Array.isArray(arr)) {
    die("surveySchema.json must be an array (start with '[').");
  }

  // Clean + validate
  const cleaned = arr
    .filter(isNonEmptyString)
    .map((s) => s.trim());

  // Deduplicate while preserving order
  const seen = new Set();
  const deduped = [];
  for (const name of cleaned) {
    if (seen.has(name)) continue;
    seen.add(name);
    deduped.push(name);
  }

  if (!deduped.length) {
    die("No valid element names found in surveySchema.json.");
  }

  // Build map
  const map = {};
  for (const name of deduped) {
    map[name] = "";
  }

  // Write output
  try {
    fs.writeFileSync(
      OUTPUT_PATH,
      JSON.stringify(map, null, 2) + "\n",
      "utf8"
    );
  } catch (e) {
    die(`Unable to write output file: ${e.message}`);
  }

  console.log(
    `OK: Generated FormatMapping.json with ${deduped.length} keys\n` +
    `→ ${OUTPUT_PATH}`
  );
}

main();
