---
title: "update"
description: "The Update stack call lets you update the name and description of an existing stack."
url: "https://www.contentstack.com/js-management-stack-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## update

The Update stack call lets you update the name and description of an existing stack.

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).fetch()
.then((stack) => {
 stack.name = 'My New Stack'
 stack.description = 'My new test stack'
 return stack.update()
})
.then((stack) => console.log(stack))
```
