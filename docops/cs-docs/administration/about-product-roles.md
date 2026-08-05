---
title: "[Administration] - About Product Roles"
description: About Product Roles
url: https://www.contentstack.com/docs/administration/about-product-roles
product: Contentstack
doc_type: concept
audience:
  - administrators
  - developers
version: current
last_updated: 2026-06-02
---

# [Administration] - About Product Roles

This page explains what product roles are in Contentstack Administration, how they work alongside project-level roles, and what default roles exist for CMS and Assets. It is intended for organization administrators and team leads who assign roles during user invitations or need to design access control across products and projects.

## About Product Roles

Product roles are organization-level roles that control access within a specific Contentstack product, such as the CMS, Assets, or Administration. While Administration roles govern the organization itself, product roles determine what a user can do inside each product they are assigned.

Contentstack provides out-of-the-box product roles for every product. You assign these roles during the user invitation flow, and you can extend them with custom roles when the default roles do not match your access requirements.

## How Product Roles Work

A user's effective permissions within a product are determined by the product role assigned at the organization level, combined with any project-level roles assigned for the stacks, spaces, or other projects they can access.

Organization-level product roles set product-wide capabilities. Project-level roles refine access within an individual stack, space, or other projects. Assigning both gives you centralized control with granular, per-project access.

## CMS Roles

The CMS provides three default organization-level roles.

- **Admin:** Full access to CMS administration, including managing stacks, content types, environments, and users within assigned stacks.
- **Developer:** Access to build and configure content structures, such as content types, global fields, and extensions, along with content access.
- **Content Manager:** Access to create, edit, and publish content within assigned stacks, without the structural or administrative permissions of a Developer or Admin.

## Assets Roles

Assets provides three default organization-level roles.

- **Product Admin:** Full access to Assets administration across assigned spaces. Commonly manages users, roles, spaces, asset types, user-defined fields, and languages.
- **Asset Type Manager:** Manages asset types and user-defined fields. Typically supports metadata modeling and schema configuration.
- **Member:** Provides access to Assets but does not grant administrative permissions by itself. Capabilities depend on the space-level roles assigned per space.

**Additional Resource:** For a detailed explanation of how Assets applies roles at the product and space levels, refer to the [About Assets Roles](../assets/about-assets-roles.md) documentation.

## Custom Product Roles

When the default roles do not match a team's responsibilities, you can create custom organization-level roles for a product through Administration. Custom roles let you select specific permission categories and actions, such as View, Create, Edit, or Delete.

**Note:** Only organization-level (product-level) custom roles can be created through Administration. Project-level custom roles must be created from the respective project or its per-product settings page.

**Additional Resource:** To create a custom organization-level role, refer to the [Create Custom Roles](./create-custom-roles.md) documentation.

## Common questions

### What is the difference between Administration roles and product roles?
Administration roles govern the organization itself, while product roles determine what a user can do inside each product they are assigned.

### How are a user’s effective permissions determined within a product?
A user's effective permissions within a product are determined by the product role assigned at the organization level, combined with any project-level roles assigned for the stacks, spaces, or other projects they can access.

### Can I create custom product roles in Administration?
Yes. Only organization-level (product-level) custom roles can be created through Administration.

### Where do I create project-level custom roles?
Project-level custom roles must be created from the respective project or its per-product settings page.