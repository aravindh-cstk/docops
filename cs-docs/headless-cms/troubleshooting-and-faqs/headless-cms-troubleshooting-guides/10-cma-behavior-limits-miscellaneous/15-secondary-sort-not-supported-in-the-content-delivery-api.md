---
title: "Secondary Sort Not Supported in the Content Delivery API"
description: "Secondary Sort Not Supported in the Content Delivery API"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/10-cma-behavior-limits-miscellaneous/15-secondary-sort-not-supported-in-the-content-delivery-api
doc_type: faq
_cms_section_uid: cs25565de666e3d5c9
_cms_faq_uid: csde5636a730e9eeb0
---

# Secondary Sort Not Supported in the Content Delivery API

A customer wants to sort entries by a date field in descending order and use created\_at as a secondary sort field for entries with the same date value. The CDA does not appear to support multi-field sorting.

**Root Cause**

The Contentstack Content Delivery API supports only a single sort parameter per request. Multi-parameter (secondary) sorting is not supported. When entries share the same value for the primary sort field, their relative order is not deterministic.

**Resolution**

1.  Fetch entries with the primary sort applied (for example, asc\_date or desc\_date) as usual.
2.  Apply secondary sorting client-side after retrieving the results. Sort the response array by the primary field, and for entries with equal primary values, sort by created\_at as a tiebreaker.
3.  For use cases that require server-side multi-sort, consider using GraphQL where the orderBy argument may offer more flexibility in certain scenarios.

After implementing client-side secondary sorting, confirm the entry list is correctly ordered by date (primary) and created\_at (secondary) for entries sharing the same date.
