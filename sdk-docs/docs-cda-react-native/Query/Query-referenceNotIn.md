---
title: "referenceNotIn"
description: "Retrieve entries based on raw queries."
url: "https://www.contentstack.com/copy-of-js-query-referencein"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## referenceNotIn

Retrieve entries based on raw queries.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| fieldUid | string | No | — | Reference field Uid |
| query | object | No | — | RAW (JSON) queries |

Returns:
Type
Query

**referenceNotIn with Query instances:**

```
import Contentstack from 'contentstack';

const Stack = Contentstack.Stack({'api_key': 'api_key', 'delivery_token': 'delivery_token', 'environment': 'environment'});

const Query1 = Stack.ContentType('content_type_1').Query().where('title', 'Demo');

const result = await Stack.ContentType('content_type_uid').Query().referenceNotIn('brand', Query1).toJSON().find();
```

**referenceNotIn with raw queries:**

```
import Contentstack from 'contentstack';

const Stack = Contentstack.Stack({'api_key': 'api_key', 'delivery_token': 'delivery_token', 'environment': 'environment'});
const result = await Stack.ContentType('content_type_uid').Query().referenceNotIn('brand', {'title': 'Demo'}).toJSON().find();
```
