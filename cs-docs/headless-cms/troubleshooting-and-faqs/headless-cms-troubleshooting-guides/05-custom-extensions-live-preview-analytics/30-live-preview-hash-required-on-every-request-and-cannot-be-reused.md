---
title: "Live Preview Hash - Required on Every Request and Cannot Be Reused"
description: "Live Preview Hash - Required on Every Request and Cannot Be Reused"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/05-custom-extensions-live-preview-analytics/30-live-preview-hash-required-on-every-request-and-cannot-be-reused
doc_type: faq
_cms_section_uid: csc1c30860c7f89df1
_cms_faq_uid: csdace5ceae052530a
---

# Live Preview Hash - Required on Every Request and Cannot Be Reused

A developer asks why the live\_preview hash must be included on every API request during a Live Preview session, whether it can be cached or reused across entries, and how long it remains valid.

**Root Cause**

The live\_preview hash represents the exact editor session state at the time of the request, including draft and unpublished changes specific to that editor’s session. Because the hash is perishable and session-specific, it cannot be reused across sessions, users, or entry fetches.

**Resolution**

-   The hash must be included in every API request during a Live Preview session to ensure the response reflects the editor’s current draft state.
-   The hash cannot be reused across different editor sessions or users - each session generates a unique hash.
-   Prefetching or caching preview responses is limited because the hash changes with each edit action.
-   Implement the onEntryChange callback from the Live Preview SDK to detect when content changes and re-fetch with the latest hash.

Design the Live Preview data-fetching logic to always retrieve the current hash from the SDK before making API calls, rather than caching or reusing a previously obtained hash.
