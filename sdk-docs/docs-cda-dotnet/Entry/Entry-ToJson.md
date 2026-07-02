---
title: "ToJson"
description: "Get key/value pairs in json of current instance."
url: "https://www.contentstack.com/dotnet-entry-tojson"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## ToJson

Get key/value pairs in json of current instance.

No parameters.

Returns:
Type
JObject

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
Entry entry = await stack.ContentType("content_Type_uid").Entry("entry_uid").IncludeReferenceContentTypeUID().Fetch<Entry>();
JObject jObject = entry.ToJson();
```
