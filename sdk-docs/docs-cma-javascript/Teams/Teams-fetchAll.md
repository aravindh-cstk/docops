---
title: "fetchAll"
description: "The fetchAll method retrieves the details of all teams."
url: "https://www.contentstack.com/js-management-teams-fetchall"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetchAll

The fetchAll method retrieves the details of all teams.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| includeUserDetails | boolean | No | — | If true, include detailed user information for team members; otherwise, include only user UIDs. |
| asc|desc | string | No | — | Sort in either ascending or descending order |
| typeahead | string | No | — | Used to match the given string in all teams name & return the matched result |
| skip | number | No | — | Skip the number of teams |
| limit | number | No | — | Limit the result to number of teams |
| user_uid | comma separated string | No | — | list of user UIDs to be filtered |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.organization('organizationUid').teams().fetchAll()
.then((teams) => console.log(teams))
```
