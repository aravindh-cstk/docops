---
title: "branchAlias"
description: "Branch Alias is a custom name given to a specific branch in a stack to make referencing easier, especially when working with multiple branches."
url: "https://www.contentstack.com/js-management-stack-branchalias"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## branchAlias

Branch Alias is a custom name given to a specific branch in a stack to make referencing easier, especially when working with multiple branches.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| uid | string | No | — | UID for branch alias to perform operation on. |

Returns:
Type
BranchAlias

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).branchAlias()
// OR
client.stack({ api_key: 'api_key'}).branchAlias('uid')
```
