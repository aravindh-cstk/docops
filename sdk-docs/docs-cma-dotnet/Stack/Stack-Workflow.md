---
title: "Workflow"
description: "A Workflow is a tool that allows you to streamline the process of content creation and publishing, and lets you manage the content lifecycle of your project smoothly."
url: "https://www.contentstack.com/dotnet-management-stack-workflow"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Workflow

A Workflow is a tool that allows you to streamline the process of content creation and publishing, and lets you manage the content lifecycle of your project smoothly.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| uid | string | No | — | Optional, workflow uid. |

Returns:
Type
Workflow

```
using Contentstack.Management.Core;
using Contentstack.Management.Core.Models;

ContentstackClient client = new ContentstackClient("<AUTHTOKEN>");
Workflow workflow = client.stack("<API_KEY>").Workflow("<WORKFLOW_UID>");
```
