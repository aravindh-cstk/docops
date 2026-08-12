---
title: "Sorting on Nested or Referenced Fields Not Supported in CDA SDK"
description: "Sorting on Nested or Referenced Fields Not Supported in CDA SDK"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/071-sorting-on-nested-or-referenced-fields-not-supported-in-cda-sdk
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs1e2a585d833b4334
---

# Sorting on Nested or Referenced Fields Not Supported in CDA SDK

Attempts to sort entries by fields inside a referenced entry using .orderByAscending() or .orderByDescending() in the CDA SDK do not produce the expected sort order. Sorting on top-level fields like created\_at works correctly, but sorting on reference paths such as title\_reference.release\_date returns unsorted or incorrect results.

**Root Cause**

The Delivery API’s orderByAscending and orderByDescending parameters only support sorting on fields that belong directly to the queried content type (top-level fields). Sorting on nested paths within referenced entries is not supported, even when include\_all or deeper reference resolution is applied.

**Resolution**

1.  Fetch entries without the sort parameter and perform sorting client-side after retrieving and resolving all referenced data.
2.  If server-side sorting is required, restructure the content model to promote the sort field to a top-level field on the queried content type.
3.  For use cases requiring complex sorting across referenced types, consider using GraphQL, which allows more flexible query and sort composition.

After applying client-side sorting or restructuring the content model, verify that the returned entries are ordered as expected.
