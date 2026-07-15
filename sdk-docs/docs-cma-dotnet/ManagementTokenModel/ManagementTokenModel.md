---
title: "ManagementTokenModel"
description: "Management token details for creating or updating token."
url: "https://www.contentstack.com/developers/sdks/content-management-sdk/dot-net/reference/managementtokenmodel"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

# ManagementTokenModel

## ManagementTokenModel

Management token details for creating or updating token.

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| Name | string | No | — | Name for the management token. |
| Description | string | No | — | Description for the management token. |
| ExpiresOn | string | No | — | Expiration date of the token in UTC time |
| IsEmailNotificationEnabled | bool | No | — | Enable notification for the token expiration before seven days. |
| Scope | List<TokenScope> | No | — | List of token scope for stack-level permissions you need to assign to the token. |
