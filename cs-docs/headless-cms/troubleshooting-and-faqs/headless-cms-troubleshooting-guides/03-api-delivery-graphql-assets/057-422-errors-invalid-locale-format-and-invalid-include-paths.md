---
title: "422 Errors - Invalid Locale Format and Invalid Include Paths"
description: "422 Errors - Invalid Locale Format and Invalid Include Paths"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/057-422-errors-invalid-locale-format-and-invalid-include-paths
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: csee7f1db5565bfa6e
---

# 422 Errors - Invalid Locale Format and Invalid Include Paths

CDA requests return 422 Unprocessable Entity errors. Analysis of error logs shows 422s across a large volume of requests, with the majority concentrated in a short burst window.

**Root Cause**

422 errors in CDA requests are typically caused by one of two issues: (a) invalid locale parameter format - for example, using underscore notation (en\_US, de\_DE) instead of hyphen notation (en-us, de-de); or (b) invalid include\[\] paths that do not resolve to a valid reference field in the content type schema. Both are validation failures that the API rejects before processing.

**Resolution**

1.  Review the locale parameter in failing requests. Use hyphen notation: en-us, fr-fr, de-de. Underscore formats (en\_US) are not accepted.
2.  Review all include\[\] path values against the current content type schema. Paths that reference deleted, renamed, or restructured fields produce 422 errors.
3.  If 422s appear in high-volume bursts from a specific time period, examine whether a deployment or automation introduced a new locale format or changed reference paths.
4.  Check the 422 error response body for details - the errors object typically specifies which parameter is invalid.

After correcting locale formats and include\[\] paths, re-deploy and monitor for 422 errors. The error rate should return to near-zero once all invalid parameters are corrected.
