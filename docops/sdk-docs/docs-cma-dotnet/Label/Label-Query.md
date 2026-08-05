---
title: "Query"
description: "The Query on Label This call fetches all the existing labels of the stack."
url: "https://www.contentstack.com/dotnet-management-label-query"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Query

The Query on Label This call fetches all the existing labels of the stack.

No parameters.

Returns:
Type
Query

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
Query query = client.Stack("<API_KEY>").Label().Query();
```
