---
title: "only"
description: "Specifies an array of only keys in BASE object that would be included in the response."
url: "https://www.contentstack.com/dart-entry-only"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## only

Specifies an array of only keys in BASE object that would be included in the response.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| fieldUid | List<String> | Yes | — | The field uid is list of string |

Returns:
Type
void

```
import Contentstack

final stack = contentstack.stack(apiKey, delieveryToken, environment)
final entry = stack.contentType('contentType').entry("uid");
entry.only(fieldUid);
```
