---
title: "getTags"
description: "The getTags method retrieves the array of tags associated with the asset in the response."
url: "https://www.contentstack.com/android-asset-gettags"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## getTags

The `getTags` method retrieves the array of tags associated with the asset in the response.

No parameters.

Returns:
Type
String[]

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context,"apiKey","deliveryToken","environment");
Asset asset = stack.asset("assetUid");
asset.getTags()
```
