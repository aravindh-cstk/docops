---
title: "and"
description: "The and method retrieves the entries that meet all the specified conditions."
url: "https://www.contentstack.com/typescript-delivery-query-and"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## and

The and method retrieves the entries that meet all the specified conditions.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| queries | array | Yes | — | Array of query objects or raw queries |

Returns:
Type
Query

**Example:**

```
const query1 = stack.contentType('contenttype_uid').entry().query().containedIn('fieldUID', ['value']);
const query2 = stack.contentType('contenttype_uid').entry().query().where('fieldUID', QueryOperation.EQUALS, 'value2');
const query = await stack.contentType('contenttype_uid').entry().query().and(query1, query2).find<BlogPostEntry>();
```
