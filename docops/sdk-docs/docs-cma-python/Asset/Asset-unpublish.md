---
title: "unpublish"
description: "The unpublish method allows you to unpublish a specific version of an asset from a desired environment."
url: "https://www.contentstack.com/python-management-asset-unpublish"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## unpublish

The unpublish method allows you to unpublish a specific version of an asset from a desired environment.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | The data you want to send to server for the unpublish operation |

Returns:
Type
Asset

```
import contentstack_management
client = contentstack_management.Client(authtoken="authtoken")

data = {
         "asset": {
                 "locales": [
                         "en-us"
                 ],
                 "environments": [
                         "development"
                ]
         },
         "version": 1,
         "scheduled_at": "2019-02-08T18:30:00.000Z"
}
asset = client().stack(api_key='api_key').assets(asset_uid='asset_uid')
response = asset.unpublish(data)
```
