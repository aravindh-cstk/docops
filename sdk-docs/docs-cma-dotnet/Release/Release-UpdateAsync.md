---
title: "UpdateAsync"
description: "The Update call allows you to update the details of a Release, i.e., the ‘name’ and ‘description’."
url: "https://www.contentstack.com/dotnet-management-release-updateasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## UpdateAsync

The Update call allows you to update the details of a Release, i.e., the ‘name’ and ‘description’.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| model | ReleaseModel | Yes | — | Release Model for creating ReleaseModel. |
| collection | ParameterCollection | No | — | Query parameter collection. |

Returns:
Type
Task<ContentstackResponse>

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ReleaseModel model = new ReleaseModel();
ContentstackResponse contentstackResponse = await client.Stack("<API_KEY>").Release("<RELEASE_UID>").UpdateAsync(model);
```
