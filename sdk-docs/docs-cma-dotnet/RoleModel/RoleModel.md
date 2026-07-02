---
title: "RoleModel"
description: "RoleModel for create or update roles."
url: "https://www.contentstack.com/developers/sdks/content-management-sdk/dot-net/reference/rolemodel"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

# RoleModel

## RoleModel

RoleModel for create or update roles.

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| Name | string | No | — | Role name to be set. |
| Description | string | No | — | Role description to be set. |
| Rules | List<Rule> | No | — | List of rules added to the role. |
| DeployContent | bool | No | — | Set true to deploy the rule content. |
