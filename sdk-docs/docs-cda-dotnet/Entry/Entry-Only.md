---
title: "Only"
description: "Specifies an array of 'only' keys in BASE object that would be 'included' in the response."
url: "https://www.contentstack.com/dotnet-entry-only"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Only

Specifies an array of 'only' keys in BASE object that would be 'included' in the response.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| fieldUid | System.String[]	 | No | — | Array of the only reference keys to be included in response. |

Returns:
Type
Entry

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
AssetLibrary assetLibrary = await stack.Entry().Only(new String[]{"name", "description"}).Fetch();
```
