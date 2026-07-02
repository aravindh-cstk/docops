---
title: "Update entry variant"
description: "The Update entry variant method allows you to update a specific entry variant."
url: "https://www.contentstack.com/js-management-entry-variant-update-entry-variant"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Update entry variant

The Update entry variant  method allows you to update a specific entry variant.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| variant_uid/variant_alias | string | Yes | — | Enter the UID of the variant |
| data | object | Yes | — | Details of the entry variant |

Returns:
Type
Promise

**Example:**

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })
const data = {
  "customized_fields": [
    "title",
    "url"
  ],
  "base_entry_version": 10, // optional
  "entry": {
    "title": "example",
    "url": "/example"
    }
  }
}

client.stack({ api_key: 'api_key'}).variantGroup('variant_group_uid/variant_group_alias').variants('variant_uid/variant_alias').update({ data })
.then((variant) => console.log(variant))
```
