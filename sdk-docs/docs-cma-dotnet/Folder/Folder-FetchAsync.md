---
title: "FetchAsync"
description: "The Get a single folder call gets the comprehensive details of a specific asset folder by means of folder UID."
url: "https://www.contentstack.com/dotnet-management-folder-fetchasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## FetchAsync

The Get a single folder call gets the comprehensive details of a specific asset folder by means of folder UID.

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
ContentstackResponse contentstackResponse = await client.Stack("<API_KEY>").Asset().Folder("<ASSET_UID>").FetchAsync(model);
```
