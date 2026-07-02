---
title: "Delete variant"
description: "The Delete variant method allows you to delete a specific variant."
url: "https://www.contentstack.com/js-management-ungrouped-variant-delete-variant"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Delete variant

The Delete variant method allows you to delete a specific variant.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| variant_uid | String | Yes | — | Enter the UID of the variant |

Returns:
Type
Promise

**Example:**

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })
client.stack({ api_key: 'api_key'}).variants('variant_uid').delete()
.then((response) => console.log(response.notice))
```
