---
title: "getUpdateAt"
description: "The `getUpdateAt` method retrieves the `updated at` object from the asset response, indicating the timestamp when the asset was last updated."
url: "https://www.contentstack.com/android-asset-getupdateat"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## getUpdateAt

The `getUpdateAt` method retrieves the `updated at` object from the asset response, indicating the timestamp when the asset was last updated.

No parameters.

Returns:
Type
String

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(<span>context, </span>apiKey, deliveryToken, environment);
Asset asset = stack.asset(assetUid);
asset.fetch(new FetchResultCallback() {
@Override
public void onCompletion(ResponseType responseType, Error error) {
 asset.getUpdateAt();
}
});
```
