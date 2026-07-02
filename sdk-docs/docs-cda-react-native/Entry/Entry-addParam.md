---
title: "addParam"
description: "Includes query parameters in your queries."
url: "https://www.contentstack.com/js-entry-add-param"
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
| key | String | No | — | URL parameter key. |
| value | String | No | — | Value corresponding to the parameter. |

Returns:
Type
Entry

```
import Contentstack from 'contentstack'

const Stack = Contentstack.Stack({'api_key': 'api_key', 'delivery_token': 'delivery_token', 'environment': 'environment'});
const result = await Stack.ContentType('content_type_uid').Entry('entry_uid').addParam('include_count', 'true').toJSON().fetch();
```
