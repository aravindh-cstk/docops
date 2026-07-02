---
title: "Create"
description: "The Create Workflow request allows you to create a Workflow."
url: "https://www.contentstack.com/dotnet-management-workflow-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Create

The Create Workflow request allows you to create a Workflow.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| model | WorkflowModel | Yes | — | Workflow Model for updating Content Type. |
| collection | ParameterCollection | No | — | Query parameter collection. |

Returns:
Type
ContentstackResponse

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
WorkflowModel model = new WorkflowModel(); 
ContentstackResponse contentstackResponse = client.Stack("<API_KEY>").Workflow().Create(model);
```
