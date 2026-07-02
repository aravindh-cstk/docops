---
title: "removeHeader"
description: "The removeHeader method removes a header associated with the specified key."
url: "https://www.contentstack.com/android-assetlibrary-removeheader"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## removeHeader

The `removeHeader` method removes a header associated with the specified key.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | The key you want to remove from the header |

Returns:
Type
AssetLibrary

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context, apiKey, deliveryToken, environment);
AssetLibrary assets = stack.assetLibrary()
assets.removeHeader(key);
```
