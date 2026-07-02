---
title: "update"
description: "The update method allows you to make changes in the existing entries/assets in the stack."
url: "https://www.contentstack.com/python-management-bulk-operations-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## update

The update method allows you to make changes in the existing entries/assets in the stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | The request body |

Returns:
Type
JSON

```
data = {
       "entries": [{
           "content_type": "content_type_uid1",
           "uid": "entry_uid",
           "locale": "en-us"
       }, {
           "content_type": "content_type_uid2",
           "uid": "entry_uid",
           "locale": "en-us"
       }],
       "workflow": {
           "workflow_stage": {
               "comment": "Workflow-related Comments",
               "due_date": "Thu Dec 01 2018",
               "notify": false,
               "uid": "workflow_stage_uid",
               "assigned_to": [{
                   "uid": "user_uid",
                   "name": "user_name",
                   "email": "user_email_id"
               }],
               "assigned_by_roles": [{
                   "uid": "role_uid",
                   "name": "role_name"
               }]
           }
       }
   }
import contentstack_management
client = contentstack_management.Client(authtoken='your_authtoken')
result = client.stack('api_key').bulk_operation().update(data).json()
```
