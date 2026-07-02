---
title: "referenceIn"
description: "The referenceIn method retrieves the entries that are referenced."
url: "https://www.contentstack.com/typescript-delivery-query-referencein"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## referenceIn

The referenceIn method retrieves the entries that are referenced.

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
const entryQuery = await stack.contentType('contenttype_uid').query().referenceIn('reference_uid', query).find<BlogPostEntry>();
```
