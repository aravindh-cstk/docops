---
title: "JW Player App Installation Guide"
description: "The Contentstack Marketplace JW Player app fetches digital assets (videos) from your JW Player account into Contentstack entries."
url: /marketplace/jw-player
uid: blt3862a26e534d4cc5
---

# JW Player App Installation Guide

## JW Player App Installation Guide

JW Player is a media player for streaming audio and video on websites and mobile devices. It provides an easy-to-use interface to upload, manage, store, deliver, and publish your media files.

Its simple drag-and-drop feature lets you quickly organize and publish your videos and audio on the web or mobile devices. It supports various file formats, including MP4, WebM, Ogg, and HLS, and the playback of DRM-protected content.

The app also enables users to watch live streams, playlists, and videos in full-screen mode and access advanced playback options such as captions, speed control, and picture-in-picture.

Contentstack Marketplace lets you install and use the JW Player application within your stack to fetch and display videos from the JW Player account within your entries.

## Prerequisites

-   [JW Player account](https://dashboard.jwplayer.com/login)
-   [Contentstack account](https://www.contentstack.com/login/)
-   Access to the Contentstack Organization/Stack as the Owner/Admin

Let's follow this step-by-step guide to install and configure the JW Player app within your stack.

## Steps for Execution

1.  [Retrieve the Credentials from the JW Player Account](#retrieve-the-credentials-from-the-jw-player-account)
2.  [Install and Configure the JW Player app in Contentstack Marketplace](#install-and-configure-the-jw-player-app-in-contentstack-marketplace)
3.  [Use the JW Player app within your Stack Entry](#use-the-jw-player-app-within-your-stack-entry)

1.  ## Retrieve the Credentials from the JW Player Account

    To get the access token for JW Player, follow the steps given below:

    1.  Log in to the [JW Player account](https://dashboard.jwplayer.com/login) using your JW Player account credentials.
    2.  Click the gear icon in the top-right corner of the JW Player dashboard, and then click **API Credentials**.  
        ![JW-Player-Dashboard](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltedd3fde93d57fa8f/657fff28a8ee436146196767/JW-Player-Dashboard.png)
    3.  Now, click **Show Credentials** to view and copy the API Key.  
        ![JW-Player-Dashboard-Show-Credentials](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta52be2581aa4b3e1/657fff28dd00676f2a203b37/JW-Player-Dashboard-Show-Credentials.png)
    4.  To generate the **Secret**, click **Add**.  
        ![JW-Player-Dashboard-Add-Credentials](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7bd42257360bd74f/657fff2813cde949901fdb84/JW-Player-Dashboard-Add-Credentials.png)
    5.  In the **API Key** modal, provide **Nam**e, select **User Role** from the dropdown, set the **Properties** checkboxes, and click **Save**.  
        ![JW-Player-Dashboard-Save-Credentials](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1c2c4fd589179f8e/657fff1941ecfd1f4ade21d1/JW-Player-Dashboard-Save-Credentials.png)
    6.  Go to the recently created API Key and click **Show Secret** to view and copy the client secret.  
        ![JW-Player-Dashboard-Show-Secret](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbb392ccf0286b278/657fffb1dd0067efe1203b3f/JW-Player-Dashboard-Show-Secret.png)
2.  ## Install and Configure the JW Player app in Contentstack Marketplace

    Follow the steps given below to install the application in Contentstack.

    1.  Log in to your [Contentstack account](https://www.contentstack.com/login/).
    2.  Navigate to the “App Switcher” icon in the top-right corner and click **Marketplace**.![Contentstack-App-Switcher-Marketplace](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt47c618781b542b64/68ee96ad6bfd93c9913fee8a/Contentstack-App-Switcher-Marketplace.png)
    3.  Click **Apps** from the left panel.
    4.  Within the Marketplace, you can see all the available apps. Hover over the **JW Player** app and click **Install**.  
        ![JW_app_Install.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am933bb31ed3c2666d/91850bb86dc9abd113cf8f47/JW_app_Install.png?locale=en-us)  

    5.  In the pop-up window, select the stack where you want to install the JW Player app, accept the terms of service, and click the **Install** button.  
        ![JW-Player-Install-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt31d36cf5943d9a3c/657fffb17d6d2eaf34b8a875/JW-Player-Install-App.png)
    6.  On the **Configuration** screen, enter the following details:
        1.  **JW Player Credentials**: Enter the **API Key** and **Client Secret** retrieved from your JW Player account in [step 1](#retrieve-the-credentials-from-the-jw-player-account).
        2.  **Choose the JW Player Keys to Save in Entry**: Choose how to save the data fetched from the JW Player account in Contentstack entries.

            1.  If you select the **All Fields** option, you can select only a limited number of videos in the entry.
            2.  For **Custom Fields**, you can search and add specific JW Player Keys you want to save in entries.

            ![JW-Player-Configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt983071f8e2015251/65b95260fd23e502397da39b/JW-Player-Configuration.png)  
            If you select **Custom Fields** then the **JW Player Keys** dropdown appears. By default, **mediaid**, **title**, **image**, **pubdate**, **description**, and **link** options are already selected inside the dropdown. If you want to create a new key, click the **\+ New Key Field** option.  
            ![JW-Player-Configuration-Add-New-Key-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf60a1d262f31373d/657ffe69b05b9e290bd6fdd3/JW-Player-Configuration-Add-New-Key-Field.png)  
            In the **Add Key Path** modal, enter the **JW Player Key Path** and click the **Create** or **Create and Apply** button to create a new key.  
            ![JW-Player-Configuration-Create-New-Key-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2725701b9c18a3b8/657ffe691f89523a31910385/JW-Player-Configuration-Create-New-Key-Field.png)
    7.  On the **UI Locations** tab, you can see the predefined app locations. You can use the toggle button corresponding to each UI location to enable or disable it based on your requirements. ![JW-Player-UI-Locations](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt775fa237a44acd09/65b9526ada0f036dca5c67bf/JW-Player-UI-Locations.png)
    8.  If the webhook is enabled for your app, you can view the webhook logs under the **Webhook** tab.
    9.  **Additional Resource:** For more information on UI location and webhooks, please refer to the [Installed Apps](/docs/marketplace/installed-apps#view-edit-configuration-ui-locations-and-webhook) guide.

    10.  Click the **Save** button.
    11.  Click **Open Stack** to start using the JW Player application.
3.  ## Use the JW Player app within your Stack Entry

    To use the JW Player application within an entry of your stack, follow the steps given below:

    1.  Go to your stack, click the [**Content Models**](/docs/marketplace/about-content-models) icon in the left navigation panel, and click the **\+ New Content Type** button.
    2.  [Create a content type](/docs/headless-cms/create-a-content-type) by adding relevant details as displayed below:  
        ![JW-Player-Content-Type](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc7e37c34409ef61b/657ffe694135c45d0356696b/JW-Player-Content-Type.png)
    3.  There are two ways to use the JW Player application in your entry:

        1.  [Custom Field](#steps-to-use-the-jw-player-application-using-a-custom-field)
        2.  [JSON Rich Text Editor Field](#steps-to-use-the-jw-player-application-using-a-json-rich-text-editor-field)


    5.  ### Steps to use the JW Player application using a Custom field:

        1.  In the **Content Type Builder** page, add a [Custom](/docs/headless-cms/custom/) field in your content type by clicking the **Insert a field** link represented by a **+** sign.
        2.  Under **Select Extension/App**, select **JW Player**, and click the **Proceed** button.  
            ![JW-Player-Add-App-In-Custom-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4293e909df212981/657ffe691c5d7c78f50efa64/JW-Player-Add-App-In-Custom-Field.png)Change the **Display Name** of the custom field to your choice, for example, **JW Player Custom Field**. Optionally, you can add **Help Text** and **Instruction Value** for your custom field. This adds the JW Player app in the custom field.  
            ![JW-Player-Added-App-In-Custom-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb2bb65e99468a807/657ffe69c4b620467efb4989/JW-Player-Added-App-In-Custom-Field.png)
        3.  After adding the app in a custom field, click **Save** or **Save and Close** to save your changes.
        4.  To use the JW Player app, create an entry for this newly created content type. To do this, in the left navigation panel, navigate to the **Entries** page, click **\+ New Entry** to [create a new entry](/docs/headless-cms/create-an-entry) for the above content type, and then click **Proceed**.  
            You can see the JW Player app��s custom field on your entry page as shown below:  
            ![JW-Player-Custom-Field-Sample-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdcce3e28e04b52d1/657fff1713cde947331fdb80/JW-Player-Custom-Field-Sample-Entry.png)
        5.  Click the **\+ Choose Video(s)** button.  
            ![JW-Player-Custom-Field-Choose-Videos](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1cfa3e6eb9d05f8f/657ffe6abb2e10109800df82/JW-Player-Custom-Field-Choose-Videos.png)
        6.  Select the video(s) from your JW Player selector page and click the **Add Videos(s)** button to add them to your entry.  
            ![JW-Player-Selector-Page](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt39d0b385d41b6fcf/657fffb6a2c41f3451dadf6a/JW-Player-Selector-Page.png)

            **Note:** You can add multiple videos in one go.

            You can search for videos on the JW Player selector page.  
            ![JW-Player-Selector-Page-Search](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1e4ed1d756593267/657fffb62d26121d99e7203a/JW-Player-Selector-Page-Search.png)Also, you can view the videos in a **Comfortable** or **Compact** view. By default, the **Comfortable** view is selected.  
            Hover over the video on the JW Player selector page, and you can see the **Open in JW Player** option to go directly to the JW Player platform.  
            ![JW-Player-Selector-Page-Open](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfac12fdb30d62057/657fffb6a2c41f246adadf6e/JW-Player-Selector-Page-Open.png) The selected video(s) are referenced in the thumbnail view within your entry.  
            ![JW-Player-Custom-Field-Thumbnail-View](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltefee9880fdf4b390/657fff1b1c5d7c15600efa6d/JW-Player-Custom-Field-Thumbnail-View.png)Select the list view option from the dropdown to view the video(s) in the list view.  
            ![JW-Player-Custom-Field-Select-View](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb7a461fc50dd2122/657fff1a2d261260a3e7202f/JW-Player-Custom-Field-Select-View.png)The selected video(s) are referenced in the list view within your entry .  
            ![JW-Player-Custom-Field-List-View](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3542c1c53228fb08/657fff16b0fbcb3bef624cc4/JW-Player-Custom-Field-List-View.png)
        7.  Hover over the video to access these features:

            1.  Click the **Reorder** icon to drag and reorder the video.
            2.  Click the **Open in JW Player** icon to open the video on the JW Player platform.
            3.  Click the **Remove** icon to remove the video.

            **Thumbnail View**

            ![JW-Player-Custom-Field-Thumbnail-View-Features](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltda28ead5257a89c5/657fff1bd082f7849e25d21b/JW-Player-Custom-Field-Thumbnail-View-Features.png)

            **List View**

            ![JW-Player-Custom-Field-List-View-Features](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbfbf0463e3af96c6/657fff190543c525d28ef54d/JW-Player-Custom-Field-List-View-Features.png)
        8.  After adding the video(s), **Save** and **Publish** your entry.

    6.  ### Steps to use the JW Player application using a JSON Rich Text Editor field:

        1.  In the **Content Type Builder** page, add a [JSON Rich Text Editor](/docs/headless-cms/about-json-rich-text-editor/) field in your content type by clicking the **Insert a field** link represented by a **+** sign.
        2.  Under **Select JSON RTE Plugin(s)**, select **JW Player**, and then click **Add Plugin(s)**.  
            ![JW-Player-Add-App-In-JSONRTE](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt28a53a46b75bd2b1/657ffe694a745b4f9a584377/JW-Player-Add-App-In-JSONRTE.png) This adds JW Player in the JSON Rich Text Editor field.  
            ![JW-Player-Added-App-In-JSONRTE](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcde829293a9bdf15/657ffe6913cde9e01f1fdb77/JW-Player-Added-App-In-JSONRTE.png)
        3.  After adding the app in a JSON Rich Text Editor field, click **Save** or **Save and Close** to save your changes.
        4.  To use the JW Player app as a JSON RTE plugin, create an entry for this content type. In the left navigation panel, navigate to the **Entries** page, click **\+ New Entry** to create a new entry for the above content type, and then click **Proceed**.  
            You will see the JW Player app icon inside the JSON RTE field in your entry page as shown below:  
            ![JW-Player-JSONRTE-Sample-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta72bbbf86896935e/657fffb11f8952b516910392/JW-Player-JSONRTE-Sample-Entry.png)
        5.  Click the **JW Player** app icon.  
            ![JW-Player-JSONRTE-Click-Icon](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2fa998a3f758bd77/657fffb14a745b7c7c584385/JW-Player-JSONRTE-Click-Icon.png)
        6.  Select the video(s) from your JW Player selector page and click the **Add Videos(s)** button to add them to your entry.  
            ![JW-Player-Selector-Page](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt39d0b385d41b6fcf/657fffb6a2c41f3451dadf6a/JW-Player-Selector-Page.png)

            **Note:** You can add multiple videos in one go.

            You can search for videos on the JW Player selector page.  
            ![JW-Player-Selector-Page-Search](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1e4ed1d756593267/657fffb62d26121d99e7203a/JW-Player-Selector-Page-Search.png)Also, you can view the videos in a **Comfortable** or **Compact** view. By default, the **Comfortable** view is selected.  
            Hover over the video on the JW Player selector page, and you can see the **Open in JW Player** option to go directly to the JW Player platform.  
            ![JW-Player-Selector-Page-Open](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfac12fdb30d62057/657fffb6a2c41f246adadf6e/JW-Player-Selector-Page-Open.png)The videos you selected get referenced within your entry:![JW-Player-JSONRTE-Videos](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt24888fd34a1b8238/657fffb4c3fb278c6419ad11/JW-Player-JSONRTE-Videos.png)
        7.  To resize the video, drag the corner and adjust the size as required. Hover over the video to access these features:
            1.  Click the **Preview** icon to preview the video on the JW Player platform.
            2.  Click the **Edit** icon to edit the video.
            3.  Click the **Remove** icon to remove the video.
        8.  ![JW-Player-JSONRTE-Videos-Features](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbd117c65a0d2b74c/657fffb51f89521d7c910396/JW-Player-JSONRTE-Videos-Features.png)
        9.  **Additional Resource:** You can use alignment and inline asset features to edit the video placement within the [JSON Rich Text Editor](/docs/headless-cms/about-json-rich-text-editor/) field.

        10.  After adding the video(s), **Save** and **Publish** your entry.
