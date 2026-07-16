---
title: "getDeletedBy"
description: "The `getDeletedBy` method retrieves the `deleted by` object from the asset response, indicating which user deleted the asset."
url: "https://www.contentstack.com/android-asset-getdeletedby"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## getDeletedBy

The `getDeletedBy` method retrieves the `deleted by` object from the asset response, indicating which user deleted the asset.

No parameters.

Returns:
Type
String

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context,"apiKey","deliveryToken","environment");
Asset asset = stack.asset("assetUid");
asset.getDeletedBy()
```
