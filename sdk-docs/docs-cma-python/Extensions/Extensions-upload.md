---
title: "upload"
description: "The upload method is used to upload a new extension to your stack."
url: "https://www.contentstack.com/python-management-extensions-upload"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## upload

The upload method is used to upload a new extension to your stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | The request body |

Returns:
Type
JSON

```
extension = {
       "file_name": "demo.html",
       "file_path": "/Users/sunil.lakshman/Downloads/demo.html",
       "data_type": 'text',
       "title": 'Old Extension',
       "multiple": False,
       "tags": {},
       "type": 'dashboard'
       }
import contentstack_management
client = contentstack_management.Client(authtoken='your_authtoken')
result = client.stack('api_key').extension().upload(extension).json()
```
