---
title: "includeFallback"
description: "The includeFallback method includes the fallback language content in the asset response when the specified locale content is unavailable."
url: "https://www.contentstack.com/android-assetlibrary-includefallback"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## includeFallback

The `includeFallback` method includes the fallback language content in the asset response when the specified locale content is unavailable.

No parameters.

Returns:
Type
AssetLibrary

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context, apiKey, deliveryToken, environment);
AssetLibrary assets = stack.assetLibrary()
assets.includeFallback()
```
