---
title: "[Marketplace guides and apps] - Digizuite App Installation Guide"
description: Digizuite App Installation Guide
url: https://www.contentstack.com/docs/marketplace/digizuite
product: Contentstack
doc_type: marketplace-guide
audience:
  - developers
  - admins
version: unknown
last_updated: 2026-03-26
---

# [Marketplace guides and apps] - Digizuite App Installation Guide

This page explains how to install and configure the Digizuite app from the Contentstack Marketplace and then use it inside Contentstack entries. It is intended for Contentstack Organization/Stack Owners and Admins who need to connect Digizuite DAM assets to Contentstack content models and entries.

## Digizuite App Installation Guide

Digizuite is a comprehensive digital asset management (DAM) platform designed to help organizations centralize, organize, and efficiently manage digital content. It offers asset storage, metadata management, collaboration tools, and customizable workflows to streamline digital content processes and enable seamless access and distribution of digital assets across the organization.

Digizuite supports a wide range of file types, including common image, video, audio, document, and design file formats. It can handle popular file types such as JPG, PNG, GIF, MP4, MOV, MP3, PDF, DOCX, XLSX, PSD, and AI. This broad file-type support allows organizations to manage diverse digital assets within the Digizuite platform.

After installing the Digizuite app from the Contentstack Marketplace, you can use it within your stack to manage, store, and distribute the digital assets from the Digizuite account within your entries.

## Prerequisites

