---
title: "referenceIn"
description: "Retrieve entries based on raw queries."
url: "https://www.contentstack.com/js-query-referencein"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## referenceIn

Retrieve entries based on raw queries.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| fieldUid | string | No | — | Reference field Uid |
| query | object | No | — | RAW (JSON) queries |

Returns:
Type
Query

**referenceIn with Query instances**

```
import Contentstack from 'contentstack';

const Stack = Contentstack.Stack({'api_key': 'api_key', 'delivery_token': 'delivery_token', 'environment': 'environment'});

const Query1 = Stack.ContentType('content_type_1').Query().where('title', 'Demo');

const result = await Stack.ContentType('content_type_uid').Query().referenceIn('brand', Query1).toJSON().find();
```

**referenceIn with raw queries:**

```
import Contentstack from 'contentstack';

const Stack = Contentstack.Stack({'api_key': 'api_key', 'delivery_token': 'delivery_token', 'environment': 'environment'});

const result = await Stack.ContentType('content_type_uid').Query().referenceIn('brand', {'title': 'Demo'}).toJSON().find();
```
