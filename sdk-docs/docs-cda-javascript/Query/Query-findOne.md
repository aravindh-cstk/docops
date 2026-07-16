---
title: "findOne"
description: "Retrieves entries that satisfied the specified query."
url: "https://www.contentstack.com/copy-of-js-query-findone"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## findOne

Retrieves entries that satisfied the specified query.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| param | object | No | — | Fetch options to fetch particular query |

Returns:
Type
Promise

```
import Contentstack from 'contentstack';

const Stack = Contentstack.Stack({'api_key': 'api_key', 'delivery_token': 'delivery_token', 'environment': 'environment'});
const result = await Stack.ContentType('content_type_uid').Query().toJSON().findOne();
```
