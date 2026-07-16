---
title: "fetch"
description: "The fetch method retrieves the details for the specified content type."
url: "https://www.contentstack.com/typescript-delivery-contenttype-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch

The fetch method retrieves the details for the specified content type.

No parameters.

Returns:
Type
Promise

**Example:**

```
const result = await stack.contentType("contentTypeUid").fetch<BlogPost>();
```
