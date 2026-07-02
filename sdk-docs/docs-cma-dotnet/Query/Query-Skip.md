---
title: "Skip"
description: "The ‘skip’ parameter will skip a specific number of Object in the output."
url: "https://www.contentstack.com/dotnet-management-query-skip"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Skip

The ‘skip’ parameter will skip a specific number of Object in the output.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| value | Double | Yes | — | Number of object to skip |

Returns:
Type
Query

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
Query query = client.Stack().Query().Skip(5);
```
