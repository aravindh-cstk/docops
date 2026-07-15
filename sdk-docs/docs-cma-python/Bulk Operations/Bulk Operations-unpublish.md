---
title: "unpublish"
description: "The Unpublish entries and assets in bulk method allows you to unpublish multiple entries and assets at the same time."
url: "https://www.contentstack.com/python-management-bulk-operations-unpublish"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## unpublish

The Unpublish entries and assets in bulk method allows you to unpublish multiple entries and assets at the same time.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | The request body |

Returns:
Type
JSON

```
data = {
       "entries": [
           {
           "content_type": "news",
           "uid": "entry_uid",
           "locale": "en-us"
           },
           {
           "content_type": "article",
           "uid": "entry_uid",
           "locale": "en-us"
           }
       ],
       "workflow": {
           "workflow_stage": {
           "comment": "String Comment",
           "due_date": "Thu Dec 01 2018",
           "notify": false,
           "uid": "workflow_uid",
           "assigned_to": [
               {
               "uid": "user_uid",
               "name": "user_name",
               "email": "user_email_ID"
               }
           ],
           "assigned_by_roles": [
               {
               "uid": "role_uid",
               "name": "Content Manager"
               }
           ]
           }
       },
       "locales": [
           "en-us"
       ],
       "environments": [
           "env_uid"
       ]
       }
import contentstack_management
client = contentstack_management.Client(authtoken='your_authtoken')
result = client.stack('api_key').bulk_operation().unpublish(data).json()
```
