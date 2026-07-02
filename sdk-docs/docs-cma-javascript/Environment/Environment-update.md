---
title: "update"
description: "The Update Environment call lets you update the name and description of an existing Environment."
url: "https://www.contentstack.com/js-management-environment-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## update

The Update Environment call lets you update the name and description of an existing Environment.

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).environment('name')
.fetch()
.then((environment) => {
 environment.title = 'My New Content Type'
 environment.description = 'Content Type description'
 return environment.update()
})
.then((environment) => console.log(environment))
```
