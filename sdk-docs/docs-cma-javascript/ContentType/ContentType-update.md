---
title: "update"
description: "The Update ContentType call lets you update the name and description of an existing ContentType. You can also update the JSON schema of a content type, including fields and different features associated with the content type."
url: "https://www.contentstack.com/js-management-contenttype-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## update

The Update ContentType call lets you update the name and description of an existing ContentType. You can also update the JSON schema of a content type, including fields and different features associated with the content type.

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).contentType('content_type_uid').fetch()
.then((contentType) => {
 contentType.title = 'My New Content Type'
 contentType.description = 'Content Type description'
 return contentType.update()
})
.then((contentType) => console.log(contentType))
```
