---
title: "Assigning Multiple Roles with Different Language Permissions"
description: "Assigning Multiple Roles with Different Language Permissions"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/06-authentication-tokens-access/23-assigning-multiple-roles-with-different-language-permissions
doc_type: faq
_cms_section_uid: csa8cb43433fdb8a3c
_cms_faq_uid: cs5211eb8c236aa219
---

# Assigning Multiple Roles with Different Language Permissions

A team wants to give content managers access to specific locales only - for example, one user manages English, another manages German. Multiple roles with different language permissions need to be assigned to users.

**Root Cause**

Contentstack supports language-specific permissions within custom roles. Users can be assigned multiple roles simultaneously, and language permissions from non-conflicting roles combine. If roles have overlapping permission scopes, the more permissive role may override the more restrictive one.

**Resolution**

1.  Create a custom role for each language group (for example, a German Content Manager role with Create, Read, Update, and Delete access scoped to de-de).
2.  Assign users the appropriate language-scoped role.
3.  If a user needs access to multiple languages, assign multiple language-specific roles to them.
4.  Monitor for overriding behavior when roles share similar permission scopes - the more permissive role will take precedence.

After assigning language-specific roles, confirm users can only access and edit entries in their permitted locales.
