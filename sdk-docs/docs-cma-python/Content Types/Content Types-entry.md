---
title: "entry"
description: "The entry method retrieves the details of a particular entry in the content type."
url: "https://www.contentstack.com/python-management-content-types-entry"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## entry

The entry method retrieves the details of a particular entry in the content type.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entry_uid | str | Yes | — | UID of the entry |

Returns:
Type
JSON

```
import contentstack_management
client = contentstack_management.Client(authtoken='auth_token')
content_type = client.stack(api_key='api_key').content_type('content_type_uid')
response = content_type.entry()
```
