---
title: "delete"
description: "The delete method deletes an existing team."
url: "https://www.contentstack.com/js-management-teams-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## delete

The delete method deletes an existing team.

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.organization('organization_uid').teams('teamUid').delete()
.then((response) => console.log(response)
```
