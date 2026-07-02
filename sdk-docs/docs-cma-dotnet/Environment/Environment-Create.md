---
title: "Create"
description: "The Create function will add a publishing environment for a stack."
url: "https://www.contentstack.com/dotnet-management-environment-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Create

The Create function will add a publishing environment for a stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| model | EnvironmentModel | Yes | — | Environment model for updating the environment. |
| collection | ParameterCollection | No | — | Query parameter collection |

Returns:
Type
ContentstackResponse

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
EnvironmentModel model = new EnvironmentModel();
ContentstackResponse contentstackResponse = client.Stack("<API_KEY>").Environment().Create(model);
```
