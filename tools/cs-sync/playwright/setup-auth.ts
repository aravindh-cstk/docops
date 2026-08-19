import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "@playwright/test";
import { DEV11_STACKS_URL } from "./lib/session.js";

/**
 * One-time login, saved into a session file reused by every future
 * doc-walkthrough run (via playwright.config.ts's `storageState`).
 *
 * dev11 is the default and only leg — it's the real priority environment
 * (see lib/session.ts), so that's what gets a saved session by default.
 * Sandbox is a fallback, not the default: add --sandbox only when you
 * specifically need a Sandbox-path run too (e.g. lib/session.ts's
 * loginIfNeeded skipping its pause). Playwright's storageState format holds
 * cookies/localStorage per-origin, so the SAME file can hold both without
 * conflict — --sandbox appends to it rather than replacing it.
 *
 * Usage:
 *   npm run doc:setup-auth                 dev11 only (default)
 *   npm run doc:setup-auth -- --sandbox    dev11, then also Sandbox
 *
 * Re-run whenever a saved session expires (both login paths fall back to
 * their usual manual-login pause automatically when that happens).
 */
const AUTH_FILE = path.join(path.dirname(fileURLToPath(import.meta.url)), ".auth", "dev-stack.json");
const includeSandbox = process.argv.includes("--sandbox");

async function main() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();

  await page.goto(DEV11_STACKS_URL, { waitUntil: "domcontentloaded" });
  console.log(
    `\ndev11${includeSandbox ? " (1/2)" : ""}: complete SAML login, select your org, and navigate to a ` +
      "stack (any stack — this just needs a valid, authenticated session; the actual org/stack per run " +
      "is still picked at walkthrough time). Click ▶ Resume in the Inspector when done.\n",
  );
  await page.pause();

  if (includeSandbox) {
    await page.goto("https://app.contentstack.com/", { waitUntil: "domcontentloaded" });
    console.log("\nSandbox (2/2): log in manually, then click ▶ Resume in the Inspector.\n");
    await page.pause();
  }

  await context.storageState({ path: AUTH_FILE });
  console.log(`Saved session (dev11${includeSandbox ? " + Sandbox" : ""}) to ${AUTH_FILE}`);

  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
