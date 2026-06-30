---
title: "UpdateAsync"
description: "The Update Workflow request allows you to add a workflow stage or update the details of the existing stages of a workflow."
url: "https://www.contentstack.com/dotnet-management-workflow-updateasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## UpdateAsync

The Update Workflow request allows you to add a workflow stage or update the details of the existing stages of a workflow.

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
ContentstackResponse contentstackResponse = await client.Stack("<API_KEY>").Workflow("<WORKFLOW_UID>").UpdateAsync(model);
```
