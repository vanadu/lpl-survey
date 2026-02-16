#!/usr/bin/env node

/**
 * Script: buildSurveySchema.js
 * Purpose:
 *   Build the canonical survey schema from master-survey.json.
 *   The schema includes ONLY data-collecting elements and is
 *   intended to be the single source of truth for downstream logic.
 *
 * Rules:
 *   - Exclude presentation-only types: html, expression, page, image
 *   - Include panels ONLY if they have visibleIf
 *   - Include ALL calculatedValues
 *   - Exclude any field whose name ends with "-page"
 *   - Strip schema exclusions defined in helpers/schemaExclusions.json
 *
 * Output:
 *   helpers/surveySchema.json
 */

import fs from "fs";
import path from "path";

// ---------------------------
// Paths
// ---------------------------
const surveyPath = path.join(process.cwd(), "data", "master-survey", "master-survey.json");
const outputPath = path.join(process.cwd(), "helpers", "surveySchema.json");
const exclusionsPath = path.join(
  process.cwd(),
  "helpers",
  "schemaExclusions.json"
);

// ---------------------------
// Presentation-only types
// ---------------------------
const nonDataTypes = ["html", "expression", "page", "image"];

// ---------------------------
// Load schema exclusions
// ---------------------------
let excludedFields = new Set();

if (fs.existsSync(exclusionsPath)) {
  const exclusions = JSON.parse(fs.readFileSync(exclusionsPath, "utf-8"));

  excludedFields = new Set([
    ...(exclusions.calculatedValues || []),
    ...(exclusions.panels || [])
  ]);
}

/**
 * Add name once, preserving order, excluding:
 *   - page identifiers (-page)
 *   - schema exclusions
 */
function addName(name, orderedList, seen) {
  if (name.endsWith("-page")) return;
  if (excludedFields.has(name)) return;

  if (!seen.has(name)) {
    seen.add(name);
    orderedList.push(name);
  }
}

/**
 * Recursive traversal
 */
function collectQuestionNames(items, orderedList, seen) {
  if (!items) return;

  if (Array.isArray(items)) {
    for (const item of items) {
      collectQuestionNames(item, orderedList, seen);
    }
    return;
  }

  if (typeof items !== "object") return;

  const {
    type,
    name,
    visibleIf,
    readOnly,
    elements,
    pages,
    calculatedValues
  } = items;

  // Panels with visibleIf are schema-relevant
  if (type === "panel" && name && visibleIf) {
    addName(name, orderedList, seen);
  }

  // Regular questions
  if (
    name &&
    type !== "panel" &&
    !nonDataTypes.includes(type) &&
    !readOnly
  ) {
    addName(name, orderedList, seen);
  }

  // Calculated values (included unless explicitly excluded)
  if (Array.isArray(calculatedValues)) {
    for (const calc of calculatedValues) {
      if (calc?.name) {
        addName(calc.name, orderedList, seen);
      }
    }
  }

  // Recurse
  if (elements) collectQuestionNames(elements, orderedList, seen);
  if (pages) collectQuestionNames(pages, orderedList, seen);
}

// ---------------------------
// Main
// ---------------------------
function main() {
  try {
    const surveyJSON = JSON.parse(
      fs.readFileSync(surveyPath, "utf-8")
    );

    const orderedSchema = [];
    const seen = new Set();

    collectQuestionNames(
      surveyJSON.pages || surveyJSON,
      orderedSchema,
      seen
    );

    fs.writeFileSync(
      outputPath,
      JSON.stringify(orderedSchema, null, 2),
      "utf-8"
    );

    console.log(
      `✅ Survey schema built: ${orderedSchema.length} fields written to helpers/surveySchema.json`
    );
  } catch (err) {
    console.error("❌ Schema build failed:", err);
  }
}

main();
