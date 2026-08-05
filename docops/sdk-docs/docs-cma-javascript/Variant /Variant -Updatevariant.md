---
title: "Update variant"
description: "The Update variant method updates an entry for the specified variant group and variants."
url: "https://www.contentstack.com/js-management-variant-update-variant"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Update variant

The Update variant method updates an entry for the specified variant group and variants.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| variant_uid | string | Yes | — | Enter the UID of the variant |
| data | object | Yes | — | Details of the entry variant entry |

Returns:
Type
Promise

**Example:**

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

const data = { name: 'updated name' }
client.stack({ api_key: 'api_key'})
	.variantGroup('variant_group_uid')
	.variants('variant_uid')
	.update(data)
	.then((variant) => console.log(variant))
```
