import type { Page } from "@playwright/test";

/**
 * Screenshot-worthiness heuristic, per the convention confirmed against both
 * this repo's existing docs and the published docs portal: a step earns a
 * screenshot only when it introduces a NEW UI state (a modal appears, the
 * URL changes, a panel opens) — not on routine/repetitive steps. See
 * TEAM_HANDOFF_GUIDE.md Step 4.5 for the full rule.
 */
export interface UiState {
  url: string;
  panelCount: number;
  editableCount: number;
}

// Broad enough to catch modals, popovers, and panel/overlay surfaces across
// different products' markup, not just an explicit dialog role — confirmed
// against Contentstack's own comment UI, which renders as a plain
// `.commentbox` div with no role="dialog" and no "modal" in its class name.
const PANEL_SELECTOR =
  '[role="dialog"], [role="alertdialog"], [class*="modal" i], [class*="popover" i], ' +
  '[class*="panel" i], [class*="overlay" i], [class*="tooltip" i], [class*="commentbox" i]';

// A step that turns static content into an editable field (e.g. clicking an
// Edit icon) is screenshot-worthy even without a dialog/panel appearing —
// confirmed against Contentstack's comment-edit UI, which just toggles an
// `editing-mode` class and swaps in a <textarea> in place, with no dialog
// role and no "modal"/"panel"/etc. class anywhere for PANEL_SELECTOR to see.
const EDITABLE_SELECTOR = 'textarea, [contenteditable="true"]';

export async function captureUiState(page: Page): Promise<UiState> {
  const [panelCount, editableCount] = await Promise.all([
    page.locator(PANEL_SELECTOR).count(),
    page.locator(EDITABLE_SELECTOR).count(),
  ]);
  return { url: page.url(), panelCount, editableCount };
}

export function isNewUiState(before: UiState, after: UiState): boolean {
  return (
    before.url !== after.url ||
    before.panelCount !== after.panelCount ||
    before.editableCount !== after.editableCount
  );
}
