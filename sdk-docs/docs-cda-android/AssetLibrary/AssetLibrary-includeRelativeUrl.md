---
title: "includeRelativeUrl"
description: "The `includeRelativeUrl` method includes the relative URLs of assets in the asset library response."
url: "https://www.contentstack.com/android-assetlibrary-includerelativeurl"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeRelativeUrl

The `includeRelativeUrl` method includes the relative URLs of assets in the asset library response.

No parameters.

Returns:
Type
AssetLibrary

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context, apiKey, deliveryToken, environment);
AssetLibrary assets = stack.assetLibrary()
assets.includeRelativeUrl();
```
