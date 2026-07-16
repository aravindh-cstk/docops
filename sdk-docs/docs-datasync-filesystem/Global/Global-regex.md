---
title: "regex"
description: "The `regex` method retrieves entries where the specified field matches the given regular expression."
url: "https://www.contentstack.com/datasync-filesystem-global-regex"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## regex

The `regex` method retrieves entries where the specified field matches the given regular expression.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | Yes | — | Field UID to filter |
| value | Any[] | Yes | — | An array of values to match against |
| options | string | No | — | Value to match or compare against the entry field |

Returns:
Type
Stack

**Example:**

```
let blogQuery = Stack.contentType('example').entries()
blogQuery.regex('title','^Demo').find() //regex without options
//or
blogQuery.regex('title','^Demo', 'i').find() //regex with options
```
