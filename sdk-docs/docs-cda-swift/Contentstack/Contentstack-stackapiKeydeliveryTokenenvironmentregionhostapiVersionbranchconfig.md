---
title: "stack(apiKey:deliveryToken:environment:region:host:apiVersion:branch:config:)"
description: "Create a new Stack instance with stack’s API key, delivery token, environment name and config."
url: "https://www.contentstack.com/swift-contentstack-stack-apikey-deliverytoken-environment-region-host-apiversion-branch-config-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## stack(apiKey:deliveryToken:environment:region:host:apiVersion:branch:config:)

Create a new Stack instance with stack’s API key, delivery token, environment name and config.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| apiKey | string | Yes | — | stack apiKey. |
| deliveryToken | String | Yes | — | stack delivery token. |
| environment | String | Yes | — | environment name in which to perform action. |
| region |  | No | — | Contentstack region |
| host | string | No | — | Name of Contentstack api server. |
| apiVersion | string | No | — | API version of Contentstack api server. |
| config | ContentstackConfig | No | — | Config of stack. |

Returns:
Type
Stack

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")
```
