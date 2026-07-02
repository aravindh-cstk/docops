---
title: "getRequests"
description: "The getRequests method retrieves all requests of an app."
url: "https://www.contentstack.com/javascript-marketplace-getrequests"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## getRequests

The `getRequests` method retrieves all requests of an app.

No parameters.

Returns:
Type
Promise

**Example:**

```
import * as contentstack from '@contentstack/marketplace-sdk'
const client = contentstack.client({ authtoken: 'TOKEN'});
client.marketplace('organization_uid').app('app_uid').getRequests()
.then((response) => console.log(response));
```
