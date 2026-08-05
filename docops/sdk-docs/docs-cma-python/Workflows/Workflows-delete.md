---
title: "delete"
description: "The delete method removes an existing workflow from a specific stack."
url: "https://www.contentstack.com/python-management-workflows-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## delete

The delete method removes an existing workflow from a specific stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| workflow_uid | str | Yes | — | UID of the workflow |

Returns:
Type
JSON

```
import contentstack_management 
client = contentstack_management.Client(host='host_name')
client.login(email="email_id", password="password")
response = response = client.stack('api_key').workflows('workflow_uid').delete().json()
```
