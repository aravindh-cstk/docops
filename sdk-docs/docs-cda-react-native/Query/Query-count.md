---
title: "count"
description: "Returns the total number of entries"
url: "https://www.contentstack.com/js-query-count"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## count

Returns the total number of entries

No parameters.

Returns:
Type
Query

```
import Contentstack from 'contentstack';

const Stack = Contentstack.Stack({'api_key': 'api_key', 'delivery_token': 'delivery_token', 'environment': 'environment'});
const result = await Stack.ContentType('content_type_uid').Query().count().toJSON().find();
```
