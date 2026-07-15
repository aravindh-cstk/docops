---
title: "EnableAsync"
description: "The Enable Workflow request allows you to enable a workflow."
url: "https://www.contentstack.com/dotnet-management-workflow-enableasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## EnableAsync

The Enable Workflow request allows you to enable a workflow.

No parameters.

Returns:
Type
Task<ContentstackResponse>

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = await client.Stack("<API_KEY>").Workflow("<WORKFLOW_UID>").EnableAsync();
```
