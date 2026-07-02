---
title: "Fetch"
description: "The Fetch a single label call returns information about a particular label of a stack."
url: "https://www.contentstack.com/dotnet-management-label-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Fetch

The Fetch a single label call returns information about a particular label of a stack.

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
ContentstackResponse contentstackResponse = await client.Stack("<API_KEY>").Label("<LABEL_UID>").Fetch();
```
