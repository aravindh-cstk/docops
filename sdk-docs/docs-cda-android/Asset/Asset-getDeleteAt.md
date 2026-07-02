---
title: "getDeleteAt"
description: "The getDeleteAt method retrieves the deleted at object from the asset response, indicating the timestamp when the asset was deleted."
url: "https://www.contentstack.com/android-asset-getdeleteat"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## getDeleteAt

The `getDeleteAt` method retrieves the `deleted at` object from the asset response, indicating the timestamp when the asset was deleted.

No parameters.

Returns:
Type
String

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context,"apiKey","deliveryToken","environment");
Asset asset = stack.asset("assetUid");
asset.getDeleteAt()
```
