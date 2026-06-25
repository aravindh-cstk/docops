---
title: "[Create Tokens] - Create a Delivery Token"
description: Create a Delivery Token (and optionally a Preview Token) to enable secure access to published content from specific branches/aliases and publishing environments within a stack.
url: https://www.contentstack.com/docs/headless-cms/create-a-delivery-token
product: Contentstack
doc_type: how-to
audience:
  - developers
version: current
last_updated: 2026-03-25
---

# [Create Tokens] - Create a Delivery Token

This page explains how to create a Delivery Token in Contentstack (and optionally a Preview Token), including required roles, UI steps, and related API references. It is intended for developers and stack administrators who need to enable external applications to securely fetch published content from specific branches/aliases and environments.

[Delivery Tokens](./about-delivery-tokens.md) enable secure access and display of published content to external applications, such as websites and mobile apps. This is done by fetching content from specific [branches](../branches/about-branches.md) and publishing [environments](../set-up-environments/about-environments.md) within your [stack](../set-up-stack/about-stack.md).

**Note:** Only the stack [Owner](../invite-users-and-assign-roles/types-of-roles.md#owner), [Admin](../invite-users-and-assign-roles/types-of-roles.md#admin), and [Developer](../invite-users-and-assign-roles/types-of-roles.md#developer) roles have permission to create Delivery Tokens.

To create a Delivery Token, log in to your [Contentstack account](https://www.contentstack.com/login/), go to your [stack](../set-up-stack/about-stack.md), and perform the following steps:
- Click the “Settings” icon in the left navigation panel or use the shortcut key “S” (for Windows and Mac OS users).
- Click **Tokens** in the settings panel.
- Click **+ Delivery Token** to create a new token.**Tip:** If you are on the [Management Tokens](./about-management-tokens.md) tab, you can press “Alt + O” (for Windows users) or “Option + O” (for Mac users) to navigate to the Delivery Tokens tab.
- Enter a **Name** (required) and a **Description** (optional) for the Delivery Token.
- In the **Scope** section, choose the **Branches** or [**Aliases**](../branches/about-aliases.md) you want to associate with this token.
- Select the **Publishing Environments** for which you want to generate the Delivery Token.
- (Optional) Enable the **Create Preview Token** toggle to generate a [Preview Token](./about-delivery-tokens.md#about-preview-tokens) associated with this Delivery Token.
- Click **Generate Token**.

A new token appears in both the Delivery Token and Preview Token fields. You can copy the tokens using the “Click to copy” icon.

## Create a Preview Token for an Existing Delivery Token

To create a Preview Token for an existing Delivery Token:
- Select a Delivery Token from the **Tokens** page.
- Click **+ Create Preview Token** at the bottom of the page.

**Note:** A Delivery Token is configured for a specific environment and can only retrieve content from that environment.

## API Reference

- To create a Delivery Token via API, refer to the [Create Delivery Token](../../../api-docs/api-detail/content-management-api.md#create-delivery-token) API request.
- To create a Preview Token via API, refer to the [Create Preview Token](../../../api-docs/api-detail/content-management-api.md#create-preview-token) API request.

## Common questions

**Q: Who can create Delivery Tokens?**  
A: Only the stack Owner, Admin, and Developer roles have permission to create Delivery Tokens.

**Q: Can I generate a Preview Token at the same time as a Delivery Token?**  
A: Yes, enable the **Create Preview Token** toggle to generate a Preview Token associated with the Delivery Token.

**Q: Can a Delivery Token retrieve content from multiple environments?**  
A: No. A Delivery Token is configured for a specific environment and can only retrieve content from that environment.

**Q: Where can I find the API requests for creating tokens?**  
A: Use the API Reference links for [Create Delivery Token](../../../api-docs/api-detail/content-management-api.md#create-delivery-token) and [Create Preview Token](../../../api-docs/api-detail/content-management-api.md#create-preview-token).