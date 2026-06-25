---
title: "[AM2.0] - About Space Roles"
description: About space roles and how they control user permissions within a specific space in Contentstack Assets.
url: https://www.contentstack.com/docs/assets/about-space-roles
product: Contentstack Assets
doc_type: concept
audience:
  - administrators
  - developers
  - asset-managers
version: AM2.0
last_updated: 2026-03-25
---

# [AM2.0] - About Space Roles

This page explains what space roles are in Contentstack Assets, what default space-level roles exist, and how space roles work for controlling permissions within a specific space. It is intended for administrators and team members who manage access and governance across asset spaces.

## About Space Roles

Space roles control user permissions within a specific space in Contentstack Assets. These roles define what users can do inside a space, such as managing assets, folders, workspaces, languages, webhooks, and space-level settings.

Unlike organization-level roles, which grant access to the Assets product as a whole, space roles are assigned per space and determine the scope of access within that space only.

This separation allows organizations to maintain granular control over asset operations while enabling secure collaboration across different spaces.

Contentstack Assets provides the following default space-level roles:
- **Space Owner**: Automatically assigned to the creator of the space. Only one Space Owner exists per space.
- **Space Admin**: Full operational control within the space, including users, roles, workspaces, languages, and space settings.
- **Asset Developer**: Supports configuration and setup inside the space. Commonly used for managing setup-related capabilities such as asset types and metadata structure, validation rules, localization setup, and technical integrations within the space.
- **Asset Manager**: Supports day-to-day asset operations. Commonly responsible for uploading, organizing, managing, and maintaining assets along with their asset quality and structure.

## How Space Roles Work
- Space roles apply only to the assigned space.
- A user can have different roles across different spaces.
- Users must have space access even if they already hold an organization-level or product-level role.
- Custom space roles can be created (if permitted by organization settings) to meet specific governance requirements.

Space roles ensure precise, space-specific access control, enabling teams to collaborate securely while maintaining clear ownership and governance within each asset space.

## Common questions

### Can a user have multiple space roles?
A user can have different roles across different spaces.

### Do organization-level roles automatically grant access to a space?
Users must have space access even if they already hold an organization-level or product-level role.

### What default space-level roles are available?
Contentstack Assets provides the following default space-level roles: Space Owner, Space Admin, Asset Developer, and Asset Manager.

### Can custom space roles be created?
Custom space roles can be created (if permitted by organization settings) to meet specific governance requirements.