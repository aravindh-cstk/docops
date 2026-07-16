---
title: "FetchAll"
description: "Execute a AssetLibrary and Caches its result (Optional)"
url: "https://www.contentstack.com/dotnet-assetlibrary-except"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## FetchAll

Execute a AssetLibrary and Caches its result (Optional)

No parameters.

Returns:
Type
Task<JObject>

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
ContentstackCollection<Asset> assets = await stack.AssetLibrary().FetchAll();
```
