---
title: "find"
description: "The find method retrieves all the global fields of the stack."
url: "https://www.contentstack.com/typescript-delivery-global-fields-find"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## find

The find method retrieves all the global fields of the stack.

No parameters.

Returns:
Type
Promise

**Example:**

```
import { BaseGlobalField, FindGlobalField } from '@contentstack/delivery-sdk'

interface ImageField extends BaseGlobalField {
  format: string
  // other props
}

const result = await stack
                       .globalField()
                       .find<ImageField>();
```
