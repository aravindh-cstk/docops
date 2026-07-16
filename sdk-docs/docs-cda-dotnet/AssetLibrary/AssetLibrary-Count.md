---
title: "Count"
description: "Total count of the asset in specified Stack"
url: "https://www.contentstack.com/dotnet-assetlibrary-count"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Count

Total count of the asset in specified Stack

No parameters.

Returns:
Type
Task<JObject>

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
AssetLibrary assetLibrary = await stack.AssetLibrary().Count();
```
