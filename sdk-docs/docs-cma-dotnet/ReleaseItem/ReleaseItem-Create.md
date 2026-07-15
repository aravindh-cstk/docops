---
title: "Create"
description: "The Create request allows you to add an item (entry or asset) to a Release. To add entries/assets to a Release, you need to provide the UIDs of the entries/assets in ‘items’ in the request body."
url: "https://www.contentstack.com/dotnet-management-releaseitem-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Create

The Create request allows you to add an item (entry or asset) to a Release. To add entries/assets to a Release, you need to provide the UIDs of the entries/assets in ‘items’ in the request body.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| model | ReleaseItemModel | Yes | — | ReleaseItem Model for creating ReleaseItem. |
| collection | ParameterCollection | No | — | Query parameter collection |

Returns:
Type
ContentstackResponse

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ReleaseItemModel model = new ReleaseItemModel();
ContentstackResponse contentstackResponse = client.Stack("<API_KEY>").Release("<RELEASE_UID>").Item().Create(model);
```
