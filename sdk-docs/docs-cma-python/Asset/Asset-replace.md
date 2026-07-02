---
title: "replace"
description: "The replace method allows you to replace an existing asset with another file in the stack."
url: "https://www.contentstack.com/python-management-asset-replace"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## replace

The replace method allows you to replace an existing asset with another file in the stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| file_path | str | Yes | — | The path to the file that you want to replace the existing asset with. |

Returns:
Type
Asset

```
import contentstack_management
client = contentstack_management.Client(authtoken="authtoken")

file_path = ""
asset = client().stack(api_key='api_key').assets(asset_uid='asset_uid')
response = asset.replace(file_path)
```
