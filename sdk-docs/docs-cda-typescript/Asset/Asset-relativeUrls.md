---
title: "relativeUrls"
description: "The relativeUrls method includes the relative URLs of the asset in the result."
url: "https://www.contentstack.com/typescript-delivery-asset-relativeurls"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## relativeUrls

The relativeUrls method includes the relative URLs of the asset in the result.

No parameters.

Returns:
Type
Asset

**Example:**

```
const result = await stack.asset('asset_uid').relativeUrls().fetch<BlogAsset>();
```
