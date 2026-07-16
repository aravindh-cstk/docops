---
title: "fetch"
description: "The fetch method retrieves the details of a single workflow from the stack."
url: "https://www.contentstack.com/python-management-workflows-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch

The fetch method retrieves the details of a single workflow from the stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| workflow_uid | str | Yes | — | UID of the workflow |

Returns:
Type
workflow

```
import contentstack_management 
client = contentstack_management.Client(host='host_name')
client.login(email="email_id", password="password")
response = client.stack('api_key').workflows('workflow_uid').fetch().json()
```
