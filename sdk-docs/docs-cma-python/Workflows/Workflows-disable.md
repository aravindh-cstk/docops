---
title: "disable"
description: "The disable method allows you to disable a workflow."
url: "https://www.contentstack.com/python-management-workflows-disable"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## disable

The disable method allows you to disable a workflow.

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
file_path = "tests/resources/mock_content_types/import_content_types.json"
response = client.stack('api_key').workflows('workflow_uid').disable().json()
```
