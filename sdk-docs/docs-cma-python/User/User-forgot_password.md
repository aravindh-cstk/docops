---
title: "forgot_password"
description: "The forgot\\_password method sends a request for a temporary password to log in to an account in case a user has forgotten the login password."
url: "https://www.contentstack.com/python-management-user-forgot_password"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## forgot_password

The forgot_password method sends a request for a temporary password to sign in to an account in case a user has forgotten the login password.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| body | Dict | No | - | The necessary user information for the request, usually comprising the user's email or username. |

Returns:
Type
JSON

```
body={
     "user": {
        "email": "john.doe@contentstack.com"
     }
  }
import contentstack_management
client = contentstack_management.Client(authtoken='auth_token')

response = client.user().request_password(body).json()
```
