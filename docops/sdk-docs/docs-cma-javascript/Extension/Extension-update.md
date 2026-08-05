---
title: "update"
description: "The Update Extension call lets you update an existing Extension."
url: "https://www.contentstack.com/js-management-extension-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## update

The Update Extension call lets you update an existing Extension.

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).extension('extension_uid')
.fetch()
.then((extension) => {
 extension.title = 'My Extension Type'
 return extension.update()
})
.then((extension) => console.log(extension))
```
