---
title: "Update"
description: "The Update Content Type call is used to update the schema of an existing content type."
url: "https://www.contentstack.com/dotnet-management-contenttype-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Update

The Update Content Type call is used to update the schema of an existing content type.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| model | ContentModelling | Yes | — | ContentModelling for updating Content Type. |
| collection | ParameterCollection | No | — | Query parameter collection |

Returns:
Type
ContentstackResponse

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;
ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentModelling model = new ContentModelling();
ContentstackResponse contentstackResponse = client.Stack("<API_KEY>").ContentType().Create(model);
```
