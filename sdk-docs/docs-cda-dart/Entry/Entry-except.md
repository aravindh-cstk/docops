---
title: "except"
description: "Specifies list of field uids that would be excluded from the response."
url: "https://www.contentstack.com/dart-entry-except"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## except

Specifies list of field uids that would be excluded from the response.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| fieldUid | List<String> | Yes | — | field uid which get excluded from the response |

Returns:
Type
void

```
import Contentstack

final stack = contentstack.stack(apiKey, delieveryToken, environment)
final entry = stack.contentType('contentType').entry("uid");
entry.except(fieldUid); // fieldUid is list of Strings
```
