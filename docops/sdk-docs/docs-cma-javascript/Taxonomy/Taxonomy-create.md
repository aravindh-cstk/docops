---
title: "create"
description: "The create method lets you create a new taxonomy in your stack."
url: "https://www.contentstack.com/js-management-taxonomy-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## create

The create method lets you create a new taxonomy in your stack.

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client()
const taxonomy = {
	uid: 'taxonomy_testing1',
	name: 'taxonomy testing',
	description: 'Description for Taxonomy testing'
}
client.stack({ api_key: 'api_key'}).taxonomy().create({taxonomy})
.then((taxonomy) => console.log(taxonomy))
```
