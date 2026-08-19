import path from "node:path";
import { fileURLToPath } from "node:url";
import { test as base, chromium, type BrowserContext } from "@playwright/test";

/**
 * Overrides the built-in `context`/`page` fixtures to launch a PERSISTENT
 * Chrome profile instead of a fresh, throwaway one per run. Confirmed live
 * against dev11: macOS's own "[app] wants to access other apps and
 * services" consent (triggered by dev11's SAML flow) re-prompted on every
 * single run even after clicking Allow, because Playwright's default
 * fixtures launch a brand-new temp profile directory each time — nothing
 * "remembered" ever had anywhere to persist to. A profile that lives on
 * disk between runs (same directory every time) behaves like an everyday
 * Chrome profile: permission grants, and login state, both stick.
 *
 * This also replaces the separate storageState-file approach (see
 * setup-auth.ts) — a persistent profile already carries cookies/localStorage
 * itself, so there's no separate export/import step needed anymore.
 */
export const PERSISTENT_PROFILE_DIR = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  ".auth",
  "chrome-profile",
);

export const test = base.extend<{ context: BrowserContext }>({
  // eslint-disable-next-line no-empty-pattern
  context: async ({}, use, testInfo) => {
    const context = await chromium.launchPersistentContext(PERSISTENT_PROFILE_DIR, {
      headless: testInfo.project.use.headless ?? false,
      viewport: testInfo.project.use.viewport ?? { width: 1280, height: 800 },
    });

    // Replicates the built-in fixture's trace: "retain-on-failure" (see
    // playwright.config.ts) since launchPersistentContext bypasses that
    // automatic handling.
    await context.tracing.start({ screenshots: true, snapshots: true, sources: true });

    await use(context);

    if (testInfo.status !== testInfo.expectedStatus) {
      const tracePath = testInfo.outputPath("trace.zip");
      await context.tracing.stop({ path: tracePath });
      await testInfo.attach("trace", { path: tracePath, contentType: "application/zip" });
    } else {
      await context.tracing.stop();
    }

    await context.close();
  },
  page: async ({ context }, use) => {
    const page = context.pages()[0] ?? (await context.newPage());
    await use(page);
  },
});

export const expect = test.expect;
