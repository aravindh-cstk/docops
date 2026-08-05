---
title: "CreateMultipleAsync"
description: "The Create request allows you to add multiple items (entries and/or assets) to a Release. To add entries/assets to a Release, you need to provide the UIDs of the entries/assets in ‘items’ in the request body."
url: "https://www.contentstack.com/dotnet-management-releaseitem-createmultipleasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## CreateMultipleAsync

The Create request allows you to add multiple items (entries and/or assets) to a Release. To add entries/assets to a Release, you need to provide the UIDs of the entries/assets in ‘items’ in the request body.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| models | List<ReleaseItemModel> | Yes | — | List of ReleaseItem Model for creating ReleaseItem. |
| collection | ParameterCollection | No | — | Query parameter collection |

Returns:
Type
Task<ContentstackResponse>

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ReleaseItemModel model = new ReleaseItemModel();
List<ReleaseItemModel> models = new List<ReleaseItemModel>()
{
    model,
};
ContentstackResponse contentstackResponse = await client.Stack("<API_KEY>").Release("<RELEASE_UID>").Item().CreateMultipleAsync(models);
```
