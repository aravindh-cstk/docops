---
title: "Delete variant group"
description: "The Delete variant group method allows you to permanently delete an existing variant group from your stack."
url: "https://www.contentstack.com/js-management-variant-group-delete-variant-group"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Delete variant group

The Delete variant group method  allows you to permanently delete an existing variant group from your stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| variant_group_uid | string | Yes | — | Enter the UID of the Variant Group |

Returns:
Type
Promise

**Example:**

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken });

client
    .stack({ api_key: 'api_key'})
    .variantGroup('variant_group_uid')
    .delete()
    .then((response) => console.log(response.notice))
```
