---
title: "Deleting a Role Only Removes That Role’s Permissions"
description: "Deleting a Role Only Removes That Role’s Permissions"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/06-authentication-tokens-access/27-deleting-a-role-only-removes-that-role-s-permissions
doc_type: faq
_cms_section_uid: csa8cb43433fdb8a3c
_cms_faq_uid: cs75bd5ac80ea2781f
---

# Deleting a Role Only Removes That Role’s Permissions

An administrator is unsure whether deleting a role will affect all permissions for users assigned that role, including permissions from their other roles.

**Root Cause**

In Contentstack, deleting a role removes only the permissions associated with that specific role from the users it was assigned to. Other roles assigned to the same users remain intact and their permissions are unaffected.

**Resolution**

When deleting a role, the warning message refers only to the removal of that role’s permissions. Users who have additional roles will retain all permissions from their remaining roles. Review users assigned to the role before deletion to confirm they will retain the necessary access through their other roles.
