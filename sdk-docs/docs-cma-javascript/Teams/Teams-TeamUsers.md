---
title: "TeamUsers"
description: "The TeamUsers method retrieves the UIDs of the users."
url: "https://www.contentstack.com/js-management-teams-teamusers"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## TeamUsers

The TeamUsers method retrieves the UIDs of the users.

No parameters.

Returns:
Type
teamUsers

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.organization('organizationUid').teams('teamUid').teamUsers().fetchAll()
.then((response) => console.log(response))
```
