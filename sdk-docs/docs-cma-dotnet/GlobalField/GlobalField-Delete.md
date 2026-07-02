---
title: "Delete"
description: "The Delete Content Type call deletes an existing global field and all the entries within it."
url: "https://www.contentstack.com/dotnet-management-globalfield-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Delete

The Delete Content Type call deletes an existing global field and all the entries within it.

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
ContentstackResponse contentstackResponse = client.Stack("<API_KEY>").GlobalField("<GLOBAL_FIELD_UID>").Delete();
```
