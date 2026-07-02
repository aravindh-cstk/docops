---
title: "sort"
description: "The sort method sorts the asset library based on order criteria."
url: "https://www.contentstack.com/android-assetlibrary-sort"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## sort

The `sort` method sorts the asset library based on order criteria.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| keyOrderBy | String | Yes | — | the key order by |
| orderby | ORDERBY | Yes | — | the orderby can be applied using ORDERBY enums |

Returns:
Type
AssetLibrary

```
import com.contentstack.sdk.*;

Stack stack = Contentstack.stack(context, apiKey, deliveryToken, environment);
AssetLibrary assets = stack.assetLibrary()
assets.sort(keyOrderBy, ORDERBY.ASCENDING);
```
