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
  const cleaned = target.replace(/^[+➕]\s*/, "").trim();
  if (!cleaned) return null;

  const roleAndTextCandidates: Array<() => Locator> = [
    () => page.getByRole("button", { name: cleaned, exact: false }),
    () => page.getByRole("menuitem", { name: cleaned, exact: false }),
    () => page.getByRole("link", { name: cleaned, exact: false }),
    () => page.getByRole("tab", { name: cleaned, exact: false }),
    () => page.getByLabel(cleaned, { exact: false }),
    () => page.getByPlaceholder(cleaned, { exact: false }),
  ];

  for (const make of roleAndTextCandidates) {
    const locator = make().first();
    if ((await locator.count()) > 0) return locator;
  }

  // getByText before the data-test-id fallback: confirmed live that a
  // modal's own visible heading text (e.g. "Create Asset Folder") can share
  // vocabulary with an unrelated icon's data-test-id (e.g. "asset-create-
  // new-folder"), and matching the icon again re-clicked it, toggling the
  // modal it had just opened closed. Real, visible text a human would
  // actually read should win over a coincidental id-token match — the
  // data-test-id strategy exists for icon-only elements that have no text
  // at all, so it's a true last resort.
  const textLocator = page.getByText(cleaned, { exact: false }).first();
  if ((await textLocator.count()) > 0) return textLocator;

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
