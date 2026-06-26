---
title: "update"
description: "The update method updates the details of an existing user account."
url: "https://www.contentstack.com/python-management-user-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## update

The update method updates the details of an existing user account.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| body | Dict | No | — | The data that you want to update. |

Returns:
Type
JSON

```
body ={
   "user": {
      "company": "company name inc.",
      "first_name": "Your name"
     }
  }
import contentstack_management
client = contentstack_management.Client(authtoken='auth_token')
user = client.user()
response = user.update(body)
```
