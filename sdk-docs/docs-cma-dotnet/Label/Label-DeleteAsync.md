---
title: "DeleteAsync"
description: "The Delete label call is used to delete a specific label."
url: "https://www.contentstack.com/dotnet-management-label-deleteasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## DeleteAsync

The Delete label call is used to delete a specific label.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| collection | ParameterCollection | No | — | Query parameter collection. |

Returns:
Type
Task<ContentstackResponse>

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = await client.Stack("<API_KEY>").Label("<LABEL_UID>").DeleteAsync();
```
