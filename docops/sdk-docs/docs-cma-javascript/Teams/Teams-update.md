---
title: "update"
description: "The update method involves adding and removing users from teams, assigning and removing stack roles within teams, updating team descriptions, and adjusting team organization roles."
url: "https://www.contentstack.com/js-management-teams-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## update

The update method involves adding and removing users from teams, assigning and removing stack roles within teams, updating team descriptions, and adjusting team organization roles.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| includeUserDetails | boolean | No | — | If true, include detailed user information for team members; otherwise, include only user UIDs. |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })
const updateData = {
name: 'updatedname',
users: [{
email: 'abc@abc.com'
}],
organizationRole: 'blt09e5dfced326aaea',
stackRoleMapping: []
}

client.organization(s'organizationUid').teams('teamUid').update(updateData)
.then((response) => console.log(response))
```
