---
title: "update"
description: "The update method allows you to modify the existing management token within the stack."
url: "https://www.contentstack.com/js-management-managementtoken-update"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## update

The update method allows you to modify the existing management token within the stack.

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
.then((managementToken) => {
 managementToken.title = 'My New management token'
 managementToken.description = 'management token description'
 return managementToken.update()
})
.then((managementToken) => console.log(managementToken))
```
