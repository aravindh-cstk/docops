---
title: "ReferenceIn"
description: "Retrieve entries based reference in query"
url: "https://www.contentstack.com/dotnet-query-referencein"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## ReferenceIn

Retrieve entries based reference in query

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | No | — | They key to constraint on |
| query | Query | No | — | Query object |

Returns:
Type
Query

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
ContentType contentTypeObj = stack.ContentType("contentType_id");

Query query = contentTypeObj.Query();
query.Where("email_address","content@email.com");

ContentstackCollection<Entry> collection = await stack.ContentType("content_Type_uid").Query().ReferenceIn("user", query).Find<Entry>();
```
