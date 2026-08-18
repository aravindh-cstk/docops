import fs from "node:fs";
import path from "node:path";
import { expect, test, type Locator } from "@playwright/test";
import { buildAltText, parseUiSteps, stripFrontMatter } from "./lib/parse-ui-steps.js";
import { locateTarget } from "./lib/locate-target.js";
import { captureUiState, isNewUiState } from "./lib/screenshot-decision.js";
import { highlightAndScreenshot } from "./lib/capture-screenshot.js";
import { compressPngToTarget } from "./lib/compress-image.js";
import { loginIfNeeded } from "./lib/login.js";
import { resolveDevStackUrl, isDev11Url } from "./lib/resolve-stack-url.js";
import { pauseForDev11Setup } from "./lib/dev11-handoff.js";
import { fillExampleValue } from "./lib/fill-example-value.js";

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
  filledValue: string | null;
}

async function describeElement(locator: Locator): Promise<string> {
  return locator
    .evaluate((el) => {
      const testId = el.getAttribute("data-test-id") ?? el.getAttribute("data-testid");
      return `<${el.tagName.toLowerCase()}${testId ? ` data-test-id="${testId}"` : ""} class="${el.className}">`;
    })
    .catch(() => "<unknown>");
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

  // dev11 always hands off to a human — org/stack names vary project to
  // project, so there's nothing here to detect or automate (see
  // dev11-handoff.ts). Only the Sandbox path gets the login-form-detecting,
  // possibly-skip-entirely treatment in login.ts.
  if (isDev11Url(devStackUrl!)) {
    await pauseForDev11Setup(page, docPath!);
  } else {
    await loginIfNeeded(page, process.env.DEV_STACK_LOGIN_EMAIL, process.env.DEV_STACK_LOGIN_PASSWORD, devStackUrl);
  }

  // A deep link straight into an entry can trigger a login redirect and,
  // once resumed, a second navigation back to the original URL — give that
  // render a chance to settle before searching for step targets. Confirmed
  // against Contentstack's entry editor: page.goto()'s "load" event fires
  // well before fields/comments actually render, so searching immediately
  // after resume can match incidental static chrome instead of real content.
  await page.waitForLoadState("networkidle", { timeout: 15_000 }).catch(() => {});

  const manifest: ManifestEntry[] = [];
  let shotCount = 0;
  // Contentstack doesn't enforce folder/asset-name uniqueness itself —
  // confirmed live, where repeated walkthrough runs silently piled up
  // several identically-named "Project" folders in the Sandbox stack
  // instead of erroring. A short per-run suffix keeps each run's created
  // name distinct so the Sandbox doesn't accumulate duplicates.
  const runSuffix = Date.now().toString(36);

  for (const step of steps) {
    if (step.targets.length === 0) {
      manifest.push({
        index: step.index,
        raw: step.raw,
        status: "no-target",
        screenshotPath: null,
        altText: null,
        filledValue: null,
      });
      continue;
    }

    const before = await captureUiState(page);

    // A success toast/banner from the previous step (e.g. "Folder created
    // successfully.") can render over the same top-right corner as this
    // step's target and block the click for its whole timeout — confirmed
    // live, where this left the "+ New Asset" button unreachable right
    // after creating a folder. Give it a chance to clear first; a toast
    // that never disappears (or wasn't there at all) just times out here
    // without failing the step.
    await page
      .locator('[role="alert"], [role="status"]')
      .first()
      .waitFor({ state: "hidden", timeout: 5_000 })
      .catch(() => {});

    let status: ManifestEntry["status"] = "not-found";
    let lastLocator = null as Awaited<ReturnType<typeof locateTarget>>;
    let filledValue: string | null = null;

    for (const targetText of step.targets) {
      const locator = await locateTarget(page, targetText);
      if (!locator) continue;
      try {
        await locator.click({ timeout: 5000 });
        await page.waitForTimeout(300);
        status = "done";
        lastLocator = locator;
        console.log(`Step ${step.index} clicked "${targetText}" -> ${await describeElement(locator)}`);

        // Fill a required field's example value (e.g. a folder name) right
        // after whichever click opened its modal/panel, so a later submit
        // button that's disabled with nothing entered (Contentstack's
        // Create Asset Folder modal, confirmed live) can actually be
        // clicked. Scoped to modal-contained inputs (see
        // fill-example-value.ts) so this is a no-op until that modal is
        // genuinely open, rather than firing on the very first click.
        if (step.fillValue && filledValue === null) {
          const uniqueValue = `${step.fillValue}-${runSuffix}`;
          if (await fillExampleValue(page, uniqueValue)) {
            filledValue = uniqueValue;
          }
        }
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
        // The 300ms click-settle wait above is enough for a modal/panel to
        // appear, but not for an async-loaded list (e.g. the Assets grid) to
        // finish fetching — confirmed live, where that left a loading
        // spinner baked into the captured screenshot. "networkidle" turned
        // out not to help here (confirmed live, still 5s of nothing but a
        // spinner) — Contentstack's app likely keeps a background
        // connection open (see the "load" vs "domcontentloaded" comment
        // above), so networkidle may just burn its whole timeout without
        // ever actually going idle. Wait on the loading spinner itself
        // instead: give it a moment to appear (it may not have mounted yet
        // at this exact instant), then wait for it to go away.
        const spinner = page.locator('[class*="loader" i]').first();
        await spinner.waitFor({ state: "attached", timeout: 1_000 }).catch(() => {});
        await spinner.waitFor({ state: "hidden", timeout: 10_000 }).catch(() => {});
        await highlightAndScreenshot(page, screenshotPath, lastLocator);
        // Docs image standard: PNG, ~100KB max, horizontal (the 1920x1080
        // viewport above already guarantees landscape framing).
        await compressPngToTarget(screenshotPath);
        altText = buildAltText(step);
      }
    }

    manifest.push({ index: step.index, raw: step.raw, status, screenshotPath, altText, filledValue });
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
