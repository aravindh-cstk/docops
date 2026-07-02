---
title: "fetch"
description: "The Get a single role request returns comprehensive information on a specific role."
url: "https://www.contentstack.com/js-management-role-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## fetch

The Get a single role request returns comprehensive information on a specific role.

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).role('role_uid').fetch()
.then((role) => console.log(role))
```
