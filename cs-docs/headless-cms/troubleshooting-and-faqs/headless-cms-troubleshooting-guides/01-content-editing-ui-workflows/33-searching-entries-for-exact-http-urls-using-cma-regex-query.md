---
title: "Searching Entries for Exact http:// URLs - Using CMA Regex Query"
description: "Searching Entries for Exact http:// URLs - Using CMA Regex Query"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/33-searching-entries-for-exact-http-urls-using-cma-regex-query
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: csbd41af52b46c1009
---

# Searching Entries for Exact http:// URLs - Using CMA Regex Query

An administrator needs to find all entries containing http:// links (as opposed to https://) for a security or migration audit. The CMS UI search returns both http:// and https:// results because it does not support exact protocol matching.

**Root Cause**

The Contentstack UI search does not support exact-match queries for URL protocol prefixes. The UI’s text search treats http and https as similar strings. Precise pattern-based searching requires the CMA with a $regex query operator.

**Resolution**

1.  Use the CMA with a $regex query to find entries containing http:// (without the ‘s’):
2.  GET /v3/content\_types/{uid}/entries?query={“field\_uid”:{“$regex”:“^http://”}}
3.  For a broader search across all text/URL fields, run the regex query per content type and per field UID.
4.  Use a management token for these CMA requests. Dedicated management tokens scoped to read-only operations are recommended for audit queries.
5.  Collect the matching entry UIDs and update them programmatically using the CMA PUT endpoint to replace http:// with https://.

After running the regex query, verify the result set contains only entries with http:// (not https://) and confirm the update script correctly replaces the protocol prefix in all affected entries.
