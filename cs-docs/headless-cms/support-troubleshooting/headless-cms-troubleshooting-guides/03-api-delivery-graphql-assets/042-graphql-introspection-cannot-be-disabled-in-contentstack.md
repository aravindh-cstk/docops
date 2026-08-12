---
title: "GraphQL Introspection Cannot Be Disabled in Contentstack"
description: "GraphQL Introspection Cannot Be Disabled in Contentstack"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/042-graphql-introspection-cannot-be-disabled-in-contentstack
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs51c19ffab198bbe0
---

# GraphQL Introspection Cannot Be Disabled in Contentstack

A request to disable GraphQL introspection in production - either for security hardening or to prevent schema exposure - cannot be fulfilled. Contentstack does not provide a configuration option to disable introspection.

**Root Cause**

Contentstack does not support disabling GraphQL introspection. Introspection queries are treated equivalently to GET Content Types API requests. There is no separate control to disable introspection independently from other API access. This is a platform design decision.

**Resolution**

Since introspection cannot be disabled, consider the following security mitigations:

1.  Ensure delivery tokens are scoped to the minimum required environments and branches.
2.  Do not expose management API keys or tokens in client-facing code.
3.  Apply rate limiting on the network or infrastructure layer to restrict the volume of introspection queries from external sources.

Introspection access is equivalent to GET Content Types access. If schema exposure is a concern, focus on delivery token scoping and network-level controls rather than attempting to disable introspection at the platform level.
