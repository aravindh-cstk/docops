---
title: "notContainedIn"
description: "The notContainedIn method retrieves the entries where the specified conditions are absent."
url: "https://www.contentstack.com/typescript-delivery-query-notcontainedin"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## notContainedIn

The notContainedIn method retrieves the entries where the specified conditions are absent.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | Yes | — | UID of the field |
| value | array | Yes | — | Array of values that are to be used to match or compare |

Returns:
Type
Query

**Example:**

```
const query = stack.contentType("contentTypeUid").entry().query();
const result = await query.notContainedIn('fieldUid', ['value1', 'value2']).find();
```
