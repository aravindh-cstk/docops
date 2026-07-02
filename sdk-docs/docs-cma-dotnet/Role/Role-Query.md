---
title: "Query"
description: "The Query on Role request returns comprehensive information about all roles created in a stack."
url: "https://www.contentstack.com/dotnet-management-role-query"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Query

The Query on Role request returns comprehensive information about all roles created in a stack.

No parameters.

Returns:
Type
Query

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
Query query = client.Stack("<API_KEY>").Role().Query();
```
