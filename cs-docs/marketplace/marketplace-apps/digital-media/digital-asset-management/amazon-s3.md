---
title: "Amazon S3 App Installation Guide"
description: "Learn how to use the Amazon S3 app in Contentstack to securely upload, manage, and deliver digital assets from your S3 account using scalable cloud storage."
url: /marketplace/amazon-s3
---

# Amazon S3 App Installation Guide

## Amazon S3 App Installation Guide

Amazon S3 (**Simple Storage Service**) is a scalable, high-speed, web-based cloud storage service designed for storing and retrieving any amount of data from anywhere. Amazon S3 seamlessly integrates with Contentstack to offer scalable and secure storage for your digital assets.

With this integration, you can upload, store, retrieve, and manage large volumes of media files and documents directly from your Contentstack environment. It ensures high availability and durability, making it ideal for enterprise-grade content management workflows.

By leveraging Amazon S3, teams can enhance performance, reduce latency, and streamline asset delivery across global audiences. Whether you are hosting images, videos, or backups, the combination of Amazon S3 and Contentstack delivers a reliable, efficient, and future-ready content infrastructure for modern digital experiences.

After installing the Amazon S3 app from the Contentstack Marketplace, you can use it within your stack to upload, manage, store, and distribute the digital assets from the Amazon S3 account within your entries.

## Prerequisites

