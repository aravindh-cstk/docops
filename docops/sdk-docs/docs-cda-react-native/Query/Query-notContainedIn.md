---
title: "notContainedIn"
description: "Retrieve entries in which the value of a field does not match with any of the provided array of values."
url: "https://www.contentstack.com/copy-of-js-query-notcontainedin"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## notContainedIn

Retrieve entries in which the value of a field does not match with any of the provided array of values.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | No | — | UID of the field |
| value | array | No | — | Array of values that are to be used to match or compare |

Returns:
Type
Query

```
import Contentstack from 'contentstack';

const Stack = Contentstack.Stack({'api_key': 'api_key', 'delivery_token': 'delivery_token', 'environment': 'environment'});
const result = await Stack.ContentType('content_type_uid').Query().notContainedIn('title', ['Demo', 'Welcome']).toJSON().find();
```
