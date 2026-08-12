---
title: "include_all_depth Is Only Valid on the CDA - Not CMA"
description: "include_all_depth Is Only Valid on the CDA - Not CMA"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/047-include-all-depth-is-only-valid-on-the-cda-not-cma
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs81ccdb4a5432ab63
---

# include_all_depth Is Only Valid on the CDA - Not CMA

The include\_all\_depth parameter is added to an API request but has no effect. The nested references are not resolved to the expected depth.

**Root Cause**

The include\_all and include\_all\_depth parameters are only supported by the Content Delivery API (CDA). When these parameters are used with the Content Management API (CMA) endpoint, they are silently ignored. This is a common source of confusion when requests are inadvertently routed to the wrong endpoint.

**Resolution**

1.  Confirm the request is using the CDA endpoint: cdn.contentstack.io (or the appropriate regional CDA host) and not the CMA endpoint: api.contentstack.io.
2.  Include both include\_all=true and include\_all\_depth={n} in the CDA request:
3.  Example: GET https://cdn.contentstack.io/v3/content\_types/{uid}/entries/{entry\_uid}?environment=production&include\_all=true&include\_all\_depth=2
4.  Note: the 100-reference cumulative limit applies across all resolved levels. See Issue 3 below for guidance on staying within this limit.

After confirming the request targets the CDA endpoint and includes both parameters, verify that referenced entries are returned at the expected depth.
