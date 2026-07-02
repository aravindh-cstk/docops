---
title: "CreateAsync"
description: "The Create Workflow request allows you to create a Workflow."
url: "https://www.contentstack.com/dotnet-management-workflow-createasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## CreateAsync

The Create Workflow request allows you to create a Workflow.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| model | WorkflowModel | Yes | — | Workflow Model for updating Content Type. |
| collection | ParameterCollection | No | — | Query parameter collection. |

Returns:
Type
Task<ContentstackResponse>

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
WorkflowModel model = new WorkflowModel(); 
ContentstackResponse contentstackResponse = await client.Stack("<API_KEY>").Workflow().CreateAsync(model);
```
