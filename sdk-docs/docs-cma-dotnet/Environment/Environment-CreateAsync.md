---
title: "CreateAsync"
description: "The Create function will add a publishing environment for a stack."
url: "https://www.contentstack.com/dotnet-management-environment-createasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## CreateAsync

The Create function will add a publishing environment for a stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| model | EnvironmentModel | Yes | — | Environment model for updating the environment. |
| collection | ParameterCollection | No | — | Query parameter collection |

Returns:
Type
Task<ContentstackResponse>

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
EnvironmentModel model = new EnvironmentModel();
ContentstackResponse contentstackResponse = await client.Stack("<API_KEY>").Environment().CreateAsync(model);
```
