---
title: "compare all"
description: "The compare all call is used to compare the differences between all the content types and global fields of two branches."
url: "https://www.contentstack.com/js-management-branch-compare-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## compare all

The compare all call is used to compare the differences between all the content types and global fields of two branches.

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })
client.stack({ api_key: 'api_key'})
    .branch('branch_uid')
    .compare('compare_branch_uid')
    .all({skip: 0, limit: 100})
    .then(response => console.log(response))
```
