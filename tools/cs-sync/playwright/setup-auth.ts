import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "@playwright/test";

/**
 * One-time login, saved for every future doc-walkthrough run — see
 * playwright.config.ts's `storageState`, which loads this file if present,
 * and lib/login.ts, which skips its pause entirely once a saved session is
 * still valid. Contentstack's session cookie is account-level, not
 * per-stack, so a single saved session works across both the CS-Docs and
 * API-Docs Sandbox dashboards.
 *
 * Usage: npm run doc:setup-auth
 * Re-run this whenever the saved session expires (login.ts falls back to
 * its usual manual-login pause automatically when that happens).
 */
const AUTH_FILE = path.join(path.dirname(fileURLToPath(import.meta.url)), ".auth", "dev-stack.json");

async function main() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();

  await page.goto("https://app.contentstack.com/", { waitUntil: "domcontentloaded" });

  console.log(
    `\nLog in manually, then click ▶ Resume in the Inspector.\n` +
      `The session will be saved to ${AUTH_FILE} for future walkthrough runs — no more manual login until it expires.\n`,
  );
  await page.pause();

  await context.storageState({ path: AUTH_FILE });
  console.log(`Saved authenticated session to ${AUTH_FILE}`);

  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
