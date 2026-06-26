---
title: "locale"
description: "[locale] is the code of the language in which the entries need to be included."
url: "https://www.contentstack.com/dart-query-locale"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## locale

[locale] is the code of the language in which the entries need to be included.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| locale | String | Yes | — | [locale] is code of the language of which the entries needs to be included. |

Returns:
Type
void

```
import Contentstack

final stack = contentstack.Stack("apiKey", "deliveryToken", "environment");
final query = stack.contentType('contentTypeUid').entry().query();
query.locale("locale_code");
```
