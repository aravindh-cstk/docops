---
title: "entry"
description: "The entry method retrieves a single entry by its UID from the specified content type."
url: "https://www.contentstack.com/datasync-filesystem-global-entry"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## entry

The `entry` method retrieves a single entry by its UID from the specified content type.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| uid | string | No | — | The UID of the entry |

Returns:
Type
Stack

**Example:**

```
Stack.contentType('example').entry('bltabcd12345').find();
// or
Stack.contentType('example').entry().find();
```
