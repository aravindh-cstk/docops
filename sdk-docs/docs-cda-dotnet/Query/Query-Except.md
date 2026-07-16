---
title: "Except"
description: "Specifies list of field uids that would be excluded from the response."
url: "https://www.contentstack.com/dotnet-query-except"
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
| fieldUid | string[] | No | — | field uid which get excluded from the response. |

Returns:
Type
Query

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
ContentstackCollection<Entry> collection = await stack.ContentType("content_Type_uid").Query().Except(new String[] {"name", description }).Find<Entry>();
```
