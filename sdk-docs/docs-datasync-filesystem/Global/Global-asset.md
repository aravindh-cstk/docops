---
title: "asset"
description: "The `asset` method retrieves a single asset by its UID."
url: "https://www.contentstack.com/datasync-filesystem-global-asset"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## asset

The `asset` method retrieves a single asset by its UID.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| uid | string | Yes | — | UID of the asset |

Returns:
Type
Stack

**Example:**

```
Stack.asset('uid').find();
// or
Stack.asset().find();
```
