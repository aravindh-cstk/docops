---
title: "fetchAll"
description: "The fetchAll method allows you to fetch all details of the users of a team."
url: "https://www.contentstack.com/js-management-teamusers-fetchall"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetchAll

The fetchAll method allows you to fetch all details of the users of a team.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| includeUserDetails | boolean | No | — | If true, include detailed user information for team members; otherwise, include only user UIDs. |
| include_count | boolean | No | — | Include total count of users |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.organization('organizationUid').teams('teamUid').teamUsers('userId').fetchAll()
.then((users) => console.log(users))
```
