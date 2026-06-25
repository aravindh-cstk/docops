---
title: "[Marketplace guides and apps] - Egnyte App Installation Guide"
description: Egnyte App Installation Guide
url: https://www.contentstack.com/docs/marketplace/egnyte
product: Contentstack Marketplace
doc_type: marketplace-guide
audience:
  - developers
  - admins
version: v1
last_updated: 2026-03-26
---

# [Marketplace guides and apps] - Egnyte App Installation Guide

This page explains how to install and configure the Egnyte app from the Contentstack Marketplace and then use it inside stack entries. It is intended for Contentstack Organization/Stack Owners/Admins and developers who need to fetch and display Egnyte assets within Contentstack content types and entries.

## Egnyte App Installation Guide

Egnyte is a cloud-based content security and collaboration platform designed for businesses. It offers secure file sharing, data protection, and infrastructure modernization capabilities, enabling users to access, store, and collaborate on files from any device.

Egnyte supports many file types, encompassing documents, images, videos, audio files, and more. This includes popular formats such as PDF, DOCX, PPTX, XLSX, JPEG, PNG, MP4, MP3, and others, making it versatile for various business needs.

The Contentstack Marketplace lets you install the Egnyte app and use it within your stack to fetch and display images, graphics, videos, and text files from the Egnyte account within your entries.

## Prerequisites

