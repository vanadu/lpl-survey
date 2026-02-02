#!/usr/bin/env node
/**
 * Reset manual registry to match current generated keys, while carrying forward
 * any existing manual entries that still match by key.
 *
 * Optionally:
 * - accept a rename map JSON to transfer settings across renamed keys
 * - write orphans to a separate archive file
 *
 * Usage:
 *  node scripts/reset-manual-from-old.js \
 *    --generated helpers/registry.generated.json \
 *    --old-manual helpers/registry.manual.json \
 *    --out helpers/registry.manual.json \
 *    --orphans helpers/registry.manual.orphans.json \
 *    [--rename-map helpers/registry.rename-map.json]
 *
 * rename-map format:
 *  { "LifeStatus": "LifeStatus2", "OldPanel": "NewPanelName" }
 */

const fs = require("fs");
const path = require("path");

function getArg(flag, defaultValue) {
  const idx = process.argv.indexOf(flag);
  if (idx === -1) return defaultValue;
  const val = process.argv[idx + 1];
  if (!val || val.startsWith("--")) return defaultValue;
  return val;
}

function readJson(p) {
  if (!p) return null;
  if (!fs.existsSync(p)) return null;
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function ensureDirExists(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function stableSortKeys(obj) {
  const sorted = {};
  Object.keys(obj)
    .sort((a, b) => a.localeCompare(b))
    .forEach((k) => (sorted[k] = obj[k]));
  return sorted;
}

const genPath = getArg("--generated", "helpers/registry.generated.json");
const oldManualPath = getArg("--old-manual", "helpers/registry.manual.json");
const outPath = getArg("--out", "helpers/registry.manual.json");
const orphansPath = getArg("--orphans", "helpers/registry.manual.orphans.json");
const renameMapPath = getArg("--rename-map", "");

(function main() {
  const absGen = path.resolve(process.cwd(), genPath);
  const absOld = path.resolve(process.cwd(), oldManualPath);
  const absOut = path.resolve(process.cwd(), outPath);
  const absOrphans = path.resolve(process.cwd(), orphansPath);

  const generated = readJson(absGen);
  if (!generated?.elements) {
    console.error(`[reset-manual] invalid generated registry: ${absGen}`);
    process.exit(1);
  }

  const oldManual = readJson(absOld) || { meta: {}, elements: {} };
  const oldEls = oldManual.elements || {};

  const renameMap = renameMapPath
    ? (readJson(path.resolve(process.cwd(), renameMapPath)) || {})
    : {};

  const newManual = {
    meta: {
      manualVersion: "1.0.0",
      rebuiltAt: new Date().toISOString(),
      builtFromGenerated: genPath,
      carriedFromManual: oldManualPath,
      ...(renameMapPath ? { renameMap: renameMapPath } : {}),
    },
    elements: {},
  };

  // 1) Create clean baseline: one stub per current generated key
  const genKeys = Object.keys(generated.elements);
  for (const key of genKeys) {
    newManual.elements[key] = { styles: [] };
  }

  // 2) Carry forward exact key matches (old -> new)
  let carriedExact = 0;
  for (const key of Object.keys(oldEls)) {
    if (newManual.elements[key]) {
      newManual.elements[key] = { ...newManual.elements[key], ...oldEls[key] };
      carriedExact++;
    }
  }

  // 3) Apply rename map (oldKey -> newKey)
  let carriedRenames = 0;
  for (const [oldKey, newKey] of Object.entries(renameMap)) {
    if (!oldEls[oldKey]) continue;
    if (!newManual.elements[newKey]) continue;

    // Merge old manual entry into renamed target (new wins only by structure; manual fields get combined)
    newManual.elements[newKey] = { ...newManual.elements[newKey], ...oldEls[oldKey] };
    carriedRenames++;
  }

  // 4) Compute orphans (old keys that no longer exist in generated AND weren’t mapped)
  const mappedOldKeys = new Set(Object.keys(renameMap));
  const orphans = {};
  let orphanCount = 0;

  for (const oldKey of Object.keys(oldEls)) {
    const stillExists = !!generated.elements[oldKey];
    const mappedAway = mappedOldKeys.has(oldKey);
    if (!stillExists && !mappedAway) {
      orphans[oldKey] = oldEls[oldKey];
      orphanCount++;
    }
  }

  // Stable output
  newManual.elements = stableSortKeys(newManual.elements);

  ensureDirExists(absOut);
  fs.writeFileSync(absOut, JSON.stringify(newManual, null, 2) + "\n", "utf8");

  if (orphansPath) {
    ensureDirExists(absOrphans);
    fs.writeFileSync(
      absOrphans,
      JSON.stringify(
        {
          meta: {
            archivedAt: new Date().toISOString(),
            sourceManual: oldManualPath,
            note: "Entries that no longer exist in generated and were not mapped via rename-map.",
          },
          elements: stableSortKeys(orphans),
        },
        null,
        2
      ) + "\n",
      "utf8"
    );
  }

  console.log(`[reset-manual] wrote: ${absOut}`);
  console.log(`[reset-manual] carried exact matches: ${carriedExact}`);
  console.log(`[reset-manual] carried renames: ${carriedRenames}`);
  console.log(`[reset-manual] archived orphans: ${orphanCount} -> ${absOrphans}`);
})();
