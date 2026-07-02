---
title: "delete"
description: "The Delete DeliveryToken call is used to delete an existing DeliveryToken permanently from your Stack."
url: "https://www.contentstack.com/js-management-deliverytoken-delete"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## delete

The Delete DeliveryToken call is used to delete an existing DeliveryToken permanently from your Stack.

No parameters.

Returns:
Type
Promise

```
import * as contentstack from '@contentstack/management'
const client = contentstack.client({ authtoken })

client.stack({ api_key: 'api_key'}).deliveryToken('delivery_token_uid')
.delete()
.then((response) => console.log(response.notice))
```
