---
title: "compare globalField"
description: "The globalField call is used to compare the differences only between the global fields of two branches. You can specify the global field UID to fetch the difference of a specific global field. If no UID is specified, differences for all global fields are fetched in a paged way."
url: "https://www.contentstack.com/js-management-branch-compare-globalfield"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## compare globalField

The globalField call is used to compare the differences only between the global fields of two branches.

You can specify the global field UID to fetch the difference of a specific global field. If no UID  is specified, differences for all global fields are fetched in a paged way.

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })
const compare = client.stack({ api_key: 'API_KEY' }).branch(_base_branch_uid).compare(_compare_branch_uid)
compare.globalField({
  uid: UID, skip: 4, limit: 20, include_schemas: true
})
.then(response)
.catch(error)
```
