---
title: "addQuery"
description: "Adds query to Entry object."
url: "https://www.contentstack.com/js-query-add-query"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## addQuery

Adds query to Entry object.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | No | — | Key of the query |
| value | any | No | — | Value of the query |

Returns:
Type
Query

```
import Contentstack from 'contentstack'

const Stack = Contentstack.Stack({'api_key': 'api_key', 'delivery_token': 'delivery_token', 'environment': 'environment'});
const result = await Stack.ContentType('content_type_uid').Query().addQuery('include_content_type', true).toJSON().find();
```
