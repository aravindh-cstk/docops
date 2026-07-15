---
title: "includeContentType"
description: "The `includeContentType` method includes the content type schema of the entries in the response."
url: "https://www.contentstack.com/datasync-mongodb-sdk-global-includecontenttype"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeContentType

The `includeContentType` method includes the content type schema of the entries in the response.

No parameters.

Returns:
Type
Stack

**Example:**

```
Stack
  .contentType('blog')
  .entries()
  .includeContentType()
  .find()
  .then((result) => {
    // returns entries, along with a 'content_type' property, which is 'blog' content type's schema
  })
  .catch((error) => {
    // Handle errors that occur during the query execution
  })
```
