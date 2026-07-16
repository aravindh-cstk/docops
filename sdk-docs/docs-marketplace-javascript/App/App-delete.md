---
title: "delete"
description: "The `delete` method is used to delete the app."
url: "https://www.contentstack.com/javascript-marketplace-app-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## delete

The `delete` method is used to delete the app.

No parameters.

Returns:
Type
Promise

**Example:**

```
import * as contentstack from '@contentstack/marketplace-sdk'
const client = contentstack.client({ authtoken: 'TOKEN'});
client.marketplace('organization_uid').app('manifest_uid').delete()
.then((response) => console.log(response));
```
