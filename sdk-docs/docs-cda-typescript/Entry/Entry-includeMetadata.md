---
title: "includeMetadata"
description: "The includeMetadata method includes the metadata for getting metadata content for the entry."
url: "https://www.contentstack.com/typescript-delivery-entry-includemetadata"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## includeMetadata

The includeMetadata method includes the metadata for getting metadata content for the entry.

No parameters.

Returns:
Type
Entry

**Example:**

```
const result = await stack
                       .contentType('contentType_uid')
                       .entry('entry_uid')
                       .includeMetadata()
                       .fetch<BlogEntry>();
```
