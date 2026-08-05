---
title: "includeBranch"
description: "The `includeBranch` method includes the branch details in the result for single or multiple global fields."
url: "https://www.contentstack.com/java-delivery-sdk-global-fields-includebranch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeBranch

The `includeBranch` method includes the branch details in the result for single or multiple global fields.

No parameters.

Returns:
Type
GlobalField

**Example:**

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(apiKey, deliveryToken, environment);
GlobalField globalField = stack.globalField().includeBranch();
```
