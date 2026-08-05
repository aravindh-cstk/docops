---
title: "generate"
description: "The generate method allows you to generate a permanent asset URL for the specific asset."
url: "https://www.contentstack.com/python-management-asset-generate"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## generate

The generate method allows you to generate a permanent asset URL for the specific asset.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | The data to be sent in the request body |

Returns:
Type
Asset

```
import contentstack_management
client = contentstack_management.Client(authtoken="authtoken")

data = {
   "asset": {
       "permanent_url": "https://images.contentstack.io/v3/assets/stack_api_key/asset_UID/sample-slug.jpeg"
       }
   } 
asset = client().stack(api_key='api_key').assets(asset_uid='asset_uid')
response = asset.generate(data)
```
