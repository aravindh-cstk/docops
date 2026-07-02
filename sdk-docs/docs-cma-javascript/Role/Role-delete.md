---
title: "delete"
description: "The Delete role call deletes an existing role from your stack."
url: "https://www.contentstack.com/js-management-role-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## delete

The Delete role call deletes an existing role from your stack.

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).role('role_uid').delete()
.then((response) => console.log(response.notice))
```
