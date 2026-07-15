---
title: "query"
description: "The `query` method initializes a query builder for the selected content type or resource."
url: "https://www.contentstack.com/datasync-filesystem-global-query"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## query

The `query` method initializes a query builder for the selected content type or resource.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| userQuery | object | Yes | — | A raw JSON query object to define custom filters |

Returns:
Type
Stack

**Example:**

```
Stack.contentType('example').entries().query({"authors.name": "John Doe"}).find()
 .then((result) => {
   // returns entries, who's reference author's name equals "John Doe"
 })
 .catch((error) => {
   // Handle errors that occur during the query execution
 })
```
