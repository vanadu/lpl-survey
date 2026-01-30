#!/usr/bin/env node

/**
 * Script: extractSurveyFields.js
 * Purpose:
 *   Extract all schema-relevant field names from master-survey.json
 *   while preserving order of appearance.
 *
 * Rules:
 *   - Exclude presentation-only types: html, expression, page, image
 *   - Include panels ONLY if they have visibleIf
 *   - Include ALL calculatedValues
 *   - Exclude any field whose name ends with "-page"
 */

import fs from "fs";
import path from "path";

// ---------------------------
// Paths
// ---------------------------
const surveyPath = path.join(process.cwd(), "data", "master-survey.json");
const outputPath = path.join(process.cwd(), "helpers", "allSurveyFields.json");

// ---------------------------
// Presentation-only types
// ---------------------------
const nonDataTypes = ["html", "expression", "page", "image"];

/**
 * Add name once, preserving order, excluding page identifiers
 */
function addName(name, orderedList, seen) {
  if (name.endsWith("-page")) return;

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

  // Calculated values (always include)
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

    const orderedFields = [];
    const seen = new Set();

    collectQuestionNames(
      surveyJSON.pages || surveyJSON,
      orderedFields,
      seen
    );

    fs.writeFileSync(
      outputPath,
      JSON.stringify(orderedFields, null, 2),
      "utf-8"
    );

    console.log(
      `✅ Extracted ${orderedFields.length} fields (order preserved, pages excluded)`
    );
  } catch (err) {
    console.error("❌ Extraction failed:", err);
  }
}

main();
