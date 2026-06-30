---
title: "create"
description: "The `create` method creates an app request."
url: "https://www.contentstack.com/javascript-marketplace-apprequest-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## create

The `create` method creates an app request.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| appUid | String | Yes | — | The UID for the app for request |
| targetUid | String | Yes | — | The UID of the target, on which the app will be installed |

Returns:
Type
Promise

**Example:**

```
import * as contentstack from '@contentstack/marketplace-sdk'
const client = contentstack.client({ authtoken: 'TOKEN'});
client.marketplace('organization_uid').appRequests().create({ appUid: 'app_uid', targetUid: 'target_uid' })
.then((response) => console.log(response));
```
