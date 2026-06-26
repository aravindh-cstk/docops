---
title: "referenceNotIn"
description: "The referenceNotIn method retrieves the entries where the referenced items are not included."
url: "https://www.contentstack.com/typescript-delivery-query-referencenotin"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## referenceNotIn

The referenceNotIn method retrieves the entries where the referenced items are not included.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | Yes | — | UID of the reference field |
| value | object | Yes | — | RAW (JSON) queries |

Returns:
Type
Query

**Example:**

```
const query = stack.contentType('contenttype_uid').query().where('title', QueryOperation.EQUALS, 'value');
const entryQuery = await stack.contentType('contenttype_uid').query().referenceNotIn('reference_uid', query).find<BlogPostEntry>();
```
