---
title: "param"
description: "This method adds key and value to an Entry."
url: "https://www.contentstack.com/dart-query-param"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## param

This method adds key and value to an Entry.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | key by which you can s ort the results in descending order |
| value | String | Yes | — | value of the param against the key |

Returns:
Type
void

```
import Contentstack

final stack = contentstack.stack(apiKey, delieveryToken, environment)
final query = stack.contentType('contentType').entry().query();
query.param("Key", "Value");
```
