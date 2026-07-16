---
title: "notExists"
description: "The notExists method retrieves entries where the specified conditions are not met."
url: "https://www.contentstack.com/typescript-delivery-query-notexists"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## notExists

The notExists method retrieves entries where the specified conditions are not met.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | Yes | — | UID of the field |

Returns:
Type
Query

**Example:**

```
const query = stack.contentType("contentTypeUid").entry().query();
const result = await query.notExists('fieldUid').find();
```
