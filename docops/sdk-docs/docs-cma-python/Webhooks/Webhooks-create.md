---
title: "create"
description: "The create method creates a new webhook in a specific stack."
url: "https://www.contentstack.com/python-management-webhooks-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## create

The create method creates a new webhook in a specific stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | Data required to create a new webhook |

Returns:
Type
JSON

```
data = {
"webhook":{
               "name":"Test",
               "destinations":[
               {
                   "target_url":"http://example.com",
                   "http_basic_auth":"basic",
                   "http_basic_password":"test",
                   "custom_header":[
                   {
                       "header_name":"Custom",
                       "value":"testing"
                   }
                   ]
               }
               ],
               "notifiers": "dave.joe@gmail.com",
               "channels":[
               "assets.create"
               ],
               "branches":[
               "main"
               ],
               "retry_policy":"manual",
               "disabled":false,
               "concise_payload":true
           }
           }
import contentstack_management 
client = contentstack_management.Client(host='host_name')
client.login(email="email_id", password="password")
response = client.stack('api_key').webhooks().create(data).json()
```
