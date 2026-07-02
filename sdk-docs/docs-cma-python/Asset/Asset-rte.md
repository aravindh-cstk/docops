---
title: "rte"
description: "The rte method retrieves the details of all the assets uploaded through the Rich Text Editor field."
url: "https://www.contentstack.com/python-management-asset-rte"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## rte

The rte method retrieves the details of all the assets uploaded through the [Rich Text Editor](https://www.contentstack.com/docs/developers/create-content-types/rich-text-editor) field.

No parameters.

Returns:
Type
Asset

```
import contentstack_management
client = contentstack_management.Client(authtoken="authtoken")

asset = client().stack(api_key='api_key').assets()
response = asset.rte()
```
