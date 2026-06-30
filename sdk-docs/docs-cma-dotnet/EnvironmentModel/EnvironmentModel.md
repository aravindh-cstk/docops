---
title: "EnvironmentModel"
description: "Environment model for creating or updating the environment."
url: "https://www.contentstack.com/developers/sdks/content-management-sdk/dot-net/reference/environmentmodel"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

# EnvironmentModel

## EnvironmentModel

Environment model for creating or updating the environment.

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| DeployContent | bool | No | — | Set true to deploying the content for the environment. |
| Name | string | No | — | Name for the environment. |
| Servers | List<Server> | No | — | List of servers for the Environment. |
| Urls | List<LocalesUrl> | No | — | List of locale urls for the environment. |
