const fs = require("fs");
const path = require("path");

// -----------------------------------------------------------------------------
// PATHS
// -----------------------------------------------------------------------------

const PROJECT_ROOT = path.resolve(__dirname, "..");
const DATA_ROOT_DIR = path.join(PROJECT_ROOT, "data");
const PAGE_CONTENT_DIR = path.join(DATA_ROOT_DIR, "page-content");
const OUTPUT_DIR = path.join(PROJECT_ROOT, "src", "pages", "browse-mode");
const COMPONENT_IMPORT_PATH = "../../components/ShowAnswerContent";
const BROWSEMENU_IMPORT_PATH = "../../components/BrowseMenu";

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
  value = replaceTokens(value);

  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/'/g, "&lsquo;")
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
  let text = String(html || "").trim();

  const openTag = new RegExp(`^\\s*<${tagName}\\b[^>]*>`, "i");
  const closeTag = new RegExp(`\\s*</${tagName}>\\s*$`, "i");
  const malformedCloseTag = new RegExp(`\\s*<${tagName}>\\s*$`, "i");

  text = text.replace(openTag, "");
  text = text.replace(closeTag, "");
  text = text.replace(malformedCloseTag, "");
  // Replace the HTML entity with the actual non-breaking space character.
  text = text.replace(/&nbsp;/gi, "\u00A0");

  return text.trim();
}

function stripAllTags(html) {
  return String(html || "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeChoiceText(choice) {
  if (typeof choice === "string") return choice;
  if (choice && typeof choice === "object") {
    return choice.text || choice.title || choice.value || "";
  }
  return "";
}

// -----------------------------------------------------------------------------
// TOKEN REPLACEMENTS
// -----------------------------------------------------------------------------

const tokenMap = {
  "{CmpnName}": "Bella",
  "{cvObserveFirstPersonPast}": "have you observed",
  "{cvDoThirdPersonSingular}": "does",
  "{cvDoFirstPersonSingularInitialCap}": "Do",
  "{cvGenderSubjectPronoun}": "she",
  "{cvGenderObjectPronoun}": "her",
  "{cvStateAdjective}": "current",
  "{cvEndOfLife}": "in her current state of health",
  "{cvThatThis}": "this",
};

function replaceTokens(text) {
  return String(text).replace(/\{[^}]+\}/g, (m) => tokenMap[m] ?? m);
}

// -----------------------------------------------------------------------------
// EXCLUSIONS / PAGE METADATA
// -----------------------------------------------------------------------------

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
    routePath: `/browse-mode/Browse_${num}_${normalizedPageName}`,
  };
}

function buildPageEntries(exclusions) {
  return pageFiles.map((filename) => {
    const inputPath = path.join(PAGE_CONTENT_DIR, filename);

    if (!fs.existsSync(inputPath)) {
      throw new Error(`Missing page file: data/page-content/${filename}`);
    }

    const pageObj = readJson(inputPath);
    const fileInfo = parsePageFileInfo(filename);
    const excluded = isExcludedPage(pageObj, exclusions, filename);

    return {
      filename,
      inputPath,
      pageObj,
      fileInfo,
      excluded,
    };
  });
}

// -----------------------------------------------------------------------------
// HTML BLOCK RENDERING
// -----------------------------------------------------------------------------


