---
title: "Bulk API Shows Complete But Entries Published to Only One Environment"
description: "Bulk API Shows Complete But Entries Published to Only One Environment"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/02-publishing-releases-environments-and-operations/05-bulk-api-shows-complete-but-entries-published-to-only-one-environment
doc_type: faq
_cms_section_uid: cs6b2319c16c86eb80
_cms_faq_uid: csaf8fa3f383fde5c0
---

# Bulk API Shows Complete But Entries Published to Only One Environment

A Bulk API publish job returns a success or complete status, but the published entries only appear in one of the two intended environments (for example, staging instead of both staging and development).

**Root Cause**

The Bulk API was functioning correctly. The issue was in the implementation — the API request payload was not consistently including both environments in the publish target. When the payload specifies only one environment, the API publishes to that environment and returns complete, which is accurate for the request it received.

**Resolution**

1.  Review the Bulk API request payload and confirm that both target environments are included in the environments array of the publish request body.

**Example structure:** { "entries": \[...\], "locales": \[...\], "environments": \["staging", "development"\] }

1.  Test the corrected payload for a single entry before running the full bulk operation.
2.  Re-run the bulk publish with the corrected payload and verify the entries appear in both environments.

After correcting the environments array in the payload, re-run the bulk publish. If entries appear in both environments after the job completes, the payload is now correct.
