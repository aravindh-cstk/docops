---
title: "transferOwnership"
description: "The Transfer organization ownership call transfers the ownership of an Organization to another user."
url: "https://www.contentstack.com/js-management-organization-transferownership"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## transferOwnership

The Transfer organization ownership call transfers the ownership of an Organization to another user.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| email | string | Yes | — | Email id of user to transfer the ownership of the organization. |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.organization('organization_uid').transferOwnership('email_id')
.then((response) => console.log(response))
```
