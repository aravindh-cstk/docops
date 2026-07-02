---
title: "includeBranch"
description: "The includeBranch method includes the branch details in the result."
url: "https://www.contentstack.com/typescript-delivery-entry-includebranch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## includeBranch

The includeBranch method includes the branch details in the result.

No parameters.

Returns:
Type
Entry

**Example:**

```
const result = await stack
                       .contentType(contentType_uid)
                       .entry(entry_uid)
                       .includeBranch()
                       .fetch<BlogPostEntry>();
```
