---
title: "422 Error - “include should not be greater than 100” When Using include_all"
description: "422 Error - “include should not be greater than 100” When Using include_all"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/072-422-error-include-should-not-be-greater-than-100-when-using-include-all
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: csce158da24e1c4590
---

# 422 Error - “include should not be greater than 100” When Using include_all

A CDA request using include\_all=true or include\_all\_depth returns a 422 error with the message: “include should not be greater than 100”. The expectation is that the entry has fewer than 100 linked entries, so the limit appears to be hit unexpectedly.

**Root Cause**

The 100-reference limit is cumulative across all resolved reference levels, not per level. When include\_all=true is used, the API resolves every reference at every depth. Even if each level has a small number of references, the total count across all levels can exceed 100 quickly. For example, 5 references at level 1, each pointing to 5 entries at level 2, each with 5 at level 3, produces 155 total resolved references - well above the limit. The 422 error is expected and enforced to protect platform stability.

**Resolution**

1.  Reduce the reference depth by lowering the include\_all\_depth value. Start at depth 1 and increase incrementally until the 100-reference threshold is approached.
2.  Reduce the number of referenced entries per level in the content model where possible.
3.  Split the query into multiple smaller requests: fetch the top-level entry first, then fetch referenced entries separately using their UIDs.
4.  Merge the results client-side to reconstruct the full data structure.
5.  Apply filters or pagination on referenced fields to limit how many references are resolved per request.

After restructuring the query to reduce total resolved references below 100, re-run the request. If the 422 error no longer appears, the cumulative reference count is within the limit.
