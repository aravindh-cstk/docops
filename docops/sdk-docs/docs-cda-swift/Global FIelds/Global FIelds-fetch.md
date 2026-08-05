---
title: "fetch"
description: "The `fetch` method retrieves the data of the specified global field."
url: "https://www.contentstack.com/swift-global-fields-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch

The `fetch` method retrieves the data of the specified global field.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| globalFieldUid | String | Yes | — | UID of the Global field |

Returns:
Type
void

**Example:**

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<envirnoment>")
stack.globalField(uid: globalFieldUid).fetch{ (result: Result<GlobalFieldModel, Error>, _) in
switch result {
     case .success(let model):

     case .failure(let error):

     }
}
```
