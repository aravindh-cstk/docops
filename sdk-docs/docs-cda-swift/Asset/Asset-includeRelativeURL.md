---
title: "includeRelativeURL()"
description: "The includeRelativeURL() method includes the relative URLs of the assets in the response instead of absolute URLs."
url: "https://www.contentstack.com/swift-asset-includerelativeurl-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## includeRelativeURL()

The `includeRelativeURL()` method includes the relative URLs of the assets in the response instead of absolute URLs.

No parameters.

Returns:
Type
Asset

The same Asset instance. The next fetch returns that asset with relative URLs including `includeRelativeURL()`.

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")
stack.asset(uid: "<ASSET_UID>").includeRelativeURL()
```
