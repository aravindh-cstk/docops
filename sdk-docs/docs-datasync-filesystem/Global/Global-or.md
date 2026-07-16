---
title: "or"
description: "The `or` method combines multiple conditions using the logical OR operator."
url: "https://www.contentstack.com/datasync-filesystem-global-or"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## or

The `or` method combines multiple conditions using the logical OR operator.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| queries | object | Yes | — | Array of Query objects or raw query conditions |

Returns:
Type
Stack

**Example:**

```
Stack
 .contentType('example')
 .entries()
 .or([{ title: 'John'}, { title: 'Jane'}])
 .find()
 .then((result) => {
   //  Queries local filesystem for entries with title "John" and age 30
 })
 .catch((error) => {
    // Handle errors that occur during the query execution
})
```
