import type { Locator, Page } from "@playwright/test";

/**
 * Everything about turning a doc's numbered procedure into live-page
 * actions: parsing each step's text into a clickable target label, resolving
 * that label to an actual element, and filling in a required form field when
 * a step's own worked example gives us a value to use. Consolidated from
 * what used to be parse-ui-steps.ts, locate-target.ts, and
 * fill-example-value.ts — all three exist purely to get from "this doc step"
 * to "this action on the page," and were always read together.
 */

// ---------------------------------------------------------------------------
// Step parsing
// ---------------------------------------------------------------------------

/**
 * This deliberately doesn't reuse src/exec-parser.ts: that parser strips
 * markdown bold (`**Create Brand Kit**` -> `Create Brand Kit`) because the API
 * exec-test only needs plain step text to classify intent. This parser keeps
 * the bold spans intact — they're the UI element labels ("click **+ New
 * Brand Kit**") the walkthrough uses to build a Playwright locator.
 */
export interface UiStep {
  index: number;
  raw: string;
  targets: string[];
  sectionHeading: string;
  fillValue?: string;
}

export interface ParsedUiSteps {
  hasProcedure: boolean;
  steps: UiStep[];
}

const BOLD_RE = /\*\*(.+?)\*\*/g;
// Confirmed across multiple real docs (create-a-folder.md, reopen-a-discussion.md,
// test-edit-or-delete-a-comment.md): Step 1's "go to X" navigation target is
// commonly quoted rather than bolded ('click the "Assets" icon'), even though
// later steps in the same doc do bold their targets. Without this, Step 1
// always comes back with zero targets and the walkthrough never navigates
// anywhere, silently searching later steps' targets on the wrong page.
// Restricted to a quoted phrase immediately followed by a UI noun so this
// doesn't also match quoted example values or literal strings elsewhere in
// a step (e.g. the shortcut key "E" in 'use the shortcut key "E"'). "module"
// confirmed missing live (test-save-your-views.md: select the "Assets"
// module) — without it, step 1 came back with zero targets and the
// walkthrough never left the dashboard, so every later step's target
// genuinely didn't exist on the (wrong) page it was searching.
const QUOTED_UI_RE =
  /["“]([^"”]+)["”]\s+(?:icon|button|tab|link|menu(?:\s+item)?|option|panel|field|section|module)\b/gi;
// Confirmed against create-a-folder.md: "enter a name for your folder (e.g.,
// Project) and click **Create**" — a required field the doc's own example
// value can fill, so the walkthrough can actually submit the form instead of
// clicking a button that's disabled with nothing entered. Restricted to
// "enter"/"type" so a step's own worked example ("e.g., ...") elsewhere for
// illustration, not data entry, doesn't get typed somewhere unrelated.
const EXAMPLE_VALUE_RE = /\b(?:enter|type)\b[^.]*\(e\.g\.,?\s*([^)]+)\)/i;
const ORDERED_RE = /^(\d+)\.\s+(.+)/;
const HEADING_RE = /^#{1,2}\s+(.+)/;

// A quoted or bolded target can itself be a markdown link — e.g. select the
// "[Assets](/docs/headless-cms/about-assets)" module — confirmed live
// (test-save-your-views.md) that leaving the link syntax in place made
// locateTarget search for the literal, never-matching string
// "[Assets](/docs/headless-cms/about-assets)" instead of "Assets".
function stripMarkdownLink(text: string): string {
  const m = text.match(/^\[([^\]]+)\]\([^)]+\)$/);
  return m ? m[1]! : text;
}

export function parseUiSteps(body: string): ParsedUiSteps {
  const lines = body.split("\n");
  const steps: UiStep[] = [];
  let stepIndex = 0;
  let currentHeading = "";
  let insideCode = false;

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed.startsWith("```")) {
      insideCode = !insideCode;
      continue;
    }
    if (insideCode) continue;

    const heading = trimmed.match(HEADING_RE);
    if (heading) {
      currentHeading = heading[1].trim();
      continue;
    }

    const ordered = trimmed.match(ORDERED_RE);
    if (ordered) {
      const raw = ordered[2].trim();
      const targets = [
        ...[...raw.matchAll(BOLD_RE)].map((m) => stripMarkdownLink(m[1].trim())),
        ...[...raw.matchAll(QUOTED_UI_RE)].map((m) => stripMarkdownLink(m[1].trim())),
      ];
      const fillValue = raw.match(EXAMPLE_VALUE_RE)?.[1]?.trim();
      steps.push({ index: ++stepIndex, raw, targets, sectionHeading: currentHeading, fillValue });
    }
  }

  return { hasProcedure: steps.length > 0, steps };
}

