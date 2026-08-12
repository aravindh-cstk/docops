---
title: "Restricting Users from Publishing to a Production Environment"
description: "Restricting Users from Publishing to a Production Environment"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/06-authentication-tokens-access/17-restricting-users-from-publishing-to-a-production-environment
doc_type: faq
_cms_section_uid: csa8cb43433fdb8a3c
_cms_faq_uid: cs2e517b633982461c
---

# Restricting Users from Publishing to a Production Environment

An administrator wants to prevent certain users from publishing to the production environment. A custom role has been created but users are still seeing incorrect environments or are able to bypass the restriction.

**Root Cause**

Environment publishing restrictions are enforced through Publish Rules, not directly through custom role permissions. A common confusion is attempting to restrict production publishing via custom role environment access settings, rather than configuring a Publish Rule that requires approval before publishing to the production environment.

**Resolution**

1.  Navigate to Settings > Workflows and create or update a Publish Rule that governs the production environment.
2.  In the Publish Rule, set ‘Allowed Roles’ or ‘Approval Required’ conditions that restrict direct publishing to production. For example, require approval from a designated senior editor or admin role.
3.  Assign the custom role to users who should not publish directly to production. These users will be subject to the Publish Rule restrictions.
4.  Test by logging in as a user with the custom role and attempting to publish to production - the Publish Rule should block direct publish and require approval.

After configuring the Publish Rule for the production environment, verify that restricted users cannot bypass it and that the approval flow works as expected for production publishes.
