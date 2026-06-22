---
title: "Image | Device Pixel Ratio"
description: Use Image Delivery API endpoints for device pixel ratio operations, including retrieval and management workflows.
url: https://www.contentstack.com/docs/developers/apis/image-delivery-api/device-pixel-ratio
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# Image | Device Pixel Ratio

To implement the device pixel ratio functionality of the Image Delivery API, you require two parameters "dpr" and "height or width".

The dpr parameter lets you deliver images with appropriate size to devices that come with a defined device pixel ratio. The device pixel ratio of any device determines the screen resolution that its CSS would interpret. This ratio is the ratio between the physical pixels of the image and its logical pixels. 

For example, if the iPhone 6s has a device pixel ratio of 2, it means that the actual resolution is double the logical resolution. Different devices have different pixel ratios. This parameter, therefore, lets you render appropriately sized images to different devices. 

The value for this parameter could be a whole number (between 1 and 10000) or any decimal number (between 0.0 and 9999.9999...).

Along with the dpr parameter, you need to specify either the height or width parameter to dynamically resize the output image. If you only specify the height parameter, then the height parameter will automatically adjust the width of the image using the aspect ratio of the image. And if both the width and height parameters are specified, the given values will be used. Read more about [resizing images using the width and height parameters](/docs/developers/apis/image-delivery-api#resize-images).

The width or height of the output image changes depending on the values that you provide for dpr and height or width. For example, for a device pixel ratio of 2 and height 50, the height of the output image changes to 100.

## Related Pages

- [](https://www.contentstack.com/docs)
