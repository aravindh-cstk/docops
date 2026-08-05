---
title: "query"
description: "Retrieve entries based on raw queries."
url: "https://www.contentstack.com/js-query-query"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## query

Retrieve entries based on raw queries.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| query | object | No | — | RAW (JSON) queries |

Returns:
Type
Query

```
import Contentstack from 'contentstack';

const Stack = Contentstack.Stack({'api_key': 'api_key', 'delivery_token': 'delivery_token', 'environment': 'environment'});
const result = await Stack.ContentType('content_type_uid').Query().query({'brand': {'$nin_query': {'title': 'Apple Inc.'}}}).toJSON().find();
```
