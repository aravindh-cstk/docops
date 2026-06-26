---
title: "Delete variant"
description: "The Delete variant method deletes a specific variant from a variant group."
url: "https://www.contentstack.com/js-management-variant-delete-variant"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Delete variant

The Delete variant method deletes a specific variant from a variant group.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| variant_uid | string | Yes | — | Enter the UID of the variant |

Returns:
Type
Promise

**Example:**

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })
client.stack({ api_key: 'api_key'})
	.variantGroup('variant_group_uid')
	.variants('variant_uid')
	.delete()
	.then((response) => console.log(response.notice));
```
