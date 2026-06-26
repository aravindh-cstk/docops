---
title: "RemoveHeader"
description: "Remove header key."
url: "https://www.contentstack.com/dotnet-asset-removeheader"
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
Asset

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
Asset asset = await stack.Asset("asset_uid").RemoveHeader("header_to_remove").Fetch();
```
