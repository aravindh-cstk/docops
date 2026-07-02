---
title: "fetch"
description: "The fetch a folder call returns comprehensive information about folder of a stack."
url: "https://www.contentstack.com/js-management-folder-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## fetch

The fetch a folder call returns comprehensive information about folder of a stack.

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).asset()
.folder('uid')
.fetch()
.then((folder) => console.log(folder))
```
