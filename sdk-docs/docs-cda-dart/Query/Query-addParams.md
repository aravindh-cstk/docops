---
title: "addParams"
description: "This method adds key and value to the Query as Query parameter."
url: "https://www.contentstack.com/dart-query-addparams"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## addParams

This method adds key and value to the Query as Query parameter.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | Key of the query parameter |
| value | String | Yes | — | Value of the Query parameter against the key |

Returns:
Type
void

```
import Contentstack

final stack = contentstack.stack(apiKey, delieveryToken, environment)
final query = stack.contentType('contentType').entry().query();
query.addParam("Key", "Value")
```
