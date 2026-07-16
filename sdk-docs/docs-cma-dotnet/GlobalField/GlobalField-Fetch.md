---
title: "Fetch"
description: "The Fetch a single global fieldcall returns information of a specific global field."
url: "https://www.contentstack.com/dotnet-management-globalfield-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Fetch

The Fetch a single global fieldcall returns information of a specific global field.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| collection | ParameterCollection | No | — | Query parameter collection. |

Returns:
Type
ContentstackResponse

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = client.Stack("<API_KEY>").GlobalField("<GLOBAL_FIELD_UID>").Fetch();
```
