---
title: "fetch"
description: "The fetch BranchAlias call fetches BranchAlias details."
url: "https://www.contentstack.com/js-management-branchalias-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## fetch

The fetch BranchAlias call fetches BranchAlias details.

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).branchAlias('branch_alias_id')
.fetch()
.then((branch) => console.log(branch))
```
