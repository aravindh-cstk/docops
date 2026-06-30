---
title: "and"
description: "The `and` method combines multiple query conditions using a logical AND operator and returns entries that meet all the specified conditions."
url: "https://www.contentstack.com/untitled"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## and

The `and` method combines multiple query conditions using a logical AND operator and returns entries that meet all the specified conditions.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| queries | object | Yes | — | Filters defining the conditions to match the entries. |

Returns:
Type
Stack

**Example:**

```
Stack
  .contentType('example')
  .entries()
  .and([
    { title: 'John' },
    { age: 30 }
  ])
  .find()
  .then((result) => {
    // Queries local filesystem for entries with title "John" and age 30
  })
  .catch((error) => {
    // Handle errors that occur during the query execution
  })
```
