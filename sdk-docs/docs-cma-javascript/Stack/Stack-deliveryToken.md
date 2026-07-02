---
title: "deliveryToken"
description: "Delivery Tokens provide read-only access to the associated environments."
url: "https://www.contentstack.com/js-management-stack-deliverytoken"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## deliveryToken

Delivery Tokens provide read-only access to the associated environments.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| uid | string | No | — | UID for delivery token to perform operation on. |

Returns:
Type
DeliveryToken

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).deliveryToken()
// OR
client.stack({ api_key: 'api_key'}).deliveryToken('uid')
```
