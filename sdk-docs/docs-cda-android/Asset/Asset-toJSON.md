---
title: "toJSON"
description: "The toJSON method retrieves the JSON object representation of the asset from the asset response."
url: "https://www.contentstack.com/android-asset-tojson"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## toJSON

The `toJSON` method retrieves the JSON object representation of the asset from the asset response.

No parameters.

Returns:
Type
JSONObject

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(<span>context, </span>apiKey, deliveryToken, environment);
Asset asset = stack.asset(assetUid);
asset.fetch(new FetchResultCallback() {
@Override
public void onCompletion(ResponseType responseType, Error error) {
 asset.toJSON();
}
});
```
