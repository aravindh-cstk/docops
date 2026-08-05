---
title: "UpdateAsync"
description: "The Replace asset call will replace an existing asset with another file on the stack."
url: "https://www.contentstack.com/dotnet-management-asset-updateasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## UpdateAsync

The Replace asset call will replace an existing asset with another file on the stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| model | AssetModel | Yes | — | Asset Model with details. |
| collection | ParameterCollection | No | — | Query parameter collection |

Returns:
Type
Task<ContentstackResponse>

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
AssetModel model = new AssetModel("ASSET_NAME", "FILE_PATH", "FILE_CONTENT_TYPE");
ContentstackResponse contentstackResponse = await client.Stack("<API_KEY>").Asset("<ASSET_UID>").UpdateAsync(model);
```
