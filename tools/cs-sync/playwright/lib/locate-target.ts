import type { Locator, Page } from "@playwright/test";

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
