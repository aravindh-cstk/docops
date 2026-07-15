---
title: "[Set up Environments] - Add an Environment"
description: Add an Environment as a content delivery destination where you publish and deploy your application or website content.
url: https://www.contentstack.com/docs/headless-cms/add-an-environment
product: Contentstack
doc_type: how-to
audience:
  - developers
version: current
last_updated: 2026-03-25
---

# [Set up Environments] - Add an Environment

This page explains how to add an Environment in Contentstack, including required roles, configuration fields (such as Base URLs and language-specific URLs), and where to find preview URLs. It is intended for stack Admins and Developers setting up content delivery destinations for publishing and deployment.

## Add an Environment

An [Environment](./about-environments.md) is a content delivery destination where you publish and deploy your application or website content. It acts as a platform through which content is served to end users.

**Note:** Only the stack [Admin](../invite-users-and-assign-roles/types-of-roles.md#admin) and [Developer](../invite-users-and-assign-roles/types-of-roles.md#developer) can add an environment.

To add an Environment, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:
- Go to your [stack](../set-up-stack/about-stack.md) and click the “Settings” icon in the left navigation panel or use the shortcut key “S” (for Windows and Mac OS users).
- Navigate to **Environments** or use the “alt + E” shortcut key for Windows and “option + E” for Mac OS.
- Click on **+ New Environment.**![New Environment Button](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4fa53f02a3b351ed/67d7dca717c800ad4ccd96a6/1._Setup_Environments-Add-an-Environment_Navigation.png)
- In the **Create Environment** modal, enter the following details:**Name:** Enter a name for the environment (e.g., staging).
- **Environment Label Color:** Select a color to represent the environment.
- **Base URLs:**Enter the base URL where content will be published (e.g., `http://localhost:4000` or `http://www.my-site.com`).
- The first Base URL is assigned to **English - United States** by default (non-editable).
- To add language-specific URLs, click **+ Add Base URL** and select a language (e.g., Hindi, Tamil).**Note:** Each Base URL is linked to a specific [language](../multilingual-content/about-languages.md) and acts as a prefix for entry URLs.
- Click **Create** to save the environment.![Create Environment Modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltda647e087de8600b/67d7dca72476a982177d6a26/2._Setup_Environments-Add-an-Environment_Create-New-Environment-Modal.png)

To preview your published content, navigate to `http://localhost:4000/{relative-url-of-the-published-entry}` in your browser. Alternatively, hover over the “preview eye” icon in the **URL** field of your [published entries](../../content-managers/author-content/publish-an-entry.md) to retrieve the URL.

**Note:** You can use [Webhooks](../set-up-webhooks/about-webhooks.md) to trigger deployments to multiple web servers each time you publish content to an environment.

## API Reference

To add an environment via API, refer to the [Add an Environment](../../../api-docs/api-detail/content-management-api.md#add-an-environment) request.

## Common questions

### Who can add an environment?
Only the stack [Admin](../invite-users-and-assign-roles/types-of-roles.md#admin) and [Developer](../invite-users-and-assign-roles/types-of-roles.md#developer) can add an environment.

### What is a Base URL used for?
A Base URL is the base URL where content will be published (e.g., `http://localhost:4000` or `http://www.my-site.com`).

### How do I add language-specific Base URLs?
To add language-specific URLs, click **+ Add Base URL** and select a language (e.g., Hindi, Tamil).

### How can I preview published content?
Navigate to `http://localhost:4000/{relative-url-of-the-published-entry}` in your browser, or hover over the “preview eye” icon in the **URL** field of your [published entries](../../content-managers/author-content/publish-an-entry.md) to retrieve the URL.