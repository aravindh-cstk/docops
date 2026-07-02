---
title: "update_publish_rule"
description: "The update_publish_rule method allows you to add a publish rule or update the details of an existing publish rule of a workflow."
url: "https://www.contentstack.com/python-management-workflows-update_publish_rule"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## update_publish_rule

The update_publish_rule method allows you to add a publish rule or update the details of an existing publish rule of a workflow.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | The data required to update the workflow stage for a specific entry |
| rule_uid | str | No | — | UID of the rule |

Returns:
Type
JSON

```
data = {
       "publishing_rule": {
           "workflow": "workflow_uid",
           "actions": [],
           "branches": [
               "main",
               "development"
           ],
           "content_types": ["$all"],
           "locales": ["en-us"],
           "environment": "environment_uid",
           "approvers": {
               "users": ["user_uid"],
               "roles": ["role_uid"]
           },
           "workflow_stage": "workflow_stage_uid",
           "disable_approver_publishing": false
       }
   }
import contentstack_management 
client = contentstack_management.Client(host='host_name')
client.login(email="email_id", password="password")
response = client.stack('api_key').workflows().update_publish_rule('rule_uid', data).json()
```
