---
title: "getBranch"
description: "The `getBranch` method retrieves the branch currently set on the stack."
url: "https://www.contentstack.com/android-config-getbranch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## getBranch

The `getBranch` method retrieves the branch currently set on the stack.

No parameters.

Returns:
Type
String

```
import com.contentstack.sdk.*;

Config config = new Config();
config.getBranch();
Stack stack = Contentstack.stack(context, "apiKey", "deliveryToken", "environment", config);
```
