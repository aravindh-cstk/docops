---
title: "ContainedIn"
description: "Add a constraint to the query that requires a particular key's entry to be contained in the provided array."
url: "https://www.contentstack.com/dotnet-query-containedin"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## ContainedIn

Add a constraint to the query that requires a particular key's entry to be contained in the provided array.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | No | — | the key to be constrained. |
| value | Object[] | No | — | The possible values for the key's object. |

Returns:
Type
Query

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
ContentstackCollection<Entry> collection = await stack.ContentType("content_Type_uid").Query().ContainedIn("title", new Object[]{ "Demo", "Welcome"}).Find<Entry>();
```
