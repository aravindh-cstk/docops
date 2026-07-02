---
title: "Create variant group"
description: "The Create a variant group method creates a new variant group in a specific stack."
url: "https://www.contentstack.com/js-management-variant-group-create-variant-group"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Create variant group

The Create a variant group method creates a new variant group in a specific stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| variant_group | object | Yes | — | Details of the variant group object |

Returns:
Type
Promise

**Example:**

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })
const variant_group = {
  "name": "Colors",
  "content_types": [
    "iphone_product_page"
  ]
}

client
    .stack({ api_key: 'api_key'})
    .variantGroup()
    .create({ variant_group })
    .then((variantGroup) => console.log(variantGroup))
```
