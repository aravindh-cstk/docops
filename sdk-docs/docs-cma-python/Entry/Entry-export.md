---
title: "export"
description: "The export method exports an existing entry in a JSON format."
url: "https://www.contentstack.com/python-management-entry-export"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## export

The export method exports an existing entry in a JSON format.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entry_uid | str | Yes | — | UID of the entry |

Returns:
Type
Entry

```
import contentstack_management
client = contentstack_management.Client(authtoken="authtoken")

response = client.stack('api_key').content_types(''content_type_uid'').entry('entry_uid').export().json()
```
