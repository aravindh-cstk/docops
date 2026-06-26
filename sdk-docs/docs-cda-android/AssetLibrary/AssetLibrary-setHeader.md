---
title: " setHeader"
description: "The `setHeader` method adds a header to the request using the specified key and value."
url: "https://www.contentstack.com/android-assetlibrary-setheader-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

##  setHeader

The `setHeader` method adds a header to the request using the specified key and value.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | The key you want to remove from the header |
| value | String | Yes | — | Value of the header against the key |

Returns:
Type
AssetLibrary

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context, apiKey, deliveryToken, environment);
AssetLibrary assets = stack.assetLibrary()
assets.setHeader(key, value);
```
