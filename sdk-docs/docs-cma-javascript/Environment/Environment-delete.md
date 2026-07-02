---
title: "delete"
description: "The Delete Environment call is used to delete an existing Environment permanently from your Stack."
url: "https://www.contentstack.com/js-management-environment-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## delete

The Delete Environment call is used to delete an existing Environment permanently from your Stack.

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).environment('name')
.delete()
.then((response) => console.log(response.notice))
```
