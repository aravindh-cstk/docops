---
title: "authorize"
description: "The `authorize` method authorizes the app for a specific scope."
url: "https://www.contentstack.com/javascript-marketplace-auhorize"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## authorize

The `authorize` method authorizes the app for a specific scope.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| param.responseType | String | Yes | — | Desired grant type |
| param.clientId | String | Yes | — | Client id of the app |
| param.redirectUri | String | No | — | Redirect URL of the app |
| param.scope | String | No | — | Scopes of the app |
| param.state | String | No | — | Local state provided by the client |

Returns:
Type
Promise

**Example:**

```
import * as contentstack from '@contentstack/marketplace-sdk'
const client = contentstack.client({ authtoken: 'TOKEN'});
client.marketplace('organization_uid').app('app_uid').authorize({ responseType, clientId, redirectUri, scope, state })
.then((response) => console.log(response));
```
