---
title: "delete"
description: "The delete method deletes an existing entry for the selected content type in a particular stack."
url: "https://www.contentstack.com/python-management-entry-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## delete

The delete method deletes an existing entry for the selected content type in a particular stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entry_uid | str | Yes | — | UID of the entry |

Returns:
Type
Entry

```
import contentstack_management
client = contentstack_management.Client(authtoken="authtoken")

response = response = client.stack('api_key').content_types('content_type_uid').entry('entry_uid').delete().json()
```
