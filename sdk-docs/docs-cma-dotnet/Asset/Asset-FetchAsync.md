---
title: "FetchAsync"
description: "The Get an asset call returns comprehensive information about a specific version of an asset of a stack."
url: "https://www.contentstack.com/dotnet-management-asset-fetchasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## FetchAsync

The Get an asset call returns comprehensive information about a specific version of an asset of a stack.

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
ContentstackResponse contentstackResponse = await client.Stack("<API_KEY>")..Asset("<ASSET_UID>").FetchAsync();
```
