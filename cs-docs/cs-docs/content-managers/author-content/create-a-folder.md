---
title: "[Author Content] - Create an Asset Folder"
description: Instructions for creating an asset folder in Contentstack and a reference to the API request for creating folders.
url: https://www.contentstack.com/docs/content-managers/author-content/create-a-folder
product: Contentstack
doc_type: how-to
audience:
  - content-managers
  - authors
version: unknown
last_updated: 2026-03-25
---

# [Author Content] - Create an Asset Folder

This page explains how to create an asset folder in Contentstack to organize assets in the **Assets** section, including nested folder limits and where to find the related API reference. It is intended for content managers and authors who manage assets within a stack.

## Create an Asset Folder

Organizing your assets into folders ensures they are structured and easy to manage. In Contentstack, you can create folders within the **Assets** section and maintain a nested folder structure, allowing up to **5 levels** of depth.

To create an asset folder, log in to your [Contentstack account](https://app.contentstack.com/#!/login), and perform the following steps:
- Go to your [stack](../../developers/set-up-stack/about-stack.md), and click the “Assets” icon in the left navigation panel.
- Click the **Create new asset folder** icon at the top-right corner of the page.
- In the **Create Asset Folder** modal, enter a name for your folder (e.g., Project) and click **Create**.
Your new folder appears on the **Assets** page.

## Adding Assets to a Folder
You can easily upload and organize assets in your newly created folder by following these steps:
- Open the folder where you want to add assets.
- Click the **+ New Asset** button at the top-right corner of the page.
- Upload your assets directly to the folder.

**Note:** A maximum of **10000 folders**, including nested folders, can be created per stack.

## API Reference
To create an asset folder via API, refer to the [Create a folder](../../../api-docs/api-detail/content-management-api.md#create-a-folder) API request.

## Common questions

**How many nested folder levels can I create in Assets?**  
You can maintain a nested folder structure, allowing up to **5 levels** of depth.

**Is there a limit to how many folders I can create per stack?**  
**Note:** A maximum of **10000 folders**, including nested folders, can be created per stack.

**Where do I create a new asset folder in the UI?**  
Go to your stack, click the “Assets” icon in the left navigation panel, then click the **Create new asset folder** icon at the top-right corner of the page.

**Can I create an asset folder using an API?**  
To create an asset folder via API, refer to the [Create a folder](../../../api-docs/api-detail/content-management-api.md#create-a-folder) API request.