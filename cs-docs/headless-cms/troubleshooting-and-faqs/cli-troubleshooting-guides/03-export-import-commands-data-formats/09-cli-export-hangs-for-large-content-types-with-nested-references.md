---
title: "CLI Export Hangs for Large Content Types with Nested References"
description: "CLI Export Hangs for Large Content Types with Nested References"
url: /headless-cms/troubleshooting-and-faqs/cli-troubleshooting-guides/03-export-import-commands-data-formats/09-cli-export-hangs-for-large-content-types-with-nested-references
doc_type: faq
_cms_section_uid: csfc06f8b79b93b694
_cms_faq_uid: cs45d67a46a71f7bdd
---

# CLI Export Hangs for Large Content Types with Nested References

Exporting a large content type (~85,000 records with references and arrays) using csdx cm:export-to-csv appeared to hang indefinitely.

**Root Cause**

export-to-csv is not deadlocked; it fetches entries one page at a time (100 per request, sequential, no concurrency) and flattens nested references and arrays into individual columns. All flattened rows accumulate in memory, and the CSV is written only once, after every page is fetched. For ~85,000 records, that's roughly 850 sequential calls with growing memory use and no per-page progress output beyond a static loader message, making a slow but progressing export look identical to a hang.

**Resolution**

1.  Use csdx cm:stacks:export to export in JSON format instead; it paginates the same way but writes each page to disk as it's fetched and reports progress per entry.
2.  Include all referenced content types explicitly with --content-types.
3.  Convert the exported JSON to CSV afterward with a script, if CSV is still required.
