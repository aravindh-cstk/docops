---
title: "getQuery"
description: "Returns the raw (JSON) query based on the filters applied on Query object."
url: "https://www.contentstack.com/js-query-getquery"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## getQuery

Returns the raw (JSON) query based on the filters applied on Query object.

No parameters.

Returns:
Type
Query

```
import Contentstack from 'contentstack';

const Stack = Contentstack.Stack({'api_key': 'api_key', 'delivery_token': 'delivery_token', 'environment': 'environment'});
const rawQuery = await Stack.ContentType('content_type_uid').Query().where('title', 'Demo').getQuery();
```
