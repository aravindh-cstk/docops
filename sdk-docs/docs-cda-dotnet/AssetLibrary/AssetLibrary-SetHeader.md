---
title: "SetHeader"
description: "To set headers for Contentstack rest calls."
url: "https://www.contentstack.com/dotnet-assetlibrary-setheader"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## SetHeader

To set headers for Contentstack rest calls.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | No | — | header name. |
| value | string | No | — | header value against given header name. |

Returns:
Type
void

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
ContentstackCollection<Asset> asset = await stack.AssetLibrary().SetHeader("custom_key", "custom_value").FindAll();
```
