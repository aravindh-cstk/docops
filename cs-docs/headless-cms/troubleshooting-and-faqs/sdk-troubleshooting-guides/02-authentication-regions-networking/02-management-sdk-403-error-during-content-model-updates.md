---
title: "Management SDK 403 Error During Content Model Updates"
description: "Management SDK 403 Error During Content Model Updates"
url: /headless-cms/troubleshooting-and-faqs/sdk-troubleshooting-guides/02-authentication-regions-networking/02-management-sdk-403-error-during-content-model-updates
doc_type: faq
_cms_section_uid: cs11e3b2dfad59b84e
_cms_faq_uid: cs393404b94705aba7
---

# Management SDK 403 Error During Content Model Updates

Content type updates via CMA fail with 403 when the token role/scope/policy does not allow model changes.

**Root Cause**

The provided token lacks the necessary administrative permissions/roles to modify schemas, or the request originates from an IP address not included in the stack’s allowlist.

**Resolution**

1.  Ensure the token role has content model update permissions (typically admin-level).
2.  Confirm IP allowlist/policy permits the calling host.
3.  Validate stack limits or governance policies are not blocking changes.

update() returns 2xx, and schema changes appear in UI/API. Escalate if owner/admin role still receives 403; include request ID and sanitized payload.
