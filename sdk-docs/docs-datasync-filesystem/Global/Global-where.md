---
title: "where"
description: "Pass JS expression or a full function to the query system. Evaluate js expressions"
url: "https://www.contentstack.com/datasync-filesystem-global-where"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## where

Pass JS expression or a full function to the query system. Evaluate js expressions

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| field | string | No | — | UID of the field |
| value | string | Yes | — | Matches the entry field against this value |

Returns:
Type
Stack

**Example:**

```
const query = Stack.contentType('example').entries().where("this.title === 'Amazon_Echo_Black'").find()
query.then((result) => {
  // ‘result’ contains the list of entries where value of ‘title’ is equal to ‘Amazon_Echo_Black’.
}).catch(error) => {
  // Handle errors that occur during the query execution
})
```
