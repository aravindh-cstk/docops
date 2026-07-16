---
title: "entry"
description: "The entry method creates an entry object for the specified entry."
url: "https://www.contentstack.com/typescript-delivery-contenttype-entry"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## entry

The entry method creates an entry object for the specified entry.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| uid | string | No | — | UID of the entry |

Returns:
Type
Entries

**Example:**

```
const entry = stack.contentType("contentTypeUid").entry("entryUid");
```
