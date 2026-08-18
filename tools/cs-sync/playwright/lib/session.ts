import type { Page } from "@playwright/test";

/**
 * Everything about getting the walkthrough onto the right, authenticated
 * page: which stack URL to open, and how to get logged in once there.
 * Consolidated from what used to be resolve-stack-url.ts, login.ts, and
 * dev11-handoff.ts — all three were small, always used together in the same
 * spot in doc-walkthrough.spec.ts, and splitting them further than this just
 * added file-hopping without adding clarity.
 */

// ---------------------------------------------------------------------------
// Stack resolution
// ---------------------------------------------------------------------------

/**
 * Picks which stack URL a doc-walkthrough run should open, in priority order:
 *
 * 1. An explicit Dev/staging URL for the feature (DEV_STACK_URL) — the most
 *    specific override, e.g. a PR's own preview stack.
 * 2. The dev11 real-time environment (see isDev11Url below) — the actual
 *    priority target for verifying a feature as it's really being built.
 *    Org names and testing-stack names vary project to project, so there's
 *    no fixed URL to jump straight to here — the walkthrough always pauses
 *    for a human to pick the right org/stack (see pauseForDev11Setup below),
 *    same as it would for a first-time login.
 * 3. Whichever Sandbox dashboard matches the doc's top-level folder — CS-Docs
 *    Sandbox for cs-docs/..., API-Docs Sandbox for api-docs/.... This is a
 *    fallback, not the default: reach it by pasting its URL into DEV_STACK_URL
 *    explicitly (tier 1), e.g. when dev11 isn't reachable or isn't relevant.
 *
 * Nothing configured (or the doc is outside both cs-docs/ and api-docs/)
 * resolves to undefined, which the caller treats as "skip this run" rather
 * than guessing a stack.
 */
const DEV11_STACKS_URL = process.env.DEV11_STACKS_URL ?? "https://dev11-app.csnonprod.com/#!/stacks";

export function isDev11Url(url: string): boolean {
  return url === DEV11_STACKS_URL;
}

export function resolveDevStackUrl(docPath: string): string | undefined {
  if (process.env.DEV_STACK_URL) return process.env.DEV_STACK_URL;
  if (DEV11_STACKS_URL) return DEV11_STACKS_URL;

  const normalized = docPath.replace(/^\.?\/+/, "");
  if (normalized.startsWith("api-docs/")) return process.env.APIDOCS_SANDBOX_DASHBOARD_URL;
  if (normalized.startsWith("cs-docs/")) return process.env.CSDOCS_SANDBOX_DASHBOARD_URL;
  return undefined;
}

// ---------------------------------------------------------------------------
// Sandbox login
// ---------------------------------------------------------------------------

/**
 * Best-effort login for whatever Dev/Sandbox stack URL was supplied.
 *
 * Login-form detection always comes first, via a genuine bounded wait (not
 * an instant, un-waited `count()` right after `goto()` — an earlier version
 * tried that and always saw zero elements before Contentstack's SPA had
 * rendered anything, silently skipping straight to a failed first step).
 * That wait is also what makes a saved session (see setup-auth.ts, loaded
 * via playwright.config.ts's `storageState`) work: if it's still valid, no
 * login form ever appears and this returns immediately, no pause needed.
 *
 * - No login form found within the timeout: already authenticated — return.
 * - Login form found, credentials configured: auto-fill and submit.
 * - Login form found, no credentials configured: pause for manual login.
 *
 * Not used for the dev11 path — see pauseForDev11Setup below, which always
 * hands off to a human instead.
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

// ---------------------------------------------------------------------------
// dev11 hand-off
// ---------------------------------------------------------------------------

// Folder-name tokens that read oddly under plain title-casing — expand only
// as real mismatches turn up; this is a hint for a human to read, not a
// strict lookup, so it doesn't need to (and per Gladys shouldn't try to)
// cover every product name up front.
const ACRONYM_OVERRIDES: Record<string, string> = {
  cms: "CMS",
  api: "API",
};

/**
 * Best-effort, human-readable guess at which App Switcher product a doc's
 * top-level folder corresponds to (e.g. "headless-cms" -> "Headless CMS") —
 * a hint for the pause message below, not a fixed lookup table. Org names,
 * stack names, and exact product tile labels all vary project to project,
 * so this only needs to get a person pointed in the right direction, not
 * drive any automated click.
 */
export function productHint(docPath: string): string {
  const normalized = docPath.replace(/^\.?\/+/, "");
  const folder = normalized.split("/")[1]; // segment after cs-docs/ or api-docs/
  if (!folder) return "the relevant product";

  return folder
    .split("-")
    .map((word) => ACRONYM_OVERRIDES[word.toLowerCase()] ?? word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * dev11 is the real priority target for real-time verification (Sandbox is
 * only a fallback — see resolveDevStackUrl above), but org names and testing
 * stack names both vary project to project, so there's no fixed URL or
 * selector to automate here. Always pause — same as a first-time login —
 * and let a human handle SAML, org selection, and stack navigation; the
 * walkthrough picks back up once they click Resume, exactly as it does
 * today for the Sandbox path.
 */
export async function pauseForDev11Setup(page: Page, docPath: string): Promise<void> {
  console.log(
    "\nDev11 real-time verification run — this needs a person for the parts that vary by project:\n" +
      "  1. Complete SAML login if prompted.\n" +
      "  2. Click your profile icon -> Switch Organization -> select this project's org.\n" +
      `  3. Use the App Switcher (next to the profile icon) to open the right product — ` +
      `this doc lives under "${docPath}", likely ${productHint(docPath)}.\n` +
      "  4. Navigate to the correct testing stack for the feature/PR being verified.\n" +
      "Then click ▶ Resume in the Playwright Inspector.\n",
  );
  await page.pause();
}
