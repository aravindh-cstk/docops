---
title: "create"
description: "The Create a Branch call creates a new branch in a particular stack of your Contentstack account."
url: "https://www.contentstack.com/js-management-branch-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## create

The Create a Branch call creates a new branch in a particular stack of your Contentstack account.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params.branch | object | Yes | — | Branch details to create. |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

const branch = {
     name: 'branch_name',
     source: 'master'
}

client.stack({ api_key: 'api_key'}).branch().create({ branch })
.then((branch) => console.log(branch))
```
