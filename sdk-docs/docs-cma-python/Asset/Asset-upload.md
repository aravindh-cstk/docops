---
title: "upload"
description: "The upload method allows you to upload an asset file in the stack."
url: "https://www.contentstack.com/python-management-asset-upload"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## upload

The upload method allows you to upload an asset file in the stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| file_path | str | Yes | — | The path to the file you want to upload |

Returns:
Type
Asset

```
import contentstack_management
client = contentstack_management.Client(authtoken="authtoken")

file_path = ""
asset = client().stack(api_key='api_key').assets()
response = asset.upload(file_path)
```
