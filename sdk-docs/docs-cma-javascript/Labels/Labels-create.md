---
title: "create"
description: "The Create a label call creates a new label."
url: "https://www.contentstack.com/js-management-label-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## create

The Create a label call creates a new label.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params.label | Object | No | — | The label details you want to create with ContentType uid list. |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

const label = {
 name: 'First label',
 content_types: ['content_type_uid']
}

client.stack({ api_key: 'api_key'}).label()
.create({ label })
.then((label) => console.log(label))
```
