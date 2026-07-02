---
title: "FindOne"
description: "Execute a Query and Caches its result (Optional)"
url: "https://www.contentstack.com/dotnet-query-findone"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## FindOne

Execute a Query and Caches its result (Optional)

No parameters.

Returns:
Type
Task<ContentstackCollection<T>>

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
ContentstackCollection<Entry> collection = await stack.ContentType("content_Type_uid").Query().FindOne<Entry>();
```
