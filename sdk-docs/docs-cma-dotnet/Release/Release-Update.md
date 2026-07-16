---
title: "Update"
description: "The Update call allows you to update the details of a Release, i.e., the ‘name’ and ‘description’."
url: "https://www.contentstack.com/dotnet-management-release-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Update

The Update call allows you to update the details of a Release, i.e., the ‘name’ and ‘description’.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| model | ReleaseModel | Yes | — | Release Model for creating ReleaseModel. |
| collection | ParameterCollection | No | — | Query parameter collection. |

Returns:
Type
ContentstackResponse

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ReleaseModel model = new ReleaseModel();
ContentstackResponse contentstackResponse = client.Stack("<API_KEY>").Release("<RELEASE_UID>").Update(model);
```
