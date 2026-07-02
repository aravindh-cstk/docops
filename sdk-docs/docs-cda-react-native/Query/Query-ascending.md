---
title: "ascending"
description: "Sort fetched entries in the ascending order with respect to a specific field."
url: "https://www.contentstack.com/js-query-ascending"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## ascending

Sort fetched entries in the ascending order with respect to a specific field.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | No | — | field uid based on which the ordering will be done |

Returns:
Type
Query

```
import Contentstack from 'contentstack';

const Stack = Contentstack.Stack({'api_key': 'api_key', 'delivery_token': 'delivery_token', 'environment': 'environment'});
const result = await Stack.ContentType('content_type_uid').Query().ascending('field_uid').toJSON().find();
```
