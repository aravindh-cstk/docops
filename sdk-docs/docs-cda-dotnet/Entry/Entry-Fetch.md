---
title: "Fetch"
description: "Fetches the latest version of the entries from Contentstack.io content stack"
url: "https://www.contentstack.com/dotnet-entry-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Fetch

Fetches the latest version of the entries from Contentstack.io content stack

No parameters.

Returns:
Type
Task<T>

```
using Contentstack.Core;
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
Product product = await stack.ContentType("content_Type_uid").Entry("entry_uid").Fetch<Product>();
```
