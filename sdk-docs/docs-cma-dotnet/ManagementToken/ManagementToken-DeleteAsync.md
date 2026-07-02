---
title: "DeleteAsync"
description: "The Delete request deletes a specific management token."
url: "https://www.contentstack.com/dotnet-management-managementtoken-deleteasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## DeleteAsync

The Delete request deletes a specific management token.

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
ContentstackResponse contentstackResponse = await client.Stack("<API_KEY>").ManagementToken("<MANAGEMENT_TOKEN_UID>").DeleteAsync();
```
