---
title: "delete"
description: "The delete method removes the existing management token from the stack."
url: "https://www.contentstack.com/js-management-managementtoken-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## delete

The delete method removes the existing management token from the stack.

No parameters.

Returns:
Type
Promise

**Example**:

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })
client.stack({ api_key: 'api_key'}).managementToken('management_token_uid')
.delete()
.then((response) => console.log(response.notice))
```
