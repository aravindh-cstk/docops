---
title: "createOrUpdate"
description: "The Create or Update BranchAlias call lets you update the name of an existing BranchAlias."
url: "https://www.contentstack.com/js-management-branchalias-createorupdate"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## createOrUpdate

The Create or Update BranchAlias call lets you update the name of an existing BranchAlias.

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'})
.branchAlias('branch_alias_id')
.createOrUpdate('branch_uid')
.then((branch) => {
 branch.name = 'new_branch_name'
 return branch.update()
})
.then((branch) => console.log(branch))
```
