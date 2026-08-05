---
title: "notExists"
description: "Retrieve entries if value of the field, mentioned in the condition, does not exists."
url: "https://www.contentstack.com/js-query-notexists"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## notExists

Retrieve entries if value of the field, mentioned in the condition, does not exists.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | No | — | UID of the field |

Returns:
Type
Query

```
import Contentstack from 'contentstack';

const Stack = Contentstack.Stack({'api_key': 'api_key', 'delivery_token': 'delivery_token', 'environment': 'environment'});
const result = await Stack.ContentType('content_type_uid').Query().notExists('field_uid').toJSON().find();
```
