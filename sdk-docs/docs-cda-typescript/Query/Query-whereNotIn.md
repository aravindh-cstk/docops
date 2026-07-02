---
title: "whereNotIn"
description: "The whereNotIn method retrieves the entries that do not meet the query conditions made on referenced fields."
url: "https://www.contentstack.com/typescript-delivery-query-wherenotin"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## whereNotIn

The whereNotIn method retrieves the entries that do not meet the query conditions made on referenced fields.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| referenceUid | string | Yes | — | UID of the reference field to query |
| queryInstance | Query | Yes | — | Query instance to include in the where clause |

Returns:
Type
Query

**Example:**

```
const query = stack.contentType("contentTypeUid").entry().query();
query.whereNotIn("brand");
const result = await query.find<BlogPostEntry>();
```
