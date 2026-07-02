---
title: "assets"
description: "The assets method retrieves a list of all assets."
url: "https://www.contentstack.com/datasync-mongodb-sdk-global-assets"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## assets

The `assets` method retrieves a list of all assets.

No parameters.

Returns:
Type
Stack

**Example:**

```
Stack
  .assets()
  .find()
  .then((result) => {
    // Retrieves assets based on the query
  })
  .catch((error) => {
    // Handle errors that occur during the query execution
  })
```
