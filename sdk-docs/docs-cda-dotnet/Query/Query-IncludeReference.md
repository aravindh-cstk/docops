---
title: "IncludeReference"
description: "Add a constraint that requires a particular reference key details."
url: "https://www.contentstack.com/dotnet-query-includereference"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## IncludeReference

Add a constraint that requires a particular reference key details.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| referenceFields | string[] | No | — | Array key that to be constrained. |

Returns:
Type
Query

```
using Contentstack.Core;
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
ContentstackCollection<Entry> collection = await stack.ContentType("content_Type_uid").Query().IncludeReference(new String[]{"reference_uid_1", "reference_uid_2"}).Find<Entry>();
```
