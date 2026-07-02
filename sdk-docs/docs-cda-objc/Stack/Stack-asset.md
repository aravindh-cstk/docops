---
title: "asset"
description: "Represents an Asset on ‘Stack’ which can be executed to get Asset object."
url: "https://www.contentstack.com/ios-stack-asset"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## asset

Represents an Asset on ‘Stack’ which can be executed to get Asset object.

No parameters.

Returns:
Type
Asset

**Obj-C**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];

Asset *asset = [stack asset];
```

**Swift**

```
let stack:Stack = Contentstack.stackWithAPIKey("API_KEY",accessToken:"DELIVERY_TOKEN", environmentName:@"ENVIRONMENT")

var asset:Asset = stack.asset()
```
