---
title: "fetch mergeQueue"
description: "The fetch mergeQueue call is used to fetch a specific merge job in a specific branch."
url: "https://www.contentstack.com/js-management-branch-fetch-mergequeue"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch mergeQueue

The fetch mergeQueue call is used to fetch a specific merge job in a specific branch.

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const branch = contentstack.client.stack({ api_key: 'API_KEY' }).branch('branch_uid')
branch.mergeQueue( 'UID')
.fetch()
.then(response)
.catch(error)
```
