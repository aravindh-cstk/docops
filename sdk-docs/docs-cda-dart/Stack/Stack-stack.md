---
title: "stack"
description: "an instance of the stack"
url: "https://www.contentstack.com/dart-stack-apikey"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## stack

an instance of the stack

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| apiKey | String | Yes | — | apiKey of the stack |
| deliveryToken | String | Yes | — | Delivery Token for the stack |
| environment | String | Yes | — | Environment of the stack |
| apiVersion | String | No | v3 | apiVersion is version of the API |
| region | Region | No | Region.US | DB region for your stack. You can choose from six regions namely, NA, EU, Azure NA, Azure EU, GCP NA, and GCP EU. |
| host | String | No | cdn.contentstack.io | host of the api |
| livePreview | dict | No | {} | live preview for the stack |
| client | BaseClient | No | — | Client to make API request |

Returns:
Type
Stack

```
import Contentstack

final stack = contentstack.Stack(apiKey, deliveryToken, environment);
```
