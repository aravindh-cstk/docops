---
title: "[Set Up Your Project] - Assign an Alias to a Branch"
description: Assign an alias to a branch in Contentstack to point to a particular branch in your stack.
url: https://www.contentstack.com/docs/headless-cms/assign-an-alias-to-a-branch
product: Contentstack
doc_type: how-to
audience:
  - developers
version: v1
last_updated: 2026-03-26
---

# [Set Up Your Project] - Assign an Alias to a Branch

This page explains how to assign an alias to a branch in Contentstack so the alias points to a specific branch that can act as the primary branch for delivering content. It is intended for developers or stack administrators managing branches and aliases, and should be used when you want to display branch-specific modifications on your website without altering code.

## Assign an Alias to a Branch

An [Alias](./about-aliases.md)helps point to a particular [branch](./about-branches.md)in your stack. When your alias points to a specific branch, that branch acts as the primary branch from which you deliver content to your website. You can display the modifications made in this branch on your website without the need to alter any code.

To create an alias, log in to your [Contentstack account](https://www.contentstack.com/login/), go to your [stack](../set-up-stack/about-stack.md), and perform the following steps:
- Click the “Settings” icon on the left navigation panel, select **Branches,** and click on the **Aliases** tab.
- Click on **+ Assign Alias**.![image.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt8f22beca860c29c0/615a7fbf6d2d465121b1c0fc/image.png)
- The **Assign New Alias** form appears for you to add the following details:
  - **Alias ID:** Enter a name for the alias, such as “alias_1,” “manager_alias,” or so on.
- **Target Branch:** Select a branch to which you want your alias to point from the dropdown.
- Finally, click **Save** to save your alias.![Assign_an_Alias.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blte4f055851fbeb4e1/62192f31f002d14904e68404/Assign_an_Alias.png)

## API Reference

To perform operations related to aliases within your stack via API, refer to the following documents:
- [Aliases collection](../../../api-docs/api-detail/content-management-api.md#aliases) in our Content Management API
- [GraphQL API](../../../api-docs/api-detail/graphql-content-delivery-api.md)

## Common questions

### What is an alias used for?
An alias helps point to a particular branch in your stack so that branch can act as the primary branch from which you deliver content to your website.

### Where do I assign an alias in the UI?
Click the “Settings” icon on the left navigation panel, select **Branches,** and click on the **Aliases** tab.

### What information do I need to create an alias?
You need an **Alias ID** and a **Target Branch**, then click **Save** to save your alias.

### Where can I manage aliases via API?
Refer to the [Aliases collection](../../../api-docs/api-detail/content-management-api.md#aliases) in the Content Management API and the [GraphQL API](../../../api-docs/api-detail/graphql-content-delivery-api.md).