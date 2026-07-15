---
title: "except"
description: "The except method excludes specific field(s) of an entry."
url: "https://www.contentstack.com/typescript-delivery-entry-except"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## except

The except method excludes specific field(s) of an entry.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| fieldUid | string | Yes | — | UID of the field to exclude |

Returns:
Type
EntryQueryable

**Example:**

```
const result = await stack
                       .contentType("contentTypeUid")
                       .entry()
                       .except("fieldUID")
                       .find<BlogPostEntry>();
```
