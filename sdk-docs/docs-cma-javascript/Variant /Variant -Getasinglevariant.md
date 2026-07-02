---
title: "Get a single  variant"
description: "The Get a single variant method allows you to retrieve the details of a specified variant."
url: "https://www.contentstack.com/js-management-variant-get-a-single-variant"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Get a single  variant

The Get a single variant method allows you to retrieve the details of a specified variant.

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
	.fetch();
.then((variant) => console.log(variant));
```
