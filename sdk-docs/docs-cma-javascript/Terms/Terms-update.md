---
title: "update"
description: "The update method is used to update the details of an exisiting term in the taxonomy."
url: "https://www.contentstack.com/js-management-terms-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## update

The update method is used to update the details of an exisiting term in the taxonomy.

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client()
client.stack({ api_key: 'api_key'}).taxonomy('taxonomyUid').terms('termUid').fetch().then((term) => {
	term.name = 'taxonomy name'
	return term.update()
})
.then((term) => console.log(term))
```
