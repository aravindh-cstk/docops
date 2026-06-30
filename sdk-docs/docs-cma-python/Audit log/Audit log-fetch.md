---
title: "fetch"
description: "The fetch method retrieves a specific item from the audit log of the stack"
url: "https://www.contentstack.com/python-management-audit-log-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch

The fetch method retrieves a specific item from the audit log of the stack

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| log_item_uid | str | Yes | — | UID of the item to be retrieved |

Returns:
Type
JSON

```
import contentstack_management
client = contentstack_management.Client(authtoken='authtoken')
response = client.stack('api_key').auditlog('log_item_uid').fetch().json()
```
