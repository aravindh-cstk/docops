---
title: "tags"
description: "Retrieves entries based on the provided tags."
url: "https://www.contentstack.com/js-query-tags"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## tags

Retrieves entries based on the provided tags.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| values | array | No | — | array of tags |

Returns:
Type
Query

```
import Contentstack from 'contentstack';

const Stack = Contentstack.Stack({'api_key': 'api_key', 'delivery_token': 'delivery_token', 'environment': 'environment'});
const result = await Stack.ContentType('content_type_uid').Query().tags(['technology', 'business']).toJSON().find();
```
