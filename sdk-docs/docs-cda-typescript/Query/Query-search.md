---
title: "search"
description: "The search method retrieves the entries that match the specified search criteria."
url: "https://www.contentstack.com/typescript-delivery-query-search"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## search

The search method retrieves the entries that match the specified search criteria.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | Yes | — | UID of the field |

Returns:
Type
Query

**Example:**

```
const entryQuery = await stack.contentType('contenttype_uid').query().search('key').find<BlogPostEntry>();
```
