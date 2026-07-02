---
title: "fetch"
description: "The fetch method retrieves details of a specific team."
url: "https://www.contentstack.com/js-management-teams-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## fetch

The fetch method retrieves details of a specific team.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| includeUserDetails | boolean | No | — | If true, include detailed user information for team members; otherwise, include only user UIDs. |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.organization('organization_uid').teams('teamUid').fetch()
.then((team) => console.log(team)
```
