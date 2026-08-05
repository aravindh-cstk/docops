---
title: "delete"
description: "The Delete asset call will delete an existing asset from the stack."
url: "https://www.contentstack.com/js-management-asset-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## delete

The Delete asset call will delete an existing asset from the stack.

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).asset('uid')
.delete()
.then((response) => console.log(response.notice))
```
