---
title: "stackRoleMappings"
description: "The stackRoleMappings method retrieves the stack role mapping details."
url: "https://www.contentstack.com/js-management-teams-stackrolemappings"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## stackRoleMappings

The stackRoleMappings method retrieves the stack role mapping details.

No parameters.

Returns:
Type
stackRoleMappings

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.organization(s'organizationUid').teams('teamUid').stackRoleMappings().fetchAll()
.then((response) => console.log(response))
```
