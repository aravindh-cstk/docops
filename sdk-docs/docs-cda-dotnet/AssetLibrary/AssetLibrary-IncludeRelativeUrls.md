---
title: "IncludeRelativeUrls"
description: "This method includes the relative url of assets."
url: "https://www.contentstack.com/dotnet-assetlibrary-includerelativeurls"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## IncludeRelativeUrls

This method includes the relative url of assets.

No parameters.

Returns:
Type
Asset

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
ContentstackCollection<Asset> assets = await stack.AssetLibrary().IncludeRelativeUrls().FindAll();
```
