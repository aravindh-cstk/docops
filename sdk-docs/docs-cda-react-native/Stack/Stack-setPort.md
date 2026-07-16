---
title: "setPort"
description: "Sets the port of the host"
url: "https://www.contentstack.com/set-stack-port"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## setPort

Sets the port of the host

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| port | number | No | — | Port number of the endpoint |

Returns:
Type
Stack

```
import Contentstack from 'contentstack'
const Stack = Contentstack.Stack({"api_key": "api_key", "delivery_token": "delivery_token", "environment": "environment"});
Stack.setPort(443);
```
