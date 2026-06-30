---
title: "Asset Collection"
description: "The Asset Collection provides methods for filtering and retrieving assets stored in Contentstack. You can retrieve specific assets by UID, tags, or metadata. Example: const result = stack.asset().find<BlogAsset>() .then((assets) => console.log(assets)) .catch((error) => console.error(\"Error fetching assets:\", error));"
url: "https://www.contentstack.com/developers/sdks/content-delivery-sdk/typescript/reference/asset-collection"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

# Asset Collection

## Asset Collection

The Asset Collection provides methods for filtering and retrieving assets stored in Contentstack. You can retrieve specific assets by UID, tags, or metadata.

**Example:**

```
const result = stack.asset().find<BlogAsset>()
  .then((assets) => console.log(assets))
  .catch((error) => console.error("Error fetching assets:", error));
```
