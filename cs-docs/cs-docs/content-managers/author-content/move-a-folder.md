---
title: "[Author Content] - Move an Asset Folder"
description: "How to move an asset folder in Contentstack and where to find the API request to move a folder."
url: https://www.contentstack.com/docs/content-managers/author-content/move-a-folder
product: Contentstack
doc_type: how-to
audience:
  - content-managers
  - developers
version: v1
last_updated: 2026-03-26
---

# [Author Content] - Move an Asset Folder

This page explains how to move an asset folder in Contentstack (UI steps) and points to the API reference for moving a folder programmatically. It is intended for content managers organizing assets and developers who may need the corresponding API request.

## Move an Asset Folder

In Contentstack, you can move asset folders into other folders to create a nested folder structure, enhancing your asset organization.

To move an asset folder, log in to your [Contentstack account](https://www.contentstack.com/login), and perform the following steps:
- Go to your [stack](/docs/developers/set-up-stack/about-stack) and click the “Assets” icon in the left navigation panel.
- Locate the folder you want to move, click the **vertical ellipses** under **Actions**, and select **Move To**.
- In the **Move To** modal, select the destination folder, and click **Move here**.

Your folder will now be moved into the selected folder, creating a nested structure.

**Note**:
- You can only move one asset folder at a time.
- Asset folders are designed solely to organize your assets systematically. Assets are identified and accessed through their URL, regardless of the folder they are stored in.

## API Reference

To move an asset folder via API, refer to the [Update or move folder](/docs/developers/apis/content-management-api#update-or-move-folder) API request.

## Common questions

**Q: Can I move multiple asset folders at once?**  
A: You can only move one asset folder at a time.

**Q: Does moving an asset into a different folder change how it is accessed?**  
A: Assets are identified and accessed through their URL, regardless of the folder they are stored in.

**Q: Where do I move an asset folder from in the UI?**  
A: Under **Assets**, click the **vertical ellipses** under **Actions** for the folder and select **Move To**.