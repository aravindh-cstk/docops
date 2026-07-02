---
title: "includeFallback()"
description: "The includeFallback() method includes fallback published content when the requested locale has no published content."
url: "https://www.contentstack.com/swift-asset-includefallback-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## includeFallback()

The `includeFallback()` method includes fallback published content when the requested locale has no published content.

No parameters.

Returns:
Type
Asset

The same Asset instance to enable chaining. The next fetch returns fallback locale content if the requested locale has none including `includeFallback()`.

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")
stack.asset(uid: "<ASSET_UID>").includeFallback()
```
