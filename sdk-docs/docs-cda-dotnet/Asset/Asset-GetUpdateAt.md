---
title: "GetUpdateAt"
description: "Get updated at time."
url: "https://www.contentstack.com/dotnet-asset-getupdateat"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## GetUpdateAt

Get updated at time.

No parameters.

Returns:
Type
DateTime

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
Asset asset = await stack.Asset("asset_uid").Fetch();
DateTime date = asset.GetUpdateAt();
```
