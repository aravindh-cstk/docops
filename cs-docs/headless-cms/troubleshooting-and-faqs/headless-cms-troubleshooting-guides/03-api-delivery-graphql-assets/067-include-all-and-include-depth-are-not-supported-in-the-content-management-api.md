---
title: "include_all and include_depth Are Not Supported in the Content Management API"
description: "include_all and include_depth Are Not Supported in the Content Management API"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/067-include-all-and-include-depth-are-not-supported-in-the-content-management-api
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs78c6fe6135c3c2cc
---

# include_all and include_depth Are Not Supported in the Content Management API

Attempts to use include\_all or include\_depth parameters in Content Management API (CMA) requests to fetch referenced entry details do not return the expected nested content, even though the same parameters work correctly in CDA calls.

**Root Cause**

The include\_all and include\_depth parameters are exclusive to the Content Delivery API (CDA). They are not supported in the Content Management API (CMA) by design. The CMA is intended for content creation, update, and management operations, not for resolving deep reference hierarchies in delivery responses.

**Resolution**

1.  Use the CDA endpoint (cdn.contentstack.io) instead of the CMA endpoint when fetching entries with nested references.
2.  Pass the include\_all=true and include\_depth parameters in CDA requests to resolve referenced entries.
3.  If the CMA must be used (for example, to fetch draft or unpublished content), retrieve referenced entry UIDs from the CMA response and make separate CDA or CMA calls for each referenced entry.

After switching to the CDA endpoint with the include\_all parameter, confirm that the API response contains the expanded referenced entry data.
