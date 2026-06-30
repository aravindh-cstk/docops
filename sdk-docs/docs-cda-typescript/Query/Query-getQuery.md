---
title: "getQuery"
description: "The getQuery method retrieves the entries as per the specified query."
url: "https://www.contentstack.com/typescript-delivery-query-getquery"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## getQuery

The getQuery method retrieves the entries as per the specified query.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | Yes | — | UID of the field |

Returns:
Type
Query

**Example:**

```
const query = stack.contentType("contentTypeUid").entry().query();
const result = await query.query({'brand': {'$nin_query': {'title': 'Apple Inc.'}}}).getQuery();


// OR

const asset = await stack.asset().query({'brand': {'$nin_query': {'title': 'Apple Inc.'}}}).getQuery();
```
