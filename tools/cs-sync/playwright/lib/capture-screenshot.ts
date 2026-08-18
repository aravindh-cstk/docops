import type { Locator, Page } from "@playwright/test";

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
