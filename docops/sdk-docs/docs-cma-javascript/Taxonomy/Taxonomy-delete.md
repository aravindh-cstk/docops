---
title: "delete"
description: "The delete method lets you remove an existing taxonomy from the stack."
url: "https://www.contentstack.com/js-management-taxonomy-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## delete

The delete method lets you remove an existing taxonomy from the stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| taxonomyUid | string | Yes | — | UID of the taxonomy |
| force | boolean | No | — | Setting this to true will force delete the taxonomy and all its child terms. By default it is set to false. |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client()
client.stack({ api_key: 'api_key'}).taxonomy('taxonomyUid').delete().then((taxonomy) => console.log(taxonomy))
```
