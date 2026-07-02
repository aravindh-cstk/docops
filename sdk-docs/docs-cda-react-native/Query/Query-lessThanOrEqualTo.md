---
title: "lessThanOrEqualTo"
description: "Retrieves entries in which the value of a field is lesser than or equal to the provided value."
url: "https://www.contentstack.com/copy-of-js-query-lessthanorequalto"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## lessThanOrEqualTo

Retrieves entries in which the value of a field is lesser than or equal to the provided value.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | No | — | UID of the field |
| value | any | No | — | Value used to match or compare |

Returns:
Type
Query

```
import Contentstack from 'contentstack';

const Stack = Contentstack.Stack({'api_key': 'api_key', 'delivery_token': 'delivery_token', 'environment': 'environment'});
const result = await Stack.ContentType('content_type_uid').Query().lessThanOrEqualTo('age', 20).toJSON().find();
```
