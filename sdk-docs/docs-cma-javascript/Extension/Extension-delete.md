---
title: "delete"
description: "The Delete Extension call is used to delete an existing Extension permanently from your Stack."
url: "https://www.contentstack.com/js-management-extension-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## delete

The Delete Extension call is used to delete an existing Extension permanently from your Stack.

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).extension('extension_uid')
.delete()
.then((response) => console.log(response.notice))
```
