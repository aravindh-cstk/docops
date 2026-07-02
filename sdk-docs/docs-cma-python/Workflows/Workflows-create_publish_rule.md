---
title: "create_publish_rule"
description: "The create\\_publish\\_rule method creates a new rule for the workflow in a specific stack."
url: "https://www.contentstack.com/python-management-workflows-create_publish_rule"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## create_publish_rule

The create_publish_rule method creates a new rule for the workflow in a specific stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | Data required to create a new publish rule for the workflow |

Returns:
Type
JSON

```
data = {
 "publishing_rule":{
           "workflow":"workflow_uid",
           "actions":[],
           "branches":[
               "main",
               "development"
           ],
           "content_types":[
               "$all"
           ],
           "locales":[
               "en-us"
           ],
           "environment":"environment_uid",
           "approvers":{
               "users":[
                   "user_uids"
               ],
               "roles":[
                   "role_uids"
               ]
           },
           "workflow_stage":"workflow_stage_uid",
           "disable_approver_publishing":false
       }
   }
import contentstack_management 
client = contentstack_management.Client(host='host_name')
client.login(email="email_id", password="password")
response = client.stack('api_key').workflows().create_publish_rule(data).json()
```
