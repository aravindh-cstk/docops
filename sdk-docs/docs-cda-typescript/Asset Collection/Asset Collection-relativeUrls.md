---
title: "relativeUrls"
description: "The relativeUrls method includes the relative URLs of all the assets in the result."
url: "https://www.contentstack.com/typescript-delivery-assetquery-relativeurls"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## relativeUrls

The relativeUrls method includes the relative URLs of all the assets in the result.

No parameters.

Returns:
Type
AssetQuery

**Example:**

```
const result = await stack.asset().relativeUrls().find<BlogAsset>();
```
