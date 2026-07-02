---
title: "regex"
description: "The regex method retrieves entries that match a specified regular expression pattern."
url: "https://www.contentstack.com/typescript-delivery-query-regex"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## regex

The regex method retrieves entries that match a specified regular expression pattern.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | Yes | — | UID of the field |
| value | array | Yes | — | Array of values that are to be used to match or compare |
| options | any | Yes | — | Match or compare value in entry |

Returns:
Type
Query

**Example:**

```
const query = stack.contentType("contentTypeUid").entry().query();
const result = await query.regex('title','^Demo').find();
// OR
const result = await query.regex('title','^Demo', 'i').find<BlogPostEntry>();
```
