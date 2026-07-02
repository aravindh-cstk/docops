---
title: "param"
description: "The param method adds query parameters to the URL."
url: "https://www.contentstack.com/typescript-delivery-entry-param"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## param

The param method adds query parameters to the URL.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | Yes | — | Add any param to include in the response |
| value | string | number | Yes | — | Add the corresponding value of the param key |

Returns:
Type
BaseQuery

**Example:**

```
const result = await stack
                       .contentType("contentTypeUid")
                       .entry()
                       .param("key", "value")
                       .find<BlogPostEntry>();
```
