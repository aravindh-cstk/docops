---
title: "include"
description: "The include method includes a specific field in the returned result."
url: "https://www.contentstack.com/datasync-filesystem-global-include"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## include

The `include` method includes a specific field in the returned result.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | Yes | — | UID of the field |

Returns:
Type
Stack

**Example:**

```
Stack.contentType('example')
 .entries()
 .include(['authors','categories'])
 .find()
```
