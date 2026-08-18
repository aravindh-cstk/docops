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
  dialogCount: number;
}

const DIALOG_SELECTOR = '[role="dialog"], [role="alertdialog"], [class*="modal" i]';

export async function captureUiState(page: Page): Promise<UiState> {
  const dialogCount = await page.locator(DIALOG_SELECTOR).count();
  return { url: page.url(), dialogCount };
}

export function isNewUiState(before: UiState, after: UiState): boolean {
  return before.url !== after.url || before.dialogCount !== after.dialogCount;
}
