---
title: "limit"
description: "Returns a specific number of entries based on the set limit"
url: "https://www.contentstack.com/js-query-limit"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## limit

Returns a specific number of entries based on the set limit

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| limit | number | No | — | maximum number of entries to be returned |

Returns:
Type
Query

```
import Contentstack from 'contentstack';

const Stack = Contentstack.Stack({'api_key': 'api_key', 'delivery_token': 'delivery_token', 'environment': 'environment'});
const result = await Stack.ContentType('content_type_uid').Query().limit(20).toJSON().find();
```
