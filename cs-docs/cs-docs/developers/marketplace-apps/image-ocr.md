---
title: "[Marketplace guides and apps] - Image OCR App Installation Guide"
description: Image OCR App Installation Guide
url: https://www.contentstack.com/docs/marketplace/image-ocr
product: Contentstack
doc_type: marketplace-guide
audience:
  - developers
  - admins
version: current
last_updated: 2026-03-26
---

# [Marketplace guides and apps] - Image OCR App Installation Guide

This page explains how to install and use the Contentstack Marketplace Image OCR app to extract text and colors from images and save the results to asset metadata. It is intended for Contentstack stack Owners/Admins and developers who manage Marketplace apps and work with assets. Use it when you want to install the app in a stack and run OCR extraction from the Asset Sidebar Widget.

## Image OCR App Installation Guide

Image OCR (Optical Character Recognition) allows you to extract text and colors from images. The extracted text can then be used in your website or application. The Image OCR app supports the JPEG, JPG, PNG, and SVG image formats. It can be used for applications such as automatic digitization of images, form processing, handwriting recognition, and automated translation.

With the Contentstack Marketplace Image OCR app, you can extract text and color codes with their percentages, and save them in the [asset metadata](/docs/content-managers/working-with-assets/additional-metadata-support-for-assets/) within the [Asset Sidebar Widget](/docs/developers/create-asset-sidebar-extensions/about-asset-sidebar-extensions/).

**Note**: Image OCR app does not support GIF, TIFF, PDF, JSON, and XML file formats.

## Prerequisites

- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization/Stack as the Owner/Admin

Let's follow this step-by-step guide to install and configure the Image OCR app within your stack.

## Steps for Execution

- [Install and Configure the Image OCR app in Contentstack Marketplace](#install-and-configure-the-image-ocr-app-in-contentstack-marketplace)
- [Use the Image OCR app within your Stack Entry](#use-the-image-ocr-app-within-your-stack-entry)

## Install and Configure the Image OCR app in Contentstack Marketplace

Follow the steps to install the application in Contentstack.

Log in to your [Contentstack account](https://www.contentstack.com/login/).

- In the left-hand side primary navigation, click the **Marketplace** icon to go to the Marketplace.
- Click **Apps** from the left panel.
- Within the Marketplace, you can see all the available apps. Hover over the **Image OCR** app and click **Install App**.
- In the popup window, select the stack where you want to install the Image OCR app, accept the terms and conditions, and click the **Install** button.

**Note**: No additional configuration is required to use the Image OCR app.

## Use the Image OCR app within your Stack Entry

To use the Image OCR app within your stack, follow the steps given below:

Go to your stack dashboard and click the **Assets** icon from the left navigation panel. You can [add a new image](/docs/content-managers/author-content/create-upload-assets) file or use an existing one.

- To upload a new asset, click **+ New Asset**. The **Upload Asset(s)** modal opens. You can upload new assets by clicking the **Choose files** button.

This adds the asset successfully.

- Now open the newly added image and click the **Widgets** icon from the right navigation panel.
- Select the **Image OCR** app from the dropdown.
- Now, click the **Extract Text And Colors** button to extract text and color codes, and color ratio from the image.

You can see the extracted **Text** in the Text field.

Scroll down to view the **Color** palette. It contains  the hexadecimal code for the colors and percentages.

- Click **Save Data** to store the extracted details in the asset metadata.
- To delete the asset metadata, click the **Delete Data** button. After deleting, the user is redirected to the **Extract Text and Colors** screen.
- If you want to make any changes in the text, update it and click the **Save Changes** button to store the updated text in the asset metadata.

When you open the asset next time, you can see the updated information in the widget.

**Additional Resource**: You can fetch the saved asset metadata using the Contentstack Delivery API. Please refer to the [Get a Single Asset](/docs/developers/apis/content-delivery-api/#get-a-single-asset) API documentation.

## Common questions

### Does the Image OCR app require configuration after installation?
**Note**: No additional configuration is required to use the Image OCR app.

### Which image formats are supported by the Image OCR app?
The Image OCR app supports the JPEG, JPG, PNG, and SVG image formats.

### Where does the Image OCR app save extracted text and colors?
It can save them in the [asset metadata](/docs/content-managers/working-with-assets/additional-metadata-support-for-assets/) within the [Asset Sidebar Widget](/docs/developers/create-asset-sidebar-extensions/about-asset-sidebar-extensions/).

### How can I fetch the saved asset metadata?
You can fetch the saved asset metadata using the Contentstack Delivery API. Please refer to the [Get a Single Asset](/docs/developers/apis/content-delivery-api/#get-a-single-asset) API documentation.