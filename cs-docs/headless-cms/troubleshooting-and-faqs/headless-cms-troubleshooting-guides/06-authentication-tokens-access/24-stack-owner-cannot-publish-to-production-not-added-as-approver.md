---
title: "Stack Owner Cannot Publish to Production - Not Added as Approver"
description: "Stack Owner Cannot Publish to Production - Not Added as Approver"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/06-authentication-tokens-access/24-stack-owner-cannot-publish-to-production-not-added-as-approver
doc_type: faq
_cms_section_uid: csa8cb43433fdb8a3c
_cms_faq_uid: cs4a278217188763f7
---

# Stack Owner Cannot Publish to Production - Not Added as Approver

A stack owner is unable to publish entries to the production environment. The publish action is blocked despite their elevated role.

**Root Cause**

A publish rule configured for the production environment restricts publishing approvals to a specific set of users (for example, Administrators only). If the stack owner is not explicitly listed as an approver in the publish rule, they are blocked from publishing - even as a stack owner.

**Resolution**

1.  Navigate to Settings > Workflows and locate the publish rule governing the production environment.
2.  Add the affected user (stack owner) to the list of approvers in the rule.
3.  Save the updated publish rule.
4.  Test publishing again to confirm access is restored.

After updating the publish rule, confirm the stack owner can publish entries to production without being blocked.
