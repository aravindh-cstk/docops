---
title: "add_users"
description: "The add\\_users method adds users to the organization."
url: "https://www.contentstack.com/python-management-organization-add_users"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## add_users

The add_users method adds users to the organization.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| user_data | str | Yes | — | The email address of the user whom you intend to add in the organization. |

Returns:
Type
JSON

```
data = {
           "share": {
               "users": {
                   "abc@sample.com": ["{****}"],
                   "xyz@sample.com": ["{****}"]
               },
               "stacks": {
                   "abc@sample.com": {
                       "{{apiKey}}": ["{****}"]
                   },
                   "xyz@sample.com": {
                   }
               },
               "message": "Invitation message"
           }
       }

import contentstack_management
client = contentstack_management.Client(authtoken='auth_token')

response = client.organizations('organization_uid').organization_add_users(data).json()
```
