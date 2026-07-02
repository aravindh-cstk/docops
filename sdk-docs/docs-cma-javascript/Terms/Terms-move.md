---
title: "move"
description: "The move method lets you move an existing term or change the parent UID of the term."
url: "https://www.contentstack.com/js-management-terms-move"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## move

The move method lets you move an existing term or change the parent UID of the term.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| termUid | string | Yes | — | UID of the term |
| force | boolean | No | — | Setting this to true will force delete the taxonomy and all its child terms. By default it is set to false. |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client()
const term = {
	parent_uid: 'parent_uid',
	order: 2
}
client.stack({ api_key: 'api_key'}).taxonomy('taxonomyUid').terms('termUid').move({term})
.then((term) => console.log(term))
```
