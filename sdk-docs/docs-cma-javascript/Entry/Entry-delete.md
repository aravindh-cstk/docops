---
title: "delete"
description: "The Delete an entry call is used to delete a specific entry from a content type."
url: "https://www.contentstack.com/js-management-entry-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## delete

The Delete an entry call is used to delete a specific entry from a content type.

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).contentType('content_type_uid').entry('uid')
.delete()
.then((response) => console.log(response.notice))
```
