---
title: "export"
description: "The export method exports a specific content type and its schema."
url: "https://www.contentstack.com/python-management-content-types-export"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## export

The export method exports a specific content type and its schema.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| content_type_uid | str | Yes | — | UID of the content type |

Returns:
Type
JSON

```
import contentstack
import contentstack_management
client = contentstack_management.Client(authtoken='auth_token')
content_type = client.stack(api_key='api_key').content_type('content_type_uid')
response = content_type.export()
```
