---
title: "EntryWorkflowStage"
description: "A workflow lets you manage the stages through which your content will move in the content creation process."
url: "https://www.contentstack.com/developers/sdks/content-management-sdk/dot-net/reference/entryworkflowstage"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

# EntryWorkflowStage

## EntryWorkflowStage

A workflow lets you manage the stages through which your content will move in the content creation process.

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| AssignedByRoles | List<AssignRole> | No | — | List of assigned roles for the workflow stage. |
| AssignedTo | List<AssignUser> | No | — | List of users assigned to the workflow stage. |
| Comment | string | No | — | Comment for the workflow stage. |
| DueDate | string | No | — | Due date for the workflow stage. |
| Notify | bool | No | — | Set true to notify the workflow users. |
| Uid | string | No | — | Workflow stage uid. |
