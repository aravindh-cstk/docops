---
title: "setHost"
description: "Sets the host of the API server"
url: "https://www.contentstack.com/set-host"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## setHost

Sets the host of the API server

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| host | string | No | — | Sets the host of the API server |

Returns:
Type
Stack

```
import Contentstack from 'contentstack'

const Stack = Contentstack.Stack({"api_key": "api_key", "delivery_token": "delivery_token", "environment": "environment"});
Stack.setHost('custom.contentstack.com');
```
