---
title: "contentType"
description: "ContentType accepts contentTypeId in as the parameter"
url: "https://www.contentstack.com/dart-stack-contenttype"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## contentType

ContentType accepts contentTypeId in as the parameter

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| contentTypeId | String | Yes | — | ContentType accepts contentTypeId as the parameter |

Returns:
Type
ContentType

```
import Contentstack

final stack = contentstack.Stack("apiKey", "deliveryToken", "environment");
var contentType = stack.contentType("contentTypeId")
```
