---
title: "Digizuite App Installation Guide"
description: "Streamline your asset management with Digizuite (KeyShot DAM) app and organize, manage, and distribute digital assets across channels."
url: /marketplace/digizuite
---

# Digizuite App Installation Guide

## Digizuite App Installation Guide

Digizuite is a comprehensive digital asset management (DAM) platform designed to help organizations centralize, organize, and efficiently manage digital content. It offers asset storage, metadata management, collaboration tools, and customizable workflows to streamline digital content processes and enable seamless access and distribution of digital assets across the organization.

Digizuite supports a wide range of file types, including common image, video, audio, document, and design file formats. It can handle popular file types such as JPG, PNG, GIF, MP4, MOV, MP3, PDF, DOCX, XLSX, PSD, and AI. This broad file-type support allows organizations to manage diverse digital assets within the Digizuite platform.

After installing the Digizuite app from the Contentstack Marketplace, you can use it within your stack to manage, store, and distribute the digital assets from the Digizuite account within your entries.

## Prerequisites

-   [Digizuite account](https://www.digizuite.com/)
-   [Contentstack account](https://www.contentstack.com/login/)
-   Access to the Contentstack Organization/Stack as the [Owner](/docs/administration/about-administration-roles#organization-owner)/[Admin](/docs/administration/about-administration-roles#organization-admin)

Let's follow this step-by-step guide to install and configure the Digizuite app within your stack.

## Steps for Execution

1.  [Retrieve the Credentials for your Digizuite account](#retrieve-the-credentials-for-your-digizuite-account)
2.  [Install and Configure the Digizuite app in Marketplace](#install-and-configure-the-digizuite-app-in-marketplace)
3.  [Use the Digizuite app within your entry](#use-the-digizuite-app-within-your-entry)

1.  ## Retrieve the Credentials for your Digizuite account
    
    Go to the Digizuite [website](https://www.digizuite.com/) and click the **BOOK A DEMO** button at the top right corner to book a demo with the Digizuite team.
    
    During the demo call, the Digizuite team will learn about your configuration requirements. You will be provided with a **Unified Dam URL** and **Media Format ID** by the Digizuite team. You will also get the Digizuite username and password to log in to your Digizuite account for the first time when adding assets from the selector page in [step 3](#use-the-digizuite-app-within-your-entry).
    
    If you have any queries, you can contact the Digizuite [Support](https://www.digizuite.com/get-in-touch) team.
    
2.  ## Install and Configure the Digizuite App in Marketplace
    
    To install the app in Contentstack, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps below:
    
    1.  Navigate to the “App Switcher” icon in the top-right corner and click **Marketplace**.![Contentstack-App-Switcher-Marketplace](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt47c618781b542b64/68ee96ad6bfd93c9913fee8a/Contentstack-App-Switcher-Marketplace.png)
    2.  Within the Marketplace, you can see all the available apps. Hover over the **Digizuite** app and click **Install**.
    3.  In the pop-up window, select the stack where you want to install the Digizuite app, accept the **Terms of Service**, and click the **Install** button.![2-Digizuite-App-Install](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2c523cd6bea7138a/6667f75176fac4d1c9c0fd1a/2-Digizuite-App-Install.png)
    4.  On the **Configuration** screen, enter the following:
        1.  **Unified Dam URL**: Enter the **Unified Dam URL** retrieved from your Digizuite account in [step 1](#retrieve-the-credentials-for-your-digizuite-account).
        2.  **Media Format ID**: Enter the **Media Format ID** retrieved from your Digizuite account in [step 1](#retrieve-the-credentials-for-your-digizuite-account). It must be a numeric value.
        3.  **Choose the Digizuite Keys to Save in Entry**: Choose how to save the data fetched from the Digizuite account in Contentstack entries.
            
            1.  If you select the **All Fields** option, you can select only a limited number of videos in the entry.
            2.  For **Custom Fields**, you can search and add specific Digizuite Keys you want to save in entries.
                
                **Note:** When you change the settings from **All Fields** to **Custom Fields**, and vice versa, any existing assets will follow the old configuration settings, whereas newly added assets in the entry will store the data according to the updated configuration settings. This is applicable to Custom and JSON RTE fields.
                
            
            ![3-Digizuite-Configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltacaca86c3691e56f/6667fc203a1c5f07c0b819de/3-Digizuite-Configuration.png)
            
            If you select **Custom Fields** then the **Digizuite Keys** drop-down appears. By default, **title**, **itemId**, **thumb**, **downloadUrl**, and **assetType** keys are already selected inside the dropdown. If you want to create a new key, click the **\+ New Key Field** option.
            
            ![4-Digizuite-Configuration-Add-New-Key-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltad0261ac8eca0ec5/6667f7503a1c5ffe50b819b4/4-Digizuite-Configuration-Add-New-Key-Field.png)
            
            In the **Add Digizuite Key Path** modal, enter the **Digizuite Key Path** and click the **Create** or **Create and Apply** button to create a new key.
            
            ![5-Digizuite-Configuration-New-Key-Modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltef73779730aa396e/6667f751bd762a77ac593e36/5-Digizuite-Configuration-New-Key-Modal.png)
    5.  Click the **Save** button.
    6.  On the **UI Locations** tab, you can see the predefined app locations. You can use the toggle button corresponding to each UI location to enable or disable it based on your requirements.![6-Digizuite-UI-Locations](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0480050e89732404/6667f751a8434e510d26a093/6-Digizuite-UI-Locations.png)
        
        **Additional Resource:** For more information on UI locations, please refer to the Installed Apps guide.
        
    7.  Click **Open Stack** to start using the Digizuite application.
3.  ## Use the Digizuite App within your Entry
    
    To use the Digizuite app within an entry of your stack, follow the steps given below:
    
    1.  Go to your stack, click the **Content Models** icon from the left navigation panel, and click the **\+ New Content Type** button.
    2.  [Create a content type](/docs/headless-cms/create-a-content-type) by adding relevant details as displayed below:![7-Digizuite-Content-Type](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt992a63a640c6b095/6667f750bd762a6537593e32/7-Digizuite-Content-Type.png)
    
    There are two ways to use the Digizuite app in your entry:
    
    1.  [Custom Field](#steps-to-use-the-digizuite-app-as-a-custom-field)
    2.  [JSON Rich Text Editor Field](#steps-to-use-the-digizuite-app-in-a-json-rich-text-editor-field)
    
    ### Steps to Use the Digizuite App in a Custom Field
    
    1.  In the **Content Type Builder** page, add a [Custom](/docs/headless-cms/custom/) field in your content type by clicking the **Insert a field** link represented by a **+** sign.
    2.  Under **Select Extension or App**, select **Digizuite** and click the **Proceed** button.![8-Digizuite-Custom-Field-Add-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7d1dea4b2ee73050/6667f7503dcdf6024c2caa4c/8-Digizuite-Custom-Field-Add-App.png)
        
        This adds Digizuite to the custom field.
        
        ![9-Digizuite-Custom-Field-Added-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt171b5b6ea8e9989c/6667f75013ea30d7f5659166/9-Digizuite-Custom-Field-Added-App.png)
    3.  After adding the app in a custom field, click **Save** or **Save and Close** to save your changes.
    4.  To use the Digizuite app, create an entry in this newly created content type. In the left navigation panel, navigate to the **Entries** page, click **\+ New Entry** to create a new entry for the above content type, and then click **Proceed**.
        
        You can see the Digizuite app’s custom fields on your entry page, as shown below:
        
        ![10-Digizuite-Custom-Field-Sample-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte13a5423af082b97/6667f750145a10921216faea/10-Digizuite-Custom-Field-Sample-Entry.png)
    5.  Click **\+ Choose Asset(s)** button.![11-Digizuite-Custom-Field-Choose-Assets-Button](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt37de1d475952e8ed/6667f750fe5232e13a288773/11-Digizuite-Custom-Field-Choose-Assets-Button.png)
        
        **Note:** If you are using the Digizuite app for the first time, the app will redirect you to the Digizuite login page after clicking the **\+ Choose Asset(s)** button. You need to authenticate the credentials.
        
        ![12-26-Digizuite-Selector-Page-Login](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt809a7c7a415f40c2/6667f7e8bd762ab17f593e3f/12-26-Digizuite-Selector-Page-Login.png)
    6.  Now, you can choose assets from the Digizuite selector page:
        1.  To add a single asset, you can hover over the asset and click the **Place** icon to add the asset in the custom field.![13-27-Digizuite-Selector-Page-Placing-Single-Asset](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta1c5b1ca862368fd/6667f7e80695a94965b208d5/13-27-Digizuite-Selector-Page-Placing-Single-Asset.png)
        2.  To add multiple assets, select the required assets from your Digizuite account, click the **Selected** dropdown, and then select the **Multi Insert** option to add them to your entry.![14-28-Digizuite-Selector-Page-Multi-Insert](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt51d08a09b1ab8ca0/6667f7e80695a944b2b208d9/14-28-Digizuite-Selector-Page-Multi-Insert.png)
        3.  In the **Insert rendition** modal, confirm the final version and click **Insert** to add assets in the entry.![15-29-Digizuite-Selector-Page-Insert-Rendition](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1d62a1788bffe34b/6667f7e83ec04133817f98bf/15-29-Digizuite-Selector-Page-Insert-Rendition.png)
        4.  Also, you can view all the selected assets by clicking the **Selected** dropdown, and then select the **Show Selection** option.![16-30-Digizuite-Selector-Page-Show-Selection](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5413634285553c74/6667f7e91946583fae4c8955/16-30-Digizuite-Selector-Page-Show-Selection.png)
    7.  The assets you select get added to your entry in the thumbnail view.![17-Digizuite-Custom-Field-Assets-Added](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8132c1ff40ab4a00/6667f7e879a67e1a7c109dcc/17-Digizuite-Custom-Field-Assets-Added.png)
        
        To view the assets in the list view, select the **List** view option from the dropdown.
        
        ![18-Digizuite-Custom-Field-Assets-View-Options](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt341b88f9936b80de/6667f7e8fe52324eba28877d/18-Digizuite-Custom-Field-Assets-View-Options.png)
        
        The assets you select get added to your entry in the list view.
        
        ![19-Digizuite-Custom-Field-Assets-View-List](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltea33fc0991ecb9f7/6667f7e93a1c5f3a77b819c6/19-Digizuite-Custom-Field-Assets-View-List.png)
    8.  Hover over the image to view the options to reorder, preview, and remove the asset.
        
        1.  Click the **Reorder** icon to drag and reorder the asset.
        2.  Click the **Preview** icon to preview the asset.
        3.  Click the **Remove** icon to remove the asset.
        
        **Thumbnail View**
        
        ![20-Digizuite-Custom-Field-Assets-View-Thumbnail-Features](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte62061e4cd9d0b9d/6667f7e979a67e773b109dd0/20-Digizuite-Custom-Field-Assets-View-Thumbnail-Features.png)
        
        **List View**
        
        ![21-Digizuite-Custom-Field-Assets-View-List-Features](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4232c212cd87ec84/6667f7e93a1c5f8813b819c8/21-Digizuite-Custom-Field-Assets-View-List-Features.png)
    9.  After adding the asset(s), **Save** and **Publish** your entry.
    
    ### Steps to Use the Digizuite App in a JSON Rich Text Editor Field
    
    1.  In the **Content Type Builder** page, add [JSON Rich Text Editor](/docs/headless-cms/about-json-rich-text-editor/) in your content type by clicking the **Insert a field** link represented by a **+** sign.
    2.  Under **Select Plugin(s)**, select **Digizuite**, and then click **Add Plugin(s)**.![22-Digizuite-JSONRTE-Add-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9e92f8965c9fc944/6667f7fa3a1c5fb0d6b819cc/22-Digizuite-JSONRTE-Add-App.png)
        
        This adds Digizuite in the JSON Rich Text Editor.
        
        ![23-Digizuite-JSONRTE-Added-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb5cbddde701a905d/6667f7faa05faee269c2f844/23-Digizuite-JSONRTE-Added-App.png)
    3.  After adding the app in a JSON Rich Text Editor field, click **Save** or **Save and Close** to save your changes.
    4.  To use the Digizuite app, create an entry for this content type. In the left navigation panel, navigate to the **Entries** page, click **\+ New Entry** to create a new entry for the above content type, and then click **Proceed**.
        
        You can see the Digizuite icon in the JSON Rich Text Editor field on your entry page, as shown below:
        
        ![24-Digizuite-JSONRTE-Sample-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt348ed241bd07d9bb/6667f7fa79a67e48c9109dd5/24-Digizuite-JSONRTE-Sample-Entry.png)
    5.  Click the **Digizuite** app icon.![25-Digizuite-JSONRTE-App-Icon](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte022a5ab9dd4f54a/6667f7fac97e38c11ff173b6/25-Digizuite-JSONRTE-App-Icon.png)
        
        **Note:** If you are using the Digizuite app for the first time, the app will redirect you to the Digizuite login page after clicking the **\+ Choose Asset(s)** button. You need to authenticate the credentials.
        
        ![12-26-Digizuite-Selector-Page-Login](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt809a7c7a415f40c2/6667f7e8bd762ab17f593e3f/12-26-Digizuite-Selector-Page-Login.png)
    6.  Now, you can choose assets from the Digizuite selector page:
        1.  To add a single asset, you can hover over the asset and click the **Place** icon to add the asset in the custom field.![13-27-Digizuite-Selector-Page-Placing-Single-Asset](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta1c5b1ca862368fd/6667f7e80695a94965b208d5/13-27-Digizuite-Selector-Page-Placing-Single-Asset.png)
        2.  To add multiple assets, select the required assets from your Digizuite account, click the **Selected** dropdown, and then select the **Multi Insert** option to add them to your entry.![14-28-Digizuite-Selector-Page-Multi-Insert](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt51d08a09b1ab8ca0/6667f7e80695a944b2b208d9/14-28-Digizuite-Selector-Page-Multi-Insert.png)
        3.  In the **Insert rendition** modal, confirm the final version and click **Insert** to add assets in the entry.![15-29-Digizuite-Selector-Page-Insert-Rendition](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1d62a1788bffe34b/6667f7e83ec04133817f98bf/15-29-Digizuite-Selector-Page-Insert-Rendition.png)
        4.  Also, you can view all the selected assets by clicking the **Selected** dropdown, and then select the **Show Selection** option.![16-30-Digizuite-Selector-Page-Show-Selection](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5413634285553c74/6667f7e91946583fae4c8955/16-30-Digizuite-Selector-Page-Show-Selection.png)
    7.  The assets you select get added to your entry.![31-Digizuite-JSONRTE-Assets-Added](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1b55f378f190d5cf/6667f7fa3c0f7e92e3a4491d/31-Digizuite-JSONRTE-Assets-Added.png)
    8.  To resize the image, drag the corner of the image and adjust the size as required. Hover over the image to view the options to **Preview**, **Edit**, and **Remove** the asset.![32-Digizuite-JSONRTE-Assets-Added-Features](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6d28601027e5c5fa/6667f7faa8434eb9af26a09c/32-Digizuite-JSONRTE-Assets-Added-Features.png)
        
        **Additional Resource:** You can use alignment and inline asset features to edit the asset placement within the [JSON Rich Text Editor](/docs/headless-cms/about-json-rich-text-editor/) field.
        
    9.  After adding the asset(s), **Save** and **Publish** your entry.
