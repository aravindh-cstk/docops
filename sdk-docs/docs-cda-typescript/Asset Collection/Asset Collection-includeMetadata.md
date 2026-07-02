---
title: "includeMetadata"
description: "The includeMetadata method includes the metadata for getting metadata content for the entry."
url: "https://www.contentstack.com/typescript-delivery-assetquery-includemetadata"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## includeMetadata

The includeMetadata method includes the metadata for getting metadata content for the entry.

No parameters.

Returns:
Type
AssetQuery

**Example:**

```
const result = await stack.asset().includeMetadata().find<BlogAsset>();
```
