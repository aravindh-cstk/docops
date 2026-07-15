---
title: "limit"
description: "The limit method will return a specific number of entries in the output."
url: "https://www.contentstack.com/typescript-delivery-entry-limit"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## limit

The limit method will return a specific number of entries in the output.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| limit | int | Yes | — | Enter the maximum number of entries to be returned. |

Returns:
Type
Entry

**Example:**

```
const result = await stack
                       .contentType(contentType_uid)
                       .entry()
                       .limit(5)
                       .find<BlogEntry>();
```
