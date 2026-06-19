---
title: "[Security Management] - About SCIM Group Mapping"
description: About SCIM Group Mapping in Contentstack Security Management.
url: https://www.contentstack.com/docs/administration/about-scim-group-mapping
product: Contentstack
doc_type: concept
audience:
  - developers
  - admins
version: v1
last_updated: 2026-03-26
---

# [Security Management] - About SCIM Group Mapping

This page explains how SCIM Group Mapping works in Contentstack, who can use it, and how to assign organization and stack permissions (roles) to users based on IdP-managed groups.

## About SCIM Group Mapping

The **SCIM Group Mapping** functionality allows you to set permissions (roles) for a particular group of users on an organization and stack(s) in Contentstack. When you add a user to a group via an IdP (Identity Provider) such as OneLogin, the permissions you have defined for the group will be applicable to that user.

**Note**: Only the [Organization owner](/docs/owners-and-admins/organization-roles#organization-owner) and [Organization admin(s)](/docs/owners-and-admins/organization-roles#organization-admin) have the right to use SCIM group mapping functionality.

You can set this permission by navigating to the **SCIM 2.0** tab on your [**Organization Settings**](/docs/developers/organization/organization-settings-overview/) page. Then, from the groups you’ve created via IdP, select the group for which you want to define permissions and set permissions accordingly.

If you specify a group, let’s say “Content Manager group,” to have the **Content Manager** role for every stack existing within an organization, then all the users belonging to this group will have the **Content Manager** role for these stacks.

**Note**: It is recommended to disable SSO role-mapping when SCIM is enabled, because SCIM groups perform the role assignments in advance.

## Common questions

### Who can use SCIM group mapping functionality?
Only the [Organization owner](/docs/owners-and-admins/organization-roles#organization-owner) and [Organization admin(s)](/docs/owners-and-admins/organization-roles#organization-admin) have the right to use SCIM group mapping functionality.

### Where do I configure SCIM group mapping in Contentstack?
Navigate to the **SCIM 2.0** tab on your [**Organization Settings**](/docs/developers/organization/organization-settings-overview/) page.

### What happens when a user is added to an IdP group?
The permissions you have defined for the group will be applicable to that user.

### Should SSO role-mapping be enabled when SCIM is enabled?
It is recommended to disable SSO role-mapping when SCIM is enabled, because SCIM groups perform the role assignments in advance.