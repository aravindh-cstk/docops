---
title: "getUser"
description: "The `getUser` call returns comprehensive information of an existing user account. The information returned includes details of the stacks owned by and shared with the specified user account."
url: "https://www.contentstack.com/copy-of-js-management-contentstackclient-login"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## getUser

The `getUser` call returns comprehensive information of an existing user account. The information returned includes details of the stacks owned by and shared with the specified user account.

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'

const client = contentstack.client()
client.getUser()
.then((user) => {

})
```
