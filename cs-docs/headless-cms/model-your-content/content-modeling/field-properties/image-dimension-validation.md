---
title: "Image Dimension Validation"
description: "Image Dimension Validation of your fields"
url: /headless-cms/image-dimension-validation
uid: blt5cd7f4704c913132
---

# Image Dimension Validation

## Image Dimension Validation

The **Image Dimension Validation** property of the [File](/docs/headless-cms/file) field lets you set a filter or validation on the dimension of the images that users will upload on the [entry](/docs/headless-cms/about-entries) page.

**Note:** In order to use this property, select the [Allow Images Only](/docs/headless-cms/allow-images-only) property.

You can set the minimum, maximum, min/max range, or exact height and/or width (in pixels) of the image that the user needs to upload. While any image file format can be uploaded using the **File** field, the dimension validation can be done only on a few image file formats. These formats are JPG, GIF, PNG, WebP, BMP, TIFF, SVG, and PSD.

Click on the **Width** or **Height** (or both) checkmarks in the **Image Dimension Validation** property and select **min**/**max**/**range**/**exact** from the dropdown.

![Image_Dimension_Validation_1.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt90b75cb3b96dd224/66755b83a157a5b0f2b1da45/Image_Dimension_Validation_1.png)

For example, if you set the **Height** or **Width** (or both) to **min**, and enter 100px, then in the entry page the user will not be able to upload any image that is less than 100 pixels in height or width (or both). Similarly, if you set the **Height** or **Width** (or both) to **max** and enter 500px, then in the entry page the user will not be able to upload an image that has height or width (or both) more than 500px.

**Additional Resource:** To modify an image by tuning its various properties, you can check out our [Image Delivery API's](/docs/developers/apis/image-delivery-api) extensive documentation.
