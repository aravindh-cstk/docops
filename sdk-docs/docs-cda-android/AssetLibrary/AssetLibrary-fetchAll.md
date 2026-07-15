---
title: "fetchAll"
description: "The `fetchAll` method retrieves all the assets available in the stack without applying any filters."
url: "https://www.contentstack.com/android-assetlibrary-fetchall"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetchAll

The `fetchAll` method retrieves all the assets available in the stack without applying any filters.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| callback | FetchAssetsCallback | Yes | — | The callback of type FetchAssetsCallback |

Returns:
Type
Query

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context, apiKey, deliveryToken, environment);
AssetLibrary assets = stack.assetLibrary()
assets.fetchAll(new FetchAssetsCallback({

});
```
