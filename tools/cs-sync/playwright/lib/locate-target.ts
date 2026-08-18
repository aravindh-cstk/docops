import type { Locator, Page } from "@playwright/test";

/**
 * Best-effort resolution of a doc step's bold UI label ("+ New Brand Kit",
 * "Create Brand Kit") to an actual element on the page. Tries the roles a
 * step target is usually one of, in order of specificity, and falls back to
 * plain text match. Returns null (not throws) so the caller can record a
 * "not-found" step result instead of crashing the whole walkthrough.
 */
export async function locateTarget(page: Page, target: string): Promise<Locator | null> {
  const cleaned = target.replace(/^[+➕]\s*/, "").trim();
  if (!cleaned) return null;

  const candidates: Array<() => Locator> = [
    () => page.getByRole("button", { name: cleaned, exact: false }),
    () => page.getByRole("menuitem", { name: cleaned, exact: false }),
    () => page.getByRole("link", { name: cleaned, exact: false }),
    () => page.getByRole("tab", { name: cleaned, exact: false }),
    () => page.getByLabel(cleaned, { exact: false }),
    () => page.getByPlaceholder(cleaned, { exact: false }),
    () => page.getByText(cleaned, { exact: false }),
  ];

  for (const make of candidates) {
    const locator = make().first();
    if ((await locator.count()) > 0) return locator;
  }

  return null;
}
