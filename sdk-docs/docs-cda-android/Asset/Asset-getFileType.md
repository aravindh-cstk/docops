---
title: "getFileType"
description: "The getFileType method retrieves the file type of the asset from the asset response."
url: "https://www.contentstack.com/android-asset-getfiletype"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## getFileType

The `getFileType` method retrieves the file type of the asset from the asset response.

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
 asset.getFileType();
}
});
```
