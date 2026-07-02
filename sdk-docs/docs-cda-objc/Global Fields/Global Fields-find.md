---
title: "find"
description: "The find method retrieves the details of all the global fields in the stack."
url: "https://www.contentstack.com/ios-global-fields-find"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## find

The find method retrieves the details of  all the global fields in the stack.

No parameters.

Returns:
Type
void

**Example:**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];
GlobalField *globalfield = [stack globalField];
[globalfield fetchAll:^(ResponseType type, NSArray<GlobalField *> * _Nullable result, NSError * _Nullable error){
}];
```