function renderInfoLinkHtml(el) {
  const html = String(el.html || "").trim();
  if (!html) return "";

  const id = el.name ? ` id="${escapeTemplateLiteral(el.name)}"` : "";

  const hasInfoWrapper =
    /class\s*=\s*["'][^"']*survey-general-info[^"']*["']/i.test(html) &&
    /<a\b/i.test(html);

  if (!hasInfoWrapper) return "";

  const hrefMatch = html.match(/<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/i);
  if (!hrefMatch) return "";

  const href = hrefMatch[1].trim();
  const linkText = stripAllTags(hrefMatch[2]).trim();

  if (!href || !linkText) return "";

  const isExternalLike =
    /^(https?:)?\/\//i.test(href) ||
    /^mailto:/i.test(href) ||
    /^tel:/i.test(href);

if (isExternalLike) {
  return `      <div className="browse-content-block browse-content-block--info"${id}>
        <div className="survey-general-info">
          <img
            src="/img-info-icon.png"
            className="survey-info-icon"
            alt="Example image"
          />
          {" "}
          <a
            href="${escapeTemplateLiteral(href)}"
            className="survey-info-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            ${escapeJsxText(linkText)}
          </a>
        </div>
      </div>`;
}

return `      <div className="browse-content-block browse-content-block--info"${id}>
        <div className="survey-general-info">
          <img
            src="/img-info-icon.png"
            className="survey-info-icon"
            alt="Example image"
          />
          {" "}
          <Link
            href="${escapeTemplateLiteral(href)}"
            className="survey-info-link"
          >
            ${escapeJsxText(linkText)}
          </Link>
        </div>
      </div>`;
}




function renderHtmlElement(el) {
  const html = String(el.html || "").trim();
  if (!html) return "";

  const infoLinkBlock = renderInfoLinkHtml(el);
  if (infoLinkBlock) return infoLinkBlock;

  const id = el.name ? ` id="${escapeTemplateLiteral(el.name)}"` : "";

  if (/^\s*<h2\b/i.test(html)) {
    const inner = stripAllTags(stripOuterTag(html, "h2"));
    return `      <div className="browse-content-block"${id}>
        <h2 className="browse-content-heading">${escapeJsxText(inner)}</h2>
      </div>`;
  }

  if (/^\s*<h3\b/i.test(html)) {
    const inner = stripAllTags(stripOuterTag(html, "h3"));
    return `      <div className="browse-content-block"${id}>
        <h3 className="browse-content-subheading">${escapeJsxText(inner)}</h3>
      </div>`;
  }

  if (/^\s*<p\b/i.test(html)) {
    const paragraphs = html
      .split(/<\/p>\s*/i)
      .map((part) => part.trim())
      .filter(Boolean)
      .map((part) => {
        const normalized = /^\s*<p\b/i.test(part) ? part : `<p>${part}</p>`;
        const inner = stripAllTags(stripOuterTag(normalized, "p"));
        return inner.trim()
          ? `        <p className="browse-content-text">${escapeJsxText(inner)}</p>`
          : "";
      })
      .filter(Boolean)
      .join("\n");

    if (paragraphs) {
      return `      <div className="browse-content-block"${id}>
${paragraphs}
      </div>`;
    }
  }

  const plainText = stripAllTags(html).trim();
  if (!plainText) return "";

  return `      <div className="browse-content-block"${id}>
        <p className="browse-content-text">${escapeJsxText(plainText)}</p>
      </div>`;
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
        "browse-showanswer-icon--radio"
      );

    case "rating":
      return `          <div className="browse-showanswer-rating" aria-hidden="true">
                ${[1, 2, 3, 4, 5]
                  .map(
                    (n) => `
                  <span className="browse-showanswer-rating-item">
                    <svg
                      className="browse-showanswer-rating-svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      <text
                        x="8"
                        y="8"
                        textAnchor="middle"
                        dominantBaseline="central"
                        fontFamily="Arial, Helvetica, sans-serif"
                        fontSize="8"
                        fill="currentColor"
                      >
                        ${n}
                      </text>
                    </svg>
                  </span>`
                  )
                  .join("")}
              </div>`;

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



function renderQuestionDescription(el) {
  const description = stripAllTags(replaceTokens(el.description || "")).trim();

  if (!description) return "";

  return `          <p className="browse-question-description">${escapeJsxText(description)}</p>`;
}

function renderQuestionBlock(el, index, sourceFilename) {
  const title = replaceTokens(el.title || el.name || "Untitled");
  const id = el.name ? ` id="${escapeTemplateLiteral(el.name)}"` : "";

  return `      <div className="browse-question-container"${id}>
        <ShowAnswerContent
          title="${escapeTemplateLiteral(title)}"
          index={${index}}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
${renderQuestionDescription(el)}
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

      bucket.push({
        kind: "panelContainer",
        name: panelName,
        title: hasTitle ? String(el.title).trim() : "",
        children: collectRenderableNodes(
          el.elements || [],
          exclusions,
          sourceFilename,
          []
        ),
      });

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

function renderPanelContainerBlock(node, getNextAccordionIndex) {
  const id = node.name ? ` id="${escapeTemplateLiteral(node.name)}"` : "";

  const children = (node.children || [])
    .map((child) => {
      if (child.kind === "html") {
        return renderHtmlElement(child.element);
      }

      if (child.kind === "panelContainer") {
        return renderPanelContainerBlock(child, getNextAccordionIndex);
      }

      if (child.kind === "question") {
        return renderQuestionBlock(
          child.element,
          getNextAccordionIndex(),
          child.sourceFilename
        );
      }

      return "";
    })
    .filter(Boolean)
    .join("\n\n");

  if (!node.title) {
    return `      <div className="browse-panel-container"${id}>
${children}
      </div>`;
  }

  return `      <div className="browse-panel-container"${id}>
        <h3 className="browse-showanswer-title">${escapeJsxText(node.title)}</h3>
${children}
      </div>`;
}

const CHEVRON_PATHS = {
  prev: "M208,48V208a8,8,0,0,1-13.66,5.66L128,147.31V208a8,8,0,0,1-13.66,5.66l-80-80a8,8,0,0,1,0-11.32l80-80A8,8,0,0,1,128,48v60.69l66.34-66.35A8,8,0,0,1,208,48Z",
  next: "M221.66,133.66l-80,80A8,8,0,0,1,128,208V147.31L61.66,213.66A8,8,0,0,1,48,208V48a8,8,0,0,1,13.66-5.66L128,108.69V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,221.66,133.66Z",
};

function renderChevron(direction, srText) {
  const path = CHEVRON_PATHS[direction];
  const svg = `<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="${path}"></path></svg>`;

  return direction === "prev"
    ? `${svg}<span className="sr-only">${srText}</span>`
    : `<span className="sr-only">${srText}</span>${svg}`;
}

function renderNavControl(direction, targetEntry) {
  const baseClass =
    direction === "prev" ? "browse-page-nav__prev" : "browse-page-nav__next";

  const srText = direction === "prev" ? "Previous" : "Next";
  const label = direction === "prev" ? "Previous page" : "Next page";
  const icon = renderChevron(direction, srText);

  if (!targetEntry) {
    return `        <span className="${baseClass} is-disabled" aria-hidden="true">
          <span>${icon}
          </span>
        </span>`;
  }

  return `        <Link className="${baseClass}" href="${targetEntry.fileInfo.routePath}" aria-label="${label}">
          <span aria-hidden="true">${icon}
          </span>
        </Link>`;
}





function renderPageNav(pageObj, navContext) {
  const markerId = pageObj?.name
    ? ` id="${escapeTemplateLiteral(pageObj.name)}"`
    : "";

  const prevControl = renderNavControl("prev", navContext.prevEntry);
  const nextControl = renderNavControl("next", navContext.nextEntry);

  return `      <div className="browse-page-nav" aria-label="Browse page navigation">
${prevControl}
        <div className="browse-page-marker"${markerId}></div>
${nextControl}
      </div>`;
}

function buildPageComponent(pageObj, fileInfo, exclusions, sourceFilename, navContext) {
  const nodes = collectRenderableNodes(
    pageObj.elements || [],
    exclusions,
    sourceFilename
  );

  let accordionIndex = 1;
  const getNextAccordionIndex = () => accordionIndex++;

  const pageNav = renderPageNav(pageObj, navContext);

  const body = nodes
    .map((node) => {
      if (node.kind === "html") {
        return renderHtmlElement(node.element);
      }

      if (node.kind === "panelContainer") {
        return renderPanelContainerBlock(node, getNextAccordionIndex);
      }

      if (node.kind === "question") {
        return renderQuestionBlock(
          node.element,
          getNextAccordionIndex(),
          sourceFilename
        );
      }

      return "";
    })
    .filter(Boolean)
    .join("\n\n");

  return `import React, { useState } from "react";
import ShowAnswerContent from "${COMPONENT_IMPORT_PATH}";
import BrowseMenu from "${BROWSEMENU_IMPORT_PATH}";
import Link from "next/link";
import Image from "next/image";
import Logo from "public/img-lpl-org-logo.png";

const ${fileInfo.componentName} = () => {
  const [activeIndex, setActiveIndex] = useState(0);


  return (
    <>
      <BrowseMenu />
      <main className="page browse">
        <header className="browse-header-container">
          <div className="browse-header-title-container">
            <h2 className="browse-header-title">LP-GOLPP Survey 2026</h2>
            <p className="browse-header-slug">powered by larparlife.org</p>
            <p className="browse-header-mode">Browse Mode</p>
          </div>
          <div className="browse-logo-container">
            <Image src={Logo} className="browse-header-logo" alt="LarParLife.org" />
          </div>
        </header>
        <div className="browse-page">
${pageNav}

${body}
        </div>
      </main>
    </>
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
  const pageEntries = buildPageEntries(exclusions);
  const includedEntries = pageEntries.filter((entry) => !entry.excluded);

  for (const excludedEntry of pageEntries.filter((entry) => entry.excluded)) {
    console.log(`↷ Skipped excluded page: ${excludedEntry.filename}`);
  }

  includedEntries.forEach((entry, index) => {
    const navContext = {
      prevEntry: index > 0 ? includedEntries[index - 1] : null,
      nextEntry: index < includedEntries.length - 1 ? includedEntries[index + 1] : null,
    };

    const jsx = buildPageComponent(
      entry.pageObj,
      entry.fileInfo,
      exclusions,
      entry.filename,
      navContext
    );

    const outputPath = path.join(OUTPUT_DIR, entry.fileInfo.outputFilename);

    fs.writeFileSync(outputPath, jsx, "utf8");
    console.log(`✅ Generated src/pages/browse-mode/${entry.fileInfo.outputFilename}`);
  });


  console.log("✅ Browse JSX generation complete");
}

try {
  main();
} catch (err) {
  console.error("❌ generate-browse.js failed:");
  console.error(err.message || err);
  process.exit(1);
}