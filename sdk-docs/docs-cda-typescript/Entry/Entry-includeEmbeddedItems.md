---
title: "includeEmbeddedItems"
description: "The includeEmbeddedItems method includes embedded objects (Entry and Assets) along with entry details"
url: "https://www.contentstack.com/typescript-delivery-entry-includeembeddeditems"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeEmbeddedItems

The includeEmbeddedItems method includes embedded objects (Entry and Assets) along with entry details

No parameters.

Returns:
Type
Entry

**Example:**

```
const result = await stack
                       .contentType(contentType_uid)
                       .entry('entry_uid')
                       .includeEmbeddedItems()
                       .fetch<BlogEntry>();
```
