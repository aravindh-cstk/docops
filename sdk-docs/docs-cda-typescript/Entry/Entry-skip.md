---
title: "skip"
description: "The skip method will skip a specific number of entries in the output."
url: "https://www.contentstack.com/typescript-delivery-entry-skip"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## skip

The skip method will skip a specific number of entries in the output.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| skipBy | int | Yes | — | Enter the number of entries to be skipped. |

Returns:
Type
Entry

**Example:**

```
const result = await stack
                       .contentType(contentType_uid)
                       .entry()
                       .skip(5)
                       .find<BlogEntry>();
```
