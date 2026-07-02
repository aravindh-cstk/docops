---
title: "update"
description: "The update method allows you to make changes in the existing management token in the stack."
url: "https://www.contentstack.com/python-management-management-token-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## update

The update method allows you to make changes in the existing management token in the stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | The updated information for the management token |

Returns:
Type
JSON

```
data = {
       "token":{
           "name":"Updated Test Token",
           "description":"This is an updated management token.",
           "scope":[
               {
                   "module":"content_type",
                   "acl":{
                       "read":true,
                       "write":true
                   }
               },
               {
                   "module":"entry",
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
                       "deploy"
                   ],
                   "acl":{
                       "read":true
                   }
               }
           ],
           "expires_on":"2020-12-31",
           "is_email_notification_enabled":true
       }
   }
import contentstack_management
client = contentstack_management.Client(authtoken='your_authtoken')
result = client.stack('api_key').management_token("management_token_uid").update(data).json()
```
