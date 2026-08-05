---
title: "FindAllAsync"
description: "The Get all Publish Rules request retrieves the details of all the Publish rules of a workflow."
url: "https://www.contentstack.com/dotnet-management-publishrule-findallasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## FindAllAsync

The Get all Publish Rules request retrieves the details of all the Publish rules of a workflow.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| collection | ParameterCollection | No | — | Query parameter collection |

Returns:
Type
Task<ContentstackResponse>

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = await client.Stack("<API_KEY>").Workflow().PublishRule().FindAllAsync();
```
