---
title: "Management Token Limit - Requesting an Increase"
description: "Management Token Limit - Requesting an Increase"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/06-authentication-tokens-access/09-management-token-limit-requesting-an-increase
doc_type: faq
_cms_section_uid: csa8cb43433fdb8a3c
_cms_faq_uid: cs921a73619bcd6e3f
---

# Management Token Limit - Requesting an Increase

A stack has reached the maximum number of management tokens permitted under the current plan. Additional tokens are needed for new automation integrations.

**Root Cause**

Management tokens have a plan-level limit that constrains how many can be created per stack. This limit is designed to prevent unbounded token proliferation, which would make access management difficult and increase security surface area.

**Resolution**

1.  Review existing management tokens (Settings > Tokens > Management Tokens) and remove any that are no longer in use. Inactive tokens from old integrations are a common source of limit exhaustion.
2.  If additional tokens are genuinely needed beyond the current limit, contact your Customer Success Manager. Increasing the management token limit may have commercial implications depending on the plan.
3.  When requesting the increase, provide: the Organization ID, the stack API key, the current token count, and the expected total number of tokens needed.

After clearing unused tokens or receiving a limit increase, confirm new management tokens can be created and the desired integration is functional.
