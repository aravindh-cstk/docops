---
title: "fetch"
description: "The fetch Branch call fetches Branch details."
url: "https://www.contentstack.com/js-management-branch-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch

The fetch Branch call fetches Branch details.

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).branch('uid')
.fetch()
.then((branch) => console.log(branch))
```
