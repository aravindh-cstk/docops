---
title: "Update"
description: "The Update label call is used to update an existing label."
url: "https://www.contentstack.com/dotnet-management-label-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Update

The Update label call is used to update an existing label.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| model | LabelMode | Yes | — | Label Model for updating label. |
| collection | ParameterCollection | No | — | Query parameter collection. |

Returns:
Type
ContentstackResponse

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
LabelMode model = new LabelMode();
ContentstackResponse contentstackResponse = client.Stack("<API_KEY>").Label("<LABEL_UID>").Update(model);
```
