const fs = require("fs");
const path = require("path");

// -----------------------------------------------------------------------------
// PATHS
// -----------------------------------------------------------------------------

const PROJECT_ROOT = path.resolve(__dirname, "..");
const DATA_ROOT_DIR = path.join(PROJECT_ROOT, "data");
const PAGE_CONTENT_DIR = path.join(DATA_ROOT_DIR, "page-content");
const OUTPUT_DIR = path.join(PROJECT_ROOT, "src", "pages", "browse");
const COMPONENT_IMPORT_PATH = "../../components/ShowAnswerContent";

const EXCLUSIONS_PATH = path.join(
  PROJECT_ROOT,
  "helpers",
  "browse-exclusions.json"
);

// -----------------------------------------------------------------------------
// SOURCE PAGE ORDER
// Keep in sync with merge-surveys.js
// -----------------------------------------------------------------------------

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

// -----------------------------------------------------------------------------
// UTILITIES
// -----------------------------------------------------------------------------

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function escapeJsxText(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\{/g, "&#123;")
    .replace(/\}/g, "&#125;");
}

function escapeTemplateLiteral(value = "") {
  return String(value)
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/\$\{/g, "\\${");
}

function stripOuterTag(html, tagName) {
  const re = new RegExp(`^\\s*<${tagName}[^>]*>([\\s\\S]*?)<\\/${tagName}>\\s*$`, "i");
  const match = String(html).match(re);
  return match ? match[1].trim() : String(html).trim();
}

function normalizeChoiceText(choice) {
  if (typeof choice === "string") return choice;
  if (choice && typeof choice === "object") {
    return choice.text || choice.title || choice.value || "";
  }
  return "";
}

function loadExclusions() {
  if (!fs.existsSync(EXCLUSIONS_PATH)) {
    return {
      pages: [],
      panels: [],
      elements: [],
    };
  }

  const raw = readJson(EXCLUSIONS_PATH);

  return {
    pages: Array.isArray(raw.pages) ? raw.pages : [],
    panels: Array.isArray(raw.panels) ? raw.panels : [],
    elements: Array.isArray(raw.elements) ? raw.elements : [],
  };
}

function isExcludedPage(pageObj, exclusions, filename) {
  const pageName = pageObj?.name || "";
  return exclusions.pages.includes(pageName) || exclusions.pages.includes(filename);
}

function isExcludedElement(el, exclusions) {
  if (!el || typeof el !== "object") return false;
  if (el.name && exclusions.elements.includes(el.name)) return true;
  if (el.type === "panel" && el.name && exclusions.panels.includes(el.name)) return true;
  return false;
}

function parsePageFileInfo(filename) {
  const match = filename.match(/^(\d{2})_(.+)-page\.json$/);

  if (!match) {
    throw new Error(`Invalid source page filename format: ${filename}`);
  }

  const num = match[1];
  const rawPageName = match[2];

  const normalizedPageName = rawPageName
    .toLowerCase()
    .split("_")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");

  return {
    num,
    rawPageName,
    componentName: `Browse_${num}_${normalizedPageName}`,
    outputFilename: `Browse_${num}_${normalizedPageName}.jsx`,
  };
}

// -----------------------------------------------------------------------------
// HTML BLOCK RENDERING
// -----------------------------------------------------------------------------

function renderHtmlElement(el) {
  const html = String(el.html || "").trim();

  if (!html) return "";

  if (/^\s*<h2\b/i.test(html)) {
    const inner = stripOuterTag(html, "h2");
    return `      <h2 className="browse-content-heading">${escapeJsxText(inner)}</h2>`;
  }

  if (/^\s*<h3\b/i.test(html)) {
    const inner = stripOuterTag(html, "h3");
    return `      <h3 className="browse-content-subheading">${escapeJsxText(inner)}</h3>`;
  }

  if (/^\s*<p\b/i.test(html)) {
    const inner = stripOuterTag(html, "p");
    return `      <p className="browse-content-text">${escapeJsxText(inner)}</p>`;
  }

  if (/^\s*<div\b/i.test(html)) {
    return `      <div dangerouslySetInnerHTML={{ __html: \`${escapeTemplateLiteral(html)}\` }} />`;
  }

  return `      <div dangerouslySetInnerHTML={{ __html: \`${escapeTemplateLiteral(html)}\` }} />`;
}

// -----------------------------------------------------------------------------
// QUESTION BODY RENDERING
// -----------------------------------------------------------------------------

function renderListItems(items, itemClass, iconClass) {
  const lis = items
    .filter(Boolean)
    .map(
      (item) => `            <li className="${itemClass}">
              <span className="browse-showanswer-icon ${iconClass}" aria-hidden="true"></span>
              <span>${escapeJsxText(item)}</span>
            </li>`
    )
    .join("\n");

  return `          <ul>
${lis}
          </ul>`;
}

