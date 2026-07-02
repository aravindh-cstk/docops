---
title: "update"
description: "The update method allows you to make changes in the title and description of an existing asset in the stack."
url: "https://www.contentstack.com/python-management-asset-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## update

The update method allows you to make changes in the title and description of an existing asset in the stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | The updated information for the asset |

Returns:
Type
Asset

```
import contentstack_management
client = contentstack_management.Client(authtoken="authtoken")

data = {
         "asset": {
                 "title": "Title"
         }
}
asset = client().stack(api_key='api_key').assets(asset_uid='asset_uid')
response = asset.update(data)
```
