---
title: "YouTube App Installation Guide"
description: "The Contentstack Marketplace YouTube app fetches videos from your YouTube account into Contentstack entries."
url: /marketplace/youtube
uid: blt17320cb4de589b96
---

# YouTube App Installation Guide

## YouTube App Installation Guide

YouTube is a video-sharing service where users can watch, upload, create their own videos, like, and comment on other videos.

Contentstack Marketplace lets you embed and display the information of any YouTube channel directly into the CMS environment by just providing a channel ID. This saves the content managers' time and eliminates the potential errors caused by manual data insertion.

## Prerequisites

-   [YouTube account](https://www.youtube.com/)
-   [Contentstack account](https://www.contentstack.com/login/)
-   Access to the Contentstack Organization/Stack as the Owner/Admin

This step-by-step guide explains how to install and configure YouTube within your stack.

## Steps for Execution

1.  [Get YouTube API key](#get-youtube-api-key)
2.  [Get Channel ID](#get-channel-id)
3.  [Install and Configure the YouTube app in Contentstack Marketplace](#install-and-configure-the-youtube-app-in-contentstack-marketplace)
4.  [Use the YouTube app within your Stack](#use-the-youtube-app-within-your-stack)

1.  ## Get YouTube API key

    In order to set up this extension in Contentstack, you will need the YouTube API key.  
    Follow the steps to get your YouTube API key.

    1.  Sign in to [Google Console Cloud](https://cloud.google.com/cloud-console) to go to **APIs & Services**.
    2.  Click **SELECT PROJECT** to select an existing project or click **CREATE PROJECT** to create a new project.  
        ![YouTube-API-Select_or_Create_Project.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt15af69281d0b0232/62ea35e046742610b18df9e8/YouTube-API-Select_or_Create_Project.png)
    3.  Go to the **Library** section in the left panel.
    4.  Click **YouTube Data API V3**.  
        ![YouTube-YouTube_Data_API_V3.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt275d479ed35aa731/62ea3605f0bc6d1158222886/YouTube-YouTube_Data_API_V3.png)
    5.  Click **ENABLE**.  
        ![YouTube-API-Enable.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltc71e260302d34652/62ea35dfe717bf11519aab40/YouTube-API-Enable.png)
    6.  Click **CREATE CREDENTIALS**.  
        ![YouTube-Create-Credentials.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbb585f62be1c70ca/64cce122b1fb31800814a78e/YouTube-Create-Credentials.png)
    7.  Under **Credential Type**, select the following:  
        -   From the Select an API dropdown, select **YouTube Data API v3**.
        -   From What data will you be accessing?, select **Public data**.
        -   ![YouTube-API-Credentials.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt447d5a49b3c8d9b2/62ea35e0e0e20410aa83695b/YouTube-API-Credentials.png)
    8.  Click **NEXT**.  
        This will create your YouTube API Key.
    9.  Copy the **API key** and click **DONE**.  
        ![YouTube-API-Copy_API.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltbe618a3d79a452fd/62ea35e06f3f3701d6ff8c8d/YouTube-API-Copy_API.png)
2.  ## Get Channel ID

    While configuring the app (in [Step 3](#install-and-configure-the-youtube-app-in-contentstack-marketplace)), you need to specify the YouTube channel ID from which you want to fetch and display the videos.

    **Note:** In Contentstack, using the YouTube app, you can display videos from any **public** channel.

    Each YouTube channel has a unique ID. Let us understand how to get this ID:

    1.  Visit the home/landing page of the YouTube channel of your choice on a browser.
    2.  Right-click on the page and click **View page source**.
    3.  Search for **channelId**.  
        ![YouTube_-_ChannelID.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blte9dff1da6b2ed964/62eb688134f523580f10e50a/YouTube_-_ChannelID.png)  

    4.  Copy the **channel ID**.
3.  ## Install and Configure the YouTube app in Contentstack Marketplace

    To install the application in Contentstack, follow the steps below:

    1.  Log in to your [Contentstack account](https://www.contentstack.com/login/).
    2.  Navigate to the “App Switcher” icon in the top-right corner and click **Marketplace**.![Contentstack-App-Switcher-Marketplace](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt47c618781b542b64/68ee96ad6bfd93c9913fee8a/Contentstack-App-Switcher-Marketplace.png)
    3.  Click **Apps** from the left panel.
    4.  Within the Marketplace, you can see all the available apps. Hover over the **YouTube** app and click **Install**.  
        ![youtube_app_Install.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am2f1a1bdee2be9ba6/43cef9787554ee2c48a17cfb/youtube_app_Install.png?locale=en-us)  

    5.  In the popup window, select the stack where you want to install the YouTube app and click the **Install** button.  
        ![Youtube-Install-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb2e0db86d75999a8/64b9266bb01916b5f5b17d4e/Youtube-Install-App.png)  

    6.  On the **Configuration** page, enter the following details:  
        1.  **API Key**: Enter the YouTube **API Key** that we retrieved in [Step 1](#get-youtube-api-key).
        2.  **Channel ID(s)**: Enter the YouTube **Channel ID(s)** that we retrieved in [Step 2](#get-channel-id).
        3.  **Note:** You can add multiple channel ids at once.

        4.  **Choose YouTube Keys to Save in Entry**: Choose how to save the data fetched from theYouTube account in Contentstack entries.  

            1.  If you select the **All Fields** option, you can select only a limited number of videos in the entry.
            2.  For **Custom Fields**, you can search and add specific YouTube Keys you want to save in entries. By default, the **videoId** key is selected.

            ![YouTube-Congifuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt10306eb61b9e3111/65b95bb4655e3088c0ebad7c/YouTube-Congifuration.png)
        5.  **Note:** Only the embedded source URL (src) will be stored in JSON RTE plugin response.

        6.  **Sample JSON**:

        7.  ```
            attrs": {
                      "src": "https://www.youtube.com/embed/oT1f39lgQdk",
                      "type": "YouTube"
                    }
            ```

    7.  On the **UI Locations** tab, you can see the predefined app locations. You can use the toggle button corresponding to each UI location to enable or disable it based on your requirements. ![YouTube-UI-Locations](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt31ca6a5e63559dad/65b95bbffd23e55fe17da3f8/YouTube-UI-Locations.png)
    8.  **Additional Resource:** For more information on UI locations, please refer to the [Installed Apps](/docs/marketplace/installed-apps#view-edit-configuration-ui-locations-and-webhook) guide.

    9.  Click the **Save** button.
    10.  Click **Open Stack** to start using the YouTube application.
4.  ## Use the YouTube app within your Stack

    To use the YouTube application within an entry of your stack, follow the steps given below:

    1.  Go to your stack, click the **Content Models** icon in the left navigation panel, and click the **\+ New Content Type** button.
    2.  Create a content type by adding relevant details as displayed below:  
        ![YouTube-Content-Type](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7e6f1c980add3d06/64cb9b7db1fb3137e014a1ee/YouTube-Content-Type.png)

    There are two ways to use the YouTube application in your entry:

    1.  [Custom Field](#steps-to-use-the-youtube-application-using-a-custom-field)
    2.  [JSON Rich Text Editor Field](#steps-to-use-the-youtube-application-in-a-json-rich-text-editor-field)

    ### Steps to use the YouTube application using a Custom field

    1.  In the Content Type Builder page, add a [Custom](/docs/developer-hub/custom-field-location) field in your content type by clicking the **Insert a field** link represented by a **+** sign.
    2.  Under **Select Extension/App**, select **YouTube** and click the **Proceed** button.  
        ![YouTube-App-Add-In-Custom-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9ad60f8ec5350ac3/64cb9b7d5de99c8c1268cf7e/YouTube-App-Add-In-Custom-Field.png)  
        This adds YouTube in the custom field.  
        ![YouTube-App-Added-In-Custom-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt86c0dd972604f7c2/64cb9b7dc5b4be3d4ca6e37c/YouTube-App-Added-In-Custom-Field.png)
    3.  After adding the app in a custom field, click **Save** or **Save and Close** to save your changes.
    4.  To use the YouTube app, create an entry for this content type. In the left navigation panel, navigate to the **Entries** page, click **\+ New Entry** to create a new entry for the above content type, and then click **Proceed**.  
        You will see the YouTube custom field on your entry page as shown below:  
        ![YouTube-Custom-Field-Sample-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9f3f02f9f82a9e72/64cb9beb2b05964a6cc7def2/YouTube-Custom-Field-Sample-Entry.png)
    5.  Click the **\+ Add Video(s)** button.  
        ![YouTube-Custom-Field-Add-Videos](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1546f73ee4fcda1c/64cb9beb36217321d70247fe/YouTube-Custom-Field-Add-Videos.png)
    6.  Select the video(s) from your YouTube selector page and click the **Add Videos(s)** button to add them to your entry.  
        ![YouTube-Custom-Field-Selector-Page-Add-Videos](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt12bc88c38c96eb52/64cb9bec88b3c90072e7690d/YouTube-Custom-Field-Selector-Page-Add-Videos.png)

        **Note:** You can add multiple videos in one go.

        You can filter products based on channels. You have configured multiple channel Id(s) at the time of configuration in [Step 3](#install-and-configure-the-youtube-app-in-contentstack-marketplace).  
        ![YouTube-Custom-Field-Selector-Page-Channel-Filter](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt61b95788c3408b09/64cb9bec5ad8c578f85bf2b8/YouTube-Custom-Field-Selector-Page-Channel-Filter.png)  
        You can search for videos on the YouTube selector page based on the video name.  
        ![YouTube-Custom-Field-Selector-Page-Search](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdcb3d8925e856de8/64cb9bec44ba3f17c21df982/YouTube-Custom-Field-Selector-Page-Search.png)  
        Hover over the video on the YouTube selector page, and you can see the **View in YouTube** option to go directly to the YouTube app.  
        ![YouTube-Custom-Field-Selector-Page-View-In-YouTube](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf59b1864df9923ad/64cb9bec4e7eeb36d4f170eb/YouTube-Custom-Field-Selector-Page-View-In-YouTube.png)  
        The selected video(s) are referenced in the thumbnail view within your entry.  
        ![YouTube-Custom-Field-Added-Videos-In-Thumbnail-view](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltee987539715c8ff1/64cb9beb4dd32b33ec268bcc/YouTube-Custom-Field-Added-Videos-In-Thumbnail-view.png)  
        Select the list view option from the dropdown to view the video(s) in the list view.  
        ![YouTube-Custom-Field-Added-Videos-View-Options](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0957c78de047eec3/64cb9beb70c3262622787715/YouTube-Custom-Field-Added-Videos-View-Options.png)  
        The selected video(s) are referenced in the list view within your entry.  
        ![YouTube-Custom-Field-Added-Videos-In-List-view](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3bf92328e64a8d87/64cb9beb3707d836c1a219cb/YouTube-Custom-Field-Added-Videos-In-List-view.png)
    7.  To reorder the video, open it in YouTube or delete the video, hover over the image to get the options available, then perform the following:

        1.  Click the **Reorder** icon to reorder the video.
        2.  Click the **Open in YouTube** icon to open the video in the YouTube app.
        3.  Click the **Delete** icon to delete the selected video.



        **Thumbnail View**

        ![YouTube-Custom-Field-Added-Videos-Features-In-Thumbnail-view](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltad2c3c6f44f5ead9/64cb9b7d2b05960a2bc7deee/YouTube-Custom-Field-Added-Videos-Features-In-Thumbnail-view.png)  

        **List View**

        ![YouTube-Custom-Field-Added-Videos-Features-In-List-view](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2febd872e735a7d0/64cb9b7ddffc279d40796dbe/YouTube-Custom-Field-Added-Videos-Features-In-List-view.png)  
        Delete action generates a prompt modal for confirmation. Click the **Delete** button to delete the video permanently.  
        ![YouTube-Custom-Field-Delete-Modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta793843e16f930f2/64cb9beb1072f00c9a3f11fb/YouTube-Custom-Field-Delete-Modal.png)
    8.  After adding the video(s), **Save** and **Publish** your entry.

    ### Steps to use the YouTube application in a JSON Rich Text Editor field

    1.  In the Content Type Builder page, add a [JSON Rich Text Editor](/docs/headless-cms/about-json-rich-text-editor/) field in your content type by clicking the **Insert a field** link represented by a **+** sign.
    2.  Under **Select JSON RTE Plugin(s)**, select **YouTube**, and then click **Add Plugin(s)**.  
        ![YouTube-App-Add-In-JSONRTE](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt85403aa7afb3631f/64cb9b7dddc0264c56807489/YouTube-App-Add-In-JSONRTE.png)  
        This adds YouTube in the JSON Rich Text Editor field.  
        ![YouTube-App-Added-In-JSONRTE](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt68078e801b2b0d45/64cb9b7d2b0596fa4ac7deea/YouTube-App-Added-In-JSONRTE.png)
    3.  After adding the app in a JSON Rich Text Editor field, click **Save** or **Save and Close** to save your changes.
    4.  To use the YouTube app, create an entry for this content type. In the left navigation panel, navigate to the **Entries** page, click **\+ New Entry** to create a new entry for the above content type, and then click **Proceed**.  
        You will see the YouTube button in the JSON Rich Text Editor field on your entry page, as shown below:  
        ![YouTube-JSONRTE-Sample-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt301c429071541285/64cb9f905de99ce12868cf96/YouTube-JSONRTE-Sample-Entry.png)
    5.  Click the **YouTube** app icon.  
        ![YouTube-JSONRTE-Add-Videos](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt34cae6b9446c440b/64cb9f901d183ce70fd1d7ce/YouTube-JSONRTE-Add-Videos.png)
    6.  Select the video(s) from your YouTube selector page and click the **Add Videos(s)** button to add them to your entry.  
        ![YouTube-Custom-Field-Selector-Page-Add-Videos](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt12bc88c38c96eb52/64cb9bec88b3c90072e7690d/YouTube-Custom-Field-Selector-Page-Add-Videos.png)

        **Note:** You can add multiple videos in one go.

        You can filter products based on channels. You have configured multiple channel Id(s) at the time of configuration in [Step 3](#install-and-configure-the-youtube-app-in-contentstack-marketplace).  
        ![YouTube-Custom-Field-Selector-Page-Channel-Filter](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt61b95788c3408b09/64cb9bec5ad8c578f85bf2b8/YouTube-Custom-Field-Selector-Page-Channel-Filter.png)  
        You can search for videos on the YouTube selector page based on the video name.  
        ![YouTube-Custom-Field-Selector-Page-Search](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdcb3d8925e856de8/64cb9bec44ba3f17c21df982/YouTube-Custom-Field-Selector-Page-Search.png)  
        Hover over the video on the YouTube selector page, and you can see the **View in YouTube** option to go directly to the YouTube app.  
        ![YouTube-Custom-Field-Selector-Page-View-In-YouTube](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf59b1864df9923ad/64cb9bec4e7eeb36d4f170eb/YouTube-Custom-Field-Selector-Page-View-In-YouTube.png)  
        The video(s) you selected are referenced within your entry.  
        ![YouTube-JSONRTE-Added-Videos](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt42c9fde8a56a509a/64cb9f90e6fc9a4f9e2cef3d/YouTube-JSONRTE-Added-Videos.png)
    7.  To reorder, edit, or delete the video, hover over the video to get the options available, then perform the following:

        1.  Click the **Drag to move** icon to reorder the video.
        2.  Click the **Edit** icon to edit the video.
        3.  Click the **Delete** icon to delete the selected video.


        ![YouTube-JSONRTE-Added-Videos-Features](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt09af21d90864906c/64cb9f901d183c7e82d1d7d4/YouTube-JSONRTE-Added-Videos-Features.png)  
        Edit action generates a prompt modal for updating the embed URL. Click the **Update** button to edit the URL.  
        ![YouTube-JSONRTE-Edit-Modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt736be32db91348ab/64cb9f901d183ce0ead1d7d0/YouTube-JSONRTE-Edit-Modal.png)
    8.  After adding the video(s), **Save** and **Publish** your entry.
