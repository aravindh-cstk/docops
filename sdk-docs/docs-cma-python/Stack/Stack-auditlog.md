---
title: "auditlog"
description: "A auditLog displays a record of all the activities performed in a stack and helps you keep a track of all published items, updates, deletes, and current status of the existing content."
url: "https://www.contentstack.com/python-management-stack-auditlog"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## auditlog

A auditLog displays a record of all the activities performed in a stack and helps you keep a track of all published items, updates, deletes, and current status of the existing content.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| log_item_uid | str | No | — | UID of the item |

Returns:
Type
JSON

```
import contentstack_management
client = contentstack_management.Client(authtoken="auth_token")
response = client.stack(api_key).auditlog()
```
