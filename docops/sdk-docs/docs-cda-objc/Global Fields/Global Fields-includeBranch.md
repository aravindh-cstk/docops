---
title: "includeBranch"
description: "The includeBranch method includes the branch details for single or multiple global fields."
url: "https://www.contentstack.com/ios-global-fields-includebranch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeBranch

The includeBranch method includes the branch details for single or multiple global fields.

No parameters.

Returns:
Type
void

**Example:**

```
Stack *stack = [Contentstack stackWithAPIKey:@"API_KEY" accessToken:@"DELIVERY_TOKEN" environmentName:@"ENVIRONMENT"];
GlobalField *globalfield = [stack globalField];
[globalfield includeBranch];
[globalfield fetchAll:^(ResponseType type, NSArray<GlobalField *> * _Nullable result, NSError * _Nullable error){
}];
```

Note:

- Information about Global fields can be retrieved by all users, regardless of their role or access level.
- If your Global field contains nested Global fields, they will appear as part of the schema in the API response.
