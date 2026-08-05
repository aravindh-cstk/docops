---
title: "create"
description: "The Create an asset call creates a new asset."
url: "https://www.contentstack.com/js-management-asset-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## create

The Create an asset call creates a new asset.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params.asset | object | Yes | — | Asset details to create. |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

const asset = {
 upload: 'path/to/file.png',
 title: 'Title',
 description: 'Desc'
}

client.stack({ api_key: 'api_key'}).asset().create(asset)
.then((asset) => console.log(asset))
```
