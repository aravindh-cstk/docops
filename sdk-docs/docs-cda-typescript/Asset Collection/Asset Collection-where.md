---
title: "where"
description: "The where method filters the results based on the specified criteria."
url: "https://www.contentstack.com/typescript-delivery-assetquery-where"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## where

The where method filters the results based on the specified criteria.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| fieldUid | string | Yes | — | Specify the field the comparison is made from |
| queryOperation | QueryOperationEnum | Yes | — | Specify the comparison criteria |
| fields | string | Yes | — | Specify the field the comparison is made to |

Returns:
Type
BaseQuery

**Example:**

```
const result = await stack.asset().query().where("field_UID", QueryOperation.IS_LESS_THAN, ["field1", "field2"])

.find<BlogAsset>();
```
