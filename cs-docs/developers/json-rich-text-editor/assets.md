---
title: "[JSON RTE] - Assets"
description: Managing assets in the JSON Rich Text Editor (RTE), including choosing existing assets and uploading new assets.
url: https://www.contentstack.com/docs/headless-cms/assets
product: Contentstack
doc_type: guide
audience:
  - developers
  - content-authors
version: unknown
last_updated: 2026-03-25
---

# [JSON RTE] - Assets

This page explains how to manage assets in the JSON Rich Text Editor (RTE), including how to choose from existing assets and upload new assets. It is intended for users working in Contentstack entries that contain a JSON RTE field, and should be used when embedding assets into JSON RTE content.

## Assets

Managing assets is a core part of content creation within the JSON Rich Text Editor (RTE). This section will guide you on two key features:
- Choosing from Existing Assets
- Uploading New Assets

## Choosing from Existing Assets

The JSON RTE allows users to seamlessly select and embed assets that have already been uploaded to the Contentstack asset library.

To choose and embed existing assets within your JSON RTE, log in to your
[Contentstack account](https://www.contentstack.com/login/) and perform the steps given below:
- Navigate to the desired [stack](../set-up-stack/about-stack.md), then click the **Entries** icon in the left navigation panel.
- Create a new entry or open an existing one containing a JSON RTE field.
- In the **JSON RTE field**, click the **Asset** icon in the toolbar.
- From the dropdown menu, select **Choose from assets**.
- In the **Select Asset** modal that appears, browse through the available assets. Use the **search bar** to find assets quickly and select the desired asset.
- Choose the **Embed Type**:
  - **Block Embed**: Embeds the asset as a standalone block.
  - **Inline Embed**: Embeds the asset within a text flow.
- Click **Add Selected Asset** to embed it into the RTE.

**Note:** If an asset is deleted from the library later, any linked instances in the JSON output will become invalid.

## Uploading New Assets

When an asset is not available in the asset library, you can upload new ones directly via the JSON RTE.

To upload new assets within your JSON RTE, log in to your
[Contentstack account](https://www.contentstack.com/login/) and perform the steps given below:
- Navigate to the desired [stack](../set-up-stack/about-stack.md), then click the **Entries** icon in the left navigation panel.
- Create a new entry or open an existing one containing a JSON RTE field.
- In the **JSON RTE field**, click the **Asset** icon in the toolbar.
- From the dropdown menu, select **Upload new asset(s)**.
- In the **Upload Asset(s)** modal that appears, click the “+” icon to create a new folder, if needed.
- **Choose Files** from your system (supported formats: images, PDFs, videos, etc.).
- Choose the **Embed Type**:
  - **Block Embed**: Embeds the asset as a standalone block.
  - **Inline Embed**: Embeds the asset within a text flow.
- Click **Insert Uploaded Images** to embed the new asset in the JSON RTE.

## Best Practices for Asset Management

To streamline workflows and ensure optimal performance, follow these best practices:
- **Use Descriptive Metadata**: Name and tag assets properly to improve searchability within the library.
- **Optimize Images**: Use compressed images to enhance content load times and performance across platforms.
- **Keep Assets Organized**: Group assets into folders to ensure easy access and manageability.

Proper asset management helps streamline content workflows, enhances searchability, and ensures that your content renders correctly across all platforms.

## Common questions

### What happens if an embedded asset is deleted from the asset library?
**Note:** If an asset is deleted from the library later, any linked instances in the JSON output will become invalid.

### What is the difference between Block Embed and Inline Embed?
**Block Embed** embeds the asset as a standalone block, while **Inline Embed** embeds the asset within a text flow.

### Can I upload assets directly from the JSON RTE?
Yes. When an asset is not available in the asset library, you can upload new ones directly via the JSON RTE by selecting **Upload new asset(s)** from the **Asset** icon dropdown.

### Where do I manage and select assets from?
You can select assets that have already been uploaded to the Contentstack asset library using **Choose from assets** in the JSON RTE.