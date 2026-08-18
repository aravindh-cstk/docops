import fs from "node:fs";
import type { Locator, Page } from "@playwright/test";
import sharp from "sharp";

/**
 * Everything about whether and how to capture a step's screenshot: deciding
 * a step earned one, taking it with a highlight box around the acted-on
 * element, and compressing it to the docs image standard. Consolidated from
 * what used to be screenshot-decision.ts, capture-screenshot.ts, and
 * compress-image.ts — three small files that were always used together, in
 * this exact order, for the same screenshot.
 */

// ---------------------------------------------------------------------------
// Screenshot-worthiness decision
// ---------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------
// Highlighted capture
// ---------------------------------------------------------------------------

const HIGHLIGHT_ID = "__doc_walkthrough_highlight";

/**
 * Screenshot spec matches the published docs portal convention: 1920px-wide
 * viewport, cropped to the app only (no browser chrome — Playwright already
 * does this), acted-on element boxed in a red rounded rectangle.
 */
export async function highlightAndScreenshot(
  page: Page,
  outPath: string,
  locator: Locator | null,
): Promise<void> {
  const box = locator ? await locator.boundingBox().catch(() => null) : null;

  if (box) {
    await page.evaluate(
      ({ x, y, width, height, id }) => {
        const el = document.createElement("div");
        el.id = id;
        el.style.cssText = [
          "position:fixed",
          `left:${x - 6}px`,
          `top:${y - 6}px`,
          `width:${width + 12}px`,
          `height:${height + 12}px`,
          "border:3px solid #E01F4D",
          "border-radius:10px",
          "z-index:2147483647",
          "pointer-events:none",
          "box-sizing:border-box",
        ].join(";");
        document.body.appendChild(el);
      },
      { x: box.x, y: box.y, width: box.width, height: box.height, id: HIGHLIGHT_ID },
    );
  }

  await page.screenshot({ path: outPath });

  if (box) {
    await page.evaluate((id) => document.getElementById(id)?.remove(), HIGHLIGHT_ID);
  }
}

// ---------------------------------------------------------------------------
// Compression
// ---------------------------------------------------------------------------

/**
 * Contentstack's docs-image standard (set the first week Gladys joined):
 * PNG, capped at ~100KB. A raw 1920x1080 Playwright PNG screenshot is
 * typically several hundred KB to a few MB, so every captured screenshot is
 * re-encoded here — first via palette quantization (lossless dimensions,
 * lossy color depth), then by scaling down if quantization alone isn't
 * enough. Never upscales and always leaves a valid PNG in place even if the
 * target can't quite be hit (logs a warning instead of failing the run).
 */
const TARGET_BYTES = 100 * 1024;
const MIN_WIDTH = 800;

export async function compressPngToTarget(filePath: string, targetBytes = TARGET_BYTES): Promise<void> {
  const original = sharp(filePath);
  const meta = await original.metadata();
  let width = meta.width ?? 1920;

  for (let quality = 90; quality >= 30; quality -= 15) {
    const buffer = await sharp(filePath).png({ quality, palette: true, compressionLevel: 9 }).toBuffer();
    if (buffer.length <= targetBytes) {
      fs.writeFileSync(filePath, buffer);
      return;
    }
  }

  // Quantization alone wasn't enough — scale down (keeps it horizontal/landscape,
  // just smaller) until it fits or we hit the minimum useful width.
  while (width > MIN_WIDTH) {
    width = Math.round(width * 0.85);
    const buffer = await sharp(filePath)
      .resize({ width })
      .png({ quality: 60, palette: true, compressionLevel: 9 })
      .toBuffer();
    if (buffer.length <= targetBytes) {
      fs.writeFileSync(filePath, buffer);
      return;
    }
  }

  const finalBuffer = await sharp(filePath)
    .resize({ width: MIN_WIDTH })
    .png({ quality: 50, palette: true, compressionLevel: 9 })
    .toBuffer();
  fs.writeFileSync(filePath, finalBuffer);
  if (finalBuffer.length > targetBytes) {
    console.warn(
      `  Could not get ${filePath} under ${Math.round(targetBytes / 1024)}KB even at ${MIN_WIDTH}px width ` +
        `(landed at ${Math.round(finalBuffer.length / 1024)}KB) — review before publishing.`,
    );
  }
}
