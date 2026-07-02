---
title: "syncToken"
description: "In this API request, you need to provide the sync\\_token that you received in the last complete sync process. If there are more than 100 records, you will get a pagination\\_token instead"
url: "https://www.contentstack.com/dart-stack-synctoken"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## syncToken

In this API request, you need to provide the sync_token that you received in the last complete sync process. If there are more than 100 records, you will get a pagination_token instead

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| syncToken | String | No | - | sync token fetches only the content that was added after your last sync |

Returns:
Type
Future<T>

```
import Contentstack

final stack = contentstack.Stack("apiKey", "deliveryToken", "environment");
var response = stack.syncToken("syncToken")
```
