---
title: "Global FIelds"
description: "A Global field is a reusable field (or group of fields) that you can define once and reuse in any content type within your stack. This eliminates the need (and thereby time and efforts) to create the same set of fields repeatedly in multiple content types. Example: let stack = Contentstack.stack(apiKey: \"<API_KEY>\", deliveryToken: \"<DELIVERY_TOKEN>\", environment: \"<ENVIRNOMENT>\") stack.globalField().find{(result: Result<ContentstackResponse<GlobalFieldModel>, Error>, responseType) in switch result { case .success(let model): case .failure(let error): } }"
url: "https://www.contentstack.com/developers/sdks/content-delivery-sdk/swift/reference/global-fields"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

# Global FIelds

## Global FIelds

A Global field is a reusable field (or group of fields) that you can define once and reuse in any content type within your stack. This eliminates the need (and thereby time and efforts) to create the same set of fields repeatedly in multiple content types.

**Example:**

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")
stack.globalField().find{(result: Result<ContentstackResponse<GlobalFieldModel>, Error>, responseType) in
switch result {
     case .success(let model):

     case .failure(let error):

     }
}
```
