---
title: "setTags"
description: "The `setTags` method includes the specified tags in the asset response to categorize the asset."
url: "https://www.contentstack.com/android-asset-settags"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## setTags

The `setTags` method includes the specified tags in the asset response to categorize the asset.

No parameters.

Returns:
Type
Asset

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context,"apiKey","deliveryToken","environment");
Asset asset = stack.asset("assetUid");
asset.setTags()
```