function renderQuestionInner(el, sourceFilename) {
  switch (el.type) {
    case "radiogroup":
      return renderListItems(
        (el.choices || []).map(normalizeChoiceText),
        "browse-showanswer-radio",
        "browse-showanswer-icon--radio"
      );

    case "checkbox":
      return renderListItems(
        (el.choices || []).map(normalizeChoiceText),
        "browse-showanswer-checkbox",
        "browse-showanswer-icon--checkbox"
      );

    case "dropdown":
      return renderListItems(
        (el.choices || []).map(normalizeChoiceText),
        "browse-showanswer-dropdown",
        "browse-showanswer-icon--dropdown"
      );

    case "boolean": {
      const labelTrue = el.labelTrue;
      const labelFalse = el.labelFalse;

      if (!labelTrue || !labelFalse) {
        throw new Error(
          `Boolean element "${el.name || "(unnamed)"}" in ${sourceFilename} is missing labelTrue or labelFalse`
        );
      }

      return renderListItems(
        [labelTrue, labelFalse],
        "browse-showanswer-boolean",
        "browse-showanswer-icon--boolean"
      );
    }

    case "text":
      return `          <div className="browse-showanswer-input" aria-hidden="true"></div>`;

    case "comment":
      return `          <div className="browse-showanswer-textarea" aria-hidden="true"></div>`;

    default:
      return `          <div className="browse-showanswer-generic" aria-hidden="true"></div>`;
  }
}

function renderQuestionBlock(el, index, sourceFilename) {
  const title = el.title || el.name || "Untitled";

  return `      <div className="browse-question-container">
        <ShowAnswerContent
          title="${escapeTemplateLiteral(title)}"
          index={${index}}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
${renderQuestionInner(el, sourceFilename)}
          </div>
        </ShowAnswerContent>
      </div>`;
}

// -----------------------------------------------------------------------------
// TREE WALK
// -----------------------------------------------------------------------------

function collectRenderableNodes(elements, exclusions, sourceFilename, bucket = []) {
  if (!Array.isArray(elements)) return bucket;

  for (const el of elements) {
    if (!el || typeof el !== "object") continue;
    if (isExcludedElement(el, exclusions)) continue;

    if (el.type === "html") {
      bucket.push({
        kind: "html",
        element: el,
      });
      continue;
    }

    if (el.type === "panel") {
      const panelName = String(el.name || "");
      const hasTitle = Boolean(String(el.title || "").trim());
      const hasCardIdentifier = /Card/i.test(panelName);

      if (hasTitle && hasCardIdentifier) {
        continue;
      }

      // ---------------------------------------------------------------------
      // PANEL CONTAINER HANDLING
      // For now:
      // - titled panels with "Card" in the identifier are skipped entirely
      // - all other panels are transformed to empty browse containers
      // - panel children are still traversed and rendered after the container
      //
      // Remove or change this block later if panels prove unnecessary.
      // ---------------------------------------------------------------------
      bucket.push({
        kind: "panelContainer",
        title: hasTitle ? String(el.title).trim() : "",
      });

      collectRenderableNodes(el.elements || [], exclusions, sourceFilename, bucket);
      continue;
    }

    if (el.type === "paneldynamic") {
      collectRenderableNodes(el.elements || [], exclusions, sourceFilename, bucket);
      continue;
    }

    bucket.push({
      kind: "question",
      element: el,
      sourceFilename,
    });
  }

  return bucket;
}

// -----------------------------------------------------------------------------
// PAGE BUILD
// -----------------------------------------------------------------------------

function renderPanelContainerBlock(title) {
  if (!title) {
    return `      <div className="browse-panel-container"></div>`;
  }

  return `      <div className="browse-panel-container">
        <h3 className="browse-showanswer-title">${escapeJsxText(title)}</h3>
      </div>`;
}

function buildPageComponent(pageObj, fileInfo, exclusions, sourceFilename) {
  const nodes = collectRenderableNodes(
    pageObj.elements || [],
    exclusions,
    sourceFilename
  );

  let accordionIndex = 1;

  const body = nodes
    .map((node) => {
      if (node.kind === "html") {
        return renderHtmlElement(node.element);
      }

      if (node.kind === "panelContainer") {
        return renderPanelContainerBlock(node.title);
      }

      if (node.kind === "question") {
        return renderQuestionBlock(node.element, accordionIndex++, sourceFilename);
      }

      return "";
    })
    .filter(Boolean)
    .join("\n\n");

  return `import React, { useState } from "react";
import ShowAnswerContent from "${COMPONENT_IMPORT_PATH}";

const ${fileInfo.componentName} = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="browse-page">
${body}
    </div>
  );
};

export default ${fileInfo.componentName};
`;
}

// -----------------------------------------------------------------------------
// MAIN
// -----------------------------------------------------------------------------

function main() {
  ensureDir(OUTPUT_DIR);

  const exclusions = loadExclusions();

  for (const filename of pageFiles) {
    const inputPath = path.join(PAGE_CONTENT_DIR, filename);

    if (!fs.existsSync(inputPath)) {
      throw new Error(`Missing page file: data/page-content/${filename}`);
    }

    const pageObj = readJson(inputPath);

    if (isExcludedPage(pageObj, exclusions, filename)) {
      console.log(`↷ Skipped excluded page: ${filename}`);
      continue;
    }

    const fileInfo = parsePageFileInfo(filename);
    const jsx = buildPageComponent(pageObj, fileInfo, exclusions, filename);
    const outputPath = path.join(OUTPUT_DIR, fileInfo.outputFilename);

    fs.writeFileSync(outputPath, jsx, "utf8");
    console.log(`✅ Generated src/pages/browse/${fileInfo.outputFilename}`);
  }

  console.log("✅ Browse JSX generation complete");
}

try {
  main();
} catch (err) {
  console.error("❌ generate-browse.js failed:");
  console.error(err.message || err);
  process.exit(1);
}