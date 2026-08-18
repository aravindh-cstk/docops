import type { Page } from "@playwright/test";

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
