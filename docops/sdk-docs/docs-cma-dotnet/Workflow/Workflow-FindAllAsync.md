---
title: "FindAllAsync"
description: "The Get all Workflows request retrieves the details of all the Workflows of a stack."
url: "https://www.contentstack.com/dotnet-management-workflow-findallasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## FindAllAsync

The Get all Workflows request retrieves the details of all the Workflows of a stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| collection | ParameterCollection | No | — | Query parameter collection. |

Returns:
Type
Task<ContentstackResponse>

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = await client.Stack("<API_KEY>").Workflow().FindAllAsync();
```
