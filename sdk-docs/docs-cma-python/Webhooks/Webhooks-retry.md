---
title: "retry"
description: "The retry method makes a manual attempt to execute a webhook after the automatic attempts are exhausted."
url: "https://www.contentstack.com/python-management-webhooks-retry"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## retry

The retry method makes a manual attempt to execute a webhook after the automatic attempts are exhausted.

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
response = client.stack('api_key').webhooks().retry('execution_uid').json()
```
