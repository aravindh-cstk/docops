---
title: "includeMetadata"
description: "The includeMetadata method includes the metadata for getting metadata content for the entry."
url: "https://www.contentstack.com/typescript-delivery-asset-includemetadata"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeMetadata

The includeMetadata method includes the metadata for getting metadata content for the entry.

No parameters.

Returns:
Type
Asset

**Example:**

```
const result = await stack.asset('asset_uid').includeMetadata().fetch();
```
