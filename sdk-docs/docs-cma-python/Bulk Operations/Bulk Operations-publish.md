---
title: "publish"
description: "The Publish entries and assets in bulk method allows you to publish multiple entries and assets at the same time."
url: "https://www.contentstack.com/python-management-bulk-operations-publish"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## publish

The Publish entries and assets in bulk method allows you to publish multiple entries and assets at the same time.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | The request body |

Returns:
Type
JSON

```
data = {
           "entries":[
               {
                   "uid":"entry_uid",
                   "content_type":"ct0",
                   "version":"5",
                   "locale":"en-us"
               },
               {
                   "uid":"entry_uid",
                   "content_type":"ct0",
                   "version":"1",
                   "locale":"en-us"
               },
               {
                   "uid":"entry_uid",
                   "content_type":"ct5",
                   "version":"2",
                   "locale":"en-us"
               }
           ],
           "locales":[
               "en-us"
           ],
           "environments":[
               "env1"
           ],
           "rules":{
               "approvals":"true/false"
           },
           "scheduled_at":"scheduled_time",
           "publish_with_reference":true
           }
import contentstack_management
client = contentstack_management.Client(authtoken='your_authtoken')
result = client.stack('api_key').bulk_operation().publish(data).json()
```
