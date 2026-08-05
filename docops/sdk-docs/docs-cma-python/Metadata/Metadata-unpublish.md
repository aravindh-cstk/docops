---
title: "unpublish"
description: "The unpublish method allows you to unpublish the metadata associated with a specific entry or asset."
url: "https://www.contentstack.com/copy-of-python-management-metadata-unpublish"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## unpublish

The unpublish method allows you to unpublish the metadata associated with a specific entry or asset.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| metadata_uid | str | Yes | — | UID of the metadata |

Returns:
Type
JSON

```
data = {
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
response = client.stack('api_key').metadata('metadata_uid').unpublish(data).json()
```
