---
title: "add"
description: "The add method adds an user to the team."
url: "https://www.contentstack.com/js-management-stackrolemappings-add"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## add

The add method adds an user to the team.

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })
const addRole = {
stackApiKey: 'stackApiKey',
roles: ['role_uid']
}
client.organization('organizationUid').teams('teamUid').stackRoleMappings().add(addRole)
.then((response) => console.log(response))
```
