---
title: "Update variant group"
description: "The Update variant group method allows you to update the name of an existing variant group. You can also modify its JSON schema, including its fields and associated features."
url: "https://www.contentstack.com/js-management-variant-group-update-variant-group"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Update variant group

The Update variant group method  allows you to update the name of an existing variant group. You can also modify its JSON schema, including its fields and associated features.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| variant_group_uid | string | Yes | — | Enter the UID of the Variant Group |
| data | Object | Yes | — | Details of the entry variant |

Returns:
Type
Promise

**Example:**

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

const data = { name: 'updated name' }
client
    .stack({ api_key: 'api_key'})
    .variantGroup('variant_group_uid')
    .update(data)
    .then((variantGroup) => console.log(variantGroup))
```
