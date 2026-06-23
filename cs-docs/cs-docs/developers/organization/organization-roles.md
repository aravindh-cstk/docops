---
title: "[Organization] - Organization Roles"
description: Organization roles and permissions overview for Contentstack organizations.
url: https://www.contentstack.com/docs/administration/organization-roles
product: Contentstack
doc_type: concept
audience:
  - developers
  - admins
version: v1
last_updated: 2026-03-26
---

# [Organization] - Organization Roles

This page explains the predefined roles available in a Contentstack Organization, what permissions each role includes, and how these roles affect access to stacks and organization settings. It is intended for Organization owners, admins, and developers who need to manage users and permissions within an Organization.

Organization Roles

In order to work on a [stack](../set-up-stack/about-stack.md), a user must be part of the [Organization](./about-organizations.md) that contains the stack. You can either [invite users to an Organization](./invite-users-to-organization.md) and then assign them a stack(s) or add them to a stack to automatically add them to an Organization.

Organizations have three predefined roles that are/can be assigned to a user: [Owner](#organization-owner), [Admin](#organization-admin), and [Member](#organization-member). You cannot create custom roles in an Organization, as you can create for stacks.

**Additional Resources**: Though we do not provide permissions to create custom roles for Organizations, you can create [custom roles for stacks](../invite-users-and-assign-roles/types-of-roles.md#custom-role) with specific sets of permissions and assign it to your users.

Let’s understand the three predefined roles in detail.

## Organization Owner

The Owner is the user who owns an Organization (and controls its subscription plan) in Contentstack.

The Owner has maximum privileges, which includes the ability to:
- Invite users to Organizations and stacks
- Access Organization’s Log Data (Mission Control)
- Assign roles to users
- Set up [SSO](../single-sign-on.md) for an organization
- Transfer ownership of an Organization to another user
- Access stacks created by themselves
- Access to other users’ stacks, if adequate permissions are assigned by the owner of the stack
- Delete stacks of the Organization

## Organization Admin

A user with the Admin role is next in the hierarchy. This role has all the rights that the Owner enjoys, except for a few that include setting SSO for the Organization, accessing billing details and the right to transfer Organization ownership.

The permissions for this role includes the ability to:
- Inviting other users to organization and stacks
- Assign roles to users
- Create teams
- Access and view stacks created by all users (including themselves)
- Access to others’ stacks, as per the permissions defined by the owner of the stack

**Note**: Only the owner and admins have the rights to create stacks in an organization.

## Organization Member

Next in the hierarchy is the Member role. The rights of the role can be modified by the Owner or the Admin user. The user with the Member role does not have access to the Organization settings panel. Therefore, details such as Organization info, usage metrics, and so on are not visible to this user.

The rights of this role include:
- Specific rights to stacks as assigned by the Owner or Admin

## Organization Roles and Permissions Overview

The following is a tabular summary that outlines the Organization roles and their permissions - making it easier for users to understand what each role entails - and how it operates within the context of an organization.

| Roles | Permissions / Rights |
|---|---|
| **Organization Owner** | - Invite Users to Organizations/Stacks<br>- Access Organization’s Log Data (Mission Control)<br>- Assign Roles<br>- Access stacks<br>- Set up SSO<br>- Create Teams<br>- Transfer Organization ownership to another user<br>- Delete Stacks created by all Organization users |
| **Organization Admin** | - Invite Users to Organization/Stacks<br>- Access stacks<br>- Assign Roles<br>- Create Teams<br>- View Stacks created by all Organization users |
| **Organization Member** | - Specific/complete rights to Stacks as assigned by Owner/Admin |

## API Reference

You can refer to the following user-related API requests:
- [Create a Role](../../../api-docs/api-detail/content-management-api.md#create-a-role)
- [Update a Role](../../../api-docs/api-detail/content-management-api.md#update-role)
- [Delete a Role](../../../api-docs/api-detail/content-management-api.md#delete-role)

## Common questions

**Can I create custom roles for an Organization?**  
No. You cannot create custom roles in an Organization.

**What roles can create stacks in an organization?**  
Only the owner and admins have the rights to create stacks in an organization.

**Can an Organization Member access Organization settings?**  
No. The user with the Member role does not have access to the Organization settings panel.

**Where can I find API requests related to roles?**  
See the links under **API Reference**: Create a Role, Update a Role, and Delete a Role.