---
title: "update"
description: "The update method allows you to make changes in the existing delivery token in the stack."
url: "https://www.contentstack.com/python-management-delivery-token-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## update

The update method allows you to make changes in the existing delivery token in the stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | The updated information for the delivery token |

Returns:
Type
JSON

```
data = {
       "token":{
           "name":"Test",
           "description":"This is a updated token.",
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
                       "deploy"
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
result = client.stack('api_key').delivery_token("delivery_token_uid").update(data).json()
```