export function stripFrontMatter(raw: string): string {
  return raw.replace(/^---[\s\S]*?---\s*/, "").trim();
}

const ALT_TEXT_MAX_LENGTH = 150;

/**
 * Concise, descriptive alt text per the docs image standard — explains what
 * the screenshot shows, never "image of" / "picture of" framing. Reuses the
 * step's own instruction text (already describes the on-screen action/state)
 * rather than the filename, and trims to a sentence boundary under ~150
 * chars so it stays "concise" rather than pasting the whole step verbatim.
 */
export function buildAltText(step: UiStep): string {
  const cleaned = step.raw
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/`(.+?)`/g, "$1")
    // A raw markdown link (e.g. "[stack](/docs/headless-cms/about-stack)")
    // left in place lands verbatim inside the alt attribute — confirmed
    // live, where the docs linter then misread its nested "(/path)" as an
    // absolute-path image reference. Keep just the link text, same
    // treatment as bold/code above.
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\\([+➕])/g, "$1")
    .replace(/\s+/g, " ")
    .trim();

  if (cleaned.length <= ALT_TEXT_MAX_LENGTH) return cleaned;

  const truncated = cleaned.slice(0, ALT_TEXT_MAX_LENGTH);
  const lastSentenceEnd = Math.max(truncated.lastIndexOf(". "), truncated.lastIndexOf(", "));
  return (lastSentenceEnd > 40 ? truncated.slice(0, lastSentenceEnd) : truncated).trim();
}

// ---------------------------------------------------------------------------
// Target location
// ---------------------------------------------------------------------------

/**
 * Best-effort resolution of a doc step's bold UI label ("+ New Brand Kit",
 * "Create Brand Kit") to an actual element on the page. Tries the roles a
 * step target is usually one of, in order of specificity, then plain text
 * match, and only as a true last resort a data-test-id/data-testid/data-qa
 * token match for icon-only controls with no accessible name and no text
 * at all. Returns null (not throws) so the caller can record a "not-found"
 * step result instead of crashing the whole walkthrough.
 */
export async function locateTarget(page: Page, target: string): Promise<Locator | null> {
  // Doc source sometimes markdown-escapes a leading "+" (`**\+ New Asset**`)
  // so it isn't parsed as a list marker — confirmed live that leaving the
  // backslash in place made every candidate below search for the literal,
  // never-matching string "\+ New Asset" instead of "New Asset".
  const cleaned = target.replace(/^\\?[+➕]\s*/, "").trim();
  if (!cleaned) return null;

  // getByText is listed here (not appended after the loop) so both passes
  // below share one candidate list — see the comment further down on why it
  // must still be tried before the data-test-id fallback.
  const candidates: Array<() => Locator> = [
    () => page.getByRole("button", { name: cleaned, exact: false }),
    () => page.getByRole("menuitem", { name: cleaned, exact: false }),
    () => page.getByRole("link", { name: cleaned, exact: false }),
    () => page.getByRole("tab", { name: cleaned, exact: false }),
    () => page.getByLabel(cleaned, { exact: false }),
    () => page.getByPlaceholder(cleaned, { exact: false }),
    () => page.getByText(cleaned, { exact: false }),
  ];

  // Fast pass: instant count() checks, same cost as before this file ever
  // added a wait — most targets match one of the first couple candidates
  // immediately, and a bounded wait on every candidate (this file's earlier
  // fix for the one case below) turned out to tax EVERY step by several
  // seconds even when the very next candidate would have matched instantly.
  // Confirmed live: that blew a doc's total walkthrough time past the
  // 60s test timeout.
  for (const make of candidates) {
    const locator = make().first();
    if ((await locator.count()) > 0) return locator;
  }

  // Slow pass, only reached when NOTHING matched instantly: confirmed live
  // that a step run right after a preceding action (e.g. a folder-create
  // response triggering the list/toolbar to re-render) can catch this exact
  // corner of the page mid-remount, with zero matching elements for the
  // length of an instant check even though the target reappears within
  // ~1s. Retrying with a short bounded wait costs nothing in the common
  // case (the fast pass above already returned) and only applies this
  // latency to the rare step that actually needs it.
  for (const make of candidates) {
    const locator = make().first();
    const appeared = await locator
      .waitFor({ state: "visible", timeout: 1_500 })
      .then(() => true)
      .catch(() => false);
    if (appeared) return locator;
  }

  // data-test-id token match is the true last resort, after getByText —
  // confirmed live that a modal's own visible heading text (e.g. "Create
  // Asset Folder") can share vocabulary with an unrelated icon's
  // data-test-id (e.g. "asset-create-new-folder"), and matching the icon
  // again re-clicked it, toggling the modal it had just opened closed. Real,
  // visible text a human would actually read should win over a coincidental
  // id-token match.
  const testIdMatch = await locateByTestIdTokens(page, cleaned);
  if (testIdMatch) return testIdMatch;

  return null;
}

