---
title: "count"
description: "The `count` method returns the total number of entries matching the query."
url: "https://www.contentstack.com/datasync-filesystem-global-count"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## count

The `count` method returns the total number of entries matching the query.

No parameters.

Returns:
Type
Stack

**Example:**

```
const query = Stack.contentType('example').entries().count().find()
query.then((result) => {
  // returns 'example' content type's entries
}).catch(error) => {
  // Handle errors that occur during the query execution
})
```
