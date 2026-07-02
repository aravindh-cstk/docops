---
title: "set_workflow_stage"
description: "The set\\_workflow\\_stage method allows you to either set a workflow stage of an entry or update an already existing one."
url: "https://www.contentstack.com/python-management-workflows-set_workflow_stage"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## set_workflow_stage

The set_workflow_stage method allows you to either set a workflow stage of an entry or update an already existing one.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| content_type_uid | str | Yes | - | UID of the content type |
| entry_uid | str | Yes | - | UID of the entry |
| data | Dict | Yes | - | The data required to set the workflow stage for a specific entry |

Returns:
Type
JSON

```
data ={
"workflow": {
           "workflow_stage": {
               "comment": "Workflow Comment",
               "due_date": "Thu Dec 01 2018",
               "notify": false,
               "uid": "workflow_stage_uid",
               "assigned_to": [{
                       "uid": "user_uid", 
                       "name": "Username", 
                       "email": "user_email_id"
                       }],
               "assigned_by_roles": [{
                   "uid": "role_uid",
                   "name": "Role name"
               }]               
           }
       }
   }
import contentstack_management 
client = contentstack_management.Client(host='host_name')
client.login(email="email_id", password="password")
response = client.stack('api_key').workflows().set_workflow_stage('content_type_uid', 'entry_uid', data).json()
```
