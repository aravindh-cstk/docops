---
title: "requestPassword"
description: "The Request for a password call sends a request for a temporary password to log in to an account in case a user has forgotten the login password."
url: "https://www.contentstack.com/js-management-user-requestpassword"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## requestPassword

The Request for a password call sends a request for a temporary password to log in to an account in case a user has forgotten the login password.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| param.email | string | Yes | — | Email id for which password request to be sent. |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.getUser()
.then((user) => {
   return requestPassword({ email })
})
.then((response) => {

})
```
