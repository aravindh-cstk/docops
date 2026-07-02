---
title: "Or"
description: "Add a constraint to fetch all entries which satisfy any queries."
url: "https://www.contentstack.com/dotnet-query-or"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Or

Add a constraint to fetch all entries which satisfy any queries.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| queryObjects | List<Query> | No | — | List of Query instances on which OR query executes. |

Returns:
Type
Query

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
ContentType contentTypeObj = stack.ContentType("contentType_id");

Query query1 = contentTypeObj.Query();
query1.Where("username","content");

Query query2 = contentTypeObj.Query();
query2.Where("email_address","content@email.com");

List<Query> queryList = new List<Query>();
queryList.Add(query1);
queryList.Add(query2);

ContentstackCollection<Entry> collection = await stack.ContentType("content_Type_uid").Query().Or(queryList).Find<Entry>();
```
