---
title: "api.contentstack.io vs cdn.contentstack.io: When to Use Each"
description: "api.contentstack.io vs cdn.contentstack.io: When to Use Each"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/10-cma-behavior-limits-miscellaneous/06-api-contentstack-io-vs-cdn-contentstack-io-when-to-use-each
doc_type: faq
_cms_section_uid: cs25565de666e3d5c9
_cms_faq_uid: cs1b171b4bccc251ce
---

# api.contentstack.io vs cdn.contentstack.io: When to Use Each

There is confusion about the difference between the api.contentstack.io and cdn.contentstack.io endpoints and when each should be used.

**Root Cause**

The two endpoints serve completely different purposes and should never be used interchangeably:

-   api.contentstack.io (and regional equivalents such as eu-api.contentstack.com): the Content Management API (CMA) endpoint. Used for creating, updating, deleting, and managing content, users, stacks, and settings. Requires a management token or auth token.
-   cdn.contentstack.io (and regional equivalents such as eu-cdn.contentstack.com): the Content Delivery API (CDA) endpoint. Used for fetching published content for delivery to end users. Requires a delivery token.

**Resolution**

1.  Use api.contentstack.io for all CMA operations: content creation, schema management, user management, and automation workflows.
2.  Use cdn.contentstack.io for all CDA operations: fetching published entries and assets for front-end delivery.
3.  Mixing these endpoints will result in authentication errors (using a delivery token on the CMA endpoint) or unauthorized access to unpublished data (using a management token on the CDA endpoint).

After updating application configurations to use the correct endpoint per operation type, confirm that CMA operations succeed with the auth/management token and CDA operations succeed with the delivery token.
