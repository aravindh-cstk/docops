---
title: "IncludeBranch"
description: "Include branch for publish content."
url: "https://www.contentstack.com/dotnet-query-includebranch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## IncludeBranch

Include branch for publish content.

No parameters.

Returns:
Type
Query

```
using Contentstack.Core;
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
ContentstackCollection<Entry> collection = await stack.ContentType("content_Type_uid").Query().IncludeBranch().Find<Entry>();
```
