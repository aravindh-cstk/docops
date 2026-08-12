---
title: "Branch Merge Fails with Error Code 116 (Global Fields: Failed to Fetch Global Fields)"
description: "Branch Merge Fails with Error Code 116 (Global Fields: Failed to Fetch Global Fields)"
url: /headless-cms/support-troubleshooting/cli-troubleshooting-guides/02-migration-cloning-architecture/16-branch-merge-fails-with-error-code-116-global-fields-failed-to-fetch-global-fields
doc_type: faq
_cms_section_uid: csb1edc2dfd2a48935
_cms_faq_uid: csd26c7b9412a3eaf2
---

# Branch Merge Fails with Error Code 116 (Global Fields: Failed to Fetch Global Fields)

Merging branches failed with Error Code 116, "Global Fields: Failed to fetch global fields."

**Root Cause**

csdx cm:branches:merge doesn't implement merge logic itself - it sends a single API request and prints back whatever error comes from that call, including error 116. The only client-side error handling is a retry on HTTP 429 (rate limiting); the CLI does not inspect error code 116 specifically or evaluate field visibility rules on its own. The specific mechanism (an outdated field visibility rule migrating inconsistently between branches) is a stack/backend condition, not CLI behavior - the fix below is a confirmed workaround, but the CLI itself doesn't reveal why it works. Error 116 can surface from any transient failure fetching global fields during a merge, so it isn't necessarily specific to field visibility rules.

**Resolution**

1.  Review field visibility rules for global fields across the branches involved (a stack/content-type configuration step in the UI or Content Management API, not a CLI operation).
2.  Identify and manually remove the outdated field visibility rule in the main branch.
3.  Re-run csdx cm:branches:merge - it resends the request; the CLI doesn't retry or fix this automatically.
