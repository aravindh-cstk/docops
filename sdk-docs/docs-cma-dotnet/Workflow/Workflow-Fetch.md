---
title: "Fetch"
description: "The fetch Workflow request retrieves the comprehensive details of a specific Workflow of a stack."
url: "https://www.contentstack.com/dotnet-management-workflow-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Fetch

The fetch Workflow request retrieves the comprehensive details of a specific Workflow of a stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| collection | ParameterCollection | No | — | Query parameter collection. |

Returns:
Type
ContentstackResponse

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
ContentstackResponse contentstackResponse = client.Stack("<API_KEY>").Workflow("<WORKFLOW_UID>").Fetch();
```
