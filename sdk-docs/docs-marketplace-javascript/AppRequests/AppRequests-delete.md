---
title: "delete"
description: "The delete method deletes an app request of an app in target_uid."
url: "https://www.contentstack.com/javascript-marketplace-apprequest-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## delete

The `delete` method deletes an app request of an app in target_uid.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| requestUID | String | Yes | — | The ID of the request to be deleted |

Returns:
Type
Promise

**Example:**

```
import * as contentstack from '@contentstack/marketplace-sdk'
const client = contentstack.client({ authtoken: 'TOKEN'});

client.marketplace('organization_uid').appRequests().delete('request_uid`)
.then((response) => console.log(response));
```
