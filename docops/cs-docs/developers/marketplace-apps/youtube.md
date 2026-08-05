---
title: "[Marketplace guides and apps] - YouTube App Installation Guide"
description: YouTube App Installation Guide
url: https://www.contentstack.com/docs/marketplace/youtube
product: Contentstack
doc_type: marketplace-guide
audience:
  - developers
  - content-managers
version: unknown
last_updated: 2026-03-26
---

# [Marketplace guides and apps] - YouTube App Installation Guide

This page explains how to install and configure the YouTube app from the Contentstack Marketplace and how to use it inside your stack entries via a Custom field or a JSON Rich Text Editor field. It is intended for Contentstack stack owners/admins and developers setting up YouTube channel video embedding within the CMS.

## YouTube App Installation Guide

YouTube is a video-sharing service where users can watch, upload, create their own videos, like, and comment on other videos.

Contentstack Marketplace lets you embed and display the information of any YouTube channel directly into the CMS environment by just providing a channel ID. This saves the content managers' time and eliminates the potential errors caused by manual data insertion.

## Prerequisites

- [YouTube account](https://www.youtube.com/)
- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization/Stack as the Owner/Admin

This step-by-step guide explains how to install and configure YouTube within your stack.

## Steps for Execution

- [Get YouTube API key](#get-youtube-api-key)
- [Get Channel ID](#get-channel-id)
- [Install and Configure the YouTube app in Contentstack Marketplace](#install-and-configure-the-youtube-app-in-contentstack-marketplace)
- [Use the YouTube app within your Stack](#use-the-youtube-app-within-your-stack)

## Get YouTube API key

In order to set up this extension in Contentstack, you will need the YouTube API key.
Follow the steps to get your YouTube API key.

Sign in to[Google Console Cloud](https://console.cloud.google.com/projectselector2/apis/dashboard?pli=1&supportedpurview=project) to go to **APIs & Services**.

- Click **SELECT PROJECT** to select an existing project or click **CREATE PROJECT** to create a new project.![YouTube-API-Select_or_Create_Project.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt15af69281d0b0232/62ea35e046742610b18df9e8/YouTube-API-Select_or_Create_Project.png)
- Go to the **Library** section in the left panel.
- Click **YouTube Data API V3**.![YouTube-YouTube_Data_API_V3.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt275d479ed35aa731/62ea3605f0bc6d1158222886/YouTube-YouTube_Data_API_V3.png)
- Click **ENABLE**.![YouTube-API-Enable.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltc71e260302d34652/62ea35dfe717bf11519aab40/YouTube-API-Enable.png)
- Click **CREATE CREDENTIALS**.![YouTube-Create-Credentials.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbb585f62be1c70ca/64cce122b1fb31800814a78e/YouTube-Create-Credentials.png)
- Under **Credential Type**, select the following:
  - From the Select an API dropdown, select **YouTube Data API v3**.
- From What data will you be accessing?, select **Public data**.
- Click **NEXT**.
  This will create your YouTube API Key.
- Copy the **API key** and click **DONE**.![YouTube-API-Copy_API.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltbe618a3d79a452fd/62ea35e06f3f3701d6ff8c8d/YouTube-API-Copy_API.png)

## Get Channel ID

While configuring the app (in [Step 3](#install-and-configure-the-youtube-app-in-contentstack-marketplace)), you need to specify the YouTube channel ID from which you want to fetch and display the videos.

**Note:** In Contentstack, using the YouTube app, you can display videos from any **public** channel.

Each YouTube channel has a unique ID. Let us understand how to get this ID:

Visit the home/landing page of the YouTube channel of your choice on a browser.

- Right-click on the page and click **View page source**.
- Search for **channelId**.![YouTube_-_ChannelID.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blte9dff1da6b2ed964/62eb688134f523580f10e50a/YouTube_-_ChannelID.png)
- Copy the **channel ID**.

## Install and Configure the YouTube app in Contentstack Marketplace

To install the application in Contentstack, follow the steps below:

Log in to your [Contentstack account](https://www.contentstack.com/login/).

- In the left-hand side primary navigation, click the **Marketplace** icon to go to the Marketplace.
- Click **Apps** from the left panel.
- Within the Marketplace, you can see all the available apps. Hover over the **YouTube** app and click **Install App**.
- In the popup window, select the stack where you want to install the YouTube app and click the **Install** button.![Youtube-Install-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb2e0db86d75999a8/64b9266bb01916b5f5b17d4e/Youtube-Install-App.png)
- On the **Configuration **page, enter the following details:
  - **API Key**: Enter the YouTube **API Key** that we retrieved in [Step 1](#get-youtube-api-key).
  - **Channel ID(s)**: Enter the YouTube **Channel ID(s)** that we retrieved in [Step 2](#get-channel-id).

  **Note**: You can add multiple channel ids at once.
- **Choose YouTube Keys to Save in Entry**: Choose how to save the data fetched from theYouTube account in Contentstack entries.![YouTube-Congifuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt10306eb61b9e3111/65b95bb4655e3088c0ebad7c/YouTube-Congifuration.png)
  - If you select the **All Fields** option, you can select only a limited number of videos in the entry.
- For **Custom Fields**, you can search and add specific YouTube Keys you want to save in entries. By default, the **videoId** key is selected.

  **Note**: Only the embedded source URL (src) will be stored in JSON RTE plugin response.

  **Sample JSON**:

```
attrs": {
          "src": "https://www.youtube.com/embed/oT1f39lgQdk",
          "type": "YouTube"
        }
```

- On the **UI Locations** tab, you can see the predefined app locations. You can use the toggle button corresponding to each UI location to enable or disable it based on your requirements.![YouTube-UI-Locations](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt31ca6a5e63559dad/65b95bbffd23e55fe17da3f8/YouTube-UI-Locations.png)

  **Additional Resource**: For more information on UI locations, please refer to the [Installed Apps](../marketplace-platform-guides/installed-apps.md#view-edit-configuration-ui-locations-and-webhook) guide.
- Click the **Save** button.
- Click **Open Stack** to start using the YouTube application.

## Use the YouTube app within your Stack

To use the YouTube application within an entry of your stack, follow the steps given below:

Go to your stack, click the **Content Models** icon in the left navigation panel, and click the **+ New Content Type** button.

- Create a content type by adding relevant details as displayed below:![YouTube-Content-Type](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7e6f1c980add3d06/64cb9b7db1fb3137e014a1ee/YouTube-Content-Type.png)

There are two ways to use the YouTube application in your entry:

- [Custom Field](#steps-to-use-the-youtube-application-using-a-custom-field)
- [JSON Rich Text Editor Field](#steps-to-use-the-youtube-application-in-a-json-rich-text-editor-field)

### Steps to use the YouTube application using a Custom field

- In the Content Type Builder page, add a [Custom](../create-custom-fields/about-custom-fields.md) field in your content type by clicking the **Insert a field** link represented by a **+** sign.
- Under **Select Extension/App**, select **YouTube** and click the **Proceed** button.

This adds YouTube in the custom field.

- After adding the app in a custom field, click **Save** or **Save and Close** to save your changes.
- To use the YouTube app, create an entry for this content type. In the left navigation panel, navigate to the **Entries** page, click **+ New Entry** to create a new entry for the above content type, and then click **Proceed**.

You will see the YouTube custom field on your entry page as shown below:

- Click the **+ Add Video(s)** button.![YouTube-Custom-Field-Add-Videos](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1546f73ee4fcda1c/64cb9beb36217321d70247fe/YouTube-Custom-Field-Add-Videos.png)
- Select the video(s) from your YouTube selector page and click the **Add Videos(s)** button to add them to your entry.

  **Note**: You can add multiple videos in one go.

  You can filter products based on channels. You have configured multiple channel Id(s) at the time of configuration in [Step 3](#install-and-configure-the-youtube-app-in-contentstack-marketplace).

You can search for videos on the YouTube selector page based on the video name.

Hover over the video on the YouTube selector page, and you can see the **View in YouTube** option to go directly to the YouTube app.

The selected video(s) are referenced in the thumbnail view within your entry.

Select the list view option from the dropdown to view the video(s) in the list view.

The selected video(s) are referenced in the list view within your entry.

- To reorder the video, open it in YouTube or delete the video, hover over the image to get the options available, then perform the following:
  - Click the **Reorder** icon to reorder the video.
- Click the **Open in YouTube** icon to open the video in the YouTube app.
- Click the **Delete** icon to delete the selected video.

**Thumbnail View**

**List View**

Delete action generates a prompt modal for confirmation. Click the **Delete** button to delete the video permanently.

- After adding the video(s), **Save** and **Publish** your entry.

### Steps to use the YouTube application in a JSON Rich Text Editor field

- In the Content Type Builder page, add a [JSON Rich Text Editor](../json-rich-text-editor/about-json-rich-text-editor.md) field in your content type by clicking the **Insert a field** link represented by a **+** sign.
- Under **Select JSON RTE Plugin(s)**, select **YouTube**, and then click **Add Plugin(s)**.

This adds YouTube in the JSON Rich Text Editor field.

- After adding the app in a JSON Rich Text Editor field, click **Save** or **Save and Close** to save your changes.
- To use the YouTube app, create an entry for this content type. In the left navigation panel, navigate to the **Entries** page, click **+ New Entry** to create a new entry for the above content type, and then click **Proceed**.

You will see the YouTube button in the JSON Rich Text Editor field on your entry page, as shown below:

- Click the **YouTube** app icon.![YouTube-JSONRTE-Add-Videos](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt34cae6b9446c440b/64cb9f901d183ce70fd1d7ce/YouTube-JSONRTE-Add-Videos.png)
- Select the video(s) from your YouTube selector page and click the **Add Videos(s)** button to add them to your entry.

  **Note**: You can add multiple videos in one go.

  You can filter products based on channels. You have configured multiple channel Id(s) at the time of configuration in [Step 3](#install-and-configure-the-youtube-app-in-contentstack-marketplace).

You can search for videos on the YouTube selector page based on the video name.

Hover over the video on the YouTube selector page, and you can see the **View in YouTube** option to go directly to the YouTube app.

The video(s) you selected are referenced within your entry.

- To reorder, edit, or delete the video, hover over the video to get the options available, then perform the following:
  - Click the **Drag to move** icon to reorder the video.
- Click the **Edit** icon to edit the video.
- Click the **Delete** icon to delete the selected video.

Edit action generates a prompt modal for updating the embed URL. Click the **Update** button to edit the URL.

- After adding the video(s), **Save** and **Publish** your entry.

## Common questions

### Do I need to use a public YouTube channel?
**Note:** In Contentstack, using the YouTube app, you can display videos from any **public** channel.

### Where do I enter the YouTube API key and Channel ID(s)?
On the **Configuration **page, enter **API Key** and **Channel ID(s)**.

### Can I add multiple channel IDs?
**Note**: You can add multiple channel ids at once.

### What is stored in the JSON RTE plugin response?
**Note**: Only the embedded source URL (src) will be stored in JSON RTE plugin response.