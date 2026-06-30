---
title: "includeMetadata()"
description: "Includes AssetQuery metadata along with response body."
url: "https://www.contentstack.com/swift-assetquery-includemetadata-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeMetadata()

Includes AssetQuery metadata along with response body.

No parameters.

Returns:
Type
AssetQuery

```
let stack = Contentstack.stack(apiKey:"API_KEY", deliveryToken:"DELIVERY_TOKEN", environment: "ENVIRNOMENT")
stack.contentType(uid: contentTypeUID).entry().query()
.includeMetadata()
.fetch { (result: Result ContentstackResponse&lt;EntryMode&gt;, Error&lt;response: ResponseType&gt;) in
switch result {
case.success(let contentstackResponse):
case.failure(let error):

  }
}
```
