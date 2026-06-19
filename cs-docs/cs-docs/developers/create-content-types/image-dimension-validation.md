---
title: "[Set Up Your Project] - Image Dimension Validation"
description: Image Dimension Validation property for the File field to filter or validate uploaded image dimensions on the entry page.
url: https://www.contentstack.com/docs/headless-cms/image-dimension-validation
product: Documentation
doc_type: guide
audience:
  - developers
version: latest
last_updated: 2026-03-26
---

# [Set Up Your Project] - Image Dimension Validation

This page explains how to use the **Image Dimension Validation** property on the **File** field to validate uploaded image dimensions on entry pages. It is intended for developers configuring content types and should be used when you need to enforce minimum, maximum, range, or exact image width/height requirements.

## Image Dimension Validation

The **Image Dimension Validation** property of the [File](/docs/developers/create-content-types/file) field lets you set a filter or validation on the dimension of the images that users will upload on the [entry](/docs/content-managers/working-with-entries/about-entries) page.

**Note**: In order to use this property, select the [Allow Images Only](/docs/developers/create-content-types/allow-images-only) property.

You can set the minimum, maximum, min/max range, or exact height and/or width (in pixels) of the image that the user needs to upload. While any image file format can be uploaded using the **File** field, the dimension validation can be done only on a few image file formats. These formats are JPG, GIF, PNG, WebP, BMP, TIFF, SVG, and PSD.

Click on the **Width** or **Height** (or both) checkmarks in the **Image Dimension Validation** property and select **min**/**max**/**range**/**exact** from the dropdown.

For example, if you set the **Height** or **Width** (or both) to **min**, and enter 100px, then in the entry page the user will not be able to upload any image that is less than 100 pixels in height or width (or both). Similarly, if you set the **Height** or **Width** (or both) to **max** and enter 500px, then in the entry page the user will not be able to upload an image that has height or width (or both) more than 500px.

**Additional Resources**: To modify an image by tuning its various properties, you can check out our [Image Delivery API's](/docs/developers/apis/image-delivery-api) extensive documentation.

## Common questions

### Do I need to enable anything before using Image Dimension Validation?
Yes. **Note**: In order to use this property, select the [Allow Images Only](/docs/developers/create-content-types/allow-images-only) property.

### Which image formats support dimension validation?
The supported formats are JPG, GIF, PNG, WebP, BMP, TIFF, SVG, and PSD.

### Can I validate both width and height at the same time?
Yes. You can click on the **Width** or **Height** (or both) checkmarks in the **Image Dimension Validation** property and select **min**/**max**/**range**/**exact** from the dropdown.

### Where can I learn how to modify images after upload?
See **Additional Resources**: [Image Delivery API's](/docs/developers/apis/image-delivery-api) extensive documentation.