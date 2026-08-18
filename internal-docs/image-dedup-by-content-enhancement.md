# Enhancement: dedupe uploaded images by content, not just filename

## Problem

`uploadLocalImage` in [tools/cs-sync/src/assets.ts](tools/cs-sync/src/assets.ts#L74-L100) decides whether to upload a local image or reuse an existing Contentstack asset by looking up the asset **filename only**:

```ts
const filename = path.basename(abs);
if (fs.existsSync(abs)) {
  const existing = await client.findAssetByFilename(filename);
  const result = existing ?? (await client.uploadAsset(abs));
  ...
```

It never compares file content. If two different images across two different docs share the same filename, the sync uploads the first one, then reuses that same asset for the second doc, even though the second doc's local file has different content.

## Confirmed reproduction

During round-2 testing of the product sync (see `github-to-sandbox-testing.csv`, scenarios 7 to 9), three docs each referenced a different local screenshot, all saved as `docops-shared.png` in different folders:

- `cs-docs/marketplace/docops-shared.png`
- `cs-docs/docops-shared.png`
- `docops-shared.png` (repo root)

All three synced entries ended up pointing at the same Contentstack asset uid (`blt49ebbf8aacd523e4`), the one uploaded for the first doc processed. The other two docs silently display the wrong image.

## Why the existing lint does not fully cover this

`checkImages` in [tools/cs-sync/src/style-lint.ts](tools/cs-sync/src/style-lint.ts#L584-L614) already rejects generic image filenames and alt text (`image`, `screenshot`, `img1`, `untitled`, `figure`, `photo`, and similar, matched case-insensitively against the whole filename minus extension). A file literally named `screenshot.png` fails lint and never merges.

That closes the obvious case, but not this one:

- Two different authors, in two different folders, each choose a specific-sounding but coincidentally identical filename, for example two unrelated diagrams both named `architecture-diagram.png`.
- Neither name is generic, so lint passes both.
- The upload path still collapses them into one shared asset by filename, with no error or warning.

## Proposed fix

Add a content check before treating a filename match as a genuine duplicate:

1. When `findAssetByFilename` returns a match, compare the local file's content against the existing asset (for example a hash, or a byte-for-byte fetch-and-compare) instead of accepting the filename match outright.
2. If the content differs, upload the local file as a new asset instead of reusing the existing one (Contentstack allows multiple assets with the same filename, they get distinct uids).
3. If the content matches, keep the current reuse behavior, so true duplicates still dedupe as they do today.

## Scope note

This is pre-existing behavior in the sync pipeline, unrelated to the recent product-config changes (`PRODUCT_CONFIG` in `docs-article.ts`) that round 1 and round 2 testing covered. It was found during round-2 image-upload testing, not caused by it, and is out of scope for that work. Filing here as a follow-up for the team to prioritize.
