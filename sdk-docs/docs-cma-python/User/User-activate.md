---
title: "activate"
description: "The activate method enables the activation of a user account using the activation token."
url: "https://www.contentstack.com/python-management-user-activate"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## activate

The activate method enables the activation of a user account using the activation token.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| activation_token | str | No | — | The token received at the time of signup or when a user requests an account activation. |

Returns:
Type
JSON

```
body={
   "user": {
      "first_name": "first_name",
      "last_name": "last_name",
      "password": "password",
      "password_confirmation": "confirm_password"
     }
  }
import contentstack_management
client = contentstack_management.Client(authtoken='auth_token')
response = self.client.user().activate('user_activation_token', body)
```
