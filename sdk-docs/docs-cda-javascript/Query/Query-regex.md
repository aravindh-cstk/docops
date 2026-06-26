---
title: "regex"
description: "Retrieve entries that match the provided regular expressions"
url: "https://www.contentstack.com/js-query-regex"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## regex

Retrieve entries that match the provided regular expressions

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | No | — | uid of the field |
| value | any | No | — | value used to match or compare |
| options | any | No | — | match or compare value in entry |

Returns:
Type
Query

**regex without options**

```
import Contentstack from 'contentstack';

const Stack = Contentstack.Stack({'api_key': 'api_key', 'delivery_token': 'delivery_token', 'environment': 'environment'});
const result = await Stack.ContentType('content_type_uid').Query().regex('title', '^Demo').toJSON().find();
```

**regex with options**

```
import Contentstack from 'contentstack';

const Stack = Contentstack.Stack({'api_key': 'api_key', 'delivery_token': 'delivery_token', 'environment': 'environment'});
const result = await Stack.ContentType('content_type_uid').Query().regex('title', '^Demo', 'i').toJSON().find();
```
