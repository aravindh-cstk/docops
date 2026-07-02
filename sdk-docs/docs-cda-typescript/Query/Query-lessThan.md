---
title: "lessThan"
description: "The lessThan method retrieves the entries that are less than the specified condition."
url: "https://www.contentstack.com/typescript-delivery-query-lessthan"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## lessThan

The lessThan method retrieves the entries that are less than the specified condition.

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
const entryQuery = await stack.contentType('contenttype_uid').query().lessThan('fieldUid', 'value').find<BlogPostEntry>();
```
