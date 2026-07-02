---
title: "enable"
description: "The enable method allows you to enable a workflow."
url: "https://www.contentstack.com/python-management-workflows-enable"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## enable

The enable method allows you to enable a workflow.

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
response = client.stack('api_key').workflows('workflow_uid').export().json()
```
