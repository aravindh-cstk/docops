---
title: "resetPassword"
description: "The Reset password call sends a request for resetting the password of your Contentstack account."
url: "https://www.contentstack.com/js-management-user-resetpassword"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## resetPassword

The Reset password call sends a request for resetting the password of your Contentstack account.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| param. reset_password_token | string | Yes | — | Reset password token generated from request password |
| param.password | string | Yes | — | New password to set for your account |
| param.password_confirmation | string | No | — | Confirm password matching your password |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.getUser()
.then((user) => {
    return user.resetPassword({ 'resetToken', 'new_password', 'new_password' })
})
.then((response) => {

})
```
