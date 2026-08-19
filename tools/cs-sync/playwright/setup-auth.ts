import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "@playwright/test";
import { DEV11_STACKS_URL } from "./lib/session.js";

/**
 * One-time login for BOTH environments the walkthrough targets, saved into
 * one combined session file — Playwright's storageState format holds
 * cookies/localStorage per-origin, so a single file covers app.contentstack.com
 * (Sandbox) and dev11-app.csnonprod.com (dev11) at once. Loaded by every
 * future doc-walkthrough run via playwright.config.ts's `storageState`.
 *
 * - lib/session.ts's loginIfNeeded (Sandbox path) skips its pause entirely
 *   once this session is still valid.
 * - lib/session.ts's pauseForDev11Setup (dev11 path) only skips its pause
 *   when DEV_STACK_URL points at a SPECIFIC stack AND this session already
 *   lands there with no redirect — dev11's org/stack picker still needs a
 *   human when no specific stack was requested, or when the session can't
 *   get there directly (e.g. it doesn't cover that org).
 *
 * Usage: npm run doc:setup-auth
 * Re-run this whenever a saved session expires (both login paths fall back
 * to their usual manual-login pause automatically when that happens).
 */
const AUTH_FILE = path.join(path.dirname(fileURLToPath(import.meta.url)), ".auth", "dev-stack.json");

async function main() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();

  await page.goto("https://app.contentstack.com/", { waitUntil: "domcontentloaded" });
  console.log("\nLeg 1/2 — Contentstack Sandbox: log in manually, then click ▶ Resume in the Inspector.\n");
  await page.pause();

  await page.goto(DEV11_STACKS_URL, { waitUntil: "domcontentloaded" });
  console.log(
    "\nLeg 2/2 — dev11: complete SAML login, select your org, and navigate to a stack (any stack — this " +
      "just needs a valid, authenticated session; the actual org/stack per run is still picked at " +
      "walkthrough time). Click ▶ Resume in the Inspector when done.\n",
  );
  await page.pause();

  await context.storageState({ path: AUTH_FILE });
  console.log(`Saved combined session (Sandbox + dev11) to ${AUTH_FILE}`);

  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
