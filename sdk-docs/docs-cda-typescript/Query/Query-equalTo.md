---
title: "equalTo"
description: "The equalTo method retrieves entries that match the specified conditions exactly."
url: "https://www.contentstack.com/typescript-delivery-query-equalto"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## equalTo

The equalTo method retrieves entries that match the specified conditions exactly.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | Yes | — | UID of the field |
| value | array | Yes | — | Array of values that are to be used to match or compare |

Returns:
Type
Query

**Example:**

```
const query = await stack.contentType('contenttype_uid').entry().query().equalTo('fieldUid', 'value').find<BlogPostEntry>();
```
