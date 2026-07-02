---
title: "includeCount"
description: "The includeCount method includes the total count of assets in the asset library response."
url: "https://www.contentstack.com/android-assetlibrary-includecount"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## includeCount

The `includeCount` method includes the total count of assets in the asset library response.

No parameters.

Returns:
Type
AssetLibrary

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context, apiKey, deliveryToken, environment);
AssetLibrary assets = stack.assetLibrary()
assets.includeCount();
```
