---
title: "create"
description: "The create method allows you to create a new management token in the stack."
url: "https://www.contentstack.com/python-management-management-token-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## create

The create method allows you to create a new management token in the stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | Data you want to send in the request body |

Returns:
Type
JSON

```
"token":{
           "name":"Test Token",
           "description":"This is a sample management token.",
           "scope":[
               {
                   "module":"content_type",
                   "acl":{
                       "read":true,
                       "write":true
                   }
               },
               {
                   "module":"branch",
                   "branches":[
                       "main",
                       "development"
                   ],
                   "acl":{
                       "read":true
                   }
               },
               {
                   "module":"branch_alias",
                   "branch_aliases":[
                       "deploy",
                       "release"
                   ],
                   "acl":{
                       "read":true
                   }
               }
           ],
           "expires_on":"2020-12-10",
           "is_email_notification_enabled":true
       }
   }
import contentstack_management
client = contentstack_management.Client(authtoken='your_authtoken')
result = client.stack('api_key').management_token().create(data).json()
```
