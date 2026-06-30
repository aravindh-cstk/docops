---
title: "includeMetadata()"
description: "The `includeMetadata()` method includes asset metadata in the response body."
url: "https://www.contentstack.com/swift-asset-includemetadata-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeMetadata()

The `includeMetadata()` method includes asset metadata in the response body.

No parameters.

Returns:
Type
Asset

Returns extra asset metadata fields in addition to the standard asset data using `includeMetadata()`.

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")
stack.asset(uid: "<ASSET_UID>").includeMetadata()
```
