---
title: "IncludeBranch"
description: "Include branch for publish content."
url: "https://www.contentstack.com/dotnet-assetlibrary-includebranch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## IncludeBranch

Include branch for publish content.

No parameters.

Returns:
Type
AssetLibrary

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
ContentstackCollection<Asset> assets = await stack.AssetLibrary().IncludeBranch().FindAll();
```
