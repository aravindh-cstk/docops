---
title: "fetch"
description: "The fetch method retrieves the details of an existing entry."
url: "https://www.contentstack.com/python-management-entry-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch

The fetch method retrieves the details of an existing entry.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entry_uid | str | Yes | — | UID of the entry |

Returns:
Type
Entry

```
import contentstack_management
client = contentstack_management.Client(authtoken="authtoken")

response = client.stack('api_key').content_types('content_type_uid').entry('entry_uid').fetch().json()
```