/**
 * Confirmed against Contentstack's own icon-only buttons: plain
 * <span role="button">/<button> with no aria-label, no title, no text
 * content — every role/label/text-based strategy above sees an empty
 * accessible name. The only hint is a data-test-id, e.g.
 * "cs-asset-create-new-folder" for a doc step worded "Create new asset
 * folder" — note "asset" sits BEFORE "create-new" in the id but AFTER it
 * in the doc's prose. A prefix/suffix/substring match on the slugified
 * target therefore misses it; this instead checks that every word in the
 * target appears SOMEWHERE among the id's hyphen/underscore-separated
 * tokens, regardless of order. Still precise (all words must be present,
 * not just one), since a data-test-id is a deliberate, scoped identifier,
 * not arbitrary prose.
 */
async function locateByTestIdTokens(page: Page, cleaned: string): Promise<Locator | null> {
  const targetWords = cleaned
    .toLowerCase()
    .split(/[\s\-_]+/)
    .filter(Boolean);
  if (targetWords.length === 0) return null;

  const candidates = page.locator("[data-test-id], [data-testid], [data-qa]");
  const count = await candidates.count();

  for (let i = 0; i < count; i++) {
    const el = candidates.nth(i);
    const attr =
      (await el.getAttribute("data-test-id")) ??
      (await el.getAttribute("data-testid")) ??
      (await el.getAttribute("data-qa")) ??
      "";
    const tokens = new Set(
      attr
        .toLowerCase()
        .split(/[\s\-_]+/)
        .filter(Boolean),
    );
    if (targetWords.every((w) => tokens.has(w))) return el;
  }

  return null;
}

// ---------------------------------------------------------------------------
// Example-value form fill
// ---------------------------------------------------------------------------

/**
 * Best-effort form-fill for a step's "enter ... (e.g., X)" instruction —
 * confirmed necessary against Contentstack's Create Asset Folder modal,
 * whose Create button stays disabled until the required Folder name field
 * has a value, so a click-only walkthrough could open the modal but never
 * actually submit it.
 *
 * Deliberately scoped to inputs INSIDE an actual modal dialog, not the
 * whole page. Confirmed live, three times: an unscoped "first visible text
 * input" search, then "[class*=panel]"/"[class*=overlay]", then even
 * "[class*=modal]" alone all still matched Contentstack's page-level
 * "Search assets" box instead of the real Folder name field — some
 * ancestor of that search box apparently has "modal" somewhere in its
 * class name too, unrelated to any real dialog. Since Playwright's
 * `.first()` picks by DOM order across every comma-separated alternative
 * (not by which alternative is listed first), and this app's real dialog
 * is a react-modal portal appended at the very end of <body>, the
 * earlier-in-DOM search box kept winning even though the correct match
 * also existed later in the tree. Confirmed live via the real Folder name
 * field's ancestor chain that role="dialog" is present and reliable — that
 * alone is precise enough, without a class-name guess. A missed fill
 * (nothing typed, click stays inert) is far safer than a wrong one.
 */
const MODAL_CONTAINERS = ['[role="dialog"]', '[role="alertdialog"]'];

const MODAL_INPUT_SELECTOR = MODAL_CONTAINERS.flatMap((c) => [
  `${c} input[type="text"]:visible`,
  `${c} input:not([type]):visible`,
  `${c} textarea:visible`,
]).join(", ");

export async function fillExampleValue(page: Page, value: string): Promise<boolean> {
  const input = page.locator(MODAL_INPUT_SELECTOR).first();
  if ((await input.count()) === 0) return false;

  try {
    const current = await input.inputValue();
    if (current.trim() !== "") return false;
  } catch {
    return false;
  }

  try {
    await input.fill(value, { timeout: 3000 });
    const description = await input
      .evaluate((el) => `<${el.tagName.toLowerCase()} class="${el.className}" placeholder="${el.getAttribute("placeholder") ?? ""}">`)
      .catch(() => "<unknown>");
    console.log(`Filled "${value}" into ${description}`);
    return true;
  } catch {
    return false;
  }
}
