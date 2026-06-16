---
title: "[Organization]- Stack Admin vs Stack Developer"
description: Differences in rights between Stack Admin and Stack Developer roles within a stack.
url: https://www.contentstack.com/docs/developers/organization/stack-admin-vs-stack-developer
product: "[Organization]"
doc_type: role-guide
audience:
  - developers
version: v1
last_updated: 2026-03-25
---

# [Organization]- Stack Admin vs Stack Developer

This page explains how the Stack Admin and Stack Developer roles differ in their rights within a stack. It is intended for developers and administrators managing users, roles, and access, and should be used when deciding permissions or assigning responsibilities in a stack.

## Stack Admin vs Stack Developer

The [Admin](/docs/developers/invite-users-and-assign-roles/types-of-roles#admin) and [Developer](/docs/developers/invite-users-and-assign-roles/types-of-roles#developer) of a stack have different rights. The following table highlights the rights of a Stack Admin and Developer:

| Rights | Admin | Developer |
|---|---|---|
| Invite Users | The Admin can invite or remove any user from a stack. | The Developer can invite users and remove only those users that they have invited to a stack. |
| Editable Role | The rights of an Admin role cannot be changed. | The default rights assigned to a Developer role can be modified by the Admin. |
| Assign Locale and Environment Specific Access | Default rights include locale and environment-specific access. | An Admin can assign locale and environment-specific access to the Developer. |

## Common questions

**What is the main difference between a Stack Admin and a Stack Developer?**  
A Stack Admin can manage any user in the stack and has a non-editable role, while a Stack Developer has more limited user management rights and their default rights can be modified by an Admin.

**Can a Developer remove any user from a stack?**  
No. The Developer can invite users and remove only those users that they have invited to a stack.

**Can the Admin role’s rights be changed?**  
No. The rights of an Admin role cannot be changed.

**Who can assign locale and environment-specific access to a Developer?**  
An Admin can assign locale and environment-specific access to the Developer.