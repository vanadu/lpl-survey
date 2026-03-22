#!/usr/bin/env node

/**
 * Adds data-translate attributes to JSX tags:
 * h2, h3, p, li, a
 *
 * Rules:
 * - If className or class exists, insert data-translate immediately after it
 * - Otherwise insert data-translate as the first prop
 * - Skip elements that already have data-translate
 * - Generate deterministic keys from file path + tag + text slug
 *
 * Usage:
 *   node scripts/add-data-translate.js
 *   node scripts/add-data-translate.js src/pages
 *   node scripts/add-data-translate.js pages browse-mode components
 */

const fs = require("fs");
const path = require("path");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const t = require("@babel/types");

const TARGET_TAGS = new Set(["h2", "h3", "p", "li", "a"]);
const DEFAULT_DIRS = ["pages", "components", "src"];
const VALID_EXTENSIONS = new Set([".js", ".jsx", ".ts", ".tsx"]);

const EXCLUDED_DIRS = new Set([
  "node_modules",
  ".next",
  ".git",
  "dist",
  "build",
  "browse-mode", // generated — never touch
]); 

function getCliDirs() {
  const dirs = process.argv.slice(2);
  return dirs.length ? dirs : DEFAULT_DIRS;
}

function exists(p) {
  try {
    fs.accessSync(p);
    return true;
  } catch {
    return false;
  }
}

function walk(dir, out = []) {
  if (!exists(dir)) return out;

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (EXCLUDED_DIRS.has(entry.name)) {
        continue;
      }
      walk(fullPath, out);
      continue;
    }

    const ext = path.extname(entry.name);
    if (VALID_EXTENSIONS.has(ext)) {
      out.push(fullPath);
    }
  }

  return out;
}




function toPosix(p) {
  return p.split(path.sep).join("/");
}

function slugify(text) {
  return String(text)
    .toLowerCase()
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .slice(0, 48) || "text";
}

function fileSlug(filePath) {
  const rel = toPosix(path.relative(process.cwd(), filePath));
  return rel
    .replace(/\.[^.]+$/, "")
    .replace(/[^a-zA-Z0-9/]+/g, "")
    .replace(/\//g, "_")
    .toLowerCase();
}

function isTargetJsxTag(nameNode) {
  return t.isJSXIdentifier(nameNode) && TARGET_TAGS.has(nameNode.name);
}

function hasDataTranslate(attrs) {
  return attrs.some(
    (attr) =>
      t.isJSXAttribute(attr) &&
      t.isJSXIdentifier(attr.name) &&
      attr.name.name === "data-translate"
  );
}

function findClassAttrIndex(attrs) {
  return attrs.findIndex(
    (attr) =>
      t.isJSXAttribute(attr) &&
      t.isJSXIdentifier(attr.name) &&
      (attr.name.name === "className" || attr.name.name === "class")
  );
}

function getTextFromNode(node) {
  if (!node) return "";

  if (t.isJSXText(node)) {
    return node.value;
  }

  if (t.isStringLiteral(node)) {
    return node.value;
  }

  if (t.isJSXExpressionContainer(node)) {
    return getTextFromNode(node.expression);
  }

  if (t.isTemplateLiteral(node)) {
    return node.quasis.map((q) => q.value.cooked || "").join(" ");
  }

  if (t.isBinaryExpression(node, { operator: "+" })) {
    return `${getTextFromNode(node.left)} ${getTextFromNode(node.right)}`;
  }

  if (t.isConditionalExpression(node)) {
    return `${getTextFromNode(node.consequent)} ${getTextFromNode(node.alternate)}`;
  }

  if (t.isLogicalExpression(node)) {
    return `${getTextFromNode(node.left)} ${getTextFromNode(node.right)}`;
  }

  if (t.isCallExpression(node)) {
    return "";
  }

  return "";
}

function collectVisibleText(openingElPath) {
  const parent = openingElPath.parentPath?.node;
  if (!parent || !t.isJSXElement(parent)) return "";

  const pieces = [];

  for (const child of parent.children) {
    if (t.isJSXText(child)) {
      pieces.push(child.value);
    } else if (t.isJSXExpressionContainer(child)) {
      pieces.push(getTextFromNode(child.expression));
    }
  }

  return pieces.join(" ").replace(/\s+/g, " ").trim();
}

function buildTranslateKey(filePath, tagName, visibleText, counter) {
  const base = fileSlug(filePath);
  const textPart = slugify(visibleText);
  const num = String(counter).padStart(3, "0");
  return `${base}.${tagName}.${num}.${textPart}`;
}

function makeDataTranslateAttr(value) {
  return t.jsxAttribute(
    t.jsxIdentifier("data-translate"),
    t.stringLiteral(value)
  );
}

function processFile(filePath) {
  const source = fs.readFileSync(filePath, "utf8");

  let ast;
  try {
    ast = parser.parse(source, {
      sourceType: "unambiguous",
      plugins: [
        "jsx",
        "typescript",
        "classProperties",
        "objectRestSpread",
      ],
    });
  } catch (err) {
    console.warn(`Skipping parse error: ${filePath}`);
    console.warn(`  ${err.message}`);
    return { changed: false, inserted: 0 };
  }

  let inserted = 0;
  let localCounter = 0;

  traverse(ast, {
    JSXOpeningElement(path) {
      const { node } = path;

      if (!isTargetJsxTag(node.name)) return;

      const tagName = node.name.name;
      const attrs = node.attributes || [];

      if (hasDataTranslate(attrs)) return;

      localCounter += 1;

      const visibleText = collectVisibleText(path);
      const key = buildTranslateKey(filePath, tagName, visibleText, localCounter);
      const newAttr = makeDataTranslateAttr(key);

      const classIndex = findClassAttrIndex(attrs);

      if (classIndex >= 0) {
        attrs.splice(classIndex + 1, 0, newAttr);
      } else {
        attrs.unshift(newAttr);
      }

      inserted += 1;
    },
  });

  if (!inserted) {
    return { changed: false, inserted: 0 };
  }

  const output = generate(
    ast,
    {
      retainLines: false,
      jsescOption: { minimal: true },
    },
    source
  ).code;

  fs.writeFileSync(filePath, output + "\n", "utf8");
  return { changed: true, inserted };
}

function main() {
  const dirs = getCliDirs();
  const files = [...new Set(dirs.flatMap((dir) => walk(path.resolve(dir))))];

  if (!files.length) {
    console.log("No matching files found.");
    process.exit(0);
  }

  let changedFiles = 0;
  let insertedTotal = 0;

  for (const file of files) {
    const result = processFile(file);
    if (result.changed) {
      changedFiles += 1;
      insertedTotal += result.inserted;
      console.log(`Updated ${toPosix(path.relative(process.cwd(), file))} (+${result.inserted})`);
    }
  }

  console.log(`\nDone. Updated ${changedFiles} file(s), inserted ${insertedTotal} data-translate attribute(s).`);
}

main();