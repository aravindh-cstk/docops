---
title: "skip"
description: "Skips at specific number of entries."
url: "https://www.contentstack.com/js-query-skip"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## skip

Skips at specific number of entries.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| skip | number | No | — | number of entries to be skipped |

Returns:
Type
Query

```
import Contentstack from 'contentstack';

const Stack = Contentstack.Stack({'api_key': 'api_key', 'delivery_token': 'delivery_token', 'environment': 'environment'});
const result = await Stack.ContentType('content_type_uid').Query().skip(20).toJSON().find();
```
