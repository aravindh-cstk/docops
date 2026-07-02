---
title: "asset"
description: "The asset method retrieves a single asset by its UID."
url: "https://www.contentstack.com/datasync-mongodb-sdk-global-asset"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## asset

The `asset` method retrieves a single asset by its UID.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| uid | string | Yes | — | UID of the asset to fetch; if not provided, returns the first asset found. |

Returns:
Type
Stack

**Example:**

```
Stack
  .asset('uid')
  .find()
  .then((result) => {
    // returns the asset based on its 'uid', if not provided, it would return the 1st asset found
  })
  .catch((error) => {
    // Handle errors that occur during the query execution
  })
```
