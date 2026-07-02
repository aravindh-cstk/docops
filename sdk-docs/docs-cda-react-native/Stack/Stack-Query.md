---
title: "Query"
description: "An initializer is responsible for creating Query object.Provides support for all search queries"
url: "https://www.contentstack.com/query"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Query

An initializer is responsible for creating Query object.Provides support for all search queries

No parameters.

Returns:
Type
Query

```
import Contentstack from 'contentstack';

const Stack = Contentstack.Stack({"api_key": "api_key", "delivery_token": "delivery_token", "environment": "environment"});
const result = await Stack.ContentType('content_type_uid').Query().toJSON().find();
```

```
import Contentstack from 'contentstack';

const Stack = Contentstack.Stack({"api_key": "api_key", "delivery_token": "delivery_token", "environment": "environment"});
const result = await Stack.Assets().Query().toJSON().find();
```
