---
title: "Only"
description: "Specifies an array of 'only' keys in BASE object that would be 'included' in the response."
url: "https://www.contentstack.com/dotnet-query-only"
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
| fieldUid | string[] | No | — | Array of the 'only' keys to be included in response. |

Returns:
Type
Query

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
ContentstackCollection<Entry> collection = await stack.ContentType("content_Type_uid").Query().Only(new String[] {"name", description }).Find<Entry>();
```
