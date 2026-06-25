---
title: "[Extensions] - Create a New Asset Sidebar Extension"
description: Create a New Asset Sidebar Extension
url: https://www.contentstack.com/docs/developers/create-asset-sidebar-extensions/create-a-new-asset-sidebar-extension
product: Contentstack
doc_type: how-to
audience:
  - developers
version: legacy-extensions
last_updated: 2026-03-25
---

# [Extensions] - Create a New Asset Sidebar Extension

This page explains how to create an Asset Sidebar Extension in Contentstack using the legacy extensions approach. It is intended for developers who need to enhance asset management workflows in a stack and should be used when setting up or configuring an Asset Sidebar Extension from the Contentstack UI.

## Create a New Asset Sidebar Extension

**Note**: Experience Extensions use the legacy approach with extensions. We recommend using the [Asset Sidebar UI Location](../developer-hub/asset-sidebar-location.md) for the Contentstack App Framework to extend the functionality of your apps.

Contentstack allows you to create an Asset Sidebar Extension that enhances the way you manage, transform, and optimize the [assets](https://www.contentstack.com/docs/content-managers/working-with-assets/about-assets/) in your [stack](../set-up-stack/about-stack.md).

To create an Asset Sidebar Extension, log in to your [Contentstack account](https://app.contentstack.com/#!/login), and perform the following steps:
- Navigate to your [stack](../set-up-stack/about-stack.md) and click on the “Settings” icon on the left navigation panel.
- Click on **Extensions** under **Setttings**.
- On the **Extensions **page, click on the **+ New Extension** button, and select **Create new**.
- In the **Select Extension Type** window, select **Asset Sidebar Extension**.
- In the **Create New Extension** page, enter values in the fields as given below:
      **Title**: Provide a suitable title for your Asset Sidebar Extension. This title will be visible as an Asset Sidebar Extension name in the asset details page.
- **SideBar Width**: Enter a width for your Asset Sidebar Extension in pixels.

        **Note:** The Asset Sidebar Extension width can range from 335 pixels to 1024 pixels.
- **Blur Asset Details**: Enable this option to blur the asset details by default.
- **Hosting method**: Select how you want to host the Asset Sidebar Extension :
          **External Hosting**: Select this option for externally hosted Asset Sidebar Extension. You need to provide the URL in the **External hosting URL** field that appears below.
- **Hosted on Contentstack**: Select this option if you can write the code in the **Extension source code** field that appears below.
- **Config Parameter**: If you have used any config parameters (such as [access token](../create-tokens/types-of-tokens.md#access-tokens)) in the source code, specify the value of the parameters in this field.
- Finally, click on **Save**.

Once you create an extension, Contentstack automatically generates a unique ID, as shown over the extension page.

After creation, you can use the Asset Sidebar Extension by accessing it from the sidebar panel.

## API Reference

Here are the links to the API requests related to this action performed on asset sidebar extensions:
- [Get all asset sidebar extensions](../../../api-docs/api-detail/content-management-api.md#get-all-asset-sidebar-extensions)
- [Get a single asset sidebar extension](../../../api-docs/api-detail/content-management-api.md#get-a-single-asset-sidebar-extension)
- [Create an asset sidebar extension with source URL](../../../api-docs/api-detail/content-management-api.md#create-an-asset-sidebar-extension-with-source-url)
- [Update an asset sidebar extension](../../../api-docs/api-detail/content-management-api.md#update-an-asset-sidebar-extension)
- [Delete asset sidebar extension](../../../api-docs/api-detail/content-management-api.md#delete-asset-sidebar-extension)

## Common questions

### Should I use legacy extensions or the Contentstack App Framework for new development?
The page notes that Experience Extensions use the legacy approach with extensions and recommends using the [Asset Sidebar UI Location](../developer-hub/asset-sidebar-location.md) for the Contentstack App Framework.

### What is the allowed width range for an Asset Sidebar Extension?
**Note:** The Asset Sidebar Extension width can range from 335 pixels to 1024 pixels.

### What hosting options are available for an Asset Sidebar Extension?
You can choose **External Hosting** (provide the URL in the **External hosting URL** field) or **Hosted on Contentstack** (write the code in the **Extension source code** field).

### Where do I access the Asset Sidebar Extension after creating it?
After creation, you can use the Asset Sidebar Extension by accessing it from the sidebar panel.

<!-- filename: extensions-create-a-new-asset-sidebar-extension.md -->