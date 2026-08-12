---
title: "Restricting Specific Fields for All Users Using Field-Level Permissions"
description: "Restricting Specific Fields for All Users Using Field-Level Permissions"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/06-authentication-tokens-access/22-restricting-specific-fields-for-all-users-using-field-level-permissions
doc_type: faq
_cms_section_uid: csa8cb43433fdb8a3c
_cms_faq_uid: csca52d06e4b82dd11
---

# Restricting Specific Fields for All Users Using Field-Level Permissions

An administrator wants to restrict certain fields so that all users - regardless of role - cannot edit them. Field-level restrictions appear to require role-by-role configuration.

**Root Cause**

Field-level access restrictions in Contentstack are configured within custom roles under Roles and Permissions. Fields can be restricted globally across all content types within a role, or per content type. Each role that should have the restriction must be configured individually.

**Resolution**

1.  Navigate to Settings > Roles and Permissions and select the role to be restricted.
2.  Under the Content Types section, locate the field to restrict and configure its permission as read-only or hidden.
3.  To apply the restriction across all content types, use the global field restriction setting rather than configuring each content type individually.
4.  Repeat for each role that should have the restriction applied.

After saving the role configuration, log in as a user with the restricted role and confirm the targeted fields are not editable.
