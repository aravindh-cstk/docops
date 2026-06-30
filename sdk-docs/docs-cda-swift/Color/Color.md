---
title: "Color"
description: "The bg-color parameter lets you set a backgroud color for the given image."
url: "https://www.contentstack.com/developers/sdks/content-delivery-sdk/swift/reference/color"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

# Color

## Color

The bg-color parameter lets you set a backgroud color for the given image.

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| hex(String) | Color | No | — | Hexadecimal value should be 3-digit or 6-digit. |
| rgb(red: UInt, green: UInt, blue: UInt) | Color | No | — | Red, Blue, Green value which defines the intensity of the corresponding color, with the value ranging anywhere between 0 and 255 for each. |
| rgba(red: UInt, green: UInt, blue: UInt, alpha: Double) | Color | No | — | Red, Blue, Green value which defines the intensity of the corresponding color, with the value ranging anywhere between 0 and 255 for each. The alpha value defines the transparency, with 0.0 being fully transparent and 1.0 being completely opaque. |
