---
title: "publish"
description: "The publish method allows you to publish a specific version of the asset on the required environment either immediately or at a later time/date."
url: "https://www.contentstack.com/python-management-asset-publish"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## publish

The publish method allows you to publish a specific version of the asset on the required environment either immediately or at a later time/date.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| data | Dict | Yes | — | The data that you want to publish. |

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
response = asset.publish(data)
```
