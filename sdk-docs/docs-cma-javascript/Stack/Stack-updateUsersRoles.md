---
title: "updateUsersRoles"
description: "The Update User Role API Request updates the roles of an existing user account. This API Request will override the existing roles assigned to a user."
url: "https://www.contentstack.com/js-management-stack-updateusersroles"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## updateUsersRoles

The Update User Role API Request updates the roles of an existing user account. This API Request will override the existing roles assigned to a user.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| users | object | Yes | — | User object with userid and roles to assign to them. |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

const users = {
 user_uid: ['role_uid_1', 'role_uid_2' ]
}

client.stack({ api_key: 'api_key'}).updateUsersRoles(users)
.then((response) => console.log(response.notice))
```
