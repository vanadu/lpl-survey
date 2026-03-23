#!/usr/bin/env node

/**
 * Adds data-translate attributes to JSX tags:
 * h2, h3, p, li, a
 *
 * Rules:
 * - Non-recursive: only scans files directly inside the folders passed on CLI
 * - If className or class exists, insert data-translate immediately after it
 * - Otherwise insert data-translate as the first prop
 * - Skip elements that already have data-translate
 * - Generate short sequential keys per file: FileBase.tag.001
 * - Log every file scanned, not just changed files
 *
 * Usage:
 *   node scripts/add-data-translate.js
 *   node scripts/add-data-translate.js pages
 *   node scripts/add-data-translate.js pages components
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
  "browse-mode",
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

function toPosix(p) {
  return p.split(path.sep).join("/");
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

function makeDataTranslateAttr(value) {
  return t.jsxAttribute(
    t.jsxIdentifier("data-translate"),
    t.stringLiteral(value)
  );
}

function getFileBaseKey(filePath) {
  const base = path.basename(filePath, path.extname(filePath));
  return base.replace(/[^A-Za-z0-9]+/g, "_").replace(/^_+|_+$/g, "") || "File";
}

function buildTranslateKey(filePath, tagName, counter) {
  const fileBase = getFileBaseKey(filePath);
  const num = String(counter).padStart(3, "0");
  return `${fileBase}.${tagName}.${num}`;
}

function listFilesShallow(dir) {
  if (!exists(dir)) return [];

  const stat = fs.statSync(dir);
  if (!stat.isDirectory()) return [];

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (EXCLUDED_DIRS.has(entry.name)) {
        continue;
      }
      continue; // non-recursive by design
    }

    const ext = path.extname(entry.name);
    if (VALID_EXTENSIONS.has(ext)) {
      files.push(fullPath);
    }
  }

  return files;
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
    return {
      status: "parse-error",
      changed: false,
      inserted: 0,
      message: err.message,
    };
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

      const key = buildTranslateKey(filePath, tagName, localCounter);
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
    return { status: "unchanged", changed: false, inserted: 0 };
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
  return { status: "updated", changed: true, inserted };
}

function main() {
  const dirs = getCliDirs();
  const files = [...new Set(dirs.flatMap((dir) => listFilesShallow(path.resolve(dir))))];

  if (!files.length) {
    console.log("No matching files found.");
    process.exit(0);
  }

  let scannedFiles = 0;
  let changedFiles = 0;
  let insertedTotal = 0;
  let unchangedFiles = 0;
  let parseErrors = 0;

  for (const file of files) {
    scannedFiles += 1;

    const rel = toPosix(path.relative(process.cwd(), file));
    const result = processFile(file);

    if (result.status === "updated") {
      changedFiles += 1;
      insertedTotal += result.inserted;
      console.log(`[updated]   ${rel} (+${result.inserted})`);
      continue;
    }

    if (result.status === "unchanged") {
      unchangedFiles += 1;
      console.log(`[unchanged] ${rel}`);
      continue;
    }

    if (result.status === "parse-error") {
      parseErrors += 1;
      console.log(`[error]     ${rel}`);
      console.log(`            ${result.message}`);
    }
  }

  console.log("\nDone.");
  console.log(`Scanned files : ${scannedFiles}`);
  console.log(`Updated files : ${changedFiles}`);
  console.log(`Unchanged     : ${unchangedFiles}`);
  console.log(`Parse errors  : ${parseErrors}`);
  console.log(`Attrs inserted: ${insertedTotal}`);
}

main();