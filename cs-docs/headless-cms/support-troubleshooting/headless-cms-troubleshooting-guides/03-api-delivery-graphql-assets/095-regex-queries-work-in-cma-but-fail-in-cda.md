---
title: "Regex Queries Work in CMA but Fail in CDA"
description: "Regex Queries Work in CMA but Fail in CDA"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/095-regex-queries-work-in-cma-but-fail-in-cda
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: csad63c1f28f142a34
---

# Regex Queries Work in CMA but Fail in CDA

A regex-based query filter works correctly when executed against the Content Management API but returns an error or no results when the same query is run against the Content Delivery API.

**Root Cause**

The CMA had a regex validation bypass enabled, which allowed unsafe or complex regex patterns. The CDA enforces strict validation of regex patterns and requires them to be safe (non-catastrophic) regex expressions. Patterns that bypass CMA validation may fail CDA validation. The bypass was disabled to protect CDA performance and stability.

**Resolution**

1.  Review the regex pattern used in the query and ensure it is a safe, well-bounded expression (no catastrophic backtracking potential).
2.  Test the updated regex pattern against the CDA endpoint.
3.  Avoid using open-ended quantifiers (such as .\* or .+) without anchors in regex filters, as these are more likely to be rejected by CDA validation.
4.  If safe regex patterns are required for the use case but are being rejected, contact Contentstack Support to review the specific pattern.

After updating the regex to a safe pattern, re-run the CDA query and confirm that results are returned without a validation error.
