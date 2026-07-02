---
title: "Update"
description: "The Update Content Type call is used to update the schema of an existing global field."
url: "https://www.contentstack.com/dotnet-management-globalfield-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Update

The Update Content Type call is used to update the schema of an existing global field.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| model | ContentModelling | Yes | — | Content Model for updating GlobalField. |
| collection | ParameterCollection | No | — | Query parameter collection. |

Returns:
Type
ContentstackResponse

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentModeling model = new ContentModeling();
ContentstackResponse contentstackResponse = client.Stack("<API_KEY>").GlobalField("<GLOBAL_FIELD_UID>").Update(model);
```
