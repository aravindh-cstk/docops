---
title: "getUpdatedBy"
description: "The getUpdatedBy method retrieves the updated by object from the asset response, indicating which user last updated the asset."
url: "https://www.contentstack.com/android-asset-getupdatedby"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## getUpdatedBy

The `getUpdatedBy` method retrieves the `updated by` object from the asset response, indicating which user last updated the asset.

No parameters.

Returns:
Type
String

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context,"apiKey","deliveryToken", "environment");
Asset asset = stack.asset("assetUid");
asset.getUpdatedBy();
```
