---
title: "Automation Actions Display as Performed by a User, Not the Management Token"
description: "Automation Actions Display as Performed by a User, Not the Management Token"
url: /agent-os/support-troubleshooting/agent-os-troubleshooting-guides/04-actions-publishing-endpoints/04-automation-actions-display-as-performed-by-a-user-not-the-management-token
doc_type: faq
_cms_section_uid: csded4ce67563284bd
_cms_faq_uid: cs1aa6719d17d39740
---

# Automation Actions Display as Performed by a User, Not the Management Token

Automation actions (e.g., publish) may show attribution to a named user even when using a management token, which can create audit concerns.

**Root Cause** Attribution is tied to the account selected during automation configuration, not to the token identity.

**Resolution**

1.  Identify which user account is selected in automation configuration.
2.  If audit alignment is required, use an approved service account for automation ownership.
3.  Log enhancement request if token-based attribution is required.

Action attribution aligns with the configured automation owner account.
