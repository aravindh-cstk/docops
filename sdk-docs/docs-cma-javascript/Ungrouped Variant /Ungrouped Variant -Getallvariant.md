---
title: "Get all variant "
description: "The Get all variants method allows you to retrieve details for all or specific variants."
url: "https://www.contentstack.com/js-management-ungrouped-variant-get-all-variant"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Get all variant 

The Get all variants method allows you to retrieve  details for all or specific variants.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params.query | object | Yes | — | Queries to retrieve filtered results |

Returns:
Type
Promise

**Example:**

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })
client.stack({ api_key: 'api_key'}).variants().query({ query: { title: 'variant title' } }).find()

.then((variants) => console.log(variants))
))
```
