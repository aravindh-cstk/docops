---
title: "setHeader"
description: "adds header using header key and value"
url: "https://www.contentstack.com/dart-stack-setheader"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## setHeader

adds header using header key and value

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | The header key |
| value | String | Yes | — | the header value |

Returns:
Type
void

```
import Contentstack

final stack = contentstack.Stack("apiKey", "deliveryToken", "environment");
stack.setHeader("headerKey", "headerValue")                                                                        </span>
```
