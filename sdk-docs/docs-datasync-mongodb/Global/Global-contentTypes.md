---
title: "contentTypes"
description: "The contentTypes method retrieves schemas of all content types."
url: "https://www.contentstack.com/datasync-mongodb-sdk-global-contenttypes"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## contentTypes

The `contentTypes` method retrieves schemas of all content types.

No parameters.

Returns:
Type
Stack

**Example:**

```
Stack
  .contentTypes()
  .find()
  .then((result) => {
    // returns a set of content type schemas
  })
  .catch((error) => {
    // Handle errors that occur during the query execution
  })
```
