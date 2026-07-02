---
title: "Create variant"
description: "The Create variant method allows you to create an ungrouped variant."
url: "https://www.contentstack.com/js-management-variant-get-all-variant"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Create variant

The Create variant method allows you to create an ungrouped variant.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | object | Yes | — | Details of the entry variant |

Returns:
Type
Promise

**Example:**

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })
const data = {
  "uid": "iphone_color_white", // optional
  "name": "White",
  "personalize_metadata": {
      "experience_uid": "exp1",
      "experience_short_uid": "expShortUid1",
      "project_uid": "project_uid1",
      "variant_short_uid": "variantShort_uid1"
  },
}
client.stack({ api_key: 'api_key'}).variants().create({ data })
.then((variant) => console.log(variant))
```
