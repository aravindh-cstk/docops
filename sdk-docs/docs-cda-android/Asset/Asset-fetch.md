---
title: "fetch"
description: "The `fetch` method retrieves a particular asset using its asset UID."
url: "https://www.contentstack.com/android-asset-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch

The `fetch` method retrieves a particular asset using its asset UID.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| callback | FetchResultCallback | Yes | — | callback of the asset response |

Returns:
Type
void

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(applicationContext, "apiKey", "deliveryToken", "environment");
Asset asset = stack.asset("assetUid");
asset.fetch(new FetchResultCallback() {
@Override 
public void onCompletion(ResponseType responseType, Error error){

}}
```
