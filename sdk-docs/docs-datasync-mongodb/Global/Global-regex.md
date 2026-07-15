---
title: "regex"
description: "The `regex` method retrieves entries where the value of the specified field matches the given regular expression."
url: "https://www.contentstack.com/datasync-mongodb-sdk-global-regex"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## regex

The `regex` method retrieves entries where the value of the specified field matches the given regular expression.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | Yes | — | The unique identifier of the field to match in the query |
| value | string | Yes | — | The regex pattern to test against the field's value. |
| options | string | No | — | Regex options to apply (e.g., 'i' for case-insensitive). |

Returns:
Type
Stack

**Example:**

```
Stack
  .contentType('example')
  .entries()
  .regex('title', '^Demo')
  .find()

// or with options
Stack
  .contentType('example')
  .entries()
  .regex('title', '^Demo', 'i')
  .find()
```
