---
title: "CreateAsync"
description: "The Create request allows you to create a new Release in your stack. To add entries/assets to a Release, you need to provide the UIDs of the entries/assets in ‘items’ in the request body."
url: "https://www.contentstack.com/dotnet-management-release-createasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## CreateAsync

The Create request allows you to create a new Release in your stack. To add entries/assets to a Release, you need to provide the UIDs of the entries/assets in ‘items’ in the request body.

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
ContentstackResponse contentstackResponse = await client.Stack("<API_KEY>").Release().CreateAsync(model);
```
