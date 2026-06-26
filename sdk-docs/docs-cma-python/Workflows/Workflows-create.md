---
title: "create"
description: "The create method creates a new workflow in a specific stack."
url: "https://www.contentstack.com/python-management-workflows-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## create

The create method creates a new workflow in a specific stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | Data required to create a new workflow |

Returns:
Type
JSON

```
data = {
"workflow":{
           "workflow_stages":[
               {
                   "color":"#2196f3",
                   "SYS_ACL":{
                       "roles":{
                           "uids":[
                           ]
                       },
                       "users":{
                           "uids":[
                               "$all"
                           ]
                       },
                       "others":{
                       }
                   },
                   "next_available_stages":[
                       "$all"
                   ],
                   "allStages":true,
                   "allUsers":true,
                   "specificStages":false,
                   "specificUsers":false,
                   "entry_lock":"$none",
                   "name":"Review"
               },
               {
                   "color":"#74ba76",
                   "SYS_ACL":{
                       "roles":{
                           "uids":[
                           ]
                       },
                       "users":{
                           "uids":[
                               "$all"
                           ]
                       },
                       "others":{
                       }
                   },
                   "allStages":true,
                   "allUsers":true,
                   "specificStages":false,
                   "specificUsers":false,
                   "next_available_stages":[
                       "$all"
                   ],
                   "entry_lock":"$none",
                   "name":"Complete"
               }
           ],
           "admin_users":{
               "users":[
               ]
           },
           "name":"Workflow",
           "enabled":true,
           "branches":[
               "main",
               "development"
           ],
           "content_types":[
               "$all"
           ]
       }
   }
import contentstack_management 
client = contentstack_management.Client(host='host_name')
client.login(email="email_id", password="password")
response = client.stack('api_key').workflows().create(data).json()
```
