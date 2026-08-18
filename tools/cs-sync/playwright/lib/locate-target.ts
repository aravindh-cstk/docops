import type { Locator, Page } from "@playwright/test";

/**
 * Best-effort resolution of a doc step's bold UI label ("+ New Brand Kit",
 * "Create Brand Kit") to an actual element on the page. Tries the roles a
 * step target is usually one of, in order of specificity, falls back to a
 * data-test-id/data-testid token match for icon-only controls with no
 * accessible name, and finally to plain text match. Returns null (not
 * throws) so the caller can record a "not-found" step result instead of
 * crashing the whole walkthrough.
 */
export async function locateTarget(page: Page, target: string): Promise<Locator | null> {
  const cleaned = target.replace(/^[+➕]\s*/, "").trim();
  if (!cleaned) return null;

  // Confirmed against Contentstack's own comment Edit/Delete icons: plain
  // <span role="button"> with no aria-label, no title, no text content —
  // every role/label/text-based strategy below sees an empty accessible
  // name. The only hint is a hyphen-tokenized data-test-id, e.g.
  // "cs-comment-item-message-action-edit-0". Match on a whole token, not a
  // raw substring, so "Edit" doesn't also match a hypothetical "editorial".
  const testIdSlug = cleaned.toLowerCase().replace(/\s+/g, "-");
  const testIdSelector = ["data-test-id", "data-testid", "data-qa"]
    .flatMap((attr) => [
      `[${attr}="${testIdSlug}" i]`,
      `[${attr}^="${testIdSlug}-" i]`,
      `[${attr}$="-${testIdSlug}" i]`,
      `[${attr}*="-${testIdSlug}-" i]`,
    ])
    .join(", ");

  const candidates: Array<() => Locator> = [
    () => page.getByRole("button", { name: cleaned, exact: false }),
    () => page.getByRole("menuitem", { name: cleaned, exact: false }),
    () => page.getByRole("link", { name: cleaned, exact: false }),
    () => page.getByRole("tab", { name: cleaned, exact: false }),
    () => page.getByLabel(cleaned, { exact: false }),
    () => page.getByPlaceholder(cleaned, { exact: false }),
    () => page.locator(testIdSelector),
    () => page.getByText(cleaned, { exact: false }),
  ];

  for (const make of candidates) {
    const locator = make().first();
    if ((await locator.count()) > 0) return locator;
  }

  return null;
}
