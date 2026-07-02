---
title: "includeMetadata"
description: "The includeMetadata method includes the asset library metadata along with the response body."
url: "https://www.contentstack.com/android-assetlibrary-includemetadata"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## includeMetadata

The `includeMetadata` method includes the asset library metadata along with the response body.

No parameters.

Returns:
Type
AssetLibrary

```
Stack stack = Contentstack.stack(context, "apiKey", "deliveryToken", environment_name);
AssetLibrary assets = stack.assetLibrary();
assets.includeMetadata();
```
