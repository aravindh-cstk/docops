---
title: "delete"
description: "The delete method deletes all roles of the stack."
url: "https://www.contentstack.com/js-management-stackrolemappings-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## delete

The delete method deletes all roles of the stack.

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.organization('organization_uid').teams('teamUid').stackRoleMappings('stackApiKey').delete()
.then((response) => console.log(response)
```
