---
title: "WorkflowModel"
description: "WorkflowModel for creating or updating workflow."
url: "https://www.contentstack.com/developers/sdks/content-management-sdk/dot-net/reference/workflowmodel"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

# WorkflowModel

## WorkflowModel

WorkflowModel for creating or updating workflow.

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| Name | string | No | — | Name for the workflow. |
| AdminUsers | Dictionary<string, object> | No | — | Admin user for the workflow. |
| Branches | List<string> | No | — | List of branches for the workflow accessible. |
| ContentTypes | List<string> | No | — | List of content types for the workflow. |
| Enabled | bool | No | — | Set true to enable workflow. |
| WorkflowStages | List<WorkflowStage> | No | — | List of workflow stage for the workflow. |
