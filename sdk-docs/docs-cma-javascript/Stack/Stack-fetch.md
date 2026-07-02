---
title: "fetch"
description: "The fetch stack call fetches stack details."
url: "https://www.contentstack.com/js-management-stack-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## fetch

The fetch stack call fetches stack details.

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).fetch()
.then((stack) => console.log(stack))
```
