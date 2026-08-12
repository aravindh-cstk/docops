---
title: "Increasing the x-cs-variant-uid Header Limit for Variant-Heavy Migrations"
description: "Increasing the x-cs-variant-uid Header Limit for Variant-Heavy Migrations"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/10-cma-behavior-limits-miscellaneous/20-increasing-the-x-cs-variant-uid-header-limit-for-variant-heavy-migrations
doc_type: faq
_cms_section_uid: cs25565de666e3d5c9
_cms_faq_uid: csc3fa360f4bf0158f
---

# Increasing the x-cs-variant-uid Header Limit for Variant-Heavy Migrations

An application managing a large number of personalization experiences (for example, 200+ variant experiences) needs to pass multiple variant UIDs in the x-cs-variant-uid header per request. The default header limit (typically 3) forces multiple API calls per page load and causes functional issues because variant resolution depends on header ordering rather than the actual entry configuration.

**Root Cause**

The x-cs-variant-uid header has a default limit on the number of variant UIDs that can be passed per request. For organizations managing large-scale personalization migrations with many concurrent variant experiences, this default limit is too low and forces inefficient multi-call patterns.

**Resolution**

1.  Contact Contentstack Support and request an increase to the x-cs-variant-uid header limit for the organization. Provide the number of experiences that need to be supported concurrently and the stack API key.
2.  Engineering will evaluate and apply a higher limit at the organization level to accommodate the migration or production use case.
3.  While awaiting the limit increase, implement a prioritization strategy: identify which variant UIDs are most critical per request and include only those within the current limit, fetching secondary variants in a subsequent request if needed.

After the limit is increased, re-test variant resolution across the full set of experiences and confirm that variant content is correctly resolved without requiring multiple API calls.
