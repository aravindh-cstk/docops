---
title: "Asset"
description: "Represents a Asset. Creates Asset Instance."
url: "https://www.contentstack.com/dotnet-contentstackclient-asset-method"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Asset

Represents a Asset. Creates Asset Instance.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| Uid | string | No | — | This is Asset Uid of an Asset. |

Returns:
Type
Asset

```
using Contentstack.Core;
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
Asset asset = stack.Asset("asset_uid");
```
