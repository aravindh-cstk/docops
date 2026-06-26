---
title: "fetch"
description: "The fetch method retrieves the global field data of the specified global field."
url: "https://www.contentstack.com/typescript-delivery-global-fields-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch

The fetch method retrieves the global field data of the specified global field.

No parameters.

Returns:
Type
Promise

**Example:**

```
import { BaseGlobalField } from '@contentstack/delivery-sdk'

const stack = contentstack.stack({ apiKey: "apiKey", deliveryToken: "deliveryToken", environment: "environment" });

interface ImageField extends BaseGlobalField {
  format: string
  // other props
}

const result = await stack
                       .globalField('global_field_uid')
                       .fetch<ImageField>();
```
