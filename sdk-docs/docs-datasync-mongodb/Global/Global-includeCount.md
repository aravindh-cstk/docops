---
title: "includeCount "
description: "The includeCount method includes the total count of matching entries in the result response."
url: "https://www.contentstack.com/datasync-mongodb-sdk-global-includecount"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## includeCount 

The `includeCount` method includes the total count of matching entries in the result response.

No parameters.

Returns:
Type
Stack

**Example:**

```
Stack
  .contentType('blog')
  .entries()
  .includeCount()
  .find()
  .then((result) => {
    // returns entries, along with a 'count' property, with the total count of entries being returned
  })
  .catch((error) => {
    // Handle errors that occur during the query execution
  })
```
