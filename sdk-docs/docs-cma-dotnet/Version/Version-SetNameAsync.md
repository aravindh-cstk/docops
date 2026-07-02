---
title: "SetNameAsync"
description: "The Set Version Name for Entry/Asset request allows you to assign a name to a specific version of an entry/asset."
url: "https://www.contentstack.com/dotnet-management-version-setnameasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## SetNameAsync

The Set Version Name for Entry/Asset request allows you to assign a name to a specific version of an entry/asset.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| name | string | No | — | Version name to be assigned to entry/asset. |
| locale | string | No | — | Locale for the version. |
| force | bool | No | — | Set true to force update the version name of the master entry. |

Returns:
Type
Task<ContentstackResponse>

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = await client.Stack("<API_KEY>").ContentType("<CONTENT_TYPE_UID>").Entry("<ENTRY_UID>").Version("<VERSION>").SetNameAsync("<VERSION_NAME>");
```

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = await client.Stack("<API_KEY>").Asset("<ASSET_UID>").Version("<VERSION>").SetNameAsync("<VERSION_NAME>");
```
