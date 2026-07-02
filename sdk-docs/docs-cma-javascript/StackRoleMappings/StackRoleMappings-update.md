---
title: "update"
description: "The update method is used to update the roles."
url: "https://www.contentstack.com/js-management-stackrolemappings-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## update

The update method is used to update the roles.

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })
const updateRoles = {
roles: ['role_uid1', 'role_uid2']
}

client.organization('organizationUid').teams('teamUid').stackRoleMappings('stackApiKey').update(updateRoles)
.then((response) => console.log(response))
```
