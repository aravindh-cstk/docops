---
title: "Count"
description: "Retrieve only count of entries in result."
url: "https://www.contentstack.com/dotnet-query-count"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Count

Retrieve only count of entries in result.

No parameters.

Returns:
Type
Task<JObject>

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
ContentstackCollection<Entry> collection = await stack.ContentType("content_Type_uid").Query().Count();
```
