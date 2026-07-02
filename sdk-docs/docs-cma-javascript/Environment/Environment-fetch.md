---
title: "fetch"
description: "The fetch Environment call fetches Environment details."
url: "https://www.contentstack.com/js-management-environment-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## fetch

The fetch Environment call fetches Environment details.

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).environment('name')
.fetch()
.then((environment) => console.log(environment))
```
