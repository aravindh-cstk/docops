---
title: "reset_password"
description: "The reset_password method sends a request for resetting the password of your Contentstack account."
url: "https://www.contentstack.com/python-management-user-reset_password"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## reset_password

The reset_password method sends a request for resetting the password of your Contentstack account.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| body | Dict | No | — | The necessary user information for the request, usually comprising the user's email or username. |

Returns:
Type
JSON

```
body = {
    "user": {
    "reset_password_token": "*******",
    "password": "******",
    "password_confirmation": "*****"
   }
 }
import contentstack_management
client = contentstack_management.Client(authtoken='auth_token')

response = client.user().reset_password(body)
```