- [Egnyte Developer account](https://developers.egnyte.com/)
- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization/Stack as the Owner/Admin

Let's follow this step-by-step guide to install and configure Egnyte within your stack.

## Steps for Execution

- [Retrieve Domain URL and API key for Egnyte account](#retrieve-domain-url-and-api-key-for-egnyte-account)
- [Install and Configure Egnyte in Contentstack Marketplace](#install-and-configure-egnyte-in-contentstack-marketplace)
- [Use Egnyte within your Stack Entry](#use-egnyte-within-your-stack-entry)

## Retrieve Domain URL and API key for Egnyte account

To get your configuration details for Egnyte, follow the steps given below:

To get the **Domain URL** for app configuration in [step 2](#install-and-configure-egnyte-in-contentstack-marketplace), refer to the [Custom URLs](https://helpdesk.egnyte.com/hc/en-us/articles/360026439952-Custom-URLs#h_66be3b8b-da37-47ca-8fc7-063916218914) webpage. You can register the domain while creating the app.

- To get the **API Key**, log in to the [Egnyte Developer account](https://developers.egnyte.com/) using your Egnyte account credentials.
- Click **Get API Key** on the dashboard.
- You can copy the Egnyte API **Key** to the clipboard to use in [step 2](#install-and-configure-egnyte-in-contentstack-marketplace).

**Note**: The status of the API Key should be **active** for a successful configuration. Please contact the [Egnyte support](https://developers.egnyte.com/contact) team if the API key is in a waiting or inactive state.

## Install and Configure Egnyte in Contentstack Marketplace

Follow the steps given below to install the Egnyte app in Contentstack.

Log in to your [Contentstack account](https://www.contentstack.com/login/).

- In the left-hand side primary navigation, click the **Marketplace** icon to go to the Marketplace.
- Click **Apps** from the left panel.
- Within the Marketplace, you can see all the available apps. Hover over the **Egnyte** app and click **Install**.
- In the pop-up window, select the stack where you want to install the Egnyte app, accept the terms of service, and click the **Install** button.
- On the **Configuration** screen, enter the **Domain URL** and Egnyte **API Key** retrieved from your Egnyte account in [step 1](#retrieve-domain-url-and-api-key-for-egnyte-account).If you select **Custom Fields** then the **Egnyte Keys** drop-down appears. By default, **entry_id**, **path**, **name**, and **link.url** keys are already selected inside the dropdown. If you want to create a new key, click the **+ New Key Field** option.  
  In the **Add Egnyte Key Path** modal, enter the **Egnyte Key Path** and click the **Create** or **Create and Apply** button to create a new key.
- Click the **Save** button.
- On the **UI Locations** tab, you can see the predefined app locations. You can use the toggle button corresponding to each UI location to enable or disable it based on your requirements.  
  **Additional Resource**: For more information on UI locations, please refer to the [Installed Apps](../marketplace-platform-guides/installed-apps.md#view-edit-configuration-ui-locations-and-webhook) guide.
- Click **Open Stack** to start using the Egnyte application.

## Use Egnyte within your Stack Entry

To use the Egnyte app within an entry of your stack, follow the steps given below:

Go to your stack, click the **Content Models** icon in the left navigation panel, and click the **+ New Content Type** button.

- Create a content type by adding relevant details as displayed below:
- There are two ways to use the Egnyte app in your entry:
  - [Custom Field](#steps-to-use-the-egnyte-app-as-a-custom-field)
  - [JSON Rich Text Editor Field](#steps-to-use-the-egnyte-app-in-a-json-rich-text-editor-field)

### Steps to Use the Egnyte App as a Custom Field

- In the **Content Type Builder** page, add a [Custom](../create-content-types/custom.md) field in your content type by clicking the **Insert a field** link represented by a **+** sign.
- Under **Select Extension/App**, select **Egnyte** and click the **Proceed** button.  
  This adds Egnyte in the custom field.
- After adding the app in a custom field, click **Save** or **Save and Close** to save your changes.
- Now to use the Egnyte app, create an entry in this newly created content type. In the left navigation panel, navigate to the **Entries** page, click **+ New Entry** to create a new entry for the above content type, and then click **Proceed**.  
  You can see the Egnyte app’s custom fields on your entry page as shown below:
- Click **+ Choose Asset(s)** button.  
  **Note**: If you are using the Egnyte app for the first time, the app will redirect you to the Egnyte login page after clicking the **+ Choose Asset(s)** button. You need to authenticate the credentials and allow access to the Egnyte assets by clicking the **Allow Access** button.
- Choose the required assets from your Egnyte account and click **OK** to add them to your entry.  
  The assets you select get added to your entry in the thumbnail view.

  To view the assets in the list view, select the **List** view option from the dropdown.

  The assets you select get added to your entry in the list view.
- Hover over the image to view the options to reorder, preview, and remove the asset.  
  Click the **Reorder** icon to drag and reorder the asset.
- Click the **Open in Egnyte** icon to open the file in the Egnyte app.
- Click the **Remove** icon to delete the asset.

  **Thumbnail View**

  **List View**
- After adding the asset(s), **Save** and **Publish** your entry.

### Steps to Use the Egnyte App in a JSON Rich Text Editor Field

- In the **Content Type Builder** page, add a [JSON Rich Text Editor](../json-rich-text-editor/about-json-rich-text-editor.md) field in your content type by clicking the **Insert a field** link represented by a **+** sign.
- Under **Select Extension/App**, select **Egnyte** and click the **Proceed** button.  
  This adds Egnyte in the custom field.
- After adding the app in a JSON Rich Text Editor field, click **Save** or **Save and Close** to save your changes.
- Now to use the Egnyte app, create an entry in this newly created content type. In the left navigation panel, navigate to the **Entries** page, click **+ New Entry** to create a new entry for the above content type, and then click **Proceed**.  
  You can see the Egnyte icon in the JSON Rich Text Editor field on your entry page as shown below:
- Click the **Egnyte** app icon.  
  **Note**: If you are using the Egnyte app for the first time, the app will redirect you to the Egnyte login page after clicking the app icon. You need to authenticate the credentials and allow access to the Egnyte assets by clicking the **Allow Access** button.
- Choose the assets from your Egnyte account and click **OK** to add them to your entry.  
  The assets you select get added to your entry.
- To resize the image, drag the corner of the image and adjust the size as required. Hover over the image to view the options to edit and remove the asset.  
  **Additional Resource**: You can use alignment and inline asset features to edit the asset placement within the [JSON Rich Text Editor](../json-rich-text-editor/about-json-rich-text-editor.md) field.
- After adding the asset(s), **Save** and **Publish** your entry.

## Common questions

**Q: What do I need before installing the Egnyte app in Contentstack?**  
A: You need an [Egnyte Developer account](https://developers.egnyte.com/), a [Contentstack account](https://www.contentstack.com/login/), and Owner/Admin access to the Contentstack Organization/Stack.

**Q: Which Egnyte details are required during configuration in the Marketplace?**  
A: You need the **Domain URL** and the Egnyte **API Key** retrieved from your Egnyte account.

**Q: What should I check if the Egnyte app configuration fails?**  
A: Verify that the API Key status is **active**; if it is waiting or inactive, contact [Egnyte support](https://developers.egnyte.com/contact).

**Q: Where can I use the Egnyte app inside Contentstack entries?**  
A: You can use it as a **Custom Field** or inside a **JSON Rich Text Editor** field.