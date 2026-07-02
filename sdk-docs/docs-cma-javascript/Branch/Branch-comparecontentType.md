---
title: "compare contentType"
description: "The contentType call is used to compare the differences only between the content types of two branches. You can specify the content type UID to fetch the difference of a specific content type. If no UID is specified, differences for all content types are fetched in a paged way."
url: "https://www.contentstack.com/js-management-branch-compare-contenttype"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## compare contentType

The contentType call is used to compare the differences only between the content types of two branches.

You can specify the content type UID to fetch the difference of a specific content type. If no UID is specified, differences for all content types are fetched in a paged way.

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })
const compare = client.stack({ api_key: 'API_KEY' }).branch(_base_branch_uid).compare(_compare_branch_uid)
compare.contentType({
  uid: UID, skip: 4, limit: 20, include_schemas: true
})
.then(response)
.catch(error)
```
