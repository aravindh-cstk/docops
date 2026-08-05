---
title: "DisableAsync"
description: "The Disable Workflow request allows you to disable a workflow."
url: "https://www.contentstack.com/dotnet-management-workflow-disableasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## DisableAsync

The Disable Workflow request allows you to disable a workflow.

No parameters.

Returns:
Type
Task<ContentstackResponse>

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = await client.Stack("<API_KEY>").Workflow("<WORKFLOW_UID>").DisableAsync();
```
