---
title: "fetch"
description: "The fetch DeliveryToken call fetches DeliveryToken details."
url: "https://www.contentstack.com/js-management-deliverytoken-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch

The fetch DeliveryToken call fetches DeliveryToken details.

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).deliveryToken('delivery_token_uid')
.fetch()
.then((deliveryToken) => console.log(deliveryToken))
```
