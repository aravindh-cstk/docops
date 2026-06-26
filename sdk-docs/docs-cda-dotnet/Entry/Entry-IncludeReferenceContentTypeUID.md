---
title: "IncludeReferenceContentTypeUID"
description: "This method also includes the content type UIDs of the referenced entries returned in the response."
url: "https://www.contentstack.com/dotnet-entry-includereferencecontenttypeuid"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## IncludeReferenceContentTypeUID

This method also includes the content type UIDs of the referenced entries returned in the response.

No parameters.

Returns:
Type
Entry

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
Entry entry = await stack.ContentType("content_Type_uid").Entry("entry_uid").IncludeReferenceContentTypeUID().Fetch<Entry>();
```
