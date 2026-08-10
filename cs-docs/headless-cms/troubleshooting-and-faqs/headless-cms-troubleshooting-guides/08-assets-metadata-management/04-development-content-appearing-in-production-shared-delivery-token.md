---
title: "Development Content Appearing in Production - Shared Delivery Token"
description: "Development Content Appearing in Production - Shared Delivery Token"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/08-assets-metadata-management/04-development-content-appearing-in-production-shared-delivery-token
doc_type: faq
_cms_section_uid: cs72e172c68e3c1a5d
_cms_faq_uid: cs8c8c6a90355070da
---

# Development Content Appearing in Production - Shared Delivery Token

Content published only to the development environment is also appearing in the production environment on the live site. The same content should not be visible in production.

**Root Cause**

The production application is using a delivery token that has access to both the development and production environments. Since the token is not scoped to production only, any content published to development is also returned when the production app queries with this token.

**Resolution**

1.  Navigate to Settings > Tokens in the Contentstack stack.
2.  Create a new Delivery Token scoped exclusively to the production environment.
3.  Update the production application configuration to use the new production-scoped delivery token.
4.  Confirm the development environment has its own separate delivery token scoped only to development.

After updating the production application to use the production-scoped token, verify that content published only to development no longer appears on the production site.
