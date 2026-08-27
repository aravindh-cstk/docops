import { chromium } from "@playwright/test";
import { DEV11_STACKS_URL } from "./lib/session.js";
import { PERSISTENT_PROFILE_DIR } from "./lib/fixtures.js";

/**
 * One-time login into the SAME persistent Chrome profile every future
 * doc-walkthrough run reuses (see lib/fixtures.ts) — a real profile directory
 * on disk, not a fresh throwaway one, so login state AND any one-off
 * browser/OS permission grants (e.g. dev11's SAML flow triggering macOS's
 * "wants to access other apps and services" consent — confirmed live that
 * this re-prompted every run under the old fresh-profile-per-run design)
 * both stick across runs, the same way an everyday Chrome profile would.
 *
 * dev11 is the default and only leg — it's the real priority environment
 * (see lib/session.ts), so that's what gets logged in by default. Sandbox
 * is a fallback, not the default: add --sandbox only when you specifically
 * need a Sandbox-path run too (e.g. lib/session.ts's loginIfNeeded skipping
 * its pause). Both live in the same profile without conflict — --sandbox
 * adds a leg rather than replacing anything.
 *
 * Usage:
 *   npm run doc:setup-auth                 dev11 only (default)
 *   npm run doc:setup-auth -- --sandbox    dev11, then also Sandbox
 *
 * Re-run whenever a login expires (both paths fall back to their usual
 * manual-login pause automatically when that happens).
 */
const includeSandbox = process.argv.includes("--sandbox");

async function main() {
  const context = await chromium.launchPersistentContext(PERSISTENT_PROFILE_DIR, {
    headless: false,
    viewport: { width: 1280, height: 800 },
  });
  const page = context.pages()[0] ?? (await context.newPage());

  await page.goto(DEV11_STACKS_URL, { waitUntil: "domcontentloaded" });
  console.log(
    `\ndev11${includeSandbox ? " (1/2)" : ""}: complete SAML login (approve any browser/OS permission ` +
      "prompts you want remembered — this profile persists), select your org, and navigate to a stack " +
      "(any stack — this just needs a valid, authenticated session; the actual org/stack per run is " +
      "still picked at walkthrough time). Click ▶ Resume in the Inspector when done.\n",
  );
  await page.pause();

  if (includeSandbox) {
    await page.goto("https://app.contentstack.com/", { waitUntil: "domcontentloaded" });
    console.log("\nSandbox (2/2): log in manually, then click ▶ Resume in the Inspector.\n");
    await page.pause();
  }

  console.log(`Saved to persistent profile at ${PERSISTENT_PROFILE_DIR} — no separate export step needed.`);
  await context.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
