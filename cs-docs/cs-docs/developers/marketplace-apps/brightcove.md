---
title: "[Marketplace guides and apps] - Brightcove App Installation Guide"
description: Brightcove App Installation Guide
url: https://www.contentstack.com/docs/developers/marketplace-apps/brightcove
product: Contentstack Marketplace
doc_type: marketplace-app-guide
audience:
  - developers
  - admins
version: v1
last_updated: 2026-03-25
---

# [Marketplace guides and apps] - Brightcove App Installation Guide

This page explains how to install and configure the Brightcove app from the Contentstack Marketplace and then use it inside entries (as a Custom Field or JSON Rich Text Editor plugin). It is intended for Contentstack stack owners/admins and developers setting up Brightcove video selection and embedding workflows.

## Brightcove App Installation Guide

The Brightcove platform is a cloud-based solution for online video streaming, which facilitates the hosting, sharing, and streaming of video content by organizations. Marketers and creatives can utilize the platform to efficiently organize, control, create, distribute, and measure all their video assets, with the added benefits of scalability, reliability, and security.

Contentstack Marketplace lets you install the Brightcove app and use it within your stack to fetch and display videos from the Brightcove account within your entries.

## Prerequisites

- [Brightcove account](https://signin.brightcove.com/)
- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization/Stack as the Owner/Admin

Let's follow this step-by-step guide to install and configure Brightcove within your stack.

## Steps for Execution

- [Retrieve the Credentials for your Brightcove account](#retrieve-the-credentials-for-your-brightcove-account)
- [Install and Configure the Brightcove app in Marketplace](#install-and-configure-the-brightcove-app-in-marketplace)
- [Use the Brightcove app within your Entry](#use-the-brightcove-app-within-your-entry)

## Retrieve the Credentials for Your Brightcove Account

To get your configuration details for Brightcove, follow the steps given below:

Log in to the [Brightcove account](https://signin.brightcove.com/) using your Brightcove credentials.

- Click the **Admin** settings icon, as shown in the screenshot, to get the account information.
- Copy the **Account ID** from the **Account Information** section to use this in [step 2](#install-and-configure-the-brightcove-app-in-marketplace) during app configuration.
- Go to the **API Authentication** section and click the **+ Add application** button.
- Enter the **Name** and **Description**, and then select the required accounts from **Select Accounts for Authorization**.
- Scroll down to the **Exposed Brightcove APIs** section. Under **CMS** options, mark **Video Read**, and then click **Save**.
- Copy the **Client ID** and **Client Secret** for use in [step 2](#install-and-configure-the-brightcove-app-in-marketplace), then click **Okay, I copied it** to close the dialog box.

## Install and Configure the Brightcove App in Marketplace

To install the app in Contentstack, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps below:

In the left-hand side primary navigation, click the **Marketplace** icon.

- Click **Apps** from the left panel.
- Within the Marketplace, you can see the available apps. Hover over the **Brightcove** app and click **Install**.
- In the pop-up window, select the stack where you want to install the Brightcove app, accept the **Terms of Service**, and click the **Install** button.
- On the **Configuration** screen, enter the following details:**Brightcove Credentials**: Enter the **Brightcove Account ID**, **Brightcove Client ID**, and **Brightcove Client Secret** retrieved from your Brightcove Account in [step 1](#retrieve-the-credentials-for-your-brightcove-account).
- **Choose the Brightcove Keys to Save in Entry**: Choose how to save the data fetched from the Brightcove account in Contentstack entries.If you select the **All Fields** option, you can select only a limited number of assets in the entry.
- For **Custom Fields**, you can search and add specific **Brightcove Keys** you want to save in entries. By default, the **id** and **name** of the assets are selected.
- Click the **Save** button.
- On the **UI Locations** tab, you can see the predefined app locations. You can use the toggle button corresponding to each UI location to enable or disable it based on your requirements.**Note**: The app requires at least one UI location to be enabled, otherwise you will not be able to save your app configuration settings.
- If the webhook is enabled for your app, you can view the webhook logs under the **Webhook** tab.**Additional Resource**: For more information on UI location and webhooks, please refer to the [Installed Apps](/docs/developers/marketplace-platform-guides/installed-apps#view-edit-configuration-ui-locations-and-webhook) guide.
- Click **Open Stack** to start using the Brightcove app.

## Use the Brightcove App Within Your Entry

To use the Brightcove app within an entry of your stack, follow the steps given below:

Go to your stack, click the **Content Models** icon in the left navigation panel, and click the **+ New Content Type** button.

- [Create a content type](/docs/developers/create-content-types/create-a-content-type) by adding relevant details as displayed below:
- There are two ways to use the Brightcove app in your entry:
  - [Custom Field](#steps-to-use-the-brightcove-app-using-a-custom-field)
  - [JSON Rich Text Editor Field](#steps-to-use-the-brightcove-app-using-a-json-rich-text-editor-field)

### Steps to Use the Brightcove App as a Custom Field

- In the **Content Type Builder** page, add a [Custom](/docs/developers/create-content-types/custom) field in your content type by clicking the **Insert a field** link represented by a **+** sign.
- Under **Select Extension or App**, select **Brightcove**, and click the **Proceed** button.This adds Brightcove in the custom field.
- Under **Advanced** properties, you can set the maximum number of assets that can be added in the Custom field. In our example, it is 5.

```
{
        "advanced": {
           "max_limit":5
        }
}
```

- After adding the app in a custom field, click **Save** or **Save and Close** to save your changes.
- To use the Brightcove app, [create an entry](/docs/content-managers/author-content/create-an-entry) for this content type. In the left navigation panel, navigate to the **Entries** page, click **+ New Entry** to create a new entry for the above content type, and then click **Proceed**.You can see the Brightcove app’s custom field on your entry page, as shown below:
- Click the **+ Choose Video(s)** button.
- Select the video(s) from your Brightcove selector page and click the **Add Videos(s)** button to add them to your entry.**Note**: You can add multiple videos in one go.

You can filter and view videos grouped under **Playlists** in the Selector page. Select the desired **Playlists** and add the videos.

You can also filter videos using **Folders** in the Selector page. Choose the desired folder from Brightcove and add the videos.

You can also search for videos in the Brightcove selector page.

Hover over a video on the Brightcove selector page to see the **View in Brightcove** option and navigate directly to the Brightcove platform.

- The videos you select get added to your entry in the thumbnail view.

If the video is deactivated in Brightcove, you can view an **Inactive** mark on the video.

To view the videos in the list view, select the **List** view option from the dropdown.

The videos you select get added to your entry in the list view.

- Hover over the video to access these features:Click the **Reorder** icon to drag and reorder the video.
- Click the **Open in Brightcove** icon to open the video in the Brightcove platform.
- Click the **Remove** icon to delete the video.

**Thumbnail View**

**List View**

- After adding the video(s), **Save** and **Publish** your entry.

### Steps to Use the Brightcove App as a JSONRTE Plugin

- In the **Content Type Builder** page, add a [JSON Rich Text Editor](/docs/developers/json-rich-text-editor/about-json-rich-text-editor) field in your content type by clicking the **Insert a field** link represented by a **+** sign.
- Under **Select Plugin(s)**, select **Brightcove**, and then click **Add Plugin(s)**.This adds Brightcove in the JSON Rich Text Editor field.
- After adding the app in a JSON Rich Text Editor field, click **Save** or **Save and Close** to save your changes.
- To use the Brightcove app, [create an entry](/docs/content-managers/author-content/create-an-entry) for this content type. In the left navigation panel, navigate to the **Entries** page, click **+ New Entry** to create a new entry for the above content type, and then click **Proceed**.You can see the Brightcove JSON Rich Text Editor field on your entry page, as shown below:
- Click the **Brightcove** app button.
- Select the video(s) from your Brightcove selector page and click the **Add Videos(s)** button to add them to your entry.**Note**: You can add multiple videos in one go.

You can filter and view videos grouped under **Playlists** in the Selector page. Select the desired **Playlists** and add the videos.

You can also filter videos using **Folders** in the Selector page. Choose the desired folder from Brightcove and add the videos.

You can also search for videos in the Brightcove selector page.

Hover over the video on the Brightcove selector page to see the **View in Brightcove** option and navigate directly to the Brightcove platform.

The videos you selected are referenced within your entry:

- To resize the video, drag the corner and adjust the size as required. Hover over the video to access these features:Click the **Preview** icon to preview the video in the Brightcove platform.
- Click the **Edit** icon to edit the video.
- Click the **Remove** icon to delete the video.

In the **Edit Asset** modal, you can view the **Embed Link** field.

**Note**: Previously, **Embed Links** were stored using the key `link`, which conflicted with Brightcove's **Related Link** feature that also used `link`. To avoid this conflict, embed links are now stored under `embedLink` and referenced via `redactor_attributes.anchorLink`. Entries using the old `link` key will continue to display correctly.

**Additional Resource: **You can use alignment and inline asset features to edit the asset placement within the [JSON Rich Text Editor](/docs/developers/json-rich-text-editor/about-json-rich-text-editor/) field.

- After adding the video(s), **Save** and **Publish** your entry.

## Common questions

### What Brightcove credentials are required during app configuration?
You need the **Brightcove Account ID**, **Client ID**, and **Client Secret** retrieved from your Brightcove account.

### Do I need to enable UI Locations to save the app configuration?
Yes. **Note**: The app requires at least one UI location to be enabled, otherwise you will not be able to save your app configuration settings.

### What are the two ways to use the Brightcove app inside entries?
You can use it as a **Custom Field** or as a **JSON Rich Text Editor** plugin.

### Where are embed links stored for Brightcove assets in JSONRTE?
Embed links are stored under `embedLink` and referenced via `redactor_attributes.anchorLink`.