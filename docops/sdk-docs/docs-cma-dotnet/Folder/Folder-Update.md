---
title: "Update"
description: "The Update or move folder request can be used either to update the details of a folder or set the parent folder if you want to move a folder under another folder."
url: "https://www.contentstack.com/dotnet-management-folder-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Update

The Update or move folder request can be used either to update the details of a folder or set the parent folder if you want to move a folder under another folder.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| name | string | Yes | — | Name for folder to be updated to. |
| parentUid | string | No | — | Parent uid for the folder to be moved. |

Returns:
Type
ContentstackResponse

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = client.Stack("<API_KEY>").Asset().Folder("<ASSET_UID>").Update("<FOLDER_NAME>");
```
