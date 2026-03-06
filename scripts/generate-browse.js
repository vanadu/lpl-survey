import fs from "fs";
import path from "path";

const surveyPath = "./data/master-survey/master-survey.json";
const outputPath = "./src/pages/browse/browse.registry.json";

const survey = JSON.parse(fs.readFileSync(surveyPath, "utf8"));

function normalizeChoices(arr) {
  if (!arr) return [];
  return arr.map(c => {
    if (typeof c === "string") return c;
    return c.text || c.value || "";
  });
}

function normalizeRatings(arr) {
  if (!arr) return [];
  return arr.map(r => {
    if (typeof r === "number") return String(r);
    return r.text || r.value || "";
  });
}

function renderElement(el) {

  const base = {
    name: el.name || "",
    type: el.type,
    title: el.title || "",
    description: el.description || ""
  };

  switch (el.type) {

    case "radiogroup":
    case "dropdown":
      return {
        ...base,
        icon: "radio",
        items: normalizeChoices(el.choices)
      };

    case "checkbox":
      return {
        ...base,
        icon: "checkbox",
        items: normalizeChoices(el.choices)
      };

    case "rating":
      return {
        ...base,
        icon: "star",
        items: normalizeRatings(el.rateValues)
      };

    case "boolean":
      return {
        ...base,
        icon: "radio",
        items: ["Yes", "No"]
      };

    case "text":
    case "comment":
    case "multipletext":
      return {
        ...base,
        icon: "text",
        items: []
      };

    default:
      return {
        ...base,
        icon: "generic",
        items: []
      };
  }
}

function walkElements(elements, bucket) {
  if (!elements) return;

  elements.forEach(el => {

    if (el.type === "panel" || el.type === "paneldynamic") {
      walkElements(el.elements, bucket);
      return;
    }

    bucket.push(renderElement(el));
  });
}

const pages = survey.pages.map(page => {

  const questions = [];
  walkElements(page.elements, questions);

  return {
    name: page.name,
    title: page.title || "",
    questions
  };
});

fs.writeFileSync(outputPath, JSON.stringify(pages, null, 2));

console.log("Browse registry generated");