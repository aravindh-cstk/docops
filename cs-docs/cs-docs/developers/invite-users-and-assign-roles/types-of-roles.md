---
title: "[Set Up Your Project] - Types of Roles"
description: Overview of Contentstack stack user roles and their permissions, including Owner, Admin, Developer, Content Manager, and Custom Role.
url: https://www.contentstack.com/docs/headless-cms/types-of-roles
product: Contentstack
doc_type: concept-guide
audience:
  - developers
  - owners
  - admins
  - content-managers
version: current
last_updated: 2026-03-25
---

# [Set Up Your Project] - Types of Roles

This page explains the different user roles available in a Contentstack stack and what permissions each role includes. It is intended for stack owners, admins, developers, and content managers who need to invite users and assign appropriate access levels when setting up or managing a project.

## Types of Roles

Contentstack provides five user roles: "**Owner**", "**Admin**", "**Developer**", "**Content Manager**", and "**Custom Role**".

Let’s understand these roles in detail.

## Owner

Each stack can have only one Owner. [Creating a stack](/docs/developers/set-up-stack/create-a-new-stack) in Contentstack makes you the Owner of the stack. The Owner has the following rights:
- Complete rights to the content and settings of a stack in addition to the combined rights of an "Admin", “Developer” and a “Content Manager.”
- Right to delete a stack
- Can create delivery and management tokens
- Transfer the ownership of the stack to another user.

## Admin

The Admin role has the following rights:
- [Create](/docs/content-managers/working-with-entries/create-an-entry), [update](/docs/content-managers/working-with-entries/edit-an-entry), [delete](/docs/content-managers/working-with-entries/delete-an-entry), [publish](/docs/content-managers/working-with-entries/publish-an-entry), [unpublish](/docs/content-managers/working-with-entries/unpublish-an-entry) entries and assets
- Create, update, delete [languages](/docs/developers/multilingual-content/about-languages), [environment](/docs/developers/set-up-environments/about-environments), [content types](/docs/developers/create-content-types/about-content-types) and [custom roles](#custom-role)
- [Invite users](/docs/owners-and-admins/invite-users-to-organization) to and [remove users](/docs/developers/invite-users-and-assign-roles/remove-a-user) from the stack
- Create delivery and management tokens
- View audit log and publish queue

The Admin role has more rights than a Developer and fewer than the Owner. To know the difference, refer to the [Stack Admin vs Stack Owner](/docs/owners-and-admins/stack-admin-vs-stack-owner) section.

## Developer

A “Developer” is a person who creates the structure of the site or defines the way content will appear on the site. Hence, this role has the right to:
- View [audit log](/docs/developers/set-up-stack/monitor-stack-activities-in-audit-log)
- Create Roles
- Invite users
- Create/edit/delete languages, environments, and content types
- Create/edit/delete/publish/unpublish [entries](/docs/content-managers/working-with-entries/about-entries) and [assets](/docs/content-managers/working-with-assets/about-assets)
- Can create and manage delivery tokens
- Cannot create management tokens
- View [Publish Queue](https://www.contentstack.com/docs/content-managers/publish-content/view-publish-status-of-entries-assets-in-publish-queue/)

To know the difference between the Admin and Developer roles, refer to the [Stack Admin vs Stack Developer](/docs/owners-and-admins/stack-admin-vs-stack-developer) section.

## Content Manager

A “Content Manager” is a user who works with/on the content of a stack. Thus, this role has the right to:
- Create/edit/delete/publish entries and assets
- View publishing queue

**Note:** Content Managers cannot view/edit content types or access stack settings. This role is partially editable, i.e., you can define the environment(s) and locale(s) this role has access to.

## Custom Role

In addition to the predefined system roles (“Admin,” “Developer,” and “Content Manager”), you can add custom roles by defining specific permissions, and assign this role to the users of a stack.

The best part about custom roles is that you have fine-grained control over permissions. You can assign permissions at entry, field, and asset level. For example, “ABC” role can READ only two entries of a content type, or EDIT only the SEO fields, or cannot READ any assets.

To create a Custom role, follow the steps mentioned in the [Create a Role](/docs/developers/invite-users-and-assign-roles/create-a-role) section.

**Note:** While you can create multiple custom roles within a specific stack, please be aware that there is a maximum limit for customers as per plan outlined in the contract. We advise reviewing your contract details to understand the specific limitations applicable to your plan.

## Stack Roles and Permissions Overview

The following is a tabular summary that outlines the Stack roles and their permissions - making it easier for users to understand what each role entails - and how it operates within the context of stacks:

| Roles | Permissions/Rights |
|---|---|
| **Owner** | - Complete rights to stack content and settings<br>- Delete own stack<br>- Transfer a stack’s ownership to other user<br>- Can create and manage delivery and management tokens<br>- Combined rights of admin, developer, and content manager |
| **Admin** | - Create, read, update, and delete rights on: entries, assets, languages, Environments, content types, and custom roles<br>- Can publish/unpublish entries and assets<br>- Invite/remove users<br>- View audit log and publish queue |
| **Developer** | - Create roles<br>- Invite users<br>- Create, read, update, and delete rights on: entries, assets, languages, Environments, and Content Types<br>- Can publish/unpublish entries and assets<br>- Can create and manage delivery tokens<br>- Cannot create management tokens<br>- View audit log and publish queue |
| **Content Manager** | - Create, read, update, and delete rights on published entries and assets<br>- View publish queue<br>- Limited access to specific environments/locales |
| **Custom Role** | - Specific tailored permissions<br>- Specific entry, field, and asset-level permissions |

**Note:** It's important to note that custom roles for stacks allow for highly specific permissions that can be tailored to fit various needs, while Organization roles are predefined and cannot be customized.

## API Reference

Here are some relevant API requests that you can use when working with our Content Management APIs:

[Create a Stack](/docs/developers/apis/content-management-api#create-stack)

[Delete a Stack](/docs/developers/apis/content-management-api#delete-stack)

[Update a stack](/docs/developers/apis/content-management-api#update-stack)

[Transfer Ownership](/docs/developers/apis/content-management-api#transfer-stack-ownership-to-other-users)

## Common questions

### Can a stack have more than one Owner?
Each stack can have only one Owner.

### Can Developers create management tokens?
No. Developers can create and manage delivery tokens and cannot create management tokens.

### Are custom roles limited?
Yes. There is a maximum limit for customers as per plan outlined in the contract.

### Can Content Managers access stack settings?
No. Content Managers cannot view/edit content types or access stack settings.