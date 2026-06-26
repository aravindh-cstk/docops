---
title: "Query"
description: "Represents a Query Create Query Instance."
url: "https://www.contentstack.com/dotnet-contenttype-query"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Query

Represents a Query Create Query Instance.

No parameters.

Returns:
Type
Entry

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
Query query = stack.ContentType("content_Type_uid").Query();
```
