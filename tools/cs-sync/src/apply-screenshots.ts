#!/usr/bin/env node
/**
 * Phase 2 of the doc walkthrough (see playwright/doc-walkthrough.spec.ts for
 * phase 1). Reads the manifest a walkthrough run wrote, uploads every
 * captured screenshot to CS-Docs Sandbox as an Asset (reusing the same
 * ContentstackClient.uploadAsset the image-sync path already uses, so
 * uploaded images land through the identical CDN URL shape every other
 * screenshot in cs-docs already uses), and splices the resulting
 * `![alt](cdn-url)` tag onto the end of the matching step's line —
 * matching the inline placement convention found throughout cs-docs
 * (e.g. cs-docs/brand-kit/set-up-brand-kit/create-a-brand-kit.md).
 *
 * More than 2 screenshots for one doc go into a folder named after the
 * doc's own slug (e.g. test-save-your-views/) instead of dropping loose
 * into the root Assets library — keeps a busy procedure's images grouped
 * without cluttering root for docs that only need a shot or two. Re-running
 * this for the same doc replaces each existing asset (by filename) in
 * place rather than uploading a fresh duplicate every time.
 *
 * Usage: npm run doc:apply-screenshots -- --doc=cs-docs/brand-kit/set-up-brand-kit/create-a-brand-kit.md
 */
import "./loadEnv.js";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadSandboxConfig } from "./config.js";
import { ContentstackClient } from "./contentstack.js";

// Above this many screenshots, group them in a per-doc folder instead of
// the root Assets library.
const FOLDER_THRESHOLD = 2;

interface ManifestEntry {
  index: number;
  raw: string;
  status: "done" | "not-found" | "no-target";
  screenshotPath: string | null;
  altText: string | null;
}

function firstWords(raw: string, n = 6): string {
  return raw.split(/\s+/).slice(0, n).join(" ");
}

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

async function main() {
  const docArg = process.argv.find((a) => a.startsWith("--doc="))?.split("=")[1];
  if (!docArg) {
    console.error("Usage: npm run doc:apply-screenshots -- --doc=cs-docs/path/to/file.md");
    process.exit(1);
  }

  const scriptDir = path.dirname(fileURLToPath(import.meta.url));
  const repoRoot = path.resolve(scriptDir, "..", "..", "..");
  const absDocPath = path.isAbsolute(docArg) ? docArg : path.join(repoRoot, docArg);
  const docSlug = path.basename(docArg, ".md");
  const screenshotDir = path.join(repoRoot, "tools", "cs-sync", "playwright", "screenshots", docSlug);
  const manifestPath = path.join(screenshotDir, "manifest.json");

  if (!fs.existsSync(manifestPath)) {
    console.error(
      `No manifest found at ${manifestPath} — run the Playwright walkthrough first ` +
        `("Docs: Playwright Procedure Walkthrough" in VS Code, or npm run doc:walkthrough).`,
    );
    process.exit(1);
  }

  const manifest: ManifestEntry[] = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  const withShots = manifest.filter((m): m is ManifestEntry & { screenshotPath: string } => !!m.screenshotPath);

  if (withShots.length === 0) {
    console.log("No screenshots captured for this doc — nothing to apply.");
    return;
  }

  const config = loadSandboxConfig(repoRoot, "csdocs");
  const client = new ContentstackClient(config);

  // null = root Assets library (1-2 screenshots isn't worth a folder).
  let folderUid: string | null = null;
  if (withShots.length > FOLDER_THRESHOLD) {
    const folder = await client.findOrCreateFolder(docSlug);
    folderUid = folder.uid;
    console.log(`Using folder "${docSlug}" (${withShots.length} screenshots) — ${folder.uid}`);
  }

  let markdown = fs.readFileSync(absDocPath, "utf8");

  for (const entry of withShots) {
    if (!fs.existsSync(entry.screenshotPath)) {
      console.warn(`  Screenshot missing on disk, skipping: ${entry.screenshotPath}`);
      continue;
    }

    const filename = path.basename(entry.screenshotPath);
    console.log(`Uploading ${filename}...`);
    // Upsert, not a fresh upload every time — re-running this script for the
    // same doc (e.g. after a doc edit) replaces each existing asset by
    // filename in place instead of piling up duplicates in the Sandbox.
    const asset = await client.upsertAsset(entry.screenshotPath, folderUid);
    // Alt text is the descriptive sentence buildAltText() generated at capture
    // time (docs standard: explains what's shown, never "image of X") — the
    // filename stays a plain step-numbered asset name, that's a separate concern.
    const altText = entry.altText ?? filename.replace(/\.png$/i, "");
    const imageTag = `![${altText}](${asset.url})`;

    const stepLineRe = new RegExp(`^(\\d+\\.\\s+.*${escapeRegExp(firstWords(entry.raw))}.*)$`, "m");
    const match = markdown.match(stepLineRe);
    if (match) {
      const line = match[1]!;
      // An existing image tag on this line (from an earlier run of this
      // script) gets replaced in place — appending a second one would
      // duplicate the screenshot in the doc every time this re-runs.
      const existingImageRe = /!\[[^\]]*\]\([^)]*\)\s*$/;
      const newLine = existingImageRe.test(line)
        ? line.replace(existingImageRe, imageTag)
        : `${line}${imageTag}`;
      markdown = markdown.replace(line, newLine);
      console.log(`  Inserted into step ${entry.index}`);
    } else {
      console.warn(`  Could not find step ${entry.index}'s line verbatim — appending image tag at end of file.`);
      markdown += `\n\n${imageTag}\n`;
    }
  }

  fs.writeFileSync(absDocPath, markdown, "utf8");
  console.log(`\nDone — ${withShots.length} screenshot(s) applied to ${docArg}`);
}

main().catch((err) => {
  console.error("apply-screenshots failed:", err);
  process.exit(1);
});
