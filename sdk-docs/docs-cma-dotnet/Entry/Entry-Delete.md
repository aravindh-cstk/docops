---
title: "Delete"
description: "The Delete Entry call deletes an existing entry and all the entries within it."
url: "https://www.contentstack.com/dotnet-management-entry-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Delete

The Delete Entry call deletes an existing entry and all the entries within it.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| collection | ParameterCollection | No | — | Query parameter. |

Returns:
Type
ContentstackResponse

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = client.Stack("<API_KEY>").ContentType("<CONTENT_TYPE_UID>").Entry("<ENTRY_UID>").Delete();
```
