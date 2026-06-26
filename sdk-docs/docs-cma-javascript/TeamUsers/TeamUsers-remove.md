---
title: "remove"
description: "The remove method removes an user from the team."
url: "https://www.contentstack.com/js-management-teamusers-remove"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## remove

The remove method removes an user from the team.

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.organization('organization_uid').teams('teamUid').teamUsers('userId').remove()
.then((response) => console.log(response)
```
