---
title: "GetUpdatedBy"
description: "Get Update by user uid"
url: "https://www.contentstack.com/dotnet-asset-getupdatedby"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## GetUpdatedBy

Get Update by user uid

No parameters.

Returns:
Type
string

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
Asset asset = await stack.Asset("asset_uid").Fetch();
string createBy = asset.GetUpdatedBy();
```
