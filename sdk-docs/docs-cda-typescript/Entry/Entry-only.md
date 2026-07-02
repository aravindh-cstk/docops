---
title: "only"
description: "The only method selects specific field(s) of an entry."
url: "https://www.contentstack.com/typescript-delivery-entry-only"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## only

The only method selects specific field(s) of an entry.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| fieldUid | string | Yes | — | UID of the field to select |

Returns:
Type
EntryQueryable

**Example:**

```
const result = await stack
                       .contentType("contentTypeUid")
                       .entry()
                       .only("fieldUID")
                       .find<BlogPostEntry>();
```
