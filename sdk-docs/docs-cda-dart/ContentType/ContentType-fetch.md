---
title: "fetch"
description: "This call returns information of a specific content type. It returns the content type schema, but does not include its entries."
url: "https://www.contentstack.com/dart-contenttype-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch

This call returns information of a specific content type. It returns the content type schema, but does not include its entries.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| queryParams | Map<String, dynamic> | No | — | The Query Parameters |

Returns:
Type
void

```
import Contentstack

final stack = final contentType = stack.contentType(“content_type_uid”);
final Map queryParameter = {"key": "value"};
queryParameter[“include_snippet_schema”] = true;
queryParameter[“limit”] = 3;
final response = contentType.fetch(queryParameter);
```
