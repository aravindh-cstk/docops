---
title: "ContentType"
description: "Set the content type of which you want to retrieve the entries"
url: "https://www.contentstack.com/contenttype"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## ContentType

Set the content type of which you want to retrieve the entries

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| content_type_uid | string | No | — | UID of the existing content type |

Returns:
Type
Stack

```
import Contentstack from 'contentstack'

const Stack = Contentstack.Stack({"api_key": "api_key", "delivery_token": "delivery_token", "environment": "environment"});
const result = await Stack.ContentType('content_type_uid').Query().toJSON().find();
```
