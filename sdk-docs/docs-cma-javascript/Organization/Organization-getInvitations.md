---
title: "getInvitations"
description: "The Get all organization invitations call gives you a list of all the Organization invitations."
url: "https://www.contentstack.com/js-management-organization-getinvitations"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## getInvitations

The Get all organization invitations call gives you a list of all the Organization invitations.

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.organization('organization_uid').getInvitations()
.then((response) => console.log(response))
```
