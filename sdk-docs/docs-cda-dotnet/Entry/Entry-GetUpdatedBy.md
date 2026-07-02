---
title: "GetUpdatedBy"
description: "Get uid who updated this entry."
url: "https://www.contentstack.com/dotnet-entry-getupdatedby"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## GetUpdatedBy

Get uid who updated this entry.

No parameters.

Returns:
Type
string

```
using Contentstack.Core;
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
Entry entry = await stack.ContentType("content_Type_uid").Entry("entry_uid").Fetch<Entry>();
string updatedBy = entry.GetUpdatedBy();
```
