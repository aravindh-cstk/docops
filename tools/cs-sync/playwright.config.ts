import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { config as loadDotenv } from "dotenv";
import { defineConfig, devices } from "@playwright/test";

// .env lives at the repo root (two levels up from tools/cs-sync), not
// alongside this config — src/loadEnv.ts's tools/cs-sync/.env path is a
// separate, older convention used by the legacy single-stack scripts.
const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
loadDotenv({ path: path.join(repoRoot, ".env") });

// Saved by `npm run doc:setup-auth` (see playwright/setup-auth.ts) — reused
// automatically so a walkthrough run doesn't need a fresh manual login every
// time. Missing/expired just falls back to lib/login.ts's usual pause, so
// there's nothing to configure if this hasn't been set up yet.
const AUTH_FILE = path.join(path.dirname(fileURLToPath(import.meta.url)), "playwright", ".auth", "dev-stack.json");

export default defineConfig({
  testDir: "./playwright",
  timeout: 60_000,
  fullyParallel: false,
  workers: 1,
  reporter: [["list"]],
  use: {
    // 1280x800 fits comfortably within a scaled-Retina laptop's logical
    // screen (e.g. a 3024x1964 physical display often defaults to ~1512x982
    // logical points) — 1920x1080 was overflowing that during manual login,
    // leaving the human unable to see the page well enough to verify before
    // clicking Resume. Still clearly landscape framing either way.
    viewport: { width: 1280, height: 800 },
    screenshot: "off", // doc-walkthrough.spec.ts manages its own highlighted screenshots
    trace: "retain-on-failure",
    storageState: fs.existsSync(AUTH_FILE) ? AUTH_FILE : undefined,
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
});
