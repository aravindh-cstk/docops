---
title: "[Set up Environments] - Add an Environment"
description: Add an Environment as a content delivery destination where you publish and deploy your application or website content.
url: https://www.contentstack.com/docs/developers/set-up-environments/add-an-environment
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

An [Environment](/docs/developers/set-up-environments/about-environments) is a content delivery destination where you publish and deploy your application or website content. It acts as a platform through which content is served to end users.

**Note:** Only the stack [Admin](/docs/developers/invite-users-and-assign-roles/types-of-roles#admin) and [Developer](/docs/developers/invite-users-and-assign-roles/types-of-roles#developer) can add an environment.

To add an Environment, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:
- Go to your [stack](/docs/developers/set-up-stack/about-stack) and click the “Settings” icon in the left navigation panel or use the shortcut key “S” (for Windows and Mac OS users).
- Navigate to **Environments** or use the “alt + E” shortcut key for Windows and “option + E” for Mac OS.
- Click on **+ New Environment.**
- In the **Create Environment** modal, enter the following details:**Name:** Enter a name for the environment (e.g., staging).
- **Environment Label Color:** Select a color to represent the environment.
- **Base URLs:**Enter the base URL where content will be published (e.g., `http://localhost:4000` or `http://www.my-site.com`).
- The first Base URL is assigned to **English - United States** by default (non-editable).
- To add language-specific URLs, click **+ Add Base URL** and select a language (e.g., Hindi, Tamil).**Note:** Each Base URL is linked to a specific [language](/docs/developers/multilingual-content/about-languages) and acts as a prefix for entry URLs.
- Click **Create** to save the environment.

To preview your published content, navigate to `http://localhost:4000/{relative-url-of-the-published-entry}` in your browser. Alternatively, hover over the “preview eye” icon in the **URL** field of your [published entries](/docs/content-managers/author-content/publish-an-entry) to retrieve the URL.

**Note:** You can use [Webhooks](/docs/developers/set-up-webhooks/about-webhooks) to trigger deployments to multiple web servers each time you publish content to an environment.

## API Reference

To add an environment via API, refer to the [Add an Environment](/docs/developers/apis/content-management-api#add-an-environment) request.

## Common questions

### Who can add an environment?
Only the stack [Admin](/docs/developers/invite-users-and-assign-roles/types-of-roles#admin) and [Developer](/docs/developers/invite-users-and-assign-roles/types-of-roles#developer) can add an environment.

### What is a Base URL used for?
A Base URL is the base URL where content will be published (e.g., `http://localhost:4000` or `http://www.my-site.com`).

### How do I add language-specific Base URLs?
To add language-specific URLs, click **+ Add Base URL** and select a language (e.g., Hindi, Tamil).

### How can I preview published content?
Navigate to `http://localhost:4000/{relative-url-of-the-published-entry}` in your browser, or hover over the “preview eye” icon in the **URL** field of your [published entries](/docs/content-managers/author-content/publish-an-entry) to retrieve the URL.