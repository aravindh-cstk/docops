---
title: "[Marketplace guides and apps] - JW Player App Installation Guide"
description: JW Player App Installation Guide
url: https://www.contentstack.com/docs/marketplace/jw-player
product: Contentstack
doc_type: marketplace-guide
audience:
  - developers
version: current
last_updated: 2026-03-26
---

# [Marketplace guides and apps] - JW Player App Installation Guide

This page explains how to install and configure the JW Player app from the Contentstack Marketplace and then use it inside Contentstack entries (via a Custom field or a JSON Rich Text Editor plugin). It is intended for Contentstack stack owners/admins and developers who need to fetch and display JW Player videos within Contentstack content.

## JW Player App Installation Guide

JW Player is a media player for streaming audio and video on websites and mobile devices. It provides an easy-to-use interface to upload, manage, store, deliver, and publish your media files.

Its simple drag-and-drop feature lets you quickly organize and publish your videos and audio on the web or mobile devices. It supports various file formats, including MP4, WebM, Ogg, and HLS, and the playback of DRM-protected content.

The app also enables users to watch live streams, playlists, and videos in full-screen mode and access advanced playback options such as captions, speed control, and picture-in-picture.

Contentstack Marketplace lets you install and use the JW Player application within your stack to fetch and display videos from the JW Player account within your entries.

## Prerequisites

