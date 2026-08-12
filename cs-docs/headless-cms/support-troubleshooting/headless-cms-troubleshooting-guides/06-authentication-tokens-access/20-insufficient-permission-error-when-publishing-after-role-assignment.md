---
title: "‘Insufficient Permission’ Error When Publishing After Role Assignment"
description: "‘Insufficient Permission’ Error When Publishing After Role Assignment"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/06-authentication-tokens-access/20-insufficient-permission-error-when-publishing-after-role-assignment
doc_type: faq
_cms_section_uid: csa8cb43433fdb8a3c
_cms_faq_uid: cs862da56407c3e5c4
---

# ‘Insufficient Permission’ Error When Publishing After Role Assignment

A user with a Developer role and access to all environments receives an ‘insufficient permission’ error when attempting to publish entries. The role appears correctly configured in the dashboard.

**Root Cause**

This is a permission mapping desync. When a user’s role is changed or re-assigned, the permission mapping may not immediately take effect. Removing and re-adding the user to the stack forces the permission mapping to rebuild correctly.

**Resolution**

1.  Ask the stack Owner or Admin to remove the affected user from the stack.
2.  Re-add the user to the stack with the same role.
3.  Ask the user to log out and log back in.
4.  Test publishing to confirm the error is resolved.

After removing and re-adding the user, confirm they can publish entries without an insufficient permission error.
