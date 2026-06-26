---
title: "exists"
description: "The exists method retrieves the entries that satisfy the specified condition of existence."
url: "https://www.contentstack.com/typescript-delivery-query-exists"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## exists

The exists method retrieves the entries that satisfy the specified condition of existence.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | Yes | — | UID of the field |

Returns:
Type
Query

**Example:**

```
const query = stack.contentType("contentTypeUid").entry().query();
const result = await query.exists('fieldUid').find();
```
