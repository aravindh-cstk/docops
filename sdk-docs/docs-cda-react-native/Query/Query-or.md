---
title: "or"
description: "Retrieves entries that satisfy at least one of the given conditions"
url: "https://www.contentstack.com/js-query-or"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## or

Retrieves entries that satisfy at least one of the given conditions

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| queries | array | No | — | array of Query objects or raw queries |

Returns:
Type
Query

**or with Query instances:**

```
import Contentstack from 'contentstack';

const Stack = Contentstack.Stack({'api_key': 'api_key', 'delivery_token': 'delivery_token', 'environment': 'environment'});

const Query1 = Stack.ContentType('content_type_1').Query().where('title', 'demo');
const Query2 = Stack.ContentType('content_type_1').Query().lessThan('age', 30);

const result = await Stack.ContentType('content_type_uid').Query().or(Query1, Query2).toJSON().find();
```

**or with raw queries:**

```
import Contentstack from 'contentstack';

const Stack = Contentstack.Stack({'api_key': 'api_key', 'delivery_token': 'delivery_token', 'environment': 'environment'});

const Query1 = Stack.ContentType('content_type_1').Query().where('title', 'demo').getQuery();
const Query2 = Stack.ContentType('content_type_1').Query().lessThan('age', 30).getQuery();

const result = await Stack.ContentType('content_type_uid').Query().or(Query1, Query2).toJSON().find();
```
