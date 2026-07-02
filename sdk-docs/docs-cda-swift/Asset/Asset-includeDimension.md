---
title: "includeDimension()"
description: "The includeDimension() method includes the image's dimensions (height and width) in the response. Supported image types: JPG, GIF, PNG, WebP, BMP, TIFF, SVG, PSD. Note: For non-image asset types (e.g., PDF, ZIP, video, or audio), the API may omit dimension data or return null. In these cases, the SDK does not throw an error; the dimension property on the AssetModel remains available but is set to nil . It is recommended to verify asset.dimension != nil before accessing width or height properties to avoid processing errors."
url: "https://www.contentstack.com/swift-asset-includedimension-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## includeDimension()

The `includeDimension()` method includes the image's dimensions (height and width) in the response.

**Supported image types:** JPG, GIF, PNG, WebP, BMP, TIFF, SVG, PSD.

**Note:** For non-image asset types (e.g., PDF, ZIP, video, or audio), the API may omit dimension data or return null. In these cases, the SDK does not throw an error; the `dimension` property on the `AssetModel` remains available but is set to `nil`. It is recommended to verify `asset.dimension != nil` before accessing width or height properties to avoid processing errors.

No parameters.

Returns:
Type
Asset

Returns the asset instance with image dimensions (width and height) using `includeDimension()`.

```
let stack = Contentstack.stack(apiKey: "<API_KEY>", deliveryToken: "<DELIVERY_TOKEN>", environment: "<ENVIRNOMENT>")
stack.asset(uid: "<ASSET_UID>").includeDimension()
```
