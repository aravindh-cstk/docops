---
title: "locale"
description: "This method also includes the content type UIDs of the referenced entries returned in the response."
url: "https://www.contentstack.com/dart-entry-locale"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## locale

This method also includes the content type UIDs of the referenced entries returned in the response.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| locale | String | Yes | — | The locale code |

Returns:
Type
void

```
import Contentstack

final stack = contentstack.stack(apiKey, delieveryToken, environment)
final entry = stack.contentType('contentType').entry("uid");
entry.locale('en-eu');
```
