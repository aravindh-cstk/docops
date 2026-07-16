---
title: "logout"
description: "The `logOut` of your account call is used to sign out the user of Contentstack account."
url: "https://www.contentstack.com/js-management-contentstackclient-logout"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## logout

The `logOut` of your account call is used to sign out the user of Contentstack account.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| authtoken | string | No | — | Authtoken to logout from. |

Returns:
Type
Organization

```
import * as contentstack from '@contentstack/management'

const client = contentstack.client()
client.logout()
.then((response) => {

})
```

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client()

client.logout('AUTHTOKEN')
.then((response) => {

})
```
