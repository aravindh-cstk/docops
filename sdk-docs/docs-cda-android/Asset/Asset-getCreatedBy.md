---
title: "getCreatedBy"
description: "The `getCreatedBy` method retrieves the `created by` object from the asset response, indicating which user created the asset."
url: "https://www.contentstack.com/android-asset-getcreatedby"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## getCreatedBy

The `getCreatedBy` method retrieves the `created by` object from the asset response, indicating which user created the asset.

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
 asset.getCreatedBy();
}
});
```
