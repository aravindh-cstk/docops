---
title: "lessThanOrEqualTo"
description: "The lessThanOrEqualTo method retrieves entries that meet the specified condition of being less than or equal to a certain value."
url: "https://www.contentstack.com/typescript-delivery-query-lessthanorequalto"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## lessThanOrEqualTo

The lessThanOrEqualTo method retrieves entries that meet the specified condition of being less than or equal to a certain value.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | Yes | — | UID of the field |
| value | array | Yes | — | Array of values that are to be used to match or compare |

Returns:
Type
Query

**Example:**

```
const query = stack.contentType('contenttype_uid').query().where('title', QueryOperation.EQUALS, 'value');
const entryQuery = await stack.contentType('contenttype_uid').query().lessThanOrEqualTo('fieldUid', 'value').find<BlogPostEntry>();
```
