---
title: "Only"
description: "S pecifies an array of 'only' keys in BASE object that would be 'included' in the response."
url: "https://www.contentstack.com/dotnet-assetlibrary-only"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Only

Specifies an array of 'only' keys in BASE object that would be 'included' in the response.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| fieldUid | System.String[]	 | No | — |  |

Returns:
Type
AssetLibrary

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
AssetLibrary assetLibrary = await stack.AssetLibrary().Only(new String[]{"name", "description"}).FetchAll();
```
