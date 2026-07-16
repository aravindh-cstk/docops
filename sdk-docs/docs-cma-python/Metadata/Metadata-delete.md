---
title: "delete"
description: "The delete method removes the metadata associated with a specific entry or asset."
url: "https://www.contentstack.com/python-management-metadata-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## delete

The delete method removes the metadata associated with a specific entry or asset.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| metadata_uid | str | Yes | — | UID of the metadata |

Returns:
Type
JSON

```
import contentstack_management
client = contentstack_management.Client(authtoken='authtoken')
response = client.stack('api_key').metadata('metadata_uid').delete().json()
```
