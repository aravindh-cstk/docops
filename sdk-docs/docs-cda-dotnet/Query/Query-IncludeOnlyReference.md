---
title: "IncludeOnlyReference"
description: "Specifies an array of except keys that would be excluded in the response."
url: "https://www.contentstack.com/dotnet-query-includeonlyreference"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## IncludeOnlyReference

Specifies an array of except keys that would be excluded in the response.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| keys | string[] | No | — | Array of the only reference keys to be included in response. |
| referenceKey | string | No | — | Key who has reference to some other class object. |

Returns:
Type
Query

```
using Contentstack.Core;
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
ContentstackCollection<Entry> entry = await stack.ContentType("content_Type_uid").Query().IncludeOnlyReference(new String[]{"name", "description"},"referenceUid").Find<Entry>();
```
