---
title: "SortWithKeyAndOrderBy"
description: "Sorts the assets in the given order on the basis of the specified field."
url: "https://www.contentstack.com/dotnet-assetlibrary-sortwithkeyandorderby"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## SortWithKeyAndOrderBy

Sorts the assets in the given order on the basis of the specified field.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | No | — | Field UID |
| order | string | No | — | ordering for sorting from key |

Returns:
Type
void

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
ContentstackCollection<Asset> asset = await stack.AssetLibrary().SortWithKeyAndOrderBy("field_uid", "order").FindAll();
```
