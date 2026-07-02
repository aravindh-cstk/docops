---
title: "fetch"
description: "The fetch Extension call fetches Extension details."
url: "https://www.contentstack.com/js-management-extension-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## fetch

The fetch Extension call fetches Extension details.

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).extension('extension_uid')
.fetch()
.then((extension) => console.log(extension))
```