-   [Amazon S3 account](https://aws.amazon.com/)
-   [Contentstack account](https://www.contentstack.com/login/)
-   Access to the Contentstack Organization/Stack as the [Owner](/docs/administration/about-administration-roles#organization-owner)/[Admin](/docs/administration/about-administration-roles#organization-admin)

Let's follow this step-by-step guide to install and configure the Amazon S3 app within your stack.

## Steps for Execution

1.  [Retrieve the Credentials for your Amazon S3 account](#retrieve-the-credentials-for-your-amazon-s3-account)
2.  [Install and Configure the Amazon S3 app in Marketplace](#install-and-configure-the-amazon-s3-app-in-marketplace)
3.  [Use the Amazon S3 app within your entry](#use-the-amazon-s3-app-within-your-entry)

1.  ## Retrieve the Credentials for your Amazon S3 account
    
    To authenticate and authorize access to AWS services, the **AWS Access Key ID** and **Secret Access Key** credentials are required during the app configuration in [step 2](#install-and-configure-the-amazon-s3-app-in-marketplace).
    
    The **Access Key ID** is a unique identifier for the user or app and the **Secret Access Key** is used to sign requests and must be kept confidential.
    
    1.  Log into the [AWS Management Console](https://aws.amazon.com/), navigate to the **IAM (Identity and Access Management)** service, and create a new user or access key.
    2.  When you create an **Access Key** pair, you should download and securely store the **Secret Access Key** immediately, as it cannot be retrieved later.
        
        **Note:** Each user can have up to two access keys at any time. If you lose your **Secret Access Key**, you must delete the access key and create a new one.
        
    
    If you have any queries, you can contact the Amazon S3 Support team.
    
2.  ## Install and Configure the Amazon S3 app in Marketplace
    
    To install the app in Contentstack, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps below:
    
    1.  Navigate to the “App Switcher” icon in the top-right corner and click **Marketplace**.![Contentstack-App-Switcher-Marketplace](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt47c618781b542b64/68ee96ad6bfd93c9913fee8a/Contentstack-App-Switcher-Marketplace.png)
    2.  Click **Apps** from the left panel.
    3.  Within the Marketplace, you can see the available apps. Hover over the **Amazon S3** app and click **Install**.  
        ![marketplace_appswitcher_amazons3.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am0abd36c3522ca0ce/e3872cf3c614bebdc2b8af7a/marketplace_appswitcher_amazons3.png?locale=en-us)
    4.  In the pop-up window, select the stack where you want to install the Amazon S3 app, accept the **Terms of Service**, and click the **Install** button.![Amazon-S3-App-Install](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt583329acaa7ad6ac/67f659cb185894eb5ea0aeb4/Amazon-S3-App-Install.png)
    5.  On the **Configuration** screen, enter the following:
        1.  **AWS S3 Access Key ID**: Enter the Amazon S3 Access Key ID retrieved from your Amazon S3 account in [step 1](#retrieve-the-credentials-for-your-amazon-s3-account).
        2.  **AWS S3 Secret Access Key**: Enter the Amazon S3 Secret Access Key retrieved from your Amazon S3 account in [step 1](#retrieve-the-credentials-for-your-amazon-s3-account).
        3.  **Region Selector**: Select the region from the provided options.![Amazon-S3-Credentials](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt56a278898852704a/67f659cb22f0b32aff34cbfb/Amazon-S3-Credentials.png)
        4.  **Bucket Selector**: Based on the credentials and regions selected, add the desired buckets from the drop-down.![Amazon-S3-Credentials-Bucket-Selector](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcf8d8364c4fba38f/67f659cb1858945829a0aeb0/Amazon-S3-Credentials-Bucket-Selector.png)
        5.  **Choose the Amazon S3 Keys to Save in Entry**: Choose how to save the data fetched from the Amazon S3 account in Contentstack entries.
            1.  If you select the **All Fields** option, you can select only a limited number of assets in the entry.
            2.  For **Custom Fields**, you can search and add specific Amazon S3 you want to save in entries.![Amazon-S3-Save-In-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6d00d64d19ac3012/67f659b76500a13df1b76394/Amazon-S3-Save-In-Entry.png)
                
                **Note:** When you change the settings from **All Fields** to **Custom Fields**, and vice versa, any existing and newly added assets in the entry will store the data according to the updated configuration settings. This is applicable to Custom and JSON RTE fields.
                
                If you select **Custom Fields** then the Amazon S3 Keys drop-down appears. By default, **Key**, **FileType**, **BucketName**, **LastModified**, **Size**, and **SignedUrl** keys are already selected inside the dropdown. If you want to create a new key, click the **\+ New Key Field** option.
                
                ![Amazon-S3-Keys](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf9904e38a94f2324/67f659b63202bbcbcaac7a03/Amazon-S3-Keys.png)
                
                In the **Add Amazon S3 Key Path** modal, enter the **Amazon S3 Key Path** and click the **Create** button to create a new key.
                
                ![Amazon-S3-Add-New-Key](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta7f95127f240c6d6/67f659cb53db7b5ca2224e20/Amazon-S3-Add-New-Key.png)
    6.  Click the **Save** button.
    7.  On the **UI Locations** tab, you can see the predefined app locations. You can use the toggle button corresponding to each UI location to enable or disable it based on your requirements.![Amazon-S3-UI-Locations](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb36ba1d40d06ed40/67f659b77b5c3c86e1c37264/Amazon-S3-UI-Locations.png)
        
        **Note:** The app requires at least one UI location to be enabled, otherwise you will not be able to save your app configuration settings.
        
    8.  If the webhook is enabled for your app, you can view the webhook logs under the **Webhook** tab.
        
        **Additional Resource:** For more information on UI location and webhooks, please refer to the [Installed Apps](/docs/marketplace/installed-apps#view-edit-configuration-ui-locations-and-webhook) guide.
        
    9.  Click **Open Stack** to start using the Amazon S3 app.
3.  ## Use the Amazon S3 App within your Entry
    
    To use the Amazon S3 app within an entry of your stack, follow the steps given below:
    
    1.  Go to your stack, click the **Content Models** icon in the left navigation panel, and click the **\+ New Content Type** button.
    2.  [Create a content type](/docs/headless-cms/create-a-content-type) by adding relevant details as displayed below:![Amazon-S3-Content-Type](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt489ef289b971835c/67f659cb6481d443ff8d1a33/Amazon-S3-Content-Type.png)
    
    There are two ways to use the Amazon S3 app in your entry:
    
    1.  [Custom Field](#steps-to-use-the-amazon-s3-app-as-a-custom-field)
    2.  [JSON Rich Text Editor Field](#steps-to-use-the-amazon-s3-app-as-a-json-rte-plugin)
    
    ### Steps to Use the Amazon S3 App as a Custom Field
    
    1.  In the **Content Type Builder** page, add a [Custom](/docs/headless-cms/custom) field in your content type by clicking the **Insert a field** link represented by a **+** sign.
    2.  Under **Select Extension or App**, select **Amazon S3** and click the **Proceed** button.![Amazon-S3-Custom-Field-Add-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte18f21f917e2126a/67f659cb617c779ca9562964/Amazon-S3-Custom-Field-Add-App.png)
        
        This adds Amazon S3 to the custom field.
        
        ![Amazon-S3-Custom-Field-Added-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte9fed3fadb1c5f80/67f659cb929efb62ebc7d8b7/Amazon-S3-Custom-Field-Added-App.png)
    3.  After adding the app in a custom field, click **Save** or **Save and Close** to save your changes.
    4.  To use the Amazon S3 app, create an entry in this newly created content type. In the left navigation panel, navigate to the **Entries** page, click **\+ New Entry** to create a new entry for the above content type, and then click **Proceed**.
        
        You can see the Amazon S3 app’s custom fields on your entry page, as shown below:
        
        ![Amazon-S3-Custom-Field-Sample-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4c31889d1d9ab41b/67f659c016c10fac5d57aade/Amazon-S3-Custom-Field-Sample-Entry.png)
    5.  You can now directly **Upload Assets** in the selected bucket from the custom field using the given steps:
        1.  Click the **Upload to S3** button.![Amazon-S3-Custom-Field-Upload-Assests](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blted47550aeea9e474/67f659bf6b62e3896802205a/Amazon-S3-Custom-Field-Upload-Assests.png)
        2.  Select the **Bucket** from the top-right drop-down and then click **Choose File(s)** to add new assets.![Amazon-S3-Custom-Field-Upload-Assests-Select-Bucket-And-Choose-Files](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb0160be931592a26/67f659bf61ba907164f368dd/Amazon-S3-Custom-Field-Upload-Assests-Select-Bucket-And-Choose-Files.png)
            
            **Note:** You can add up to 10 assets in one go.
            
        3.  After selecting the files, click the **Upload** button.![Amazon-S3-Custom-Field-Upload-Assests-Upload-Button](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf6179b8b161104bd/67f659bf301cf14c449835f3/Amazon-S3-Custom-Field-Upload-Assests-Upload-Button.png)
        4.  After uploading the assets successfully, the **Upload Status** bar will be marked as **100%** and you will also get the confirmation message.![Amazon-S3-Custom-Field-Upload-Assests-Uploaded](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc62f2db4eedcb897/67f659bf7b5c3c6dcec37268/Amazon-S3-Custom-Field-Upload-Assests-Uploaded.png)
    6.  Now, click **\+ Choose Asset(s)** button.![Amazon-S3-Custom-Field-Choose-Assests](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt388e0ed674a76e7c/67f659bf94d25d3d9a8671ad/Amazon-S3-Custom-Field-Choose-Assests.png)
    7.  Choose the required assets from the Amazon S3 selector page and click **\+ Add Assets** to add them to your entry.![Amazon-S3-Selector-Page](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd49f41781ac3542d/67f659b794d25d1f778671a9/Amazon-S3-Selector-Page.png)
        
        You can also search for assets in the selected bucket within the Amazon S3 selector page.
        
        **Note:**
        
        -   Search is case-sensitive.
        -   In case of renamed or deleted assets, a warning icon is visible along with the notification.
        
    8.  The assets you select get added to your entry in the thumbnail view.![Amazon-S3-Custom-Field-Assests-In-Thumbnail-View](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb28caaff75ba76b0/67f659bf3202bbe522ac7a07/Amazon-S3-Custom-Field-Assests-In-Thumbnail-View.png)
        
        To view the assets in the list view, select the **List** view option from the dropdown.
        
        ![Amazon-S3-Custom-Field-Assests-View-Options](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt87fe27a336f5125c/67f659bf047ef4905137cd33/Amazon-S3-Custom-Field-Assests-View-Options.png)
        
        The assets you select get added to your entry in the list view.
        
        ![Amazon-S3-Custom-Field-Assests-In-List-View](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb23f6c6fd8c16e8b/67f659cb36969b9de5ba3bff/Amazon-S3-Custom-Field-Assests-In-List-View.png)
    9.  Hover over the image to view the following options:
        
        1.  Click the **Reorder** icon to drag and reorder the asset.
        2.  Click the **Open in New Tab** icon to open the asset in the new tab to preview.
        3.  Click the **Remove** icon to remove the asset.
        
        **Thumbnail View**
        
        ![Amazon-S3-Custom-Field-Assests-In-Thumbnail-View-Options](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbd61170eecd6749f/67f659bf498744951fc83364/Amazon-S3-Custom-Field-Assests-In-Thumbnail-View-Options.png)
        
        **List View**
        
        ![Amazon-S3-Custom-Field-Assests-In-List-View-Options](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfdd588425dae749a/67f659bf22f0b31f2934cbf7/Amazon-S3-Custom-Field-Assests-In-List-View-Options.png)
    10.  After adding the asset(s), **Save** and **Publish** your entry.
    
    ### Steps to Use the Amazon S3 App as a JSON RTE Plugin
    
    1.  In the **Content Type Builder** page, add a [JSON Rich Text Editor](/docs/headless-cms/about-json-rich-text-editor) field in your content type by clicking the **Insert a field** link represented by a **+** sign.
    2.  Under **Select Plugin(s)**, select **Amazon S3**, and then click **Add Plugin(s)**.![Amazon-S3-JSONRTE-Field-Add-Plugin](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt33e2068e9be7beaa/67f659b66500a1238eb76390/Amazon-S3-JSONRTE-Field-Add-Plugin.png)
        
        This adds Amazon S3 in the JSON Rich Text Editor.
        
        ![Amazon-S3-JSONRTE-Field-Added-Plugin](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt88954559cfb99013/67f659b7047ef4c6e237cd2f/Amazon-S3-JSONRTE-Field-Added-Plugin.png)
    3.  After adding the app in a JSON Rich Text Editor field, click **Save** or **Save and Close** to save your changes.
    4.  To use the Amazon S3 app, create an entry for this content type. In the left navigation panel, navigate to the **Entries** page, click **\+ New Entry** to create a new entry for the above content type, and then click **Proceed**.
        
        You can see the Amazon S3 icon in the JSON Rich Text Editor field on your entry page, as shown below:
        
        ![Amazon-S3-JSONRTE-Field-Sample-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt59e6885819489bfb/67f659b7f70ebfe503f34d00/Amazon-S3-JSONRTE-Field-Sample-Entry.png)
    5.  Click the **Amazon S3** app icon.![Amazon-S3-JSONRTE-Field-App-Icon](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc198fed65827c08c/67f659b64987446344c83360/Amazon-S3-JSONRTE-Field-App-Icon.png)
    6.  Choose the required assets from the Amazon S3 selector page and click **\+ Add Assets** to add them to your entry.![Amazon-S3-Selector-Page](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd49f41781ac3542d/67f659b794d25d1f778671a9/Amazon-S3-Selector-Page.png)
        
        You can also search for assets in the selected bucket within the Amazon S3 selector page.
        
        **Note:** Search is case-sensitive.
        
    7.  The assets you select get added to your entry.![Amazon-S3-JSONRTE-Field-Assets](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt87e1026325f9a650/67f659b75cd51170f2ef468a/Amazon-S3-JSONRTE-Field-Assets.png)
    8.  To resize the image, drag the corner of the image and adjust the size as required. Hover over the image to view the options to **Open in New Tab**, **Edit Properties**, and **Remove** the asset.![Amazon-S3-JSONRTE-Field-Assets-Options](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd4fac1894f8fcafe/67f659b7b62f3b45ff34b5f2/Amazon-S3-JSONRTE-Field-Assets-Options.png)
        
        **Additional Resource:** You can use alignment and inline asset features to edit the asset placement within the [JSON Rich Text Editor](/docs/headless-cms/about-json-rich-text-editor/) field.
        
    9.  After adding the asset(s), **Save** and **Publish** your entry.
