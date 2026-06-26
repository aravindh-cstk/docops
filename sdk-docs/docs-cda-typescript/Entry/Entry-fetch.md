---
title: "fetch"
description: "The fetch method retrieves the details of a specific entry."
url: "https://www.contentstack.com/typescript-delivery-entry-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch

The fetch method retrieves the details of a specific entry.

No parameters.

Returns:
Type
Promise

**Example:**

```
import { BaseEntry } from '@contentstack/delivery-sdk'


interface BlogPostEntry extends BaseEntry {
  // custom entry types
}
const result = await stack
                      .contentType(contentType_uid)
                      .entry(entry_uid)
                      .fetch<BlogPostEntry>();
```
