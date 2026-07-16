---
title: "where"
description: "The where method filters the results based on the specified criteria."
url: "https://www.contentstack.com/typescript-delivery-query-where"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## where

The where method filters the results based on the specified criteria.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| fieldUid | string | Yes | — | Specify the field the comparison is made from |
| queryOperation | QueryOperationEnum | Yes | — | Specify the comparison criteria |
| fields | string | strings[] | Yes | — | Specify the field the comparison is made to |

Returns:
Type
BaseQuery

**Example:**

```
const query = stack.contentType("contentTypeUid").entry().query();
const result = await query
                       .where(
                         "field_UID", 
                         QueryOperation.IS_LESS_THAN, 
                         ["field1", "field2"])
                       .find<BlogPostEntry>();
```
