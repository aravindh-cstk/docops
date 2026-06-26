---
title: "GetCreatedBy"
description: "Get uid who created this entry."
url: "https://www.contentstack.com/dotnet-entry-getcreatedby"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## GetCreatedBy

Get uid who created this entry.

No parameters.

Returns:
Type
string

```
using Contentstack.Core;
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
Entry entry = await stack.ContentType("content_Type_uid").Entry("entry_uid").Fetch<Entry>();
string createdBy = entry.GetCreatedBy();
```
