---
title: "where"
description: "The where method applies a custom JavaScript expression to evaluate and filter entries."
url: "https://www.contentstack.com/datasync-mongodb-sdk-global-where"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## where

The `where` method applies a custom JavaScript expression to evaluate and filter entries.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| filter | string | Yes | — | JavaScript expression as a string |

Returns:
Type
Stack

**Example:**

```
Stack
  .contentType('example')
  .entries()
  .where("this.title === 'Amazon_Echo_Black'")
  .find()
  .then((result) => {
    // returns entries where title matches the expression
  })
  .catch((error) => {
    // Handle errors that occur during the query execution
  })
```
