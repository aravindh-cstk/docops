---
title: "find mergeQueue"
description: "The find mergeQueue call is used to fetch all merge jobs in a specific branch."
url: "https://www.contentstack.com/js-management-branch-find-mergequeue"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## find mergeQueue

The find mergeQueue call is used to fetch all merge jobs in a specific branch.

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const branch = contentstack.client.stack({ api_key: 'API_KEY' }).branch(branch_uid)
branch.mergeQueue()
.find()
.then(response)
.catch(error)
```
