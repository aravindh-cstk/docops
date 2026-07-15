---
title: "AssetQuery.Include"
description: "The AssetQuery.Include is parameter for including count, relative URLs, and dimensions in result."
url: "https://www.contentstack.com/developers/sdks/content-delivery-sdk/swift/reference/assetquery-include"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

# AssetQuery.Include

## AssetQuery.Include

The AssetQuery.Include is parameter for including count, relative URLs, and dimensions in result.

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| count | AssetQuery.Include | No | — | To include count in the response. |
| relativeURL | AssetQuery.Include | No | — | To include the relative URLs of the assets in the response. |
| dimension | AssetQuery.Include | No | — | To include the dimensions (height and width) of the image in the response. Supported image types: JPG, GIF, PNG, WebP, BMP, TIFF, SVG, and PSD. |
| fallback | AssetQuery.Include | No | — | Retrieve the published content of the fallback locale if an entry is not localized in specified locale. |
| all | AssetQuery.Include | No | — | To include all AssetQuery.Include values. |
