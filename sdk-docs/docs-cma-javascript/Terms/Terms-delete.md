---
title: "delete"
description: "The delete method lets you remove an existing term from a taxonomy."
url: "https://www.contentstack.com/js-management-terms-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## delete

The delete method lets you remove an existing term from a taxonomy.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| force | boolean | No | — | Setting this to true will force delete the taxonomy and all its child terms. By default it is set to false. |
| termUid | string | Yes | — | UID of the term |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client()
client.stack({ api_key: 'api_key'}).taxonomy('taxonomyUid').term('termUid').delete()
.then((response) => console.log(response.notice))
```
