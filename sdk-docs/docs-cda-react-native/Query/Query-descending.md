---
title: "descending"
description: "Sort fetched entries in the descending order with respect to a specific field"
url: "https://www.contentstack.com/js-query-descending"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## descending

Sort fetched entries in the descending order with respect to a specific field

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | No | — | field uid based on which the ordering will be done |

Returns:
Type
Query

```
import Contentstack from 'contentstack';

const Stack = Contentstack.Stack({'api_key': 'api_key', 'delivery_token': 'delivery_token', 'environment': 'environment'});
const result = await Stack.ContentType('content_type_uid').Query().descending('field_uid').toJSON().find();
```
