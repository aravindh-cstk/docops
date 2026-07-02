---
title: "create"
description: "The Create a DeliveryToken call creates a new deliveryToken in a particular stack of your Contentstack account."
url: "https://www.contentstack.com/js-management-deliverytoken-create"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## create

The Create a DeliveryToken call creates a new deliveryToken in a particular stack of your Contentstack account.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params.token | object | No | — | The token details with name, description and scope for the token to be created. |

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

const token = {
    name: 'Test',
    description: 'This is a demo token.',
    scope: [{
             module: 'environment',
             environments: ['development'],
             acl: {
               read: true
             }
           }]
}

client.stack({ api_key: 'api_key'}).deliveryToken()
.create({ token })
.then((deliveryToken) => console.log(deliveryToken))
```
