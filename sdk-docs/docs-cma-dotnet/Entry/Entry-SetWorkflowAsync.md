---
title: "SetWorkflowAsync"
description: "The Set Entry Workflow Stage request allows you to either set a particular workflow stage of an entry or update the workflow stage details of an entry."
url: "https://www.contentstack.com/dotnet-management-entry-setworkflowasync"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## SetWorkflowAsync

The Set Entry Workflow Stage request allows you to either set a particular workflow stage of an entry or update the workflow stage details of an entry.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| model | EntryWorkflowStage | Yes | — | EntryWorkflowStage object for setting entry to workflow stage. |
| collection | ParameterCollection | No | — | Query parameter. |

Returns:
Type
Task<ContentstackResponse>

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
EntryWorkflowStage model = new EntryWorkflowStage();
ContentstackResponse contentstackResponse = await client.Stack("<API_KEY>").ContentType("<CONTENT_TYPE_UID>").Entry("<ENTRY_UID>").SetWorkflowAsync(model);
```
