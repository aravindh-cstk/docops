---
title: "[AM2.0] - About Assets Roles"
description: About Assets Roles
url: https://www.contentstack.com/docs/assets/about-assets-roles
product: Contentstack Assets
doc_type: concept
audience:
  - administrators
  - developers
  - content-managers
version: AM2.0
last_updated: 2026-03-25
---

# [AM2.0] - About Assets Roles

This page explains how Contentstack Assets uses role-based access control (RBAC) to manage permissions at the product and space levels. It is intended for administrators and team members who need to understand or configure access to Assets, and should be used when assigning roles or planning permission models across spaces.

## About Assets Roles

Contentstack [Assets](./about-assets.md) uses **role-based access control** (**RBAC**) to manage who can access Assets and what actions they can perform. Permissions are applied at two levels:
- **Product-level roles**: These organization-level roles control product-wide capabilities across Assets, such as creating spaces, configuring asset types, managing Asset roles and users, and others.
- **Space-level roles**: Controls access and actions within a specific space, such as uploading assets, managing workspaces, managing space languages, and managing space users and roles.

A user’s effective permissions are determined by the combination of organization-level role(s) and space-level role(s) assigned for each space.

Contentstack provides the following out-of-the-box product-level roles:
- **Product Admin**: Full access to Assets administration across assigned spaces. Commonly manages users, roles, spaces, asset types, user-defined fields, and languages.
- **Asset Type Manager**: Manages asset types and user-defined fields. Typically supports metadata modeling and schema configuration.
- **Member**: Provides access to the Assets, but does not grant administrative permissions by itself. Capabilities depend on space-level roles assigned per space.

By combining product-level roles with space-level roles, Contentstack Assets delivers flexible, secure, and scalable access control. This ensures the right users have the right level of access to assets, exactly where they need it.

## Common questions

### What determines a user’s effective permissions in Assets?
A user’s effective permissions are determined by the combination of organization-level role(s) and space-level role(s) assigned for each space.

### What is the difference between product-level roles and space-level roles?
Product-level roles control product-wide capabilities across Assets, while space-level roles control access and actions within a specific space.

### Which out-of-the-box product-level roles are available?
Contentstack provides Product Admin, Asset Type Manager, and Member as out-of-the-box product-level roles.

### Does the Member product-level role grant administrative permissions?
No. The Member role provides access to the Assets, but does not grant administrative permissions by itself; capabilities depend on space-level roles assigned per space.