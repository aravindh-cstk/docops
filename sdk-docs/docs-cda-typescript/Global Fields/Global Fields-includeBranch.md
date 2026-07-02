---
title: "includeBranch"
description: "The includeBranch method includes the branch details in the result for single or multiple global fields."
url: "https://www.contentstack.com/typescript-delivery-global-fields-includebranch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## includeBranch

The includeBranch method includes the branch details in the result for single or multiple global fields.

No parameters.

Returns:
Type
GlobalField

**Example:**

```
const result = await stack
                       .globalField('global_field_uid')
                       .includeBranch()
                       .find<ImageField>();
```
