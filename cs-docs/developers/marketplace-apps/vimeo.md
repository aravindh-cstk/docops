---
title: "[Marketplace guides and apps] - Vimeo App Installation Guide"
description: Vimeo App Installation Guide
url: https://www.contentstack.com/docs/marketplace/vimeo
product: Contentstack Marketplace
doc_type: marketplace-app-guide
audience:
  - developers
  - admins
version: v1
last_updated: 2026-03-26
---

# [Marketplace guides and apps] - Vimeo App Installation Guide

This page explains how to install and configure the Vimeo app from Contentstack Marketplace, retrieve the required Vimeo access token, and use the app inside Contentstack entries (via Custom fields or JSON Rich Text Editor). It is intended for Contentstack stack owners/admins and developers setting up Vimeo video selection within a stack.

## Vimeo App Installation Guide

Vimeo is a video-sharing platform that lets you upload, share, and view high-quality videos. It focuses on providing a creative community for filmmakers, artists, and professionals to showcase their work. Vimeo offers various tools and features to help creators manage and distribute content while maintaining a visually appealing and ad-free environment.

Contentstack Marketplace lets you install the Vimeo application and use it within your stack to fetch and display videos from the Vimeo account within your entries.

## Prerequisites
- [Vimeo account](https://vimeo.com/join)
- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization/Stack as the Owner/Admin

Let's follow this step-by-step guide to install and configure the Vimeo app within your stack.

## Steps for Execution
- [Retrieve the Access Token from the Vimeo Account](#retrieve-the-access-token-from-the-vimeo-account)
- [Install and Configure the Vimeo app in Contentstack Marketplace](#install-and-configure-the-vimeo-app-in-contentstack-marketplace)
- [Use the Vimeo app within your Stack Entry](#use-the-vimeo-app-within-your-stack-entry)

## Retrieve the Access Token from the Vimeo Account

To get the access token for Vimeo, follow the steps given below:

Log in to the [Vimeo account](https://vimeo.com/join) using your Vimeo account credentials.**Note**: To add videos to your Vimeo account, click the **Upload** button. Then, on the next screen, you can drag-and-drop the videos, or click the **Choose files** button, select the videos, and add them to your account.
- Now, go to Vimeo’s [developer](https://developer.vimeo.com/) page and click the **+ Create an app** button at the top right corner.
- Enter the **App name** and a **Brief description** of your app. Please note that these are mandatory fields. Then, choose who can access your app, accept the terms and conditions, and click **Create App**.  
  The app gets created successfully.
- Now, open your newly created app. Click the **Authentication** tab in the left navigation panel and select **Generate Access Token**.  
  To get the access token, select the **Authenticated (you)** option. Under the **Scopes** section, select **Private** and click the **Generate** button.

The access token is now generated. Copy the **Vimeo Access Token** to your clipboard to use in [Step 2](#install-and-configure-the-vimeo-app-in-contentstack-marketplace).

**Additional Resource**: To learn more about access tokens in Vimeo, refer to the [Generate an access token](https://developer.vimeo.com/api/guides/start#generate-access-token) documentation.

## Install and Configure the Vimeo app in Contentstack Marketplace

Follow the steps given below to install the application in Contentstack.

Log in to your [Contentstack account](https://www.contentstack.com/login/).
- In the left-hand side primary navigation, click the **Marketplace** icon to go to the Marketplace.
- Click **Apps** from the left panel.
- Within the Marketplace, you can see all the available apps. Hover over the **Vimeo** app and click **Install**.
- In the pop-up window, select the stack where you want to install the Vimeo app, accept the terms and conditions, and click the **Install** button.
- On the **Configuration** screen, enter the following details:  
  **Vimeo Access Token**: Enter the **Vimeo Access Token** retrieved from your Vimeo Account in [Step 1](#retrieve-the-access-token-from-the-vimeo-account).
- **Folder Settings**: Folder settings allows you to fetch videos directly from specific folders. To enable the Folder settings option, click the toggle button. You will see the **Get Folders** button. Click on it to fetch all folders and then select them in the dropdown.**Note**: Enabling the Folder settings will not impact the videos already stored in the entry.
- **Choose the Vimeo Keys to Save in Entry**: Choose how to save the data fetched from the Vimeo account in Contentstack entries.  
  If you select the **All Fields** option, you can select only a limited number of videos in the entry.
- For **Custom Fields**, you can search and add specific Vimeo Keys you want to save in entries.

**Warning**: When you change the settings from **All Fields** to **Custom Fields**, and vice versa, any existing assets will follow the old configuration settings, whereas newly added assets in the entry will store the data according to the updated configuration settings. This is applicable on Custom and JSON RTE fields.

If you select **Custom Fields** then the **Vimeo Keys** dropdown appears. By default, **uri**, **name**, **link**, **pictures.base_link**, and **description** options are already selected inside the dropdown. If you want to create a new key, click the **+ New Key Field** option.

In the **Add Key Path** modal, enter the **Vimeo Key Path** and click the **Create** or **Create and Apply** button to create a new key.
- On the **UI Locations** tab, you can see the predefined app locations. You can use the toggle button corresponding to each UI location to enable or disable it based on your requirements.
- Click the **Save** button.
- If the webhook is enabled for your app, you can view the webhook logs under the **Webhook** tab.**Additional Resource**: For more information on UI location and webhooks, please refer to the [Installed Apps](../marketplace-platform-guides/installed-apps.md#view-edit-configuration-ui-locations-and-webhook) guide.
- Click **Open Stack** to start using the Vimeo application.

## Use the Vimeo app within your Stack Entry

**Note**: Before using the Vimeo application, you will need the following browser settings:  
Pop-ups should be enabled.
- Third-party cookies should be enabled.

To use the Vimeo application within an entry of your stack, follow the steps given below:
- Go to your stack, click the **Content Models** icon in the left navigation panel, and click the **+ New Content Type** button.
- [Create a content type](../create-content-types/create-a-content-type.md) by adding relevant details as displayed below:

There are two ways to use the Vimeo application in your entry:
- [Custom Field](#steps-to-use-the-vimeo-application-using-a-custom-field)
- [JSON Rich Text Editor Field](#steps-to-use-the-vimeo-application-using-a-json-rich-text-editor-field)

### Steps to use the Vimeo application using a Custom field
- In the **Content Type Builder** page, add a [Custom](../create-content-types/custom.md) field in your content type by clicking the **Insert a field **link represented by a **+** sign.
- Under **Select Extension/App**, select **Vimeo**, and click the **Proceed** button.

Change the **Display Name** of the custom field to your choice, for example, **Vimeo Custom Field**. Optionally, you can add **Help Text** and **Instruction Value** for your custom field. This adds the Vimeo app in the custom field.
- After adding the app in a custom field, click **Save** or **Save and Close** to save your changes.
- To use the Vimeo app, create an entry for this newly created content type. To do this, in the left navigation panel, navigate to the **Entries** page, click **+ New Entry** to [create a new entry](../../content-managers/author-content/create-an-entry.md) for the above content type, and then click **Proceed**.  
  You can see the Vimeo app’s custom field on your entry page as shown below:
- Click the **+ Choose Video(s)** button.
- Select the video(s) from your Vimeo selector page and click the **Add Videos(s)** button to add them to your entry.

**Note**: You can add multiple videos in one go.

You can filter videos based on folders. By default, the folders configured at the time of installation in [Step 2](#install-and-configure-the-vimeo-app-in-contentstack-marketplace) are selected.  
You can search for videos on the Vimeo selector page.

Also, you can view the videos in a **Comfortable** or **Compact** view. By default, the **Comfortable** view is selected.  
Hover over the video on the Vimeo selector page. You will see the **Open in Vimeo** option to view the video directly in the Vimeo platform.

The videos you insert get referenced within your entry in the thumbnail view, by default.

To change the default view, select List from the drop-down menu as shown in the following screenshot:

The videos you insert get referenced within your entry in the list view.
- Hover over the video to access these features:  
  Click the **Reorder** icon to drag and reorder the video.
- Click the **Open in Vimeo** icon to open the video on the Vimeo platform.
- Click the **Remove** icon to remove the video.

**Thumbnail View**

**List View**
- After adding the video(s), **Save** and **Publish** your entry.

### Steps to use the Vimeo application using a JSON Rich Text Editor field:
- In the **Content Type Builder** page, add a [JSON Rich Text Editor](../json-rich-text-editor/about-json-rich-text-editor.md) field in your content type by clicking the **Insert a field** link represented by a **+** sign.
- Under **Select JSON RTE Plugin(s)**, select **Vimeo**, and then click **Add Plugin(s)**.

This adds Vimeo in the JSON Rich Text Editor field.
- After adding the app in a JSON Rich Text Editor field, click **Save** or **Save and Close** to save your changes.
- To use the Vimeo app as a JSON RTE plugin, create an entry for this content type. You will see the Vimeo app icon inside the JSON RTE field in your entry page as shown below:
- Click the **Vimeo** app icon.
- Select the video(s) from your Vimeo selector page and click the **Add Videos(s)** button to add them to your entry.

**Note**: You can add multiple videos in one go.

You can filter videos based on folders. By default, the folders configured at the time of installation in [Step 2](#install-and-configure-the-vimeo-app-in-contentstack-marketplace) are selected.

You can search for videos on the Vimeo selector page.  
Also, you can view the videos in a **Comfortable** or **Compact** view. By default, the **Comfortable** view is selected.  
Hover over the video on the Vimeo selector page, and you can see the **Open in Vimeo** option to go directly to the Vimeo platform.

The videos you selected get referenced within your entry:
- To resize the video, drag the corner and adjust the size as required. Hover over the video to access these features:  
  Click the **Open in Vimeo** icon to preview the video on the Vimeo platform.
- Click the **Edit** icon to edit the video.
- Click the **Remove** icon to remove the video.

**Additional Resource**: You can use alignment and inline asset features to edit the video placement within the [JSON Rich Text Editor](../json-rich-text-editor/about-json-rich-text-editor.md) field.
- After adding the video(s), **Save** and **Publish** your entry.

## Common questions

### Do I need to be a stack Owner/Admin to install the Vimeo app?
Yes, you need Access to the Contentstack Organization/Stack as the Owner/Admin.

### Where do I get the Vimeo Access Token used in the app configuration?
Copy the **Vimeo Access Token** after you select **Generate Access Token** in your Vimeo app’s **Authentication** tab.

### Can I use the Vimeo app in both Custom fields and JSON Rich Text Editor fields?
Yes, there are two ways to use the Vimeo application in your entry: **Custom Field** and **JSON Rich Text Editor Field**.

### What browser settings are required before using the Vimeo application?
Pop-ups should be enabled and Third-party cookies should be enabled.