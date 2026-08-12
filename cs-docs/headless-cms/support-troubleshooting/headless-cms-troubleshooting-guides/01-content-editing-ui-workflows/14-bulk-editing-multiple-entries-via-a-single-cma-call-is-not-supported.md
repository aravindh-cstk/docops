---
title: "Bulk Editing Multiple Entries via a Single CMA Call Is Not Supported"
description: "Bulk Editing Multiple Entries via a Single CMA Call Is Not Supported"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/14-bulk-editing-multiple-entries-via-a-single-cma-call-is-not-supported
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs53cc68386e154052
---

# Bulk Editing Multiple Entries via a Single CMA Call Is Not Supported

A request is made to update multiple entries simultaneously using a single CMA API call. No documentation appears to cover bulk entry updates in one request.

**Root Cause**

Bulk editing of entry content via a single CMA call is not currently supported. The CMA's bulk operations endpoint supports bulk publish, unpublish, and delete, but not bulk content updates (changing field values across multiple entries simultaneously).

**Resolution**

1.  Fetch all required entries using the CMA GET entries endpoint (with pagination if needed).
2.  Modify the desired field values in the response payload for each entry.
3.  Loop through the entries and send a separate PUT /v3/content\_types/{uid}/entries/{entry\_uid} request for each one.
4.  Implement rate limiting and retry logic in the loop to stay within CMA rate limits.

After implementing the per-entry update loop, run it against a small batch first to confirm the updates are applied correctly before running it at full scale.
