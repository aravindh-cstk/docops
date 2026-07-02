---
title: "containedIn"
description: "The containedIn method retrieves the entries that contain the conditions specified."
url: "https://www.contentstack.com/typescript-delivery-query-containedin"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## containedIn

The containedIn method retrieves the entries that contain the conditions specified.

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
const result = await query.containedIn('fieldUid', ['value1', 'value2']).find();
```
