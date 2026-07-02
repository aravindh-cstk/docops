---
title: "or"
description: "The or method combines multiple conditions using the logical OR operator and returns entries that match at least one of the conditions."
url: "https://www.contentstack.com/datasync-mongodb-sdk-global-or"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## or

The `or` method combines multiple conditions using the logical OR operator and returns entries that match at least one of the conditions.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| queries | array | Yes | — | Array of query condition objects |

Returns:
Type
Stack

**Example:**

```
Stack
  .contentType('example')
  .entries()
  .or([{ title: 'John' }, { title: 'Jane' }])
  .find()
  .then((result) => {
    // Retrieves entries where title is "John" or "Jane"
  })
  .catch((error) => {
    // Handle errors that occur during the query execution
  })
```
