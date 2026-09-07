---
title: "Vimeo App Installation Guide"
description: "The Contentstack Marketplace Vimeo app fetches digital assets (videos) from your Vimeo account into Contentstack entries."
url: /marketplace/vimeo
uid: blt49bc27b5c539ebaa
---

# Vimeo App Installation Guide

## Vimeo App Installation Guide

Vimeo is a video-sharing platform that lets you upload, share, and view high-quality videos. It focuses on providing a creative community for filmmakers, artists, and professionals to showcase their work. Vimeo offers various tools and features to help creators manage and distribute content while maintaining a visually appealing and ad-free environment.

Contentstack Marketplace lets you install the Vimeo application and use it within your stack to fetch and display videos from the Vimeo account within your entries.

## Prerequisites

-   [Vimeo account](https://vimeo.com/join)
-   [Contentstack account](https://www.contentstack.com/login/)
-   Access to the Contentstack Organization/Stack as the Owner/Admin

Let's follow this step-by-step guide to install and configure the Vimeo app within your stack.

## Steps for Execution

1.  [Retrieve the Access Token from the Vimeo Account](#retrieve-the-access-token-from-the-vimeo-account)
2.  [Install and Configure the Vimeo app in Contentstack Marketplace](#install-and-configure-the-vimeo-app-in-contentstack-marketplace)
3.  [Use the Vimeo app within your Stack Entry](#use-the-vimeo-app-within-your-stack-entry)

1.  ## Retrieve the Access Token from the Vimeo Account

    To get the access token for Vimeo, follow the steps given below:

    1.  Log in to the [Vimeo account](https://vimeo.com/join) using your Vimeo account credentials.

        **Note:** To add videos to your Vimeo account, click the **Upload** button. Then, on the next screen, you can drag-and-drop the videos, or click the **Choose files** button, select the videos, and add them to your account.

    2.  Now, go to Vimeo’s [developer](https://developer.vimeo.com/) page and click the **\+ Create an app** button at the top right corner.  
        ![Vimeo-Account-Developer-Create-An-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt49a920bb9b3953bc/651f1abe96bebf739ca05fae/Vimeo-Account-Developer-Create-An-App.png)
    3.  Enter the **App name** and a **Brief description** of your app. Please note that these are mandatory fields. Then, choose who can access your app, accept the terms and conditions, and click **Create App**.![Vimeo-Account-Developer-Create-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt51b0b8ac59aa65de/651f1abe024b46b698de3a6a/Vimeo-Account-Developer-Create-App.png)  
        The app gets created successfully.
    4.  Now, open your newly created app. Click the **Authentication** tab in the left navigation panel and select **Generate Access Token**.  
        To get the access token, select the **Authenticated (you)** option. Under the **Scopes** section, select **Private** and click the **Generate** button.  
        ![Vimeo-Account-Generate-Token](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1d32db256fdce467/651f1abe024b4678abde3a6e/Vimeo-Account-Generate-Token.png)  
        The access token is now generated. Copy the **Vimeo Access Token** to your clipboard to use in [Step 2](#install-and-configure-the-vimeo-app-in-contentstack-marketplace).  
        ![Vimeo-Access-Token](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt31d13bedd5446843/651f1abe705ef3ecfe48b35a/Vimeo-Access-Token.png)

        **Additional Resource:** To learn more about access tokens in Vimeo, refer to the [Generate an access token](https://developer.vimeo.com/api/guides/start#generate-access-token) documentation.

2.  ## Install and Configure the Vimeo app in Contentstack Marketplace

    Follow the steps given below to install the application in Contentstack.

    1.  Log in to your [Contentstack account](https://www.contentstack.com/login/).
    2.  Navigate to the “App Switcher” icon in the top-right corner and click **Marketplace**.![Contentstack-App-Switcher-Marketplace](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt47c618781b542b64/68ee96ad6bfd93c9913fee8a/Contentstack-App-Switcher-Marketplace.png)
    3.  Click **Apps** from the left panel.
    4.  Within the Marketplace, you can see all the available apps. Hover over the **Vimeo** app and click **Install**.  
        ![Vimeo_app_Install.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/amcf9b1fa3c172c61f/1cf91fefd2604a6a242641dc/Vimeo_app_Install.png?locale=en-us)  

    5.  In the pop-up window, select the stack where you want to install the Vimeo app, accept the terms and conditions, and click the **Install** button. ![Vimeo-App-Install.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltecc048333de7e1a3/661cd55a0aca6b1dcb3272e9/Vimeo-App-Install.png)
    6.  On the **Configuration** screen, enter the following details:
        1.  **Vimeo Access Token**: Enter the **Vimeo Access Token** retrieved from your Vimeo Account in [Step 1](#retrieve-the-access-token-from-the-vimeo-account).
        2.  **Folder Settings**: Folder settings allows you to fetch videos directly from specific folders. To enable the Folder settings option, click the toggle button. You will see the **Get Folders** button. Click on it to fetch all folders and then select them in the dropdown.

            **Note:** Enabling the Folder settings will not impact the videos already stored in the entry.

        3.  **Choose the Vimeo Keys to Save in Entry**: Choose how to save the data fetched from the Vimeo account in Contentstack entries.

            1.  If you select the **All Fields** option, you can select only a limited number of videos in the entry.
            2.  For **Custom Fields**, you can search and add specific Vimeo Keys you want to save in entries.

            **Warning:** When you change the settings from **All Fields** to **Custom Fields**, and vice versa, any existing assets will follow the old configuration settings, whereas newly added assets in the entry will store the data according to the updated configuration settings. This is applicable on Custom and JSON RTE fields.

            ![Vimeo-Configuration.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltca3edb9109b1a42b/661cd55a4906456cc803981f/Vimeo-Configuration.png)  
            If you select **Custom Fields** then the **Vimeo Keys** dropdown appears. By default, **uri**, **name**, **link**, **pictures.base\_link**, and **description** options are already selected inside the dropdown. If you want to create a new key, click the **\+ New Key Field** option.  
            ![Vimeo-Configuration-Add-New-Key-Field.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2294bbbc397a90cd/661cd55a490645ce3303981b/Vimeo-Configuration-Add-New-Key-Field.png)

            In the **Add Key Path** modal, enter the **Vimeo Key Path** and click the **Create** or **Create and Apply** button to create a new key.![Vimeo-Configuration-Add-Key-Path.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf56c003e28bcd4ae/661cd55a4c47356f39ee4bcc/Vimeo-Configuration-Add-Key-Path.png)

    7.  On the **UI Locations** tab, you can see the predefined app locations. You can use the toggle button corresponding to each UI location to enable or disable it based on your requirements. ![Vimeo-UI-Locations.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb264f54f0688befe/661cd5961dd1e9de89c6ad66/Vimeo-UI-Locations.png)
    8.  Click the **Save** button.
    9.  If the webhook is enabled for your app, you can view the webhook logs under the **Webhook** tab.

        **Additional Resource:** For more information on UI location and webhooks, please refer to the [Installed Apps](/docs/marketplace/installed-apps#view-edit-configuration-ui-locations-and-webhook) guide.

    10.  Click **Open Stack** to start using the Vimeo application.
3.  ## Use the Vimeo app within your Stack Entry

    **Note**: Before using the Vimeo application, you will need the following browser settings:

    -   Pop-ups should be enabled.
    -   Third-party cookies should be enabled.

    To use the Vimeo application within an entry of your stack, follow the steps given below:

    1.  Go to your stack, click the **Content Models** icon in the left navigation panel, and click the **\+ New Content Type** button.
    2.  [Create a content type](/docs/headless-cms/create-a-content-type) by adding relevant details as displayed below: ![Vimeo-Content-Type.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta2ffdbd8e1670799/661cd55aff37646cf9691938/Vimeo-Content-Type.png)

    There are two ways to use the Vimeo application in your entry:

    1.  [Custom Field](#steps-to-use-the-vimeo-application-using-a-custom-field)
    2.  [JSON Rich Text Editor Field](#steps-to-use-the-vimeo-application-using-a-json-rich-text-editor-field)

    ### Steps to use the Vimeo application using a Custom field

    1.  In the **Content Type Builder** page, add a [Custom](/docs/headless-cms/custom/) field in your content type by clicking the **Insert a field** link represented by a **+** sign.
    2.  Under **Select Extension/App**, select **Vimeo**, and click the **Proceed** button.  
        ![Vimeo-Custom-Field-Add-App.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltef9267f65d9935b3/661cd55a36f462b16844eb88/Vimeo-Custom-Field-Add-App.png)  
        Change the **Display Name** of the custom field to your choice, for example, **Vimeo Custom Field**. Optionally, you can add **Help Text** and **Instruction Value** for your custom field. This adds the Vimeo app in the custom field.  
        ![Vimeo-Custom-Field-Added-App.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte94fbb14592dfac5/661cd55b188d3509c32da256/Vimeo-Custom-Field-Added-App.png)
    3.  After adding the app in a custom field, click **Save** or **Save and Close** to save your changes.
    4.  To use the Vimeo app, create an entry for this newly created content type. To do this, in the left navigation panel, navigate to the **Entries** page, click **\+ New Entry** to [create a new entry](/docs/headless-cms/create-an-entry) for the above content type, and then click **Proceed**.  
        You can see the Vimeo app’s custom field on your entry page as shown below:  
        ![Vimeo-JSONRTE-Sample-Entry.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta7c36f3e1d767c1b/661cd587188d352be72da25c/Vimeo-JSONRTE-Sample-Entry.png)
    5.  Click the **\+ Choose Video(s)** button.  
        ![Vimeo-Custom-Field-Choose-Videos-Button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7eeadd61f54241f4/661cd5869cbc2a6311a9c2b3/Vimeo-Custom-Field-Choose-Videos-Button.png)
    6.  Select the video(s) from your Vimeo selector page and click the **Add Videos(s)** button to add them to your entry.  
        ![Vimeo-Selector-Page-Add-Videos.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt25f23a957bbb9405/661cd596a98886e192e0924e/Vimeo-Selector-Page-Add-Videos.png)

        **Note:** You can add multiple videos in one go.

        You can filter videos based on folders. By default, the folders configured at the time of installation in [Step 2](#install-and-configure-the-vimeo-app-in-contentstack-marketplace) are selected.![Vimeo-Selector-Page-Select-Folder.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8bdcc6d4f6f48bf8/661cd5964c47356f83ee4bd0/Vimeo-Selector-Page-Select-Folder.png)

        You can search for videos on the Vimeo selector page.

        ![Vimeo-Selector-Page-Search.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt30e620f249223c5c/661cd5961e527a1b4a3b8799/Vimeo-Selector-Page-Search.png)  
        Also, you can view the videos in a **Comfortable** or **Compact** view. By default, the **Comfortable** view is selected.  
        Hover over the video on the Vimeo selector page. You will see the **Open in Vimeo** option to view the video directly in the Vimeo platform.  
        ![Vimeo-Selector-Page-Open-In-Vimeo.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbddf8e3105bfccae/661cd596490645275d039827/Vimeo-Selector-Page-Open-In-Vimeo.png)  
        The videos you insert get referenced within your entry in the thumbnail view, by default.  
        ![Vimeo-Custom-Field-Added-Videos-In-Thumbnail-View.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5a16dcbd1c5e0ac5/661cd59631ff3a75baa4121b/Vimeo-Custom-Field-Added-Videos-In-Thumbnail-View.png)  
        To change the default view, select List from the drop-down menu as shown in the following screenshot:  
        ![Vimeo-Custom-Field-Added-Videos-View.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3516feb807a64efd/661cd587490645bfa7039823/Vimeo-Custom-Field-Added-Videos-View.png)  
        The videos you insert get referenced within your entry in the list view.![Vimeo-Custom-Field-Added-Videos-In-List-View.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9e49516a331a044d/661cd55a3c817dc91ee88bee/Vimeo-Custom-Field-Added-Videos-In-List-View.png)
    7.  Hover over the video to access these features:

        1.  Click the **Reorder** icon to drag and reorder the video.
        2.  Click the **Open in Vimeo** icon to open the video on the Vimeo platform.
        3.  Click the **Remove** icon to remove the video.

        **Thumbnail View**

        ![Vimeo-Custom-Field-Added-Videos-In-Thumbnail-View-Features.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt27bf7c399f1f135e/661cd5871c390d6e6f98eb57/Vimeo-Custom-Field-Added-Videos-In-Thumbnail-View-Features.png)

        **List View**

        ![Vimeo-Custom-Field-Added-Videos-In-List-View-Features.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt10c1ce189b6ac567/661cd55b1c390d23c398eb4f/Vimeo-Custom-Field-Added-Videos-In-List-View-Features.png)
    8.  After adding the video(s), **Save** and **Publish** your entry.

    ### Steps to use the Vimeo application using a JSON Rich Text Editor field:

    1.  In the **Content Type Builder** page, add a [JSON Rich Text Editor](/docs/headless-cms/about-json-rich-text-editor/) field in your content type by clicking the **Insert a field** link represented by a **+** sign.
    2.  Under **Select JSON RTE Plugin(s)**, select **Vimeo**, and then click **Add Plugin(s)**.  
        ![Vimeo-JSONRTE-Add-Plugin.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt986f17e2b4ed3ce0/661cd58720797a7a43b05f17/Vimeo-JSONRTE-Add-Plugin.png)  
        This adds Vimeo in the JSON Rich Text Editor field.  
        ![Vimeo-JSONRTE-Added-Plugin.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5bdbe804f6a57e10/661cd587a988868b3de09249/Vimeo-JSONRTE-Added-Plugin.png)
    3.  After adding the app in a JSON Rich Text Editor field, click **Save** or **Save and Close** to save your changes.
    4.  To use the Vimeo app as a JSON RTE plugin, create an entry for this content type. You will see the Vimeo app icon inside the JSON RTE field in your entry page as shown below:  
        ![Vimeo-JSONRTE-Sample-Entry.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta7c36f3e1d767c1b/661cd587188d352be72da25c/Vimeo-JSONRTE-Sample-Entry.png)
    5.  Click the **Vimeo** app icon.  
        ![Vimeo-JSONRTE-App-Icon.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8ab2dc95f95af047/661cd5879cbc2a8c9ca9c2b7/Vimeo-JSONRTE-App-Icon.png)
    6.  Select the video(s) from your Vimeo selector page and click the **Add Videos(s)** button to add them to your entry.  
        ![Vimeo-Selector-Page-Add-Videos.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt25f23a957bbb9405/661cd596a98886e192e0924e/Vimeo-Selector-Page-Add-Videos.png)

        **Note:** You can add multiple videos in one go.

        You can filter videos based on folders. By default, the folders configured at the time of installation in [Step 2](#install-and-configure-the-vimeo-app-in-contentstack-marketplace) are selected.  
        ![Vimeo-Selector-Page-Select-Folder.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8bdcc6d4f6f48bf8/661cd5964c47356f83ee4bd0/Vimeo-Selector-Page-Select-Folder.png)  
        You can search for videos on the Vimeo selector page.![Vimeo-Selector-Page-Search.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt30e620f249223c5c/661cd5961e527a1b4a3b8799/Vimeo-Selector-Page-Search.png)

        Also, you can view the videos in a **Comfortable** or **Compact** view. By default, the **Comfortable** view is selected.  
        Hover over the video on the Vimeo selector page, and you can see the **Open in Vimeo** option to go directly to the Vimeo platform.  

        ![Vimeo-Selector-Page-Open-In-Vimeo.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbddf8e3105bfccae/661cd596490645275d039827/Vimeo-Selector-Page-Open-In-Vimeo.png) The videos you selected get referenced within your entry:  
        ![Vimeo-JSONRTE-Videos-Added.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt15ba23e2d34b2965/661cd588188d35afd62da260/Vimeo-JSONRTE-Videos-Added.png)  

    7.  To resize the video, drag the corner and adjust the size as required. Hover over the video to access these features:

        1.  Click the **Open in Vimeo** icon to preview the video on the Vimeo platform.
        2.  Click the **Edit** icon to edit the video.
        3.  Click the **Remove** icon to remove the video.

        ![Vimeo-JSONRTE-Videos-Added-Features.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3d1a51030016d28d/661cd58836f4623fb544eb8c/Vimeo-JSONRTE-Videos-Added-Features.png)

        **Additional Resource:** You can use alignment and inline asset features to edit the video placement within the [JSON Rich Text Editor](/docs/headless-cms/about-json-rich-text-editor/) field.

    8.  After adding the video(s), **Save** and **Publish** your entry.
