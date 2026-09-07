---
title: "Types of Roles"
description: "Discover Contentstack's five user roles—Owner, Admin, Developer, Content Manager, and Custom Role. Learn detailed permissions for optimal content management."
url: /headless-cms/types-of-roles
uid: blt625bf3efbd68b58c
---

# Types of Roles

## Types of Roles

Contentstack provides five user roles: "**Owner**", "**Admin**", "**Developer**", "**Content Manager**", and "**Custom Role**".

Let’s understand these roles in detail.

## Owner

Each stack can have only one Owner. [Creating a stack](/docs/headless-cms/create-a-new-stack) in Contentstack makes you the Owner of the stack. The Owner has the following rights:

-   Complete rights to the content and settings of a stack in addition to the combined rights of an "Admin", “Developer” and a “Content Manager.”
-   Right to delete a stack
-   Can create delivery and management tokens
-   Transfer the ownership of the stack to another user.

## Admin

The Admin role has the following rights:

-   [Create](/docs/headless-cms/create-an-entry), [update](/docs/headless-cms/edit-an-entry), [delete](/docs/headless-cms/delete-an-entry), [publish](/docs/headless-cms/publish-an-entry), [unpublish](/docs/headless-cms/unpublish-an-entry) entries and assets
-   Create, update, delete [languages](/docs/headless-cms/about-languages), [environment](/docs/headless-cms/about-environments), [content types](/docs/headless-cms/about-content-types) and [custom roles](#custom-role)
-   [Invite users](/docs/administration/invite-users-to-organization) to and [remove users](/docs/headless-cms/remove-a-user) from the stack
-   Create delivery and management tokens
-   View audit log and publish queue

The Admin role has more rights than a Developer and fewer than the Owner.

## Developer

A “Developer” is a person who creates the structure of the site or defines the way content will appear on the site. Hence, this role has the right to:

-   View [audit log](/docs/headless-cms/monitor-stack-activities-in-audit-log)
-   Create Roles
-   Invite users
-   Create/edit/delete languages, environments, and content types
-   Create/edit/delete/publish/unpublish [entries](/docs/headless-cms/about-entries) and [assets](/docs/headless-cms/about-assets)
-   Can create and manage delivery tokens
-   Cannot create management tokens
-   View [Publish Queue](https://www.contentstack.com/docs/headless-cms/view-publish-status-of-entries-assets-in-publish-queue/)

## Content Manager

A “Content Manager” is a user who works with/on the content of a stack. Thus, this role has the right to:  

-   Create/edit/delete/publish entries and assets
-   View publishing queue

**Note:** Content Managers cannot view/edit content types or access stack settings. This role is partially editable, i.e., you can define the environment(s) and locale(s) this role has access to.

## Custom Role

In addition to the predefined system roles (“Admin,” “Developer,” and “Content Manager”), you can add custom roles by defining specific permissions, and assign this role to the users of a stack.

The best part about custom roles is that you have fine-grained control over permissions. You can assign permissions at entry, field, and asset level. For example, “ABC” role can READ only two entries of a content type, or EDIT only the SEO fields, or cannot READ any assets.

To create a Custom role, follow the steps mentioned in the [Create a Role](/docs/headless-cms/create-a-role) section.

**Note:** While you can create multiple custom roles within a specific stack, please be aware that there is a maximum limit for customers as per plan outlined in the contract. We advise reviewing your contract details to understand the specific limitations applicable to your plan.

## Stack Roles and Permissions Overview

The following is a tabular summary that outlines the Stack roles and their permissions - making it easier for users to understand what each role entails - and how it operates within the context of stacks:

<table><colgroup data-width="500"><col style="width:35.8%"><col style="width:64.2%"></colgroup><tbody><tr><td><p><strong>Roles</strong></p></td><td><p><strong>Permissions/Rights</strong></p></td></tr><tr><td><p><strong>Owner</strong></p></td><td><ul><li><span>Complete rights to stack content and settings</span></li><li><span>Delete own stack</span></li><li><span>Transfer a stack’s ownership to other user</span></li><li><span>Can create and manage delivery and management tokens&nbsp;</span></li><li><span>Combined rights of admin, developer, and content manager</span></li></ul></td></tr><tr><td><p><span style="color: rgb(13, 13, 13);font-size: 12pt;"><strong>Admin</strong></span></p></td><td><ul><li><span>Create, read, update, and delete rights on: entries, assets, languages, Environments, content types, and custom roles</span></li><li><p><span>Can publish/unpublish entries and assets</span></p></li><li><p><span>Invite/remove users</span></p></li><li><p><span>View audit log and publish queue</span></p></li></ul></td></tr><tr><td><span style="color: rgb(13, 13, 13);font-size: 12pt;"><strong>Developer</strong></span></td><td><ul><li><span>Create roles</span></li><li><span>Invite users</span></li><li><span>Create, read, update, and delete rights on: entries, assets, languages, Environments, and Content Types</span></li><li><span>Can publish/unpublish entries and assets</span></li><li><span>Can create and manage delivery tokens</span></li><li>Cannot create management tokens</li><li><span>View audit log and publish queue</span></li></ul></td></tr><tr><td><span style="color: rgb(13, 13, 13);font-size: 12pt;"><strong>Content Manager</strong></span></td><td><ul><li><span>Create, read, update, and delete rights on published entries and assets</span></li><li><span>View publish queue</span></li><li><span>Limited access to specific environments/locales</span></li></ul></td></tr><tr><td><span style="color: rgb(13, 13, 13);font-size: 12pt;"><strong>Custom Role</strong></span></td><td><ul><li><span>Specific tailored permissions</span></li><li><span>Specific entry, field, and asset-level permissions</span></li></ul></td></tr></tbody></table>

**Note:** It's important to note that custom roles for stacks allow for highly specific permissions that can be tailored to fit various needs, while Organization roles are predefined and cannot be customized.

## API Reference

Here are some relevant API requests that you can use when working with our Content Management APIs:

[Create a Stack](/docs/developers/apis/content-management-api/stacks#create-stack)

[Delete a Stack](/docs/developers/apis/content-management-api/stacks#delete-stack)

[Update a stack](/docs/developers/apis/content-management-api/stacks#update-stack)

[Transfer Ownership](/docs/developers/apis/content-management-api/stacks#transfer-stack-ownership-to-other-users)
