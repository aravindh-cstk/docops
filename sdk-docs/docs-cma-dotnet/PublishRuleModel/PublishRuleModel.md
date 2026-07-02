---
title: "PublishRuleModel"
description: "Set rules for publishing entry/asset."
url: "https://www.contentstack.com/developers/sdks/content-management-sdk/dot-net/reference/publishrulemodel"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

# PublishRuleModel

## PublishRuleModel

Set rules for publishing entry/asset.

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| Actions | List<string> | Yes | — | Set list action for publishing rules. |
| Approvers | Approvals | Yes | — | Approval details for publish rule |
| Branches | List<string> | No | — | List of branches for the publish rule to be applied. |
| ContentTypes | List<string> | No | — | List of content types the publish rule to be applied. |
| DisableApproval | bool | No | — | Set true to disable approvals. |
| Environment | string | No | — | Set environment for the publish rule |
| Locale | string | No | — | Set locale for the publish rules. |
| WorkflowStageUid | string | No | — | Set workflow stage uid for the publish rules. |
| WorkflowUid | string | No | — | Set workflow uid for the publish rules. |
