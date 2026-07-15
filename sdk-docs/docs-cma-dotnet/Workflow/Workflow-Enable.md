---
title: "Enable"
description: "The Enable Workflow request allows you to enable a workflow."
url: "https://www.contentstack.com/dotnet-management-workflow-enable"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Enable

The Enable Workflow request allows you to enable a workflow.

No parameters.

Returns:
Type
ContentstackResponse

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = client.Stack("<API_KEY>").Workflow("<WORKFLOW_UID>").Enable();
```
