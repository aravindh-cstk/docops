---
title: "create"
description: "The create method creates a new team."
url: "https://www.contentstack.com/js-management-teams-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## create

The create method creates a new team.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| includeUserDetails | boolean | No | — | If true, include detailed user information for team members; otherwise, include only user UIDs. |
| team | object | No | — | Details required for team creation. |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })
const team = { 
name: 'name', 
organizationUid: 'organization_uid', 
users: [], 
stackRoleMapping: [], 
organizationRole: 'organizationRole'
}

client.organization('organizationUid').teams().create(team)
.then((response) => console.log(response))
```
