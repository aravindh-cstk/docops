---
title: "getFileSize"
description: "The getFileSize method retrieves the file size of the asset from the asset response."
url: "https://www.contentstack.com/android-asset-getfilesize"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## getFileSize

The `getFileSize` method retrieves the file size of the asset from the asset response.

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
 asset.getFileSize();
}
});
```
