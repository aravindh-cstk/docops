---
title: "only"
description: "Specifies an array of only keys in BASE object that would be included in the response. It refers to the top-level fields of the schema"
url: "https://www.contentstack.com/python-query-only"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## only

Specifies an array of only keys in BASE object that would be included in the response. It refers to the top-level fields of the schema

No parameters.

Returns:
Type
Query

**Example 1:**Displays values of the specified fields of entries or assets in the response.

```
import contentstack;
stack = contentstack.Stack(api_key, delivery_token, environment);
query = stack.content_type("content_type_uid").query()
query.only("title")
```

**Example 2:**The only function with an array of field UIDs will include data of mentioned fields and exclude the data of all other fields for each entry.

```
import contentstack;
stack = contentstack.Stack(api_key, delivery_token, environment);
query = stack.content_type('demo').query().add_param('only[BASE][]', ['title','description'])
response = query.find()
```
