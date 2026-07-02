---
title: "create"
description: "The create method lets you add a new term to your taxonomy."
url: "https://www.contentstack.com/js-management-terms-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## create

The `create` method lets you add a new term to your taxonomy.

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client()
const term = {
	uid: 'termUid',
	name: 'term name',
	parent_uid: 'parent_uid',
	order: 2
}
client.stack({ api_key: 'api_key'}).taxonomy('taxonomyUid')
terms().create(term)
.then((term) => console.log(term))
```
