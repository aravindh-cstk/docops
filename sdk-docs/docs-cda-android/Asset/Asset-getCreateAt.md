---
title: "getCreateAt"
description: "The getCreateAt method retrieves the created at object from the asset response, indicating the timestamp when the asset was created."
url: "https://www.contentstack.com/android-asset-getcreateat"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## getCreateAt

The `getCreateAt` method retrieves the `created at` object from the asset response, indicating the timestamp when the asset was created.

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
 asset.getCreateAt();
}
});
```
