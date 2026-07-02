---
title: "IncludeFallback"
description: "Include fallback locale publish content, if specified locale content is not publish."
url: "https://www.contentstack.com/dotnet-asset-includefallback"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## IncludeFallback

Include fallback locale publish content, if specified locale content is not publish.

No parameters.

Returns:
Type
Asset

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
Asset asset = await stack.Asset("asset_uid").IncludeFallback().Fetch();
```
