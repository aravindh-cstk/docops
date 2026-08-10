---
title: "Retrieve Entry Data Without Publishing - Use the CMA"
description: "Retrieve Entry Data Without Publishing - Use the CMA"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/06-authentication-tokens-access/07-retrieve-entry-data-without-publishing-use-the-cma
doc_type: faq
_cms_section_uid: csa8cb43433fdb8a3c
_cms_faq_uid: cs07a6562e4439e9be
---

# Retrieve Entry Data Without Publishing - Use the CMA

A developer needs to access entry content including drafts and unpublished versions programmatically, without needing to publish entries first.

**Root Cause**

The Content Delivery API (CDA) only serves published content. To access entries in any state - including drafts, unpublished versions, and entries in any workflow stage - the Content Management API (CMA) must be used with a management token.

**Resolution**

1.  Use the CMA entry endpoint: GET /v3/content\_types/{uid}/entries/{entry\_uid} with a management token in the api\_key and authorization (management token) headers.
2.  To retrieve all entries regardless of publish state: GET /v3/content\_types/{uid}/entries with the management token.
3.  The CMA response includes all entry versions and their current state. Add include\_publish\_details=true to also retrieve publish status information.
4.  Ensure the management token has access to the correct branch if the stack uses branches.

After switching to the CMA, confirm the response includes unpublished entries and draft content as expected.