- [JW Player account](https://dashboard.jwplayer.com/login)
- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization/Stack as the Owner/Admin

Let's follow this step-by-step guide to install and configure the JW Player app within your stack.

## Steps for Execution

- [Retrieve the Credentials from the JW Player Account](#retrieve-the-credentials-from-the-jw-player-account)
- [Install and Configure the JW Player app in Contentstack Marketplace](#install-and-configure-the-jw-player-app-in-contentstack-marketplace)
- [Use the JW Player app within your Stack Entry](#use-the-jw-player-app-within-your-stack-entry)

## Retrieve the Credentials from the JW Player Account

To get the access token for JW Player, follow the steps given below:

Log in to the [JW Player account](https://dashboard.jwplayer.com/login) using your JW Player account credentials.

- Click the gear icon in the top-right corner of the JW Player dashboard, and then click **API Credentials**.
- Now, click **Show Credentials** to view and copy the API Key.
- To generate the **Secret**, click **Add**.
- In the **API Key** modal, provide **Nam**e, select **User Role** from the dropdown, set the **Properties** checkboxes, and click **Save**.
- Go to the recently created API Key and click **Show Secret** to view and copy the client secret.

## Install and Configure the JW Player app in Contentstack Marketplace

Follow the steps given below to install the application in Contentstack.

Log in to your [Contentstack account](https://www.contentstack.com/login/).

- In the left-hand side primary navigation, click the **Marketplace** icon to go to the Marketplace.
- Click **Apps** from the left panel.
- Within the Marketplace, you can see all the available apps. Hover over the **JW Player** app and click **Install App**.
- In the pop-up window, select the stack where you want to install the JW Player app, accept the terms of service, and click the **Install** button.
- On the **Configuration** screen, enter the following details:

  **JW Player Credentials**: Enter the **API Key** and **Client Secret** retrieved from your JW Player account in [step 1](#retrieve-the-credentials-from-the-jw-player-account).

- **Choose the JW Player Keys to Save in Entry**: Choose how to save the data fetched from the JW Player account in Contentstack entries.

  If you select the **All Fields** option, you can select only a limited number of videos in the entry.

- For **Custom Fields**, you can search and add specific JW Player Keys you want to save in entries.

If you select **Custom Fields** then the **JW Player Keys** dropdown appears. By default, **mediaid**, **title**, **image**, **pubdate**, **description**, and **link** options are already selected inside the dropdown. If you want to create a new key, click the **+ New Key Field** option.

In the **Add Key Path** modal, enter the **JW Player Key Path** and click the **Create** or **Create and Apply** button to create a new key.

- On the **UI Locations** tab, you can see the predefined app locations. You can use the toggle button corresponding to each UI location to enable or disable it based on your requirements.
- If the webhook is enabled for your app, you can view the webhook logs under the **Webhook** tab.

**Additional Resource**: For more information on UI location and webhooks, please refer to the [Installed Apps](/docs/developers/marketplace-platform-guides/installed-apps#view-edit-configuration-ui-locations-and-webhook) guide.

- Click the **Save** button.
- Click **Open Stack** to start using the JW Player application.

## Use the JW Player app within your Stack Entry

To use the JW Player application within an entry of your stack, follow the steps given below:

Go to your stack, click the **Content Models** icon in the left navigation panel, and click the **+ New Content Type** button.

- [Create a content type](/docs/developers/create-content-types/create-a-content-type) by adding relevant details as displayed below:

There are two ways to use the JW Player application in your entry:

- [Custom Field](#steps-to-use-the-jw-player-application-using-a-custom-field)
- [JSON Rich Text Editor Field](#steps-to-use-the-jw-player-application-using-a-json-rich-text-editor-field)

### Steps to use the JW Player application using a Custom field:

- In the **Content Type Builder** page, add a [Custom](/docs/developers/create-content-types/custom/) field in your content type by clicking the **Insert a field **link represented by a **+** sign.
- Under **Select Extension/App**, select **JW Player**, and click the **Proceed** button.

Change the **Display Name** of the custom field to your choice, for example, **JW Player Custom Field**. Optionally, you can add **Help Text** and **Instruction Value** for your custom field. This adds the JW Player app in the custom field.

- After adding the app in a custom field, click **Save** or **Save and Close** to save your changes.
- To use the JW Player app, create an entry for this newly created content type. To do this, in the left navigation panel, navigate to the **Entries** page, click **+ New Entry** to [create a new entry](/docs/content-managers/author-content/create-an-entry) for the above content type, and then click **Proceed**.

You can see the JW Player app’s custom field on your entry page as shown below:

- Click the **+ Choose Video(s)** button.
- Select the video(s) from your JW Player selector page and click the **Add Videos(s)** button to add them to your entry.

**Note**: You can add multiple videos in one go.

You can search for videos on the JW Player selector page.

Also, you can view the videos in a **Comfortable** or **Compact** view. By default, the **Comfortable** view is selected.

Hover over the video on the JW Player selector page, and you can see the **Open in JW Player** option to go directly to the JW Player platform.

The selected video(s) are referenced in the thumbnail view within your entry.

Select the list view option from the dropdown to view the video(s) in the list view.

The selected video(s) are referenced in the list view within your entry .

- Hover over the video to access these features:

  Click the **Reorder** icon to drag and reorder the video.

- Click the **Open in JW Player** icon to open the video on the JW Player platform.
- Click the **Remove** icon to remove the video.

**Thumbnail View**

**List View**

- After adding the video(s), **Save** and **Publish** your entry.

### Steps to use the JW Player application using a JSON Rich Text Editor field:

- In the **Content Type Builder** page, add a [JSON Rich Text Editor](/docs/developers/json-rich-text-editor/about-json-rich-text-editor/) field in your content type by clicking the **Insert a field** link represented by a **+** sign.
- Under **Select JSON RTE Plugin(s)**, select **JW Player**, and then click **Add Plugin(s)**.

This adds JW Player in the JSON Rich Text Editor field.

- After adding the app in a JSON Rich Text Editor field, click **Save** or **Save and Close** to save your changes.
- To use the JW Player app as a JSON RTE plugin, create an entry for this content type. In the left navigation panel, navigate to the **Entries** page, click **+ New Entry** to create a new entry for the above content type, and then click **Proceed**.

You will see the JW Player app icon inside the JSON RTE field in your entry page as shown below:

- Click the **JW Player** app icon.
- Select the video(s) from your JW Player selector page and click the **Add Videos(s)** button to add them to your entry.

**Note**: You can add multiple videos in one go.

You can search for videos on the JW Player selector page.

Also, you can view the videos in a **Comfortable** or **Compact** view. By default, the **Comfortable** view is selected.

Hover over the video on the JW Player selector page, and you can see the **Open in JW Player** option to go directly to the JW Player platform.

The videos you selected get referenced within your entry:

- To resize the video, drag the corner and adjust the size as required. Hover over the video to access these features:

  Click the **Preview** icon to preview the video on the JW Player platform.

- Click the **Edit** icon to edit the video.
- Click the **Remove** icon to remove the video.

**Additional Resource**: You can use alignment and inline asset features to edit the video placement within the [JSON Rich Text Editor](/docs/developers/json-rich-text-editor/about-json-rich-text-editor/) field.

- After adding the video(s), **Save** and **Publish** your entry.

## Common questions

### Do I need to be a stack Owner/Admin to install the JW Player app?
Yes, you need “Access to the Contentstack Organization/Stack as the Owner/Admin”.

### Where do I get the JW Player API Key and Client Secret?
You retrieve them from the JW Player dashboard under **API Credentials**, using **Show Credentials** for the API Key and **Show Secret** for the client secret.

### Can I use the JW Player app in more than one field type?
Yes, there are two ways to use the JW Player application in your entry: **Custom Field** and **JSON Rich Text Editor Field**.

### Can I add multiple videos to an entry?
Yes. **Note**: You can add multiple videos in one go.

