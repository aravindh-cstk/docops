---
title: "Entry Search Uses OR Logic - High Volume of Unrelated Results"
description: "Entry Search Uses OR Logic - High Volume of Unrelated Results"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/76-entry-search-uses-or-logic-high-volume-of-unrelated-results
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: csa1c9f5223605098e
---

# Entry Search Uses OR Logic - High Volume of Unrelated Results

Searching for entries by multiple keywords returns a large volume of results including multilingual variants and unrelated entries. The expected behavior is to filter by all keywords simultaneously.

**Root Cause**

The default entry search uses OR logic - it returns entries matching any of the provided terms. This is by design.

**Resolution**

1.  Use the Advanced Search (Global Search) feature instead of the basic search bar. Advanced Search supports structured queries with AND conditions between multiple filter criteria.
2.  In Advanced Search, create filter conditions for each keyword or field value separately and combine them to narrow results progressively.
3.  For programmatic exact-match lookups, use the CMA with a specific query: GET /v3/content\_types/{uid}/entries?query={“field\_uid”:“exact\_value”} which applies strict equality matching.

After switching to Advanced Search with multiple AND conditions, confirm the results are narrowed to entries matching all specified criteria.
