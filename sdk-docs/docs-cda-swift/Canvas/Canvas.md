---
title: "Canvas"
description: "The canvas parameter allows you to increase the size of the canvas that surrounds an image."
url: "https://www.contentstack.com/developers/sdks/content-delivery-sdk/swift/reference/canvas"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

# Canvas

## Canvas

The canvas parameter allows you to increase the size of the canvas that surrounds an image.

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| default(width: UInt, height: UInt) | Canvas | No | — | Crop by width and height. |
| aspectRatio(Size, ratio: String) | Canvas | No | — | Crop by aspect ratio. |
| region(width: UInt, height: UInt, xRegion: Double, yRegion: Double) | Canvas | No | — | Crop sub region. |
| offset(width: UInt, height: UInt, xOffset: Double, yOffset: Double) | Canvas | No | — | Crop and offset. |
