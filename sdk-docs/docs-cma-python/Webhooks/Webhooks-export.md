---
title: "export"
description: "The export method exports an existing webhook to a downloadable JSON file."
url: "https://www.contentstack.com/python-management-webhooks-export"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## export

The export method exports an existing webhook to a downloadable JSON file.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| webhook_uid | str | Yes | — | UID of the webhook |

Returns:
Type
JSON

```
import contentstack_management 
client = contentstack_management.Client(host='host_name')
client.login(email="email_id", password="password")
response = client.stack('api_key').webhooks('webhook_uid').export().json()
```
