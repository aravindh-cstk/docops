---
title: "Create"
description: "The Create global field with JSON RTE request shows you how to add a JSON RTE field while creating a global field."
url: "https://www.contentstack.com/dotnet-management-globalfield-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Create

The Create global field with JSON RTE request shows you how to add a JSON RTE field while creating a global field.

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
ContentstackResponse contentstackResponse = client.Stack("<API_KEY>").GlobalField().Create(model);
```
