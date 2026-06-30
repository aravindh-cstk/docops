---
title: "update"
description: "The update method allows you to add a workflow stage or update the details of the existing stages of a workflow."
url: "https://www.contentstack.com/python-management-workflows-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## update

The update method allows you to add a workflow stage or update the details of the existing stages of a workflow.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | The data required to update the workflow stage for a specific entry |
| workflow_uid | str | No | — | UID of the workflow |

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
response = client.stack('api_key').workflows("workflow_uid").update(data).json()
```
