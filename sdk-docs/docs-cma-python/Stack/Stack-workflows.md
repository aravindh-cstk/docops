---
title: "workflows"
description: "A Workflow is a tool that allows you to streamline the process of content creation and publishing, and lets you manage the content lifecycle of your project smoothly."
url: "https://www.contentstack.com/python-management-stack-workflows"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## workflows

A Workflow is a tool that allows you to streamline the process of content creation and publishing, and lets you manage the content lifecycle of your project smoothly.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| workflow_uid | str | No | — | UID of the workflow |

Returns:
Type
JSON

```
import contentstack_management
client = contentstack_management.Client(authtoken='auth_token')

response = client.stack().workflows()
```
