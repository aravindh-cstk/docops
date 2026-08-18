import fs from "node:fs";
import path from "node:path";
import { expect, test } from "@playwright/test";
import { buildAltText, parseUiSteps, stripFrontMatter } from "./lib/parse-ui-steps.js";
import { locateTarget } from "./lib/locate-target.js";
import { captureUiState, isNewUiState } from "./lib/screenshot-decision.js";
import { highlightAndScreenshot } from "./lib/capture-screenshot.js";
import { compressPngToTarget } from "./lib/compress-image.js";
import { loginIfNeeded } from "./lib/login.js";
import { resolveDevStackUrl } from "./lib/resolve-stack-url.js";

/**
 * Walks a single doc's numbered procedure in a real browser against a Dev
 * stack, capturing a screenshot at each step that produces a new UI state
 * (new modal, new URL, new panel) and failing if a step's target can't be
 * found — that's the "does this procedure actually still work" check, for
 * exactly the UI-navigation steps src/exec-runner.ts (the API-level
 * doc-exec-test) explicitly skips as "not testable via API".
 *
 * Inputs (see .vscode/tasks.json for the prompted VS Code entry point):
 *   DOC_PATH        - repo-relative path to the .md file to walk through
 *   DEV_STACK_URL   - the feature's Dev/staging stack URL, if given. Left
 *                      blank, falls back to whichever Sandbox dashboard
 *                      matches the doc's folder — CSDOCS_SANDBOX_DASHBOARD_URL
 *                      for cs-docs/..., APIDOCS_SANDBOX_DASHBOARD_URL for
 *                      api-docs/... (see lib/resolve-stack-url.ts, and
 *                      TEAM_HANDOFF_GUIDE.md Step 3)
 *   DEV_STACK_LOGIN_EMAIL / DEV_STACK_LOGIN_PASSWORD - optional, only used
 *                      if a login form is actually present
 *
 * Output: playwright/screenshots/<doc-slug>/manifest.json plus any captured
 * PNGs — each compressed to the docs image standard (PNG, ~100KB max,
 * horizontal) with a descriptive alt text already attached. Run
 * `npm run doc:apply-screenshots -- --doc=<DOC_PATH>` afterward to upload
 * approved screenshots to CS-Docs Sandbox and splice them into the doc.
 */

const MAX_SCREENSHOTS_PER_DOC = 5;

interface ManifestEntry {
  index: number;
  raw: string;
  status: "done" | "not-found" | "no-target";
  screenshotPath: string | null;
  altText: string | null;
}

function slugifyForFilename(text: string): string {
  return text
    .replace(/^[+➕]\s*/, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60) || "step";
}

test("walk through doc procedure and capture screenshots", async ({ page }) => {
  const docPath = process.env.DOC_PATH;

  test.skip(!docPath, "Set DOC_PATH to the .md file to walk through (see .vscode/tasks.json)");

  const devStackUrl = resolveDevStackUrl(docPath!);

  test.skip(
    !devStackUrl,
    "Set DEV_STACK_URL to the feature's Dev stack, or configure CSDOCS_SANDBOX_DASHBOARD_URL / " +
      "APIDOCS_SANDBOX_DASHBOARD_URL as the fallback for this doc's folder (see lib/resolve-stack-url.ts)",
  );

  const repoRoot = path.resolve(process.cwd(), "..", "..");
  const absPath = path.isAbsolute(docPath!) ? docPath! : path.join(repoRoot, docPath!);
  const raw = fs.readFileSync(absPath, "utf8");
  const body = stripFrontMatter(raw);
  const { hasProcedure, steps } = parseUiSteps(body);

  test.skip(!hasProcedure, "No numbered procedure found in this doc — concept/reference docs don't get a walkthrough");

  const docSlug = path.basename(absPath, ".md");
  const screenshotDir = path.join(process.cwd(), "playwright", "screenshots", docSlug);
  fs.mkdirSync(screenshotDir, { recursive: true });

  // Kept in sync with playwright.config.ts's viewport — see the comment
  // there on why 1280x800, not 1920x1080.
  await page.setViewportSize({ width: 1280, height: 800 });
  // "load" has twice hit the 60s test timeout against Contentstack's app —
  // it likely keeps a background connection (analytics/websocket) open
  // indefinitely, which "load" waits on but "domcontentloaded" does not.
  await page.goto(devStackUrl!, { waitUntil: "domcontentloaded" });
  await loginIfNeeded(page, process.env.DEV_STACK_LOGIN_EMAIL, process.env.DEV_STACK_LOGIN_PASSWORD, devStackUrl);

  // A deep link straight into an entry can trigger a login redirect and,
  // once resumed, a second navigation back to the original URL — give that
  // render a chance to settle before searching for step targets. Confirmed
  // against Contentstack's entry editor: page.goto()'s "load" event fires
  // well before fields/comments actually render, so searching immediately
  // after resume can match incidental static chrome instead of real content.
  await page.waitForLoadState("networkidle", { timeout: 15_000 }).catch(() => {});

  const manifest: ManifestEntry[] = [];
  let shotCount = 0;

  for (const step of steps) {
    if (step.targets.length === 0) {
      manifest.push({ index: step.index, raw: step.raw, status: "no-target", screenshotPath: null, altText: null });
      continue;
    }

    const before = await captureUiState(page);
    let status: ManifestEntry["status"] = "not-found";
    let lastLocator = null as Awaited<ReturnType<typeof locateTarget>>;

    for (const targetText of step.targets) {
      const locator = await locateTarget(page, targetText);
      if (!locator) continue;
      try {
        await locator.click({ timeout: 5000 });
        await page.waitForTimeout(300);
        status = "done";
        lastLocator = locator;
      } catch {
        // leave status as-is; try the next bold target in this step, if any
      }
    }

    let screenshotPath: string | null = null;
    let altText: string | null = null;
    if (status === "done") {
      const after = await captureUiState(page);
      if (shotCount < MAX_SCREENSHOTS_PER_DOC && isNewUiState(before, after)) {
        shotCount++;
        const label = step.targets[step.targets.length - 1] ?? step.sectionHeading;
        const filename = `${step.index}-${slugifyForFilename(label)}.png`;
        screenshotPath = path.join(screenshotDir, filename);
        await highlightAndScreenshot(page, screenshotPath, lastLocator);
        // Docs image standard: PNG, ~100KB max, horizontal (the 1920x1080
        // viewport above already guarantees landscape framing).
        await compressPngToTarget(screenshotPath);
        altText = buildAltText(step);
      }
    }

    manifest.push({ index: step.index, raw: step.raw, status, screenshotPath, altText });
  }

  fs.writeFileSync(path.join(screenshotDir, "manifest.json"), JSON.stringify(manifest, null, 2));

  if (shotCount >= MAX_SCREENSHOTS_PER_DOC) {
    console.warn(
      `Hit the ${MAX_SCREENSHOTS_PER_DOC}-screenshot cap for this doc — later new-UI-state steps were not captured. ` +
        "Typical task docs need far fewer; if this doc genuinely needs more, raise MAX_SCREENSHOTS_PER_DOC.",
    );
  }

  const notFound = manifest.filter((m) => m.status === "not-found");
  for (const m of notFound) {
    console.error(`Step ${m.index} — could not locate UI target: "${m.raw}"`);
  }

  expect(
    notFound.length,
    `${notFound.length} step(s) could not be found in the live UI — see console output and ` +
      `${path.relative(process.cwd(), screenshotDir)}/manifest.json. Either the doc's steps are stale or the locator needs tuning.`,
  ).toBe(0);
});
