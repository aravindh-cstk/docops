---
title: "Except"
description: "Specifies list of field uids that would be excluded from the response."
url: "https://www.contentstack.com/dotnet-entry-except"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Except

Specifies list of field uids that would be excluded from the response.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| fieldUids | System.String[] | No | — | Field uid which get excluded from the response. |

Returns:
Type
Entry

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
AssetLibrary assetLibrary = await stack.Entry("entry_uid").Except(new String[]{"name", "description"}).Fetch();
```
