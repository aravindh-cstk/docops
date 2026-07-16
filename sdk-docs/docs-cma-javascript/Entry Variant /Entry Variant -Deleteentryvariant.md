---
title: "Delete entry variant"
description: "The Delete entry variant method allows you to delete a specific entry variant."
url: "https://www.contentstack.com/js-management-entry-variant-delete-entry-variant"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Delete entry variant

The Delete entry variant method allows you to delete a specific entry variant.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| variant_uid/variant_alias | string | Yes | — | Enter the UID/Alias of the variant |

Returns:
Type
Promise

**Example:**

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })
client.stack({ api_key: 'api_key'}).contentType('content_type_uid').entry('entry_uid').variants('variant_uid/variant_alias').delete()
.then((response) => console.log(response.notice))
```
