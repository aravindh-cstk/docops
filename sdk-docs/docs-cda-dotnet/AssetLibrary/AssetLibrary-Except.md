---
title: "Except"
description: "S pecifies list of field uids that would be excluded from the response."
url: "https://www.contentstack.com/dotnet-assetlibrary-except"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Except

Specifies list of field uids that would be excluded from the response.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| fieldUids | System.String[] | No | — |  |

Returns:
Type
AssetLibrary

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
AssetLibrary assetLibrary = await stack.AssetLibrary().Except(new String[]{"name", "description"}).FetchAll();
```
