---
title: "addParams"
description: "The addParam method adds a query parameter to the query."
url: "https://www.contentstack.com/typescript-delivery-query-addparams"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## addParams

The addParam method adds a query parameter to the query.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| paramObj | string | Yes | — | Add key-value pairs |

Returns:
Type
BaseQuery

**Example:**

```
import { BaseEntry, FindEntry } from '@contentstack/delivery-sdk'


interface BlogPostEntry extends BaseEntry {
  // custom entry types
}
const query = stack.contentType(contentType_uid).entry().query();
const result = await query
                       .addParams({"key": "value"})
                       .find<BlogPostEntry>();
```
