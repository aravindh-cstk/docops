---
title: "SetLocale"
description: "Sets the locale."
url: "https://www.contentstack.com/dotnet-assetlibrary-setlocale"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## SetLocale

Sets the locale.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| locale | string | No | — | Locale to be fetch |

Returns:
Type
AssetLibrary

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
ContentstackCollection<Asset> assets = await stack.AssetLibrary().SetLocale("en-us").FetchAll();
```
