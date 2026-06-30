---
title: "imports"
description: "The imports method imports the content type into the stack by uploading a JSON file."
url: "https://www.contentstack.com/python-management-content-types-imports"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## imports

The imports method imports the content type into the stack by uploading a JSON file.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| content_type_uid | str | Yes | — | UID of the content type |
| file_path | str | Yes | — | File path of the content type to be uploaded |

Returns:
Type
JSON

```
import contentstack
import contentstack_management
client = contentstack_management.Client(authtoken='auth_token')
content_type = client.stack(api_key='api_key').content_type('content_type_uid')
response = content_type.imports(file_path)
```
