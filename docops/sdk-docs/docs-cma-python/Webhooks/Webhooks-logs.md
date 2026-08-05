---
title: "logs"
description: "The logs method retrieves the latest execution log of the webhooks."
url: "https://www.contentstack.com/python-management-webhooks-logs"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## logs

The logs method retrieves the latest execution log of the webhooks.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| execution_uid | str | Yes | — | UID of the execution |

Returns:
Type
JSON

```
import contentstack_management 
client = contentstack_management.Client(host='host_name')
client.login(email="email_id", password="password")
response = client.stack('api_key').webhooks().logs('execution_uid').json()
```
