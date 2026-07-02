---
title: "find"
description: "The find method retrieves the data of the all the global fields of the stack."
url: "https://www.contentstack.com/swift-global-fields-find"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## find

The `find` method retrieves the data of the all the global fields of the stack.

No parameters.

Returns:
Type
void

**Example:**

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")
stack.globalField().includeBranch().find{(result: Result<ContentstackResponse<GlobalFieldModel>, Error>, responseType) in
switch result {
     case .success(let model):

     case .failure(let error):

     }
}
```
