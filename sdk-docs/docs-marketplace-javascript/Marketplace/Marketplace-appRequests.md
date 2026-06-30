---
title: "appRequests"
description: "The `appRequests` method creates an app request for the app."
url: "https://www.contentstack.com/javascript-marketplace-apprequests"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## appRequests

The `appRequests` method creates an app request for the app.

No parameters.

Returns:
Type
AppRequest

**Example:**

```
import * as contentstack from '@contentstack/marketplace-sdk'
const client = contentstack.client({ authtoken: 'TOKEN'});
client.marketplace('organization_uid').appRequests();
```
