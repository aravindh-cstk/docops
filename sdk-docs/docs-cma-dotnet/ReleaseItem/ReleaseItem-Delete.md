---
title: "Delete"
description: "The Delete request deletes one or more items (entries and/or assets) from a specific Release."
url: "https://www.contentstack.com/dotnet-management-releaseitem-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Delete

The Delete request deletes one or more items (entries and/or assets) from a specific Release.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| models | List<ReleaseItemModel> | Yes | — | List of ReleaseItemModel to be deleted. |
| collection | ParameterCollection | No | — | Query parameter collection |

Returns:
Type
ContentstackResponse

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ReleaseItemModel model = new ReleaseItemModel();
List<ReleaseItemModel> models = new List<ReleaseItemModel>()
{
    model,
};
ContentstackResponse contentstackResponse = client.Stack("<API_KEY>").Release("<RELEASE_UID>").Item("<RELEASE_ITEM_UID>").Delete(models);
```
