---
title: "update"
description: "The update method lets you update an existing taxonomy in your stack."
url: "https://www.contentstack.com/js-management-taxonomy-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## update

The update method lets you update an existing taxonomy in your stack.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| taxonomyUid | string | Yes | — | UID of the taxonomy |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client()
client.stack({ api_key: 'api_key'}).taxonomy('taxonomyUid').fetch() .then((taxonomy) => {
	taxonomy.name = 'taxonomy name'
	return taxonomy.update()
})
.then((taxonomy) => console.log(taxonomy))
```
