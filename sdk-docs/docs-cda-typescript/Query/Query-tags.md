---
title: "tags"
description: "The tags method fetches the entries that are associated with specific tags."
url: "https://www.contentstack.com/typescript-delivery-query-tags"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## tags

The tags method fetches the entries that are associated with specific tags.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| value | array | Yes | — | Array of tags |

Returns:
Type
Query

**Example:**

```
const query = stack.contentType('contenttype_uid').query().where('title', QueryOperation.EQUALS, 'value');
const entryQuery = await stack.contentType('contenttype_uid').query().tags(['tag1']).find<BlogPostEntry>();
```
