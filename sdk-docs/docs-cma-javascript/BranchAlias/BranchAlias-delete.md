---
title: "delete"
description: "The Delete BranchAlias call is used to delete an existing BranchAlias permanently from your Stack."
url: "https://www.contentstack.com/js-management-branchalias-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## delete

The Delete BranchAlias call is used to delete an existing BranchAlias permanently from your Stack.

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).branchAlias('uid')
.delete()
.then((response) => console.log(response.notice))
```
