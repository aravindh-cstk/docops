---
title: "WorkflowStage"
description: "WorkflowStage model for creating or updating workflow stages."
url: "https://www.contentstack.com/developers/sdks/content-management-sdk/dot-net/reference/workflowstage"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

# WorkflowStage

## WorkflowStage

WorkflowStage model for creating or updating workflow stages.

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| Uid | string | No | — | Uid for workflow stage. |
| Name | string | No | — | Name for the workflow stage. |
| Color | string | No | — | Color for the workflow stage. |
| NextAvailableStages | List<string> | No | — | List of next workflow stages. |
| AllStages | bool | No | — | Set true if required all stages |
| AllUsers | bool | No | — | Set true for all users. |
| EntryLock | string | No | — |  |
| SpecificStages | bool | No | — |  |
| SpecificUsers | bool | No | — |  |
| SystemACL | Dictionary<string, object> | No | — |  |
