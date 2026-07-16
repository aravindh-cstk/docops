---
title: "CreateAsync"
description: "The Create used to create a label."
url: "https://www.contentstack.com/dotnet-management-label-createasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## CreateAsync

The Create used to create a label.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| model | LabelMode | Yes | — | Label Model for updating label. |
| collection | ParameterCollection | No | — | Query parameter collection. |

Returns:
Type
Task<ContentstackResponse>

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
LabelMode model = new LabelMode();
ContentstackResponse contentstackResponse = await client.Stack("<API_KEY>").Label().CreateAsync(model);
```
