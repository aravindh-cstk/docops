---
title: "FetchAsync"
description: "The Fetch request returns the details of a specific management token generated in a stack."
url: "https://www.contentstack.com/dotnet-management-managementtoken-fetchasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## FetchAsync

The Fetch request returns the details of a specific management token generated in a stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| collection | ParameterCollection | No | — | Query parameter collection. |

Returns:
Type
Task<ContentstackResponse>

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;
using Contentstack.Management.Core.Models.Tokens;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = await client.Stack("<API_KEY>").ManagementToken("<MANAGEMENT_TOKEN_UID>").FetchAsync();
```
