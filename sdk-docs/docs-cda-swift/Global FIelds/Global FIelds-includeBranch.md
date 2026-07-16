---
title: "includeBranch"
description: "The `fiincludeBranchd` method includes the branch details for single or multiple global fields"
url: "https://www.contentstack.com/swift-global-fields-includebranch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeBranch

The `fiincludeBranchd` method includes the branch details for single or multiple global fields

No parameters.

Returns:
Type
void

**Example:**

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")
stack.globalField().includeBranch().find{(result: Result<ContentstackResponse<GlobalFieldModel>, Error>, responseType) in
switch result {
     case .success(let model):

     case .failure(let error):

     }
}
```

Note:

- Information about Global fields can be retrieved by all users, regardless of their role or access level.
- If your Global field contains nested Global fields, they will appear as part of the schema in the API response.
