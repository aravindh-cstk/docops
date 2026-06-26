---
title: "import"
description: "The import method imports an existing webhook by uploading a JSON file."
url: "https://www.contentstack.com/python-management-webhooks-import"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## import

The import method imports an existing webhook by uploading a JSON file.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| file_path | str | Yes | — | The path of the file to be uploaded |

Returns:
Type
Webhook

```
import contentstack_management 
client = contentstack_management.Client(host='host_name')
client.login(email="email_id", password="password")
file_path = "tests/resources/mock_content_types/import_content_types.json"
response = client.stack('api_key').webhooks().imports(file_path).json()
```
