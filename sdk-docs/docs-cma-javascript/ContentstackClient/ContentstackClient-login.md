---
title: "login"
description: "The login call is used to sign in to your Contentstack account and obtain the authtoken."
url: "https://www.contentstack.com/js-management-contentstackclient-login"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## login

The `login` call is used to sign in to your Contentstack account and obtain the authtoken.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| email | string | Yes | — | email id for user to login |
| password | string | Yes | — | password for user to login |
| token | string | No | — | token for user to login |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client()

client.login({ email: <emailid>, password: <password> })
.then(() => {

}))
```
