import type { Page } from "@playwright/test";

/**
 * Best-effort login for whatever Dev stack URL was supplied.
 *
 * Login-form detection always comes first now, via a genuine bounded wait
 * (not an instant, un-waited `count()` right after `goto()` — an earlier
 * version tried that and always saw zero elements before Contentstack's SPA
 * had rendered anything, silently skipping straight to a failed first step).
 * That wait is also what makes a saved session (see setup-auth.ts, loaded
 * via playwright.config.ts's `storageState`) work: if it's still valid,
 * no login form ever appears and this returns immediately, no pause needed.
 *
 * - No login form found within the timeout: already authenticated — return.
 * - Login form found, credentials configured: auto-fill and submit.
 * - Login form found, no credentials configured: pause for manual login.
 */
export async function loginIfNeeded(
  page: Page,
  email?: string,
  password?: string,
  targetUrl?: string,
): Promise<void> {
  const emailField = page.getByLabel(/email/i).first();
  const hasLoginForm = await emailField
    .waitFor({ state: "visible", timeout: 8000 })
    .then(() => true)
    .catch(() => false);
  if (!hasLoginForm) return;

  if (!email || !password) {
    console.log(
      "\nNo DEV_STACK_LOGIN_EMAIL/PASSWORD configured, and no valid saved session found — " +
        "pausing so you can log in manually.\n" +
        `Target page: ${targetUrl ?? page.url()}\n` +
        "IMPORTANT: after logging in, Contentstack may drop you on your own default org's dashboard " +
        "instead of returning to the target page above — check the org/stack switcher and navigate " +
        "back to the exact page before clicking ▶ Resume in the Playwright Inspector.\n" +
        "Tip: run `npm run doc:setup-auth` once to save a session and skip this pause on future runs.\n",
    );
    await page.pause();
    return;
  }

  await emailField.fill(email);
  await page.getByLabel(/password/i).first().fill(password);
  await page.getByRole("button", { name: /log\s*in|sign\s*in/i }).first().click();
  await page.waitForLoadState("networkidle");
}
