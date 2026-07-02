---
title: "includeBranch"
description: "The includeBranch method includes the branch information in the asset response."
url: "https://www.contentstack.com/android-asset-includebranch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## includeBranch

The `includeBranch` method includes the branch information in the asset response.

No parameters.

Returns:
Type
Asset

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context, "apiKey", "deliveryToken", "environment");
Asset asset = stack.asset("assetUid");
asset.includeBranch();
```
