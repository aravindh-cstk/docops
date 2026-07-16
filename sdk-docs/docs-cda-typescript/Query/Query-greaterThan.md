---
title: "greaterThan"
description: "The greaterThan method retrieves the entries that are greater than the specified condition."
url: "https://www.contentstack.com/typescript-delivery-query-greaterthan"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## greaterThan

The greaterThan method retrieves the entries that are greater than the specified condition.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | Yes | — | UID of the field |
| value | array | Yes | — | Array of values that are to be used to match or compare |

Returns:
Type
Query

**Example:**

```
const query = stack.contentType('contenttype_uid').query().where('title', QueryOperation.EQUALS, 'value');
const entryQuery = await stack.contentType('contenttype_uid').query().greaterThan('fieldUid', 'value').find<BlogPostEntry>();
```
