---
title: "addParam"
description: "The addParam method adds a query parameter to the asset request to filter the response."
url: "https://www.contentstack.com/android-asset-addparam"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## addParam

The `addParam` method adds a query parameter to the asset request to filter the response.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | Key of the header you want to add |
| value | String | Yes | — | Add value to the header against the header key |

Returns:
Type
Asset

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context,"apiKey","deliveryToken","environment");
Asset asset = stack.asset("assetUid");
asset.addParam();
```
