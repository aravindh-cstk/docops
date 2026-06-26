---
title: "IncludeCount"
description: "This method also includes the total number of assets returned in the response."
url: "https://www.contentstack.com/dotnet-assetlibrary-includecount"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## IncludeCount

This method also includes the total number of assets returned in the response.

No parameters.

Returns:
Type
AssetLibrary

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
ContentstackCollection<Asset> assets = await stack.AssetLibrary().IncludeCount().FindAll();
```
