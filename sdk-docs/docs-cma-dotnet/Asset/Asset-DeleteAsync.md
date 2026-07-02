---
title: "DeleteAsync"
description: "The Delete asset call will delete an existing asset from the stack."
url: "https://www.contentstack.com/dotnet-management-asset-deleteasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## DeleteAsync

The Delete asset call will delete an existing asset from the stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| collection | ParameterCollection | No | — | Query parameter. |

Returns:
Type
Task<ContentstackResponse>

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = await client.Stack("<API_KEY>")..Asset("<ASSET_UID>").DeleteAsync();
```
