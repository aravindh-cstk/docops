import type { Page } from "@playwright/test";

/**
 * Best-effort login for whatever Dev stack URL was supplied.
 *
 * - No credentials configured (DEV_STACK_LOGIN_EMAIL/PASSWORD unset): ALWAYS
 *   pause unconditionally, before attempting any login-form detection. An
 *   earlier version tried to detect a login form first and only paused if
 *   one was found — but that check ran as an instant, un-waited `count()`
 *   right after `goto()`, before Contentstack's SPA had rendered anything,
 *   so it always saw zero elements and silently skipped straight to (and
 *   failed on) locating the doc's first target. Always pausing here is the
 *   simple, robust replacement: it guarantees a human gets the browser
 *   before automation touches it, and doesn't depend on guessing the login
 *   page's actual markup (email/password fields, SSO buttons, etc. — none
 *   of which has been verified against the real product).
 * - Credentials configured: wait (with a timeout, not an instant check) for
 *   a labeled email field to actually appear, and auto-fill if so. No field
 *   within the timeout is treated as "already authenticated," not an error.
 */
export async function loginIfNeeded(page: Page, email?: string, password?: string): Promise<void> {
  if (!email || !password) {
    console.log(
      "\nNo DEV_STACK_LOGIN_EMAIL/PASSWORD configured — pausing so you can log in and navigate to the " +
        "right screen manually. Click ▶ Resume in the Playwright Inspector when ready to continue.\n",
    );
    await page.pause();
    return;
  }

  const emailField = page.getByLabel(/email/i).first();
  const hasLoginForm = await emailField
    .waitFor({ state: "visible", timeout: 8000 })
    .then(() => true)
    .catch(() => false);
  if (!hasLoginForm) return;

  await emailField.fill(email);
  await page.getByLabel(/password/i).first().fill(password);
  await page.getByRole("button", { name: /log\s*in|sign\s*in/i }).first().click();
  await page.waitForLoadState("networkidle");
}
