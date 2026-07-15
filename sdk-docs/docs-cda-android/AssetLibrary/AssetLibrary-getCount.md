---
title: "getCount"
description: "The `getCount` method returns the total number of assets available in the stack."
url: "https://www.contentstack.com/android-assetlibrary-getcount"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## getCount

The `getCount` method returns the total number of assets available in the stack.

No parameters.

Returns:
Type
int

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context, apiKey, deliveryToken, environment);
AssetLibrary assets = stack.assetLibrary()
assets.getCount()
```
