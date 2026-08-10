---
title: "JavaScript Heap Out of Memory During Large Asset Migration"
description: "JavaScript Heap Out of Memory During Large Asset Migration"
url: /headless-cms/troubleshooting-and-faqs/cli-troubleshooting-guides/01-authentication-network-node-js-environments/10-javascript-heap-out-of-memory-during-large-asset-migration
doc_type: faq
_cms_section_uid: csa660d8dc4c7aa6bb
_cms_faq_uid: csf458952c51e50420
---

# JavaScript Heap Out of Memory During Large Asset Migration

A large asset migration (roughly 5,354 assets across 554 folders, 5.53GB) consistently crashed at around 80% completion with a "JavaScript heap out of memory" error, even after raising the Node.js memory limit to 30GB.

**Root Cause**

Crashing well below a 30GB heap ceiling points to a memory-handling issue in the CLI's asset import process, not an under-provisioned heap. Default asset upload settings are already conservative (assetBatchLimit: 1, uploadAssetsConcurrency: 2, importFoldersConcurrency: 1). The import process loads the full list of assets and folder mappings into memory and keeps mapping data (asset-to-UID, URL, and folder maps) in memory for the life of the module's run; asset file bytes themselves are referenced by path rather than loaded into memory. The exact point at which memory use becomes unbounded has not been pinned down.

**Resolution**

1.  Build a custom upload script against the already-exported asset files instead of relying on the CLI's built-in asset import for this batch size.
2.  Limit request concurrency in the custom script to keep memory usage bounded.
3.  As a lighter alternative before a full custom script, try lowering assetBatchLimit, uploadAssetsConcurrency, and importFoldersConcurrency further via csdx cm:stacks:import --config <file>, and split the import into smaller runs. This has not been verified against this specific failure.
