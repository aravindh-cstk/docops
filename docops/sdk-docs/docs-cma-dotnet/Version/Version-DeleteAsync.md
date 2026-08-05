---
title: "DeleteAsync"
description: "The Delete Version Name of Entry/Asset request allows you to delete the name assigned to a specific version of an entry/asset. This request resets the name of the entry/asset version to the version number."
url: "https://www.contentstack.com/dotnet-management-version-deleteasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## DeleteAsync

The Delete Version Name of Entry/Asset request allows you to delete the name assigned to a specific version of an entry/asset. This request resets the name of the entry/asset version to the version number.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| locale | string | No | — | Locale for the entry version to be deleted |

Returns:
Type
Task<ContentstackResponse>

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = await client.Stack("<API_KEY>").ContentType("<CONTENT_TYPE_UID>").Entry("<ENTRY_UID>").Version("<VERSION>").DeleteAsync();
```

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = await client.Stack("<API_KEY>").Asset("<ASSET_UID>").Version("<VERSION>").DeleteAsync();
```
