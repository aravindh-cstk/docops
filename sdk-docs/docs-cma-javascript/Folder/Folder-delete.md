---
title: "delete"
description: "The Delete folder call will delete an existing folder from the stack."
url: "https://www.contentstack.com/js-management-folder-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## delete

The Delete folder call will delete an existing folder from the stack.

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'})asset()
.folder('uid')
.delete()
.then((response) => console.log(response.notice))
```
