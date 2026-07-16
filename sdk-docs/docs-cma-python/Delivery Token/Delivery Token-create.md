---
title: "create"
description: "The create method allows you to create a new delivery token in the stack."
url: "https://www.contentstack.com/python-management-delivery-token-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## create

The create method allows you to create a new delivery token in the stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | Data you want to send in the request body |

Returns:
Type
JSON

```
"token":{
           "name":"Test",
           "description":"This is a demo token.",
           "scope":[
               {
                   "module":"environment",
                   "environments":[
                       "production"
                   ],
                   "acl":{
                       "read":true
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
           ]
       }
   }
import contentstack_management
client = contentstack_management.Client(authtoken='your_authtoken')
result = client.stack('api_key').delivery_token().create(data).json()
```
