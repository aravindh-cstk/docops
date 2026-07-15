---
title: "fetch"
description: "The fetch method retrieves the details of a specific management token from the stack."
url: "https://www.contentstack.com/js-management-managementtoken-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch

The fetch method retrieves the details of a specific management token from the stack.

No parameters.

Returns:
Type
Promise

**Example**:

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })
client.stack({ api_key: 'api_key'}).managementToken('management_token_uid')
.fetch()
.then((managementToken) => console.log(managementToken))
```
