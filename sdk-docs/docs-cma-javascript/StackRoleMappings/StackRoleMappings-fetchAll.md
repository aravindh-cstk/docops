---
title: "fetchAll"
description: "The fetchAll method allows you to fetch all details of the roles of that team."
url: "https://www.contentstack.com/js-management-stackrolemappings-fetchall"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## fetchAll

The fetchAll method allows you to fetch all details of the roles of that team.

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.organization('organizationUid').teams('teamUid').stackRoleMappings().fetchAll()
.then((response) => console.log(response))
```
