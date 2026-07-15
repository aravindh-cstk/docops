---
title: "[Security Management] - IdP Role Mapping"
description: Assign Contentstack roles to users based on IdP group/role mappings for SSO-enabled organizations.
url: https://www.contentstack.com/docs/administration/idp-role-mapping
product: Contentstack
doc_type: security-management
audience:
  - developers
  - admins
version: v1
last_updated: 2026-03-26
---

# [Security Management] - IdP Role Mapping

This page explains how IdP Role Mapping works in Contentstack SSO, who it applies to (admins/owners configuring SSO and role management), and when to use it as an alternative to invitation-based user and role management for SSO-enabled organizations.

## IdP Role Mapping

**IdP Role Mapping** allows you to assign [Contentstack roles](../invite-users-and-assign-roles/types-of-roles.md) to the users of a group/role in your IdP. Subsequently, users of such groups can directly log in to your SSO-enabled organization (without invitation) with the assigned permissions.

This is an alternate way of managing users and permissions of your SSO-enabled organization (the other way being invitation-based users and roles management).

To use this feature, you need to [map your IdP roles](./set-up-sso-in-contentstack.md#advanced-settings) to Contentstack roles, while configuring SSO for your organization.

**Note**: After enabling [IdP Role Mapping](/docs/faqs/#role-mapping), in Contentstack, the role management for the users of your IdP is handled from your IdP instead of Contentstack. The following  points are important to note: Admins/Owners can remove the users from an organization with both SSO and IdP Role Mapping. This is done through IdP because if they are removed from the organization but not the IdP, they can still sign up.
Two possible SSO scenarios:
**If Organization has SSO enabled but IdP role mapping not enabled** - Admin/Owner will be able to delete the user from the user list directly within Contentstack.
**If Organization has both SSO and IdP role mapping enabled** - The user cannot be removed from within Contentstack as the Role Management is done from the IdP. This is done to avoid any source of ambiguity and inconsistency in the user actions.

Currently, IdP Role Mapping is supported only for [Okta](./set-up-sso-with-okta.md), [OneLogin](./set-up-sso-with-onelogin.md), and [Microsoft Azure AD](./set-up-sso-with-microsoft-azure-ad.md).

** Note**: Every newly created stack will have unassigned roles and requires a manual mapping in the SSO section.

## Common questions

### What does IdP Role Mapping do?
It allows you to assign Contentstack roles to users based on a group/role in your IdP so those users can log in to your SSO-enabled organization (without invitation) with the assigned permissions.

### When should I use IdP Role Mapping instead of invitations?
Use it as an alternate way of managing users and permissions for your SSO-enabled organization when you want role management handled through your IdP rather than invitation-based user and roles management.

### Which IdPs support IdP Role Mapping?
Currently, it is supported only for Okta, OneLogin, and Microsoft Azure AD.

### Do newly created stacks require any additional setup?
Yes. Every newly created stack will have unassigned roles and requires a manual mapping in the SSO section.