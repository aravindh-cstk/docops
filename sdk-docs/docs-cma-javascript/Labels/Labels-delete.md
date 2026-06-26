---
title: "delete"
description: "The Delete label call is used to delete a specific label."
url: "https://www.contentstack.com/js-management-label-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## delete

The Delete label call is used to delete a specific label.

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).label('label_uid').delete()
.then((response) => console.log(response.notice))
```
