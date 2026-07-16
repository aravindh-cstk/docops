---
title: "CreateAsync"
description: "The Create a folder call is used to create an asset folder and/or add a parent folder to it."
url: "https://www.contentstack.com/dotnet-management-folder-createasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## CreateAsync

The Create a folder call is used to create an asset folder and/or add a parent folder to it.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| name | string | Yes | — | Name for folder to be updated to. |
| parentUid | string | No | — | Parent uid for the folder to be moved. |

Returns:
Type
Task<ContentstackResponse>

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = await client.Stack("<API_KEY>").Asset().Folder().CreateAsync("<FOLDER_NAME>");
```
