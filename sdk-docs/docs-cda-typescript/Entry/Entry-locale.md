---
title: "locale"
description: "The locale method retrieves the entries published in that locale."
url: "https://www.contentstack.com/typescript-delivery-entry-locale"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## locale

The locale method retrieves the entries published in that locale.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| locale | string | Yes | — | Locale of the entry |

Returns:
Type
Entry

**Example:**

```
const result = await stack
                       .contentType(contentType_uid)
                       .entry(entry_uid)
                       .locale('en-us')
                       .fetch<BlogPostEntry>();
```
