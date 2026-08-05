---
title: "language"
description: "The `language` method sets the locale to be used when querying entries."
url: "https://www.contentstack.com/datasync-mongodb-sdk-global-language"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## language

The `language` method sets the locale to be used when querying entries.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| code | string | Yes | — | Language code to use |

Returns:
Type
Stack

**Example:**

```
Stack
  .contentType('blog')
  .entries()
  .language('es-es')
  .find()
  .then((result) => {
    // returns entries fetched from 'es-es' locale
  })
  .catch((error) => {
    // Handle errors that occur during the query execution
  })
```
