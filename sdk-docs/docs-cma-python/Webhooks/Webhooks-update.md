---
title: "update"
description: "The update method allows you to update the details of an existing webhook in the stack."
url: "https://www.contentstack.com/python-management-webhooks-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## update

The update method allows you to update the details of an existing webhook in the stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | The updated data of the webhook |

Returns:
Type
JSON

```
data = {
        "webhook":{
            "name":"Updated webhook",
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
            "channels":[
            "assets.create"
            ],
            "branches":[
            "main"
            ],
            "retry_policy":"manual",
            "disabled":true,
            "concise_payload":true
        }
        }
import contentstack_management 
client = contentstack_management.Client(host='host_name')
client.login(email="email_id", password="password")
response = client.stack('api_key').webhooks('webhook_uid').update(data).json()
```
