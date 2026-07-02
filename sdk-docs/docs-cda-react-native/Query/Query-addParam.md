---
title: "addParam"
description: "Includes query parameters in your queries."
url: "https://www.contentstack.com/js-query-add-param"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## addParam

Includes query parameters in your queries.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | No | — | URL parameter key |
| value | string | No | — | Value corresponding to the param |

Returns:
Type
Query

```
import Contentstack from 'contentstack'

const Stack = Contentstack.Stack({'api_key': 'api_key', 'delivery_token': 'delivery_token', 'environment': 'environment'});
const result = await Stack.ContentType('content_type_uid').Query().addParam('include_count', 'true').toJSON().find();
```
