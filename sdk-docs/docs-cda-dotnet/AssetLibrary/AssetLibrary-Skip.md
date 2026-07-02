---
title: "Skip"
description: "The number of objects to skip before returning any."
url: "https://www.contentstack.com/dotnet-assetlibrary-skip"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Skip

The number of objects to skip before returning any.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| number | int | No | — | No of objects to skip from returned objects. |

Returns:
Type
AssetLibrary

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
ContentstackCollection<Asset> assets = await stack.AssetLibrary().Skip(20).FetchAll();
```
