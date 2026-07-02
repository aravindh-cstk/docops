---
title: "CreateAsync"
description: "The Upload asset request uploads an asset file to your stack."
url: "https://www.contentstack.com/dotnet-management-asset-createasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## CreateAsync

The Upload asset request uploads an asset file to your stack.

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
ContentstackResponse contentstackResponse = await client.Stack("<API_KEY>").Asset().CreateAsync(model);
```
