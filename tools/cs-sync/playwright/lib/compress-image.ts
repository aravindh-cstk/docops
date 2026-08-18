import fs from "node:fs";
import sharp from "sharp";

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
