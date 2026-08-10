---
title: "Reference Field Not Visible Despite Being Enabled in Field-Level Permissions"
description: "Reference Field Not Visible Despite Being Enabled in Field-Level Permissions"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/06-authentication-tokens-access/29-reference-field-not-visible-despite-being-enabled-in-field-level-permissions
doc_type: faq
_cms_section_uid: csa8cb43433fdb8a3c
_cms_faq_uid: cs580d871794646d7d
---

# Reference Field Not Visible Despite Being Enabled in Field-Level Permissions

A reference field is enabled in the role’s field-level permissions but does not appear for users with that role. The field is visible to Admin users.

**Root Cause**

A reference field that points to multiple content types requires the role to have access to each of the referenced content types. If a user does not have read access to one or more of the content types referenced by the field, the field will not be visible.

**Resolution**

1.  Review which content types are referenced by the field.
2.  In the role settings, grant Read (or higher) access to all content types referenced by the field.
3.  Save the updated role and confirm with the user that the field is now visible.

After updating the role to include access to all referenced content types, confirm the reference field appears correctly for users with that role.
