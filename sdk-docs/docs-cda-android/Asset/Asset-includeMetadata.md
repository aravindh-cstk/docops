---
title: "includeMetadata"
description: "The includeMetadata method includes the asset metadata along with the response body."
url: "https://www.contentstack.com/android-asset-includemetadata"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## includeMetadata

The `includeMetadata` method includes the asset metadata along with the response body.

No parameters.

Returns:
Type
Asset

```
Stack stack = Contentstack.stack(context, "apiKey", "deliveryToken", "environment");
final Asset asset = stack.asset("assetUid");
asset.includeMetadata();
```
