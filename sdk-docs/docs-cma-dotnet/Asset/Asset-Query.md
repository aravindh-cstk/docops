---
title: "Query"
description: "The Query on Asset will allow to fetch details of all Assets."
url: "https://www.contentstack.com/dotnet-management-asset-query"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Query

The Query on Asset will allow to fetch details of all Assets.

No parameters.

Returns:
Type
Query

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
Query query = client.Stack("<API_KEY>").Asset().Query();
```
