---
title: "fetch"
description: "The fetch Label returns information about a particular label of a stack."
url: "https://www.contentstack.com/js-management-label-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch

The fetch Label returns information about a particular label of a stack.

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).label('label_uid').fetch()
.then((label) => console.log(label))
```
