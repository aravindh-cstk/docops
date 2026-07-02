---
title: "WhereTags"
description: "Include tags with which to search entries."
url: "https://www.contentstack.com/dotnet-query-wheretags"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## WhereTags

Include tags with which to search entries.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| tags | string[] | Yes | — | Array of tags you want to match in the entries |

Returns:
Type
Query

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
ContentstackCollection<Entry> collection = await stack.ContentType("content_Type_uid").Query().WhereTags(new String[] {"tag_1", tag_2}).Find<Entry>();
```
