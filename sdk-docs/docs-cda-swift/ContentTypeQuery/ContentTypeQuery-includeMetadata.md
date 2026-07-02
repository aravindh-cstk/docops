---
title: "includeMetadata()"
description: "Includes ContentTypeQuery metadata along with response body"
url: "https://www.contentstack.com/swift-contenttypequery-includemetadata-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## includeMetadata()

Includes ContentTypeQuery metadata along with response body

No parameters.

Returns:
Type
ContentTypeQuery

```
let stack = Contentstack.stack(apiKey: apiKey,
 deliveryToken: deliveryToken,
  environment: environment)
  
stack.contentType(uid: contentTypeUID).entry().includeMetadata().query()
```
