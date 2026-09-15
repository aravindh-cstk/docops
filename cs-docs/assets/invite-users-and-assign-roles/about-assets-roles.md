---
title: "About Assets Roles"
description: "Discover how Contentstack Assets utilizes role-based access control (RBAC) for secure, scalable, and flexible asset management across spaces."
url: /assets/about-assets-roles
uid: blt893a4402b508fd44
---

# About Assets Roles

## About Assets Roles

Contentstack [Assets](/docs/assets/about-assets) uses **role-based access control** (**RBAC**) to manage who can access Assets and what actions they can perform. Permissions are applied at two levels:

-   **Product-level roles**: These organization-level roles control product-wide capabilities across Assets, such as creating spaces, configuring asset types, managing Asset roles and users, and others.
-   **Space-level roles**: Controls access and actions within a specific space, such as uploading assets, managing workspaces, managing space languages, and managing space users and roles.

A user’s effective permissions are determined by the combination of organization-level role(s) and space-level role(s) assigned for each space.

Contentstack provides the following out-of-the-box product-level roles:

-   **Product Admin**: Full access to Assets administration across assigned spaces. Commonly manages users, roles, spaces, asset types, user-defined fields, and languages.
-   **Asset Type Manager**: Manages asset types and user-defined fields. Typically supports metadata modeling and schema configuration.
-   **Member**: Provides access to the Assets, but does not grant administrative permissions by itself. Capabilities depend on space-level roles assigned per space.

By combining product-level roles with space-level roles, Contentstack Assets delivers flexible, secure, and scalable access control. This ensures the right users have the right level of access to assets, exactly where they need it.
