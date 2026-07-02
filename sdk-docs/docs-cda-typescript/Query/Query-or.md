---
title: "or"
description: "The or method retrieves the entries that meet either of the conditions specified."
url: "https://www.contentstack.com/typescript-delivery-query-or"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## or

The or method retrieves the entries that meet either of the conditions specified.

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
const query = await stack.contentType('contenttype_uid').entry().query().or(query1, query2).find<BlogPostEntry>();
```
