---
title: "Limit"
description: "The ‘limit’ parameter will return a specific number of Objects in the output."
url: "https://www.contentstack.com/dotnet-management-query-limit"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Limit

The ‘limit’ parameter will return a specific number of Objects in the output.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| value | Double | Yes | — | Number of object in limit. |

Returns:
Type
Query

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
Query query = client.Stack().Query().Limit(5);
```
