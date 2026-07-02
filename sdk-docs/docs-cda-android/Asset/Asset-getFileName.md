---
title: "getFileName"
description: "The getFileName method retrieves the file name of the asset from the asset response."
url: "https://www.contentstack.com/android-asset-getfilename"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## getFileName

The `getFileName` method retrieves the file name of the asset from the asset response.

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
 asset.<span>getFileName()</span>;
}
});
```
