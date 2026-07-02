---
title: "setHost"
description: "Adds host for the request"
url: "https://www.contentstack.com/dart-stack-sethost"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## setHost

Adds host for the request

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| host | String | Yes | — | The host for the API url |

Returns:
Type
void

```
import Contentstack

final stack = contentstack.Stack("apiKey", "deliveryToken", "environment");
stack.setHost("host")                                                                        </span>
```
