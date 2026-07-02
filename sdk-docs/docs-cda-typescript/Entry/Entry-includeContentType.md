---
title: "includeContentType"
description: "The includeContentType method includes the details of the content type along with the Entry details."
url: "https://www.contentstack.com/typescript-delivery-entry-includecontenttype"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## includeContentType

The includeContentType method includes the details of the content type along with the Entry details.

No parameters.

Returns:
Type
Entry

**Example:**

```
const result = await stack
                       .contentType(contentType_uid)
                       .entry('entry_uid')
                       .includeContentType()
                       .fetch<BlogEntry>();
```
