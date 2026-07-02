---
title: "find"
description: "Retrieves entries that satisfied the specified query."
url: "https://www.contentstack.com/js-query-find"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## find

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
const result = await Stack.ContentType('content_type_uid').Query().toJSON().find();
```
