---
title: "getContentTypes"
description: "ContentType accepts contentTypeId in as the parameter"
url: "https://www.contentstack.com/copy-of-dart-stack-getcontenttypes"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## getContentTypes

ContentType accepts contentTypeId in as the parameter

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| queryParams | Map | Yes | — | ContentType accepts query params as parameter |

Returns:
Type
Future<T>

```
import Contentstack

final stack = contentstack.Stack("apiKey", "deliveryToken", "environment");
var contentType = stack.getContentTypes()
```
