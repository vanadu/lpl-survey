#!/usr/bin/env node
/**
 * refresh-survey.mjs
 *
 * 1) Kill previous dev server started by this script (PID file)
 * 2) npm run merge-surveys
 * 3) npm run dev (same terminal)
 */

import fs from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";
import kill from "tree-kill";

const ROOT = process.cwd();
const PID_FILE = path.join(ROOT, ".devserver.pid");

function spawnForeground(cmd, args, extraOpts = {}) {
  return spawn(cmd, args, {
    stdio: "inherit",
    shell: false,
    windowsHide: false,
    ...extraOpts,
  });
}

function runChild(cmd, args) {
  return new Promise((resolve, reject) => {
    const p = spawnForeground(cmd, args);
    p.on("error", reject);
    p.on("exit", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${cmd} ${args.join(" ")} exited with code ${code}`));
    });
  });
}

// On Windows, run npm via cmd.exe so batch/shims work reliably from Git Bash
function npmRun(scriptName) {
  if (process.platform === "win32") {
    // /d disables AutoRun, /s preserves quoting rules, /c runs and exits
    return runChild("cmd.exe", ["/d", "/s", "/c", `npm run ${scriptName}`]);
  }
  return runChild("npm", ["run", scriptName]);
}

function spawnNpmDev() {
  if (process.platform === "win32") {
    return spawnForeground("cmd.exe", ["/d", "/s", "/c", "npm run dev"]);
  }
  return spawnForeground("npm", ["run", "dev"]);
}

function readPidFile() {
  if (!fs.existsSync(PID_FILE)) return null;
  const raw = String(fs.readFileSync(PID_FILE, "utf8")).trim();
  const pid = Number(raw);
  if (!Number.isFinite(pid) || pid <= 0) return null;
  return pid;
}

function removePidFile() {
  try {
    fs.unlinkSync(PID_FILE);
  } catch {
    // ignore
  }
}

async function killPreviousDevServer() {
  const pid = readPidFile();
  if (!pid) return;

  console.log(`Stopping previous dev server (PID ${pid})...`);

  // SIGTERM first
  await new Promise((resolve) => {
    kill(pid, "SIGTERM", () => resolve());
  });

  // small grace period
  await new Promise((r) => setTimeout(r, 250));

  // best-effort SIGKILL
  await new Promise((resolve) => {
    kill(pid, "SIGKILL", () => resolve());
  });

  removePidFile();
}

async function main() {
  console.log("\n=== Refresh Survey ===\n");

  // 1) Stop old server
  await killPreviousDevServer();

  // 2) Merge individual page JSONs and build registry
  console.log("\nRunning merge-surveys...\n");
  await npmRun("merge-surveys");

  // 3) Start dev server in same terminal
  console.log("\nStarting dev server...\n");
  const dev = spawnNpmDev();

  // Write PID so next refresh kills only THIS server tree
  try {
    fs.writeFileSync(PID_FILE, String(dev.pid), "utf8");
  } catch (e) {
    console.warn(`Warning: couldn't write PID file (${PID_FILE}):`, e?.message ?? e);
  }

  // Forward termination signals to the dev process
  const forward = (sig) => {
    try {
      dev.kill(sig);
    } catch {
      // ignore
    }
  };

  process.on("SIGINT", () => forward("SIGINT"));
  process.on("SIGTERM", () => forward("SIGTERM"));

  dev.on("exit", (code) => {
    removePidFile();
    process.exit(code ?? 0);
  });
}

main().catch((err) => {
  console.error("\nRefresh failed:\n", err?.stack ?? err);
  process.exit(1);
});