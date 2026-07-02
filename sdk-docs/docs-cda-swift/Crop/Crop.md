---
title: "Crop"
description: "The crop parameter allows you to remove pixels from an image."
url: "https://www.contentstack.com/developers/sdks/content-delivery-sdk/swift/reference/crop"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

# Crop

## Crop

The crop parameter allows you to remove pixels from an image.

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| default(width: UInt, height: UInt) | Crop | No | — | Crop by width and height. |
| aspectRatio(Size, ratio: String, mode: Mode = .none) | Crop | No | — | Crop by aspect ratio. |
| region(width: UInt, height: UInt, xRegion: Double, yRegion: Double, mode: Mode = .none) | Crop | No | — | Crop sub region. |
| offset(width: UInt, height: UInt, xOffset: Double, yOffset: Double, mode: Mode = .none) | Crop | No | — | Crop and offset. |
