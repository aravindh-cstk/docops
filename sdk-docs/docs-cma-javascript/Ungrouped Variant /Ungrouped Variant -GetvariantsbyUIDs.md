---
title: "Get  variants by UIDs"
description: "The Get variants by UIDs method allows you to retrieve the details for specific variants by their specified UIDs."
url: "https://www.contentstack.com/js-management-ungrouped-variant-get-variants-by-uids"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Get  variants by UIDs

The Get variants by UIDs method allows you to retrieve the details for specific variants by their specified UIDs.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| variant_uids | string[] | Yes | — | Enter the UIDs of variants |

Returns:
Type
Promise

**Example:**

```
import * as contentstack from '@Contentstack/management'

const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).variants().fetchByUIDs(['uid1','uid2',.....]).then((variants) => console.log(variants))
```
