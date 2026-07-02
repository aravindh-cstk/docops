---
title: "publish"
description: "The publish method allows you to publish the metadata associated with a specific entry or asset."
url: "https://www.contentstack.com/python-management-metadata-publish"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## publish

The publish method allows you to publish the metadata associated with a specific entry or asset.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| metadata_uid | str | Yes | — | UID of the metadata |

Returns:
Type
JSON

```
"metadata": {
           "environments": [
           "test"
           ],
           "locales": [
           "en-us"
           ]
       }
       }
import contentstack_management 
client = contentstack_management.Client(authtoken='authtoken')
response = client.stack('api_key').metadata('metadata_uid').publish(data).json()
```
