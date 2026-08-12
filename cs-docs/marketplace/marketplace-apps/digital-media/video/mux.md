---
title: "Mux App Installation Guide"
description: "Install the Mux app from the Contentstack Marketplace to upload videos, configure playback settings, and manage public or signed assets directly inside Contentstack entries."
url: /marketplace/mux
---

# Mux App Installation Guide

## Mux App Installation Guide

Mux is a video infrastructure platform that provides APIs for encoding, streaming, hosting, and delivering on-demand and live video content at scale.

The Mux App integrates Mux's video infrastructure directly into Contentstack, allowing you to seamlessly upload, manage, and deliver videos, including configuration for public or signed playback, all from within your Contentstack entries.

## Prerequisites

-   [Mux account](https://dashboard.mux.com/login)
-   [Contentstack account](https://www.contentstack.com/login)
-   Access to the Contentstack Organization/Stack as the Owner/Admin

Follow this step-by-step guide to install and configure Mux within your stack.

## Steps for Execution

1.  [Retrieve your credentials from Mux](#retrieve-your-credentials-from-mux)
2.  [Install and configure the Mux app in Marketplace](#install-and-configure-the-mux-app-in-marketplace)
3.  [Use the Mux app within your stack](#use-the-mux-app-within-your-stack)

1.  ## Retrieve your Credentials from Mux
    
    To get the credentials for Mux, log in to the [Mux account](https://dashboard.mux.com/login). Create a new **Environment** or select an existing one in your organization, and click **Settings** from the left-navigation.
    
    ![Mux-Get-Credentials-Environment-Settings](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfefa4f425dca20f6/69c5a7c0a31e40078fbb9bce/Mux-Get-Credentials-Environment-Settings.png)
    
    Then, follow the steps given below:
    
    ### Get Access Token ID & Secret Key
    
    1.  Navigate to **Access Tokens** from the left navigation, and click the **Create token** button.![Mux-Get-Credentials-Create-Access-Token](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd2ee4fe42acc140d/69c5a7bfb4aabb4583a18516/Mux-Get-Credentials-Create-Access-Token.png)
    2.  In the **Create access token** modal, enter the **Name**, provide **Permissions**, and click **Save**.![Mux-Get-Credentials-Create-Access-Token-Modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8b273a4f85c28902/69c5a7bfdfb8e0d242df9bfe/Mux-Get-Credentials-Create-Access-Token-Modal.png)
        
        **Tip:** Grant **System > Write** permission to easily access the signed (private) assets.
        
    3.  Copy the **Token ID** and **Secret Key** from the **Save token** modal, and click **Done**.![Mux-Get-Credentials-Access-Token-And-Secret-Key](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt959877866a7d2ac8/69c5a7c0b4aabb3da3a1851a/Mux-Get-Credentials-Access-Token-And-Secret-Key.png)
    4.  You can fill the **Token ID** as **Access Token ID** and **Secret Key** as **Mux Secret Key** during app configuration in [step 2](#install-and-configure-the-mux-app-in-marketplace).
    
    ### Get Webhook Signing Secret
    
    1.  Navigate to **Webhooks** from the left navigation, and click the **Create webhook** button.![Mux-Get-Credentials-Create-Webhook](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd2d2f141cc277bb2/69c5a7bf7e9d0761df282dd3/Mux-Get-Credentials-Create-Webhook.png)
    2.  In the **Create webhook** modal, provide the **URL (Webhook URL)**, and click **Save**.![Mux-Get-Credentials-Create-Webhook-Modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta6d7a6b3d76f50d7/69c5a7bfb70bd96d418bb063/Mux-Get-Credentials-Create-Webhook-Modal.png)
        
        **Note:** You will get the system-generated **Webhook URL** in [step 2](#install-and-configure-the-mux-app-in-marketplace) during app configuration.
        
    3.  Copy the **SECRET** to use in the **Webhook Signing Secret** field in [step 2](#install-and-configure-the-mux-app-in-marketplace) to verify the connection.![Mux-Get-Credentials-Copy-Webhook-Secret](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt77df48e75754f99d/69c5a7bfc24262d27f5b3a20/Mux-Get-Credentials-Copy-Webhook-Secret.png)
2.  ## Install and Configure the Mux App in Marketplace
    
    To install the app, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps below:
    
    1.  Navigate to the “App Switcher” icon in the top-right corner and click **Marketplace**.![Contentstack-App-Switcher-Marketplace](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt47c618781b542b64/68ee96ad6bfd93c9913fee8a/Contentstack-App-Switcher-Marketplace.png)
    2.  Click **Apps** from the left panel.
    3.  Within the Marketplace, you can see the available apps. Hover over the **Mux** app and click **Install**.![Mux-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt029ec2c818dd10e2/69cbfb2b5efea12ba3438f48/Mux-App.png)
    4.  In the pop-up window, select the stack where you want to install the Mux app, accept the **Terms of Service**, and click the **Authorize & Install** button.![Mux-App-Authorize-And-Install](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta4fada2e49279723/69c5a7bf8434bf2cbde1b98e/Mux-App-Authorize-And-Install.png)
    5.  On the **Configuration** screen, perform the following steps:
        1.  To connect Contentstack with your Mux account, you need to authenticate first. Provide the **Mux Access Token ID** and **Mux Secret Key** retrieved in [step 1](#retrieve-your-credentials-from-mux). After entering the credentials, click **Authenticate** to verify and establish the connection.![Mux-Configuration-Authentication](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf3c0837e3d934ea3/69c845dcff7047849610e901/Mux-Configuration-Authentication.png)
            
            **Warning:** Enter valid credentials. If you enter an incorrect **Access Token ID** or **Secret Key**, the app fails authentication and does not function properly.
            
            Once authenticated, you can configure upload settings, webhook details, and playback options for your videos.
            
        2.  In the **Uploads & Webhooks** section, click the **Enable Uploads** toggle to allow users to upload videos directly from entries.![Mux-Configuration-Uploads-And-Webhooks-Enable](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt82f94dcbf9b324ce/69c845ddb327b8394a03cc26/Mux-Configuration-Uploads-And-Webhooks-Enable.png)
            
            After enabling uploads:
            
            1.  Set the **Max Upload Limit** from **1 to 200**.![Mux-Configuration-Uploads-And-Webhooks-Max-Assets-Limit](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt98f3cf41005bf75f/69c845dea41ecb9213b8ea8c/Mux-Configuration-Uploads-And-Webhooks-Max-Assets-Limit.png)
                
                **Note:** To set the **Max Upload Limit** above 200, refer to the [Set Advanced Config Object](#set-advanced-config-object-optional) section.
                
            2.  To configure the webhooks in your Mux app, copy the system-generated **Webhook URL** that receives Mux webhook events, and use it to fetch the **Webhook Signing Secret**.![Mux-Configuration-Uploads-And-Webhooks-URL](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltab406e8cd971850c/69c845ddb4aabb8406a18d26/Mux-Configuration-Uploads-And-Webhooks-URL.png)
                
                **Note:** To retrieve the **Webhook Signing Secret**, refer to the [Get Webhook Signing Secret](<#get-webhook-signing-secret >) section.
                
            3.  Paste the **Webhook Signing Secret** to verify the connection. This configuration allows Mux to send asset events (such as asset creation and processing updates) back to Contentstack and update entry versions automatically.![Mux-Configuration-Uploads-And-Webhooks-Signed-Secret](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5a9596c31aec980d/69c845dda0fd9e67c10f3e37/Mux-Configuration-Uploads-And-Webhooks-Signed-Secret.png)
                
                **Warning:** Upload functionality does not work unless you configure the webhook correctly in your Mux account.
                
        3.  In the **Manage Videos** section, select which specific roles (e.g., **Admin**, **Developer**, or **Content Manager**) are authorized to manage video assets.
            
            1.  **Roles that can delete videos**: Allow users to remove existing videos.
            2.  **Roles that can select, upload, or edit videos**: Allow users to add, select, modify, or update video assets.
            
            ![Mux-Configuration-Manage-Videos](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9df754453aa41fac/69cbfae4dfb8e02eaadfb1ca/Mux-Configuration-Manage-Videos.png)
        4.  In the **Playback** section, choose how videos are accessed:
            
            1.  **Public**: Anyone with the playback URL can access the video.
            2.  **Signed (Private)**: The video requires a signed playback token and remains accessible for a limited duration.
            
            **Note:**
            
            -   Select the playback option that matches your Mux playback policy. If you choose **Signed (Private)**, the app generates and manages playback tokens automatically.
            -   If Mux Authentication credentials do not have **System > Write** permissions, the **Signed (Private)** asset option is disabled.
            
            ![Mux-Configuration-Playback](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte2b2f38b03489794/69c845dc310e346ece5f1699/Mux-Configuration-Playback.png)
        5.  **Choose the Mux Keys to Save in Entry**: Choose how to save the data fetched from the Mux account in Contentstack entries.
            1.  If you select the **All Fields** option, you can select only a limited number of videos in the entry.
            2.  For **Custom Fields**, you can search and add specific Mux videos you want to save in entries.
                
                **Note:** When you change the settings from **All Fields** to **Custom Fields**, and vice versa, any existing and newly added assets in the entry will store the data according to the updated configuration settings.
                
                ![Mux-Configuration-Save-In-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt24fbfefa858b3a60/69ca44b006a19423aff5ced7/Mux-Configuration-Save-In-Entry.png)
                
                If you select **Custom Fields** then the **Mux Keys** drop-down appears. By default, **id**, **tracks**, **status**, **playback\_ids**, **duration**, **created\_at**, **passthrough**, and **meta** keys are already selected inside the dropdown. If you want to create a new key, click the **\+ New Key Field** option.
                
                ![Mux-Configuration-Save-In-Entry-Keys](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt74932af3a34ad343/69ca44c5711bf76a4dbb9e6b/Mux-Configuration-Save-In-Entry-Keys.png)
                
                In the **Add Mux Key Path** modal, enter the **Mux Key Path** and click the **Create** button to create a new key.
                
                ![Mux-Configuration-Save-In-Entry-Add-New-Key](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltea33e434d2c39cf0/69c845dd711bf7a5c0bb9c6f/Mux-Configuration-Save-In-Entry-Add-New-Key.png)
        6.  After adding the configuration details, click the **Save** button.
        7.  On the UI Locations tab, you can see the predefined app location ([Custom Field UI location](/docs/developer-hub/custom-field-location)). You can use the toggle button to enable or disable it based on your requirements.![Mux-UI-Locations](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb0aa0733faba0458/69c845ecb327b86af203cc2a/Mux-UI-Locations.png)
        8.  If the webhook is enabled for your app, you can view the **Webhook Logs** under the **Webhook** tab.
            
            **Additional Resource:** For more information on UI locations, please refer to the [Installed Apps](/docs/marketplace/installed-apps#viewedit-configuration-ui-locations-and-webhook) guide.
            
        9.  Click **Open Stack** to start using the Mux app.
3.  ## Use the Mux App Within your Stack
    
    To use the Mux app within an entry of your stack, follow the steps given below:
    
    1.  Navigate to the stack dashboard, click **Content Models** in the header, then **New Content Type.** From the dropdown, select **Create New**.
    2.  [Create a content type](/docs/headless-cms/create-a-content-type) by adding relevant details as displayed below:![Mux-Create-Content-Type](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt948068c924151c06/69c845ec06a19433a2f5cca7/Mux-Create-Content-Type.png)
    3.  In the **Content Type Builder** page, add a [Custom](/docs/headless-cms/custom/) field by clicking the **Insert a field** link represented by a **+** sign.
    4.  Under **Select Extension or App**, select **Mux** and click the **Proceed** button.![Mux-Custom-Field-Add-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4a4649e34b1c5c12/69c85230e0856f348ef8ca98/Mux-Custom-Field-Add-App.png)
        
        Change the **Display Name** of the custom field to your choice, for example, **Mux Custom Field**. Optionally, you can add **Help Text** and **Instruction Value** as required. This adds Mux in the custom field.
        
        ![Mux-Custom-Field-Added-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc20b7a7036822b6d/69c85230ff7047fd9a10e905/Mux-Custom-Field-Added-App.png)
        
        **Additional Resource:** To set the maximum upload limit, refer to the [Set Advanced Config Object](#set-advanced-config-object-optional) section.
        
    5.  After adding the app, click **Save** or **Save and Close** to save your changes.
    6.  To use the Mux app, [create an entry](/docs/headless-cms/create-an-entry) for this newly created content type. Navigate to **Entries** in the header, click **\+ New Entry** to create an entry within the same content type, and click **Proceed**.
        
        You can see the Mux app’s custom fields on your entry page. Provide the entry title and click **Save** to ensure the entry has at least one version.
        
        ![Mux-Sample-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte861ebe00b3a6346/69c854f8a0fd9e81910f3e41/Mux-Sample-Entry.png)
        
        **Warning:** It is mandatory to save the entry before you upload a video or choose one from the Mux library, otherwise the action will fail.
        
        ### Upload New Videos
        
    7.  To upload a video within the custom field, follow the steps:
        1.  Click the **Upload New Video** button and select the desired video.![Mux-Custom-Field-Upload-New-Video](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltabda2f2b7678ca0b/69c8554f81a8e34f7520c18f/Mux-Custom-Field-Upload-New-Video.png)
        2.  In the **Upload Video** modal, you can preview the video details (such as **File size** and **Duration**), and also remove or replace the file by clicking **Remove File**.![Mux-Custom-Field-Upload-Video-Details](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9b441c8f313f404d/69c8554f8434bf5f78e1c1d0/Mux-Custom-Field-Upload-Video-Details.png)
        3.  You can update the video **Title** and view the **Privacy** settings (**Public** or **Restricted**). The **Privacy** settings were configured in the **Playback** section during app configuration in [step 2](#install-and-configure-the-mux-app-in-marketplace).![Mux-Custom-Field-Upload-Video-Title-And-Privacy](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3124cd3c4a1d8435/69c85550dfb8e0a2badfa46b/Mux-Custom-Field-Upload-Video-Title-And-Privacy.png)
        4.  Set the **Playback Quality** by choosing from **Basic**, **Plus**, or **Premium** options. These settings correspond to different bitrates and resolutions, such as 360p, 480p, or 1080p.![Mux-Custom-Field-Upload-Video-Playback-Quality](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdd4a15b67054bf1c/69c8554f26f4db150c002f0f/Mux-Custom-Field-Upload-Video-Playback-Quality.png)
        5.  You can select auto-generated **Captions**. You can select the preferred language or **Auto-detect** to get the video language.![Mux-Custom-Field-Upload-Video-Captions](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blted8798ff4987ac46/69c8554f711bf77144bb9c73/Mux-Custom-Field-Upload-Video-Captions.png)
            
            **Note:** Languages marked as **Beta** may not support translation.
            
        6.  To support legacy devices, social media sharing, offline viewing, or transcription services, you can generate static MP4 renditions of your video, by selecting the **Standard (Highest Resolution)** and **Audio Only** options in the **MP4 Generation** settings.![Mux-Custom-Field-Upload-Video-MP4-Generation](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfb4ca0934d8a943f/69c8554fa697576cab582eaf/Mux-Custom-Field-Upload-Video-MP4-Generation.png)
            
            **Note:** The app supports all video formats, with a maximum file size of **20 GB**. For faster processing, use MP4 or MOV files encoded with H.264. To learn more, refer to the [Minimize processing time](https://www.mux.com/docs/guides/minimize-processing-time) documentation.
            
        7.  Click **Upload to Mux** to add video to the Mux account. During the upload process, you can cancel the uploading process by clicking **Cancel Upload**.![Mux-Custom-Field-Upload-Video-Upload-To-Mux-Button](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt50fd3952c4e2e6b7/69c8554f4b190f875473639a/Mux-Custom-Field-Upload-Video-Upload-To-Mux-Button.png)
            
            **Note:** You can upload 200 assets within the custom field. To increase the **Max Upload Limit** above 200, refer to the [Set Advanced Config Object](#set-advanced-config-object-optional) section.
            
        8.  After the upload is complete, MUX processes the video (typically taking 5, 10, 15, and more minutes depending on file size). The app uses webhooks to send **Asset created** events back to Contentstack to update the entry.![Mux-Custom-Field-Upload-Video-Assets-Creation-And-Entry-Versions](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blteffa5c2036d79d26/69c8554fe0856f0da2f8caa2/Mux-Custom-Field-Upload-Video-Assets-Creation-And-Entry-Versions.png)
            
            **Note:** At every event, the **entry version** is updated. You must navigate to the **latest** entry version to see the processed video data.
            
            ![Mux-Custom-Field-Uploaded-Video](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt73053c50ac97009a/69c85550a6975795c8582eb3/Mux-Custom-Field-Uploaded-Video.png)
    8.  ### Choose Videos From Mux Account
        
        To choose videos from Mux account, follow the steps:
        
        1.  Click the **\+ Choose from Mux** button to select video assets from your Mux account.![Mux-Custom-Field-Choose-From-Mux](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3af5e22a9a1ebfab/69c85230a41ecb92a6b8ea94/Mux-Custom-Field-Choose-From-Mux.png)
        2.  You can select the **Public** assets (shown with a standard thumbnail), **Restricted** or **Signed (Private)** assets (marked with a lock icon), and **Audio-only** assets from the selector page.![Mux-Custom-Field-Choose-From-Mux-Selector-Page-Asset-Types](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt835e0448d5c2e898/69c85230dfb8e08b3cdfa467/Mux-Custom-Field-Choose-From-Mux-Selector-Page-Asset-Types.png)
            
            **Note:**
            
            -   To view the signed assets in the custom field, you need to select the playback option as **Signed (Private)** during app configuration in [step 2](#install-and-configure-the-mux-app-in-marketplace).
            -   The app generates a playback token to display the signed asset.
            -   If a signed asset token expires, the app displays a warning message. Refresh the page to generate a new token.
            
        3.  Hover over the video on the Mux selector page, and you can see the **View in Mux** option to go directly to the Mux dashboard.![Mux-Custom-Field-Choose-From-Selector-Page-View](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt46fc484854116364/69c852304b190fda05736396/Mux-Custom-Field-Choose-From-Selector-Page-View.png)
        4.  Select the desired assets from your Mux selector page and click **\+ Add Asset(s)** to add them to your entry.![Mux-Custom-Field-Choose-From-Mux-Selector-Page-Add-Assets](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt41a18cf7d97ff81a/69c85231e0856f617ff8ca9c/Mux-Custom-Field-Choose-From-Mux-Selector-Page-Add-Assets.png)
        5.  The assets you selected are referenced within your entry in the thumbnail view, by default.![Mux-Custom-Field-View-Option-Thumbnail](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd2543ea8dd1455cf/69c85231a41ecbe939b8ea98/Mux-Custom-Field-View-Option-Thumbnail.png)
        6.  To view the assets in the list view, select **List** from the drop-down menu.![Mux-Custom-Field-View-Options](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfa92758c89e6d81e/69c8523019faf7c6708d7773/Mux-Custom-Field-View-Options.png)
        7.  The assets you insert get referenced within your entry in the list view.![Mux-Custom-Field-View-Option-List](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt725a9873cf55519f/69c85231dc2ce49875a575bf/Mux-Custom-Field-View-Option-List.png)
        8.  Click the **Save** button to save your entry.
        9.  You can drag and rearrange videos by clicking the “Reorder” icon on the selected video.
        10.  Also, you can view the videos in Mux by clicking the “Open In Mux” icon on the selected video. ![Mux-Custom-Field-Reorder-Video-And-Open-In-Mux-Icons](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2ea2bdd13d6d3861/69c84dcfa41ecbf3d6b8ea90/Mux-Custom-Field-Reorder-Video-And-Open-In-Mux-Icons.png)
        
        ### Edit Video Settings
        
    9.  To edit a video within the custom field, click the “Edit” icon on the selected video.![Mux-Custom-Field-Edit-Video-Icon](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc47f9102944b839e/69c85135f8b0120a4ac27e2e/Mux-Custom-Field-Edit-Video-Icon.png)
    10.  In the **Edit Video** modal, you can perform update the following settings:
         
         1.  You can rename the **Title** and copy the **Video ID** generated by Mux.![Mux-Custom-Field-Edit-Video-Title-And-Video-ID](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt442d71b25daac851/69c8513526f4db8d4d002f0b/Mux-Custom-Field-Edit-Video-Title-And-Video-ID.png)
         2.  Under **Static renditions**, download the generated **Video (MP4)** or **Audio (M4A)** files.![Mux-Custom-Field-Edit-Video-Static-Renditions](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc9c00087d889199c/69c85135b70bd9a4ba8bb8c5/Mux-Custom-Field-Edit-Video-Static-Renditions.png)
         3.  In the **Thumbnail** section, choose the thumbnail type: **Static Image** or **Animated Preview (GIF)**. You can use the timeline slider to select the preferred frame for the thumbnail preview.
             
             **Note:** Custom thumbnails do not appear in the Mux dashboard. They appear only in your Contentstack entry and video players.
             
             ![Mux-Custom-Field-Edit-Video-Thumbnail-Type](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta8a9043590034e23/69c851358434bfcc78e1c1cc/Mux-Custom-Field-Edit-Video-Thumbnail-Type.png)
         4.  Expand **Size & Fit** to set: **Width** (1–4096 px), Optional **Height** (0–4096 px), or leave it empty for auto-scaling, and **Fit mode** (for example, preserve aspect ratio).
         5.  Expand **Orientation** to flip the image horizontally or vertically.
         6.  Expand **Format & Quality** to select the image format (for example, JPEG).
         7.  Expand **View generated image URL** to preview and copy the thumbnail URL.
         8.  Click **Save** to apply the changes.![Mux-Custom-Field-Edit-Video-Save](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt182cee277c6e93ff/69c8513581a8e31f7120c187/Mux-Custom-Field-Edit-Video-Save.png)
         
         ### Delete Videos
         
    11.  To remove a video from the custom field, click the “Remove” icon on the selected video.![Mux-Custom-Field-Remove-Video-Icon](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4ec2f60cc870cd2a/69c84dcfdc2ce4bd88a575bb/Mux-Custom-Field-Remove-Video-Icon.png)
    12.  In the **Remove Video** modal, you can perform delete in two ways:
         
         1.  **Remove from entry (Soft Delete)**: Click the **Remove from entry** button to remove the video from the Contentstack entry but keep it in the MUX dashboard.![Mux-Custom-Field-Remove-Video-Soft-Temporarily](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0c9f5f86c001af2b/69c84dcea0fd9ec3690f3e3d/Mux-Custom-Field-Remove-Video-Soft-Temporarily.png)
         2.  **Permanently delete this video (Hard Delete)**: Click the **Permanently delete this video** link and then click the **Permanently delete video** button to remove the video from both Contentstack and the MUX dashboard.![Mux-Custom-Field-Remove-Video-Hard-Permanently](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc2f1d045df1553c7/69c84dce7e9d07774e2836f2/Mux-Custom-Field-Remove-Video-Hard-Permanently.png)
         
         **Note:** This option is role-specific, configured in the **Uploads & Webhooks > Manage Videos** section during app configuration in [step 2](#install-and-configure-the-mux-app-in-marketplace).
         
    13.  After adding, editing, and omitting the assets, **Save** and **Publish** your entry.

### Set Advanced Config Object (Optional)

While adding the Mux app in the custom field in [step 3](#use-the-mux-app-within-your-stack), you can set the custom settings to override the configured settings in app installation in [step 2](#install-and-configure-the-mux-app-in-marketplace).

Under **Advanced** properties, you can set the **Config Parameter** for all entries of a particular content type. The **key:value** passed in the configuration object overrides the default app configuration settings.

You can set the **Playback Access** as **Signed** and **Max Assets Limit** to upload videos that can be added in the Mux account and Custom field.

![Mux-Set-Custom-Field-Advanced-Config-Parameter](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd54bcd7d82a24bd4/69c84dcfb327b88a0503cc3e/Mux-Set-Custom-Field-Advanced-Config-Parameter.png)

In our example, the max asset limit for uploads is 207.

```
{
  "custom_settings":{
    "playback_access":"signed",
    "max_assets_limit":207
  }
}
```

By following the steps, you can ensure your Mux app is fully optimized with the latest permission controls and authentication standards. Once these configurations are saved, you will have a seamless, secure workflow for managing video assets directly within Contentstack.
