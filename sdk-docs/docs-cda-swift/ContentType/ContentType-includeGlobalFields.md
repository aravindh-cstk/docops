---
title: "includeGlobalFields()"
description: "To include Global Fields schema in ContentType response."
url: "https://www.contentstack.com/swift-contenttype-includeglobalfields-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeGlobalFields()

To include Global Fields schema in ContentType response.

No parameters.

Returns:
Type
ContentType

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")

stack.contentType(uid: "<CONTENT_TYPE_UID>").includeGlobalFields()
.fetch { (result: Result<ContentTypeModel, Error>, response: ResponseType) in
   switch result {
   case .success(let model):

   case .failure(let error):

   }
}
```
