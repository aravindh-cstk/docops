---
title: "update"
description: "The Update Asset call lets you update the name and description of an existing Asset."
url: "https://www.contentstack.com/js-management-asset-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## update

The Update Asset call lets you update the name and description of an existing Asset.

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).asset('uid')
.fetch()
.then((asset) => {
 asset.title = 'My New asset'
 asset.description = 'Asset description'
 return asset.update()
})
.then((asset) => console.log(asset))
```