- [Digizuite account](https://www.digizuite.com/)
- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization/Stack as the [Owner](/docs/developers/organization/organization-roles#organization-owner)/[Admin](/docs/developers/organization/organization-roles#organization-admin)

Let's follow this step-by-step guide to install and configure the Digizuite app within your stack.

## Steps for Execution

- [Retrieve the Credentials for your Digizuite account](#retrieve-the-credentials-for-your-digizuite-account)
- [Install and Configure the Digizuite app in Marketplace](#install-and-configure-the-digizuite-app-in-marketplace)
- [Use the Digizuite app within your entry](#use-the-digizuite-app-within-your-entry)

## Retrieve the Credentials for your Digizuite account

Go to the Digizuite [website](https://www.digizuite.com/) and click the **BOOK A DEMO** button at the top right corner to book a demo with the Digizuite team.

During the demo call, the Digizuite team will learn about your configuration requirements. You will be provided with a **Unified Dam URL **and **Media Format ID** by the Digizuite team. You will also get the Digizuite username and password to log in to your Digizuite account for the first time when adding assets from the selector page in [step 3](#use-the-digizuite-app-within-your-entry).

If you have any queries, you can contact the Digizuite [Support](https://www.digizuite.com/get-in-touch) team.

## Install and Configure the Digizuite App in Marketplace

To install the app in Contentstack, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps below:

From the left-hand side primary navigation, click the **Marketplace** icon.

- Click **Apps** from the left panel.
- Within the Marketplace, you can see all the available apps. Hover over the **Digizuite** app and click **Install**.
- In the pop-up window, select the stack where you want to install the Digizuite app, accept the **Terms of Service**, and click the **Install** button.
- On the **Configuration** screen, enter the following:**Unified Dam URL**: Enter the **Unified Dam URL** retrieved from your Digizuite account in [step 1](#retrieve-the-credentials-for-your-digizuite-account).
- **Media Format ID**: Enter the **Media Format ID** retrieved from your Digizuite account in [step 1](#retrieve-the-credentials-for-your-digizuite-account). It must be a numeric value.
- **Choose the Digizuite Keys to Save in Entry**: Choose how to save the data fetched from the Digizuite account in Contentstack entries.If you select the **All Fields** option, you can select only a limited number of videos in the entry.
- For **Custom Fields**, you can search and add specific Vimeo Keys you want to save in entries.**Note**: When you change the settings from **All Fields** to **Custom Fields**, and vice versa, any existing assets will follow the old configuration settings, whereas newly added assets in the entry will store the data according to the updated configuration settings. This is applicable to Custom and JSON RTE fields.

If you select **Custom Fields** then the **Digizuite Keys** drop-down appears. By default, **title**, **itemId**, **thumb**, **downloadUrl**, and **assetType** keys are already selected inside the dropdown. If you want to create a new key, click the **+ New Key Field** option.

In the **Add Digizuite Key Path** modal, enter the **Digizuite Key Path** and click the **Create** or **Create and Apply** button to create a new key.

- Click the **Save** button.
- On the **UI Locations** tab, you can see the predefined app locations. You can use the toggle button corresponding to each UI location to enable or disable it based on your requirements.**Additional Resource**: For more information on UI locations, please refer to the Installed Apps guide.
- Click **Open Stack** to start using the Digizuite application.

## Use the Digizuite App within your Entry

To use the Digizuite app within an entry of your stack, follow the steps given below:

Go to your stack, click the **Content Models** icon from the left navigation panel, and click the **+ New Content Type** button.

- [Create a content type](/docs/developers/create-content-types/create-a-content-type) by adding relevant details as displayed below:

There are two ways to use the Digizuite app in your entry:

- [Custom Field](#steps-to-use-the-digizuite-app-as-a-custom-field)
- [JSON Rich Text Editor Field](#steps-to-use-the-digizuite-app-in-a-json-rich-text-editor-field)

### Steps to Use the Digizuite App in a Custom Field

- In the **Content Type Builder** page, add a [Custom](/docs/developers/create-content-types/custom/) field in your content type by clicking the **Insert a field** link represented by a **+** sign.
- Under **Select Extension or App**, select **Digizuite** and click the **Proceed** button.This adds Digizuite to the custom field.
- After adding the app in a custom field, click **Save** or **Save and Close** to save your changes.
- To use the Digizuite app, create an entry in this newly created content type. In the left navigation panel, navigate to the **Entries** page, click **+ New Entry** to create a new entry for the above content type, and then click **Proceed**.You can see the Digizuite app’s custom fields on your entry page, as shown below:
- Click **+ Choose Asset(s)** button.**Note**: If you are using the Digizuite app for the first time, the app will redirect you to the Digizuite login page after clicking the **+ Choose Asset(s)** button. You need to authenticate the credentials.
- Now, you can choose assets from the Digizuite selector page:To add a single asset, you can hover over the asset and click the **Place** icon to add the asset in the custom field.
- To add multiple assets, select the required assets from your Digizuite account, click the **Selected** dropdown, and then select the **Multi Insert** option to add them to your entry.
- In the **Insert rendition** modal, confirm the final version and click **Insert** to add assets in the entry.
- Also, you can view all the selected assets by clicking the **Selected** dropdown, and then select the **Show Selection** option.
- The assets you select get added to your entry in the thumbnail view.To view the assets in the list view, select the **List** view option from the dropdown.

The assets you select get added to your entry in the list view.

- Hover over the image to view the options to reorder, preview, and remove the asset.Click the **Reorder** icon to drag and reorder the asset.
- Click the **Preview** icon to preview the asset.
- Click the **Remove** icon to remove the asset.

**Thumbnail View**

**List View**

- After adding the asset(s), **Save** and **Publish** your entry.

### Steps to Use the Digizuite App in a JSON Rich Text Editor Field

- In the **Content Type Builder** page, add [JSON Rich Text Editor](/docs/developers/json-rich-text-editor/about-json-rich-text-editor/) in your content type by clicking the **Insert a field** link represented by a **+** sign.
- Under **Select Plugin(s)**, select **Digizuite**, and then click **Add Plugin(s)**.This adds Digizuite in the JSON Rich Text Editor.
- After adding the app in a JSON Rich Text Editor field, click **Save** or **Save and Close** to save your changes.
- To use the Digizuite app, create an entry for this content type. In the left navigation panel, navigate to the **Entries** page, click **+ New Entry** to create a new entry for the above content type, and then click **Proceed**.You can see the Digizuite icon in the JSON Rich Text Editor field on your entry page, as shown below:
- Click the **Digizuite** app icon.**Note**: If you are using the Digizuite app for the first time, the app will redirect you to the Digizuite login page after clicking the **+ Choose Asset(s)** button. You need to authenticate the credentials.
- Now, you can choose assets from the Digizuite selector page:To add a single asset, you can hover over the asset and click the **Place** icon to add the asset in the custom field.
- To add multiple assets, select the required assets from your Digizuite account, click the **Selected** dropdown, and then select the **Multi Insert** option to add them to your entry.
- In the **Insert rendition** modal, confirm the final version and click **Insert** to add assets in the entry.
- Also, you can view all the selected assets by clicking the **Selected** dropdown, and then select the **Show Selection** option.
- The assets you select get added to your entry.
- To resize the image, drag the corner of the image and adjust the size as required. Hover over the image to view the options to **Preview**, **Edit**, and **Remove** the asset.**Additional Resource**: You can use alignment and inline asset features to edit the asset placement within the [JSON Rich Text Editor](/docs/developers/json-rich-text-editor/about-json-rich-text-editor/) field.
- After adding the asset(s), **Save** and **Publish** your entry.

## Common questions

### What do I need from Digizuite to configure the app in Contentstack?
You will be provided with a **Unified Dam URL **and **Media Format ID** by the Digizuite team.

### Which Contentstack roles can install and configure the Digizuite app?
Access to the Contentstack Organization/Stack as the [Owner](/docs/developers/organization/organization-roles#organization-owner)/[Admin](/docs/developers/organization/organization-roles#organization-admin)

### Where can I use the Digizuite app inside Contentstack entries?
There are two ways to use the Digizuite app in your entry:
- [Custom Field](#steps-to-use-the-digizuite-app-as-a-custom-field)
- [JSON Rich Text Editor Field](#steps-to-use-the-digizuite-app-in-a-json-rich-text-editor-field)

### What happens if I change the setting between All Fields and Custom Fields?
When you change the settings from **All Fields** to **Custom Fields**, and vice versa, any existing assets will follow the old configuration settings, whereas newly added assets in the entry will store the data according to the updated configuration settings. This is applicable to Custom and JSON RTE fields.