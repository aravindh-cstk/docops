---
title: "GetCreateAt"
description: "Get created at time."
url: "https://www.contentstack.com/dotnet-asset-getcreateat"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## GetCreateAt

Get created at time.

No parameters.

Returns:
Type
DateTime

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
Asset asset = await stack.Asset("asset_uid").Fetch();
DateTime date = asset.GetCreateAt();
```
