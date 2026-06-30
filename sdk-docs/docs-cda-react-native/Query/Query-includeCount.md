---
title: "includeCount"
description: "Includes the total number of entries returned in the response."
url: "https://www.contentstack.com/js-query-includecount"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeCount

Includes the total number of entries returned in the response.

No parameters.

Returns:
Type
Query

```
import Contentstack from 'contentstack';

const Stack = Contentstack.Stack({'api_key': 'api_key', 'delivery_token': 'delivery_token', 'environment': 'environment'});
const result = await Stack.ContentType('content_type_uid').Query().includeCount().toJSON().find();
```
