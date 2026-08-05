---
title: "replace"
description: "The Replace asset call will replace an existing asset with another file on the stack."
url: "https://www.contentstack.com/js-management-asset-replace"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## replace

The Replace asset call will replace an existing asset with another file on the stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params.asset | object | Yes | — | Asset details to replace. |

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

client.stack({ api_key: 'api_key'}).asset('uid').replace(asset)
.then((asset) => console.log(asset))
```
