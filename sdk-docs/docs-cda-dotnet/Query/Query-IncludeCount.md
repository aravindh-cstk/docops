---
title: "IncludeCount"
description: "Retrieve count and data of objects in result."
url: "https://www.contentstack.com/dotnet-query-includecount"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## IncludeCount

Retrieve count and data of objects in result.

No parameters.

Returns:
Type
Query

```
using Contentstack.Core;
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
ContentstackCollection<Entry> collection = await stack.ContentType("content_Type_uid").Query().IncludeCount().Find<Entry>();
```
