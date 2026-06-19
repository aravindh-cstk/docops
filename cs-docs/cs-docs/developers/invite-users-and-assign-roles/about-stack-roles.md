---
title: "[Set Up Your Project] - About Stack Roles"
description: About Stack Roles
url: https://www.contentstack.com/docs/headless-cms/about-stack-roles
product: Contentstack
doc_type: concept
audience:
  - developers
  - administrators
version: current
last_updated: 2026-03-25
---

# [Set Up Your Project] - About Stack Roles

This page explains what Stack Roles are in Contentstack and how roles and permissions apply to users across a stack and its branches. It is intended for developers and administrators who need to invite users and assign role-based permissions, and should be used when planning or managing access control for stack content.

## About Stack Roles

A **Role **is a collection of permissions that applies to all the users who are assigned to it. Using Roles, you can assign permissions to a group of users rather than assigning permissions individually.

**Note:** Any role you assign to a stack user will be reflected across all the branches of the stack. That user role will be able to access data of only the allowed branch(es) or branches associated with the allowed alias(es). Refer to our [Global Modules](/docs/developers/branches/global-modules) document for more information.

Roles enables you to set permissions on all/specific [entries](/docs/content-managers/author-content/about-entries/), all/specific [assets](/docs/content-managers/author-content/about-assets/), and all/specific [asset folders](/docs/content-managers/author-content/create-a-folder/). While you can create a role, Contentstack has already defined roles, which you can assign to a user, named as “Admin,” “Developer,” and “Content Manager.”

**Additional Resource**: To know more about roles and their associated permissions, refer to the [Types of Roles](/docs/developers/invite-users-and-assign-roles/types-of-roles) article.

For example, if you create a role that has “Create” and “Delete” permissions on certain content types and assign this role to 20 users, all these 20 users will have "Create” and “Delete” permissions on all the entries of the assigned content types.

You can browse through the following topics, mentioned in the “More Articles” section, to learn more about Roles.

## Common questions

1. **Do roles apply across all branches of a stack?**  
   Yes. **Note:** Any role you assign to a stack user will be reflected across all the branches of the stack.

2. **What predefined roles does Contentstack provide?**  
   Contentstack has already defined roles, which you can assign to a user, named as “Admin,” “Developer,” and “Content Manager.”

3. **Where can I learn more about roles and their permissions?**  
   Refer to the [Types of Roles](/docs/developers/invite-users-and-assign-roles/types-of-roles) article.