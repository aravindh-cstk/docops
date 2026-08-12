---
title: "CDA 422 Error Due to Reference Resolution Limit (100)"
description: "CDA 422 Error Due to Reference Resolution Limit (100)"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/004-cda-422-error-due-to-reference-resolution-limit-100
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: csb556c1fdc3807b90
---

# CDA 422 Error Due to Reference Resolution Limit (100)

A Delivery API request fails with a 422 Unprocessable Entity error indicating that the number of resolved references exceeds the allowed limit.

**Root Cause**

The Content Delivery API enforces a strict maximum of 100 resolved references per request, including nested references. When the total number of expanded references exceeds this limit, the API returns a 422 validation error.

This commonly occurs when:

-   Using include\_all=true
-   Using high include\_depth values
-   Querying entries with deeply nested reference structures

**Resolution**

-   Reduce include\_depth where possible.
-   Avoid include\_all unless necessary.
-   Split large requests into multiple smaller requests.
-   Merge results client-side if needed.

After reducing reference expansion, the API request completes successfully without triggering the 422 error.
