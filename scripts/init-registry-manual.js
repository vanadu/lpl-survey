#!/usr/bin/env node
/**
 * Initialize / extend registry.manual.json from registry.generated.json
 *
 * Key behavior:
 * - Creates manual file if missing
 * - Adds missing keys with { styles: [] }
 * - Preserves any existing manual entries untouched
 * - Writes keys in the SAME ORDER as registry.generated.json (order of appearance)
 * - Appends orphaned manual keys (no longer in generated) at the end, preserving their existing order
 *
 * Usage:
 *  node scripts/init-registry-manual.js \
 *    --generated helpers/registry.generated.json \
 *    --manual helpers/registry.manual.json
 */

const fs = require("fs");
const path = require("path");

// ----------- CLI args (minimal, no deps) -----------
function getArg(flag, defaultValue) {
  const idx = process.argv.indexOf(flag);
  if (idx === -1) return defaultValue;
  const val = process.argv[idx + 1];
  if (!val || val.startsWith("--")) return defaultValue;
  return val;
}

function ensureDirExists(filePath) {
  const dir = path.dirname(filePath);
  fs.mkdirSync(dir, { recursive: true });
}

function readJson(p) {
  if (!fs.existsSync(p)) return null;
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

const genPath = getArg("--generated", "helpers/registry.generated.json");
const manualPath = getArg("--manual", "helpers/registry.manual.json");

(function main() {
  const absGen = path.resolve(process.cwd(), genPath);
  const absManual = path.resolve(process.cwd(), manualPath);

  const generated = readJson(absGen);
  if (!generated?.elements || typeof generated.elements !== "object") {
    console.error(`[manual-init] missing/invalid generated registry: ${absGen}`);
    process.exit(1);
  }

  const existingManual = readJson(absManual) || { meta: {}, elements: {} };
  const existingElements =
    existingManual?.elements && typeof existingManual.elements === "object"
      ? existingManual.elements
      : {};

  // Build output meta (preserve existing meta, update timestamps/traceability)
  const out = {
    meta: {
      manualVersion: "1.0.0",
      updatedAt: new Date().toISOString(),
      builtFromGenerated: genPath,
      // keep any prior meta fields (if present)
      ...existingManual.meta,
    },
    elements: {},
  };

  // 1) Add all generated keys in generated order (order of appearance).
  const genKeys = Object.keys(generated.elements); // preserves insertion order from generated file
  let added = 0;

  for (const name of genKeys) {
    if (Object.prototype.hasOwnProperty.call(existingElements, name)) {
      // Keep existing manual entry exactly as-is
      out.elements[name] = existingElements[name];
    } else {
      // Add stub for new element
      out.elements[name] = { styles: [] };
      added++;
    }
  }

  // 2) Append orphaned keys (exist in manual but not in generated), preserving their current order.
  let orphaned = 0;
  for (const name of Object.keys(existingElements)) {
    if (!Object.prototype.hasOwnProperty.call(generated.elements, name)) {
      out.elements[name] = existingElements[name];
      orphaned++;
    }
  }

  ensureDirExists(absManual);
  fs.writeFileSync(absManual, JSON.stringify(out, null, 2) + "\n", "utf8");

  console.log(`[manual-init] wrote: ${absManual}`);
  console.log(`[manual-init] added ${added} new manual entries`);
  if (orphaned > 0) {
    console.log(
      `[manual-init] kept ${orphaned} orphaned manual entries (not present in generated) at end of file`
    );
  }
})();
