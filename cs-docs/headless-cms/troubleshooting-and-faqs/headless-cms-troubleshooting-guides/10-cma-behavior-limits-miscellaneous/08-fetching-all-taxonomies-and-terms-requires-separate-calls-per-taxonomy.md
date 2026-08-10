---
title: "Fetching All Taxonomies and Terms Requires Separate Calls Per Taxonomy"
description: "Fetching All Taxonomies and Terms Requires Separate Calls Per Taxonomy"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/10-cma-behavior-limits-miscellaneous/08-fetching-all-taxonomies-and-terms-requires-separate-calls-per-taxonomy
doc_type: faq
_cms_section_uid: cs25565de666e3d5c9
_cms_faq_uid: cs6329df9e577a8170
---

# Fetching All Taxonomies and Terms Requires Separate Calls Per Taxonomy

A customer wants to fetch all taxonomies and their associated terms from a stack in a single API call to avoid making multiple requests.

**Root Cause**

The CMA does not support fetching all taxonomies and all of their terms in a single request. Each taxonomy's terms must be retrieved individually using the taxonomy's UID. This is a current platform limitation.

**Resolution**

1.  Fetch all taxonomies using: GET /v3/taxonomies — this returns all taxonomy UIDs and names.
2.  For each taxonomy UID, fetch its terms: GET /v3/taxonomies/{taxonomy\_uid}/terms
3.  Implement a loop to iterate over all taxonomy UIDs and collect terms recursively.
4.  Cache the full taxonomy-term mapping at the start of the session to reduce repeated API calls.

After implementing the recursive fetch loop, confirm the resulting data structure contains all taxonomies and their associated terms from the stack.
