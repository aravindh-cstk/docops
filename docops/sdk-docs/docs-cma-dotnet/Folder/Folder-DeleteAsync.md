---
title: "DeleteAsync"
description: "The Delete a folder call is used to delete an asset folder along with all the assets within that folder."
url: "https://www.contentstack.com/dotnet-management-folder-deleteasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## DeleteAsync

The Delete a folder call is used to delete an asset folder along with all the assets within that folder.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| collection | ParameterCollection | No | — | Query parameter collection. |

Returns:
Type
Task<ContentstackResponse>

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = await client.Stack("<API_KEY>").Asset().Folder("<ASSET_UID>").DeleteAsync(model);
```
