---
title: "except"
description: "Specifies list of field uids that would be excluded from the response. [fieldUid] field uid which get excluded from the response."
url: "https://www.contentstack.com/dart-query-except"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## except

Specifies list of field uids that would be excluded from the response. [fieldUid] field uid which get excluded from the response.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| fieldUid | List<String> | Yes | — | fieldUid is String type of List |

Returns:
Type
void

```
import Contentstack

final stack = contentstack.Stack("apiKey", "deliveryToken", "environment");
final query = stack.contentType('contentTypeUid').entry().query();
query.except(fieldUid);
```
