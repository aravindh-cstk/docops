---
title: "addUser"
description: "The Add users to organization call allows you to send invitations to add users to your organization. Only the owner or the admin of the organization can add users."
url: "https://www.contentstack.com/js-management-organization-adduser"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## addUser

The Add users to organization call allows you to send invitations to add users to your organization. Only the owner or the admin of the organization can add users.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| param.users | object | No | — | List of users to add with roles. |
| params.stacks | object | No | — | List of user with stack API key and roles id to be assign from stack. |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.organization('organization_uid').addUser({ users: { 'abc@test.com': ['org_uid1', 'org_uid2' ]}, stacks: { 'abc@test.com': { 'api_key1': [ 'stack_role_id' ] } } })
.then((response) => console.log(response))
```
