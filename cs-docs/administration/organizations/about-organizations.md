---
title: "About Organizations"
description: "Learn what a Contentstack organization is, what it holds, how products and stacks sit inside it, and how roles control access across it."
url: /administration/about-organizations
uid: bltc000729b6ad7701d
---

# About Organizations

## About Organizations

An organization is the top level of Contentstack. Everything your company builds and manages in Contentstack belongs to an organization: its users, the products enabled for it, and the projects inside those products, such as [stacks](/docs/headless-cms/about-stack) in the Headless CMS.

Because everything sits under one organization, you manage access in one place. You invite a user to the organization once, and then decide which products they can use and which stacks or other projects they can work in. The organization's data is hosted in one [region](/docs/administration/about-regions), such as North America or Europe.

## What an Organization Holds

An organization brings together:

-   **Users**: Everyone who has accepted an invitation to the organization. Refer to [Organization Users](/docs/administration/organization-users).
-   **Roles**: The Administration roles, product roles, and project-level roles that decide what each user can do. Refer to [About Administration Roles](/docs/administration/about-administration-roles) and [About Product Roles](/docs/administration/about-product-roles).
-   **Teams**: Groups of users who share the same roles. Refer to [About Teams](/docs/administration/about-teams).
-   **Products**: The Contentstack products enabled for the organization, such as the Headless CMS, Assets, Personalize, Launch, Agent OS, Brand Kit, Developer Hub, Marketplace, and Analytics.
-   **Projects**: The working areas inside a product, such as stacks in the Headless CMS, spaces in Assets, and projects in Personalize and Launch. Every stack belongs to exactly one organization. Refer to [Organization Stacks](/docs/administration/organization-stacks).
-   **Security and identity settings**: Multi-factor authentication, password policies, session timeout, allowed email domains, Single Sign-On (SSO), and SCIM provisioning. These apply to every user in the organization.

## How an Organization Is Structured

The following diagram shows the parts of an organization and how they relate:

![Architecture of a Contentstack organization. Within a region, the organization holds its users, teams, and three levels of roles, its settings, and its products. Each product has its own working area: stacks in the Headless CMS, spaces in Assets, projects in Personalize and Launch, and apps in Marketplace. Other products, such as Agent OS, Brand Kit, Lytics CDP, Developer Hub, Studio, and Analytics, also belong to the organization. A stack holds content types, entries, assets, environments, and more. One user can belong to more than one organization.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am9df3a990da855b1e/d59dbbd55dd3f3cee6fe5816/organization-structure.png)

Every product you open from the **App Switcher** works within the active organization. The products you see depend on what is enabled for your organization and on the product roles assigned to you.

Inside a product, work happens in projects. In the Headless CMS, each stack holds its own content types, entries, assets, environments, and users. Some projects connect to a stack: a Personalize project connects to one stack, and an Assets space can link to stacks. A user can belong to the organization and still have no access to a particular stack until they are given a role in it.

## How Access Works Across Levels

Access in an organization is set at three levels:

1.  **Administration roles** govern the organization itself: managing users, roles, teams, and security settings. Every user has at least one Administration role. The default is **Member**, which gives read-only access to organization information.
2.  **Product roles** govern what a user can do inside a product, such as the CMS or Assets.
3.  **Project-level roles** refine access within a single stack, space, or other project.

Each organization has one **Owner**, the user with the highest level of access. Only the Owner can transfer ownership of the organization to another user. **Admin** users manage the organization's users, roles, teams, and settings day to day.

## Work With More Than One Organization

A user can belong to several organizations, for example one for each business unit or client. Each organization keeps its own users, products, stacks, and settings, so access granted in one organization does not carry over to another.

To move between organizations, click your profile initials and select an organization from **Switch organization**. Refer to [Switch Between Organizations](/docs/administration/switch-between-organizations).

Each organization has a name and a unique ID, its **Organization UID**. You can find both on the **Org Info** tab in Administration, and API requests to the [Administration API](/docs/developers/apis/administration-api) use the UID.

## Manage Your Organization

Organization Owners and Admins manage the organization from **Administration**, which you open from the **App Switcher**. Refer to [Administration Overview](/docs/administration/administration-overview) for every section it contains.
