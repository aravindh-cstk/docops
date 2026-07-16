---
title: "RemoveHeader"
description: "Remove header key."
url: "https://www.contentstack.com/dotnet-assetlibrary-removeheader"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## RemoveHeader

Remove header key.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | No | — | key to be remove from header |

Returns:
Type
AssetLibrary

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
ContentstackCollection<Asset> asset = await stack.AssetLibrary("asset_uid").RemoveHeader("header_to_remove").FindAll();
```
