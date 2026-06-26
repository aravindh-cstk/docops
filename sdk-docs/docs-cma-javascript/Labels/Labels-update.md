---
title: "update"
description: "The Update label call is used to update an existing label."
url: "https://www.contentstack.com/js-management-label-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## update

The Update label call is used to update an existing label.

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).label('label_uid')
.fetch()
.then((label) => {
 label.name = 'My New Content Type'
 return label.update()
})
.then((label) => console.log(label))
```
