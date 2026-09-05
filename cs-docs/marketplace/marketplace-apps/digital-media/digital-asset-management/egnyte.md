---
title: "Egnyte App Installation Guide"
description: "Fetch and display your Egnyte assets into Contentstack entries."
url: /marketplace/egnyte
uid: blt88563e1e8f13a6d0
---

# Egnyte App Installation Guide

## Egnyte App Installation Guide

Egnyte is a cloud-based content security and collaboration platform designed for businesses. It offers secure file sharing, data protection, and infrastructure modernization capabilities, enabling users to access, store, and collaborate on files from any device.

Egnyte supports many file types, encompassing documents, images, videos, audio files, and more. This includes popular formats such as PDF, DOCX, PPTX, XLSX, JPEG, PNG, MP4, MP3, and others, making it versatile for various business needs.

The Contentstack Marketplace lets you install the Egnyte app and use it within your stack to fetch and display images, graphics, videos, and text files from the Egnyte account within your entries.

## Prerequisites

-   [Egnyte Developer account](https://developers.egnyte.com/)
-   [Contentstack account](https://www.contentstack.com/login/)
-   Access to the Contentstack Organization/Stack as the Owner/Admin

Let's follow this step-by-step guide to install and configure Egnyte within your stack.

## Steps for Execution

1.  [Retrieve Domain URL and API key for Egnyte account](#retrieve-domain-url-and-api-key-for-egnyte-account)
2.  [Install and Configure Egnyte in Contentstack Marketplace](#install-and-configure-egnyte-in-contentstack-marketplace)
3.  [Use Egnyte within your Stack Entry](#use-egnyte-within-your-stack-entry)

1.  ## Retrieve Domain URL and API key for Egnyte account

    To get your configuration details for Egnyte, follow the steps given below:

    1.  To get the **Domain URL** for app configuration in [step 2](#install-and-configure-egnyte-in-contentstack-marketplace), refer to the [Custom URLs](https://helpdesk.egnyte.com/hc/en-us/articles/360026439952-Custom-URLs#h_66be3b8b-da37-47ca-8fc7-063916218914) webpage. You can register the domain while creating the app.
    2.  To get the **API Key**, log in to the [Egnyte Developer account](https://developers.egnyte.com/) using your Egnyte account credentials.
    3.  Click **Get API Key** on the dashboard.![Egnyte-Get-API-Key](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf7724502ce6fdc18/65df8b4f3e2d0e353ff71887/Egnyte-Get-API-Key.png)
    4.  You can copy the Egnyte API **Key** to the clipboard to use in [step 2](#install-and-configure-egnyte-in-contentstack-marketplace).![Egnyte-Get-API-Key-And-Status-As-Active](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0ea7e3b34e33d301/65df8b4e4487d0235e3ff497/Egnyte-Get-API-Key-And-Status-As-Active.png)

        **Note:** The status of the API Key should be **active** for a successful configuration. Please contact the [Egnyte support](https://developers.egnyte.com/contact) team if the API key is in a waiting or inactive state.

2.  ## Install and Configure Egnyte in Contentstack Marketplace

    Follow the steps given below to install the Egnyte app in Contentstack.

    1.  Log in to your [Contentstack account](https://www.contentstack.com/login/).
    2.  Navigate to the “App Switcher” icon in the top-right corner and click **Marketplace**.![Contentstack-App-Switcher-Marketplace](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt47c618781b542b64/68ee96ad6bfd93c9913fee8a/Contentstack-App-Switcher-Marketplace.png)
    3.  Click **Apps** from the left panel.
    4.  Within the Marketplace, you can see all the available apps. Hover over the **Egnyte** app and click **Install**.  
        ![marketplace_appswitcher_egnyte.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/amc4ef635c7ba6d17b/8aa21aa2671e46654c005a45/marketplace_appswitcher_egnyte.png?locale=en-us)
    5.  In the pop-up window, select the stack where you want to install the Egnyte app, accept the terms of service, and click the **Install** button.![Egnyte-App-Install](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8382d484c1bea4f9/65df8b39396ebb3b8807d6b5/Egnyte-App-Install.png)
    6.  On the **Configuration** screen, enter the **Domain URL** and Egnyte **API Key** retrieved from your Egnyte account in [step 1](#retrieve-domain-url-and-api-key-for-egnyte-account).![Egnyte-Configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4208b4df4480795e/65df8b392568ef48426cb850/Egnyte-Configuration.png)If you select **Custom Fields** then the **Egnyte Keys** drop-down appears. By default, **entry\_id**, **path**, **name**, and **link.url** keys are already selected inside the dropdown. If you want to create a new key, click the **\+ New Key Field** option.![Egnyte-Configuration-New-Key-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4169d3b281b5b320/65df8b382568ef08ee6cb84c/Egnyte-Configuration-New-Key-Field.png)

        In the **Add Egnyte Key Path** modal, enter the **Egnyte Key Path** and click the **Create** or **Create and Apply** button to create a new key.

        ![Egnyte-Configuration-Add-Key-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta79b462ca609cce4/65df8b38eb46a6834a7e9223/Egnyte-Configuration-Add-Key-Field.png)
    7.  Click the **Save** button.
    8.  On the **UI Locations** tab, you can see the predefined app locations. You can use the toggle button corresponding to each UI location to enable or disable it based on your requirements.![Egnyte-UI-Locations](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6e1a47594ba58d9c/65df8b65ffa94a3b853d40ed/Egnyte-UI-Locations.png)

        **Additional Resource:** For more information on UI locations, please refer to the [Installed Apps](/docs/marketplace/installed-apps#view-edit-configuration-ui-locations-and-webhook) guide.

    9.  Click **Open Stack** to start using the Egnyte application.
3.  ## Use Egnyte within your Stack Entry

    To use the Egnyte app within an entry of your stack, follow the steps given below:

    1.  Go to your stack, click the **Content Models** icon in the left navigation panel, and click the **\+ New Content Type** button.
    2.  Create a content type by adding relevant details as displayed below:![Egnyte-Content-Type](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltef018e07ea4bbcdd/65df8b383e2d0e02f7f71883/Egnyte-Content-Type.png)
    3.  There are two ways to use the Egnyte app in your entry:

        1.  [Custom Field](#steps-to-use-the-egnyte-app-as-a-custom-field)
        2.  [JSON Rich Text Editor Field](#steps-to-use-the-egnyte-app-in-a-json-rich-text-editor-field)

    ### Steps to Use the Egnyte App as a Custom Field

    1.  In the **Content Type Builder** page, add a [Custom](/docs/headless-cms/custom) field in your content type by clicking the **Insert a field** link represented by a **+** sign.
    2.  Under **Select Extension/App**, select **Egnyte** and click the **Proceed** button.![Egnyte-Custom-Field-Add-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf1a0f44c079e5245/65df8b39ffa94aa8f53d40e1/Egnyte-Custom-Field-Add-App.png)

        This adds Egnyte in the custom field.

        ![Egnyte-Custom-Field-Added-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt24220aed13e9464e/65df8b38c7f05ba353867f52/Egnyte-Custom-Field-Added-App.png)
    3.  After adding the app in a custom field, click **Save** or **Save and Close** to save your changes.
    4.  Now to use the Egnyte app, create an entry in this newly created content type. In the left navigation panel, navigate to the **Entries** page, click **\+ New Entry** to create a new entry for the above content type, and then click **Proceed**.  
        You can see the Egnyte app’s custom fields on your entry page as shown below:![Egnyte-Custom-Field-Sample-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt937ea7d294276bb5/65df8b4e6c65d706ee87e2f9/Egnyte-Custom-Field-Sample-Entry.png)
    5.  Click **\+ Choose Asset(s)** button.![Egnyte-Custom-Field-Choose-Assets](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd57aef48f4ca74fd/65df8b4d2c8befd0c3621f8a/Egnyte-Custom-Field-Choose-Assets.png)

        **Note:** If you are using the Egnyte app for the first time, the app will redirect you to the Egnyte login page after clicking the **\+ Choose Asset(s)** button. You need to authenticate the credentials and allow access to the Egnyte assets by clicking the **Allow Access** button.

        ![Egnyte-Selector-Page-Authentication](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1a3cb9860c874ac6/65df8b6511cd1d4a6aa19d2e/Egnyte-Selector-Page-Authentication.png)
    6.  Choose the required assets from your Egnyte account and click **OK** to add them to your entry.![Egnyte-Selector-Page](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd02fb50a8a5bddb4/65df8b656e7edb6ad1b4fe71/Egnyte-Selector-Page.png)

        The assets you select get added to your entry in the thumbnail view.

        ![Egnyte-Custom-Field-Assets-View-Thumbnail](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdd7b3c47b3ca14da/65df8b4effa94a2a803d40e7/Egnyte-Custom-Field-Assets-View-Thumbnail.png)

        To view the assets in the list view, select the **List** view option from the dropdown.

        ![Egnyte-Custom-Field-Assets-View-Options](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte03884d04c36791f/65df8b4eee3a13c58ec8f06a/Egnyte-Custom-Field-Assets-View-Options.png)

        The assets you select get added to your entry in the list view.

        ![Egnyte-Custom-Field-Assets-View-List](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdfc68f8cc8e44369/65df8b390f1d356b92ca4c7b/Egnyte-Custom-Field-Assets-View-List.png)
    7.  Hover over the image to view the options to reorder, preview, and remove the asset.

        1.  Click the **Reorder** icon to drag and reorder the asset.
        2.  Click the **Open in Egnyte** icon to open the file in the Egnyte app.
        3.  Click the **Remove** icon to delete the asset.

        **Thumbnail View**

        ![Egnyte-Custom-Field-Assets-View-Thumbnail-Features](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt23160a4112477c60/65df8b4effa94a0c993d40e9/Egnyte-Custom-Field-Assets-View-Thumbnail-Features.png)

        **List View**

        ![Egnyte-Custom-Field-Assets-View-List-Features](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt556e84d8667167ae/65df8b39eef4e37e2d1e6585/Egnyte-Custom-Field-Assets-View-List-Features.png)
    8.  After adding the asset(s), **Save** and **Publish** your entry.

    ### Steps to Use the Egnyte App in a JSON Rich Text Editor Field

    1.  In the **Content Type Builder** page, add a [JSON Rich Text Editor](/docs/headless-cms/about-json-rich-text-editor) field in your content type by clicking the **Insert a field** link represented by a **+** sign.
    2.  Under **Select Extension/App**, select **Egnyte** and click the **Proceed** button.![Egnyte-JSONRTE-Add-Plugin](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3f36b544182ab444/65df8b4ed778b07d39ad60ac/Egnyte-JSONRTE-Add-Plugin.png)

        This adds Egnyte in the custom field.

        ![Egnyte-JSONRTE-Added-Plugin](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blteb6a131218b227c9/65df8b4e330e00e3007f6a30/Egnyte-JSONRTE-Added-Plugin.png)
    3.  After adding the app in a JSON Rich Text Editor field, click **Save** or **Save and Close** to save your changes.
    4.  Now to use the Egnyte app, create an entry in this newly created content type. In the left navigation panel, navigate to the **Entries** page, click **\+ New Entry** to create a new entry for the above content type, and then click **Proceed**.  
        You can see the Egnyte icon in the JSON Rich Text Editor field on your entry page as shown below:![Egnyte-JSONRTE-Sample-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt30190afba7ba6156/65df8b652c8bef0309621f8e/Egnyte-JSONRTE-Sample-Entry.png)
    5.  Click the **Egnyte** app icon.![Egnyte-JSONRTE-App-Icon](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt55618b4b6575a34c/65df8b6574714155750a386f/Egnyte-JSONRTE-App-Icon.png)

        **Note:** If you are using the Egnyte app for the first time, the app will redirect you to the Egnyte login page after clicking the app icon. You need to authenticate the credentials and allow access to the Egnyte assets by clicking the **Allow Access** button.

        ![Egnyte-Selector-Page-Authentication](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1a3cb9860c874ac6/65df8b6511cd1d4a6aa19d2e/Egnyte-Selector-Page-Authentication.png)
    6.  Choose the assets from your Egnyte account and click **OK** to add them to your entry.![Egnyte-Selector-Page](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd02fb50a8a5bddb4/65df8b656e7edb6ad1b4fe71/Egnyte-Selector-Page.png)

        The assets you select get added to your entry.

        ![Egnyte-JSONRTE-Assets-Added](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb166855fe8d9db4c/65df8b65c7f05b38ef867f56/Egnyte-JSONRTE-Assets-Added.png)
    7.  To resize the image, drag the corner of the image and adjust the size as required. Hover over the image to view the options to edit and remove the asset.![Egnyte-JSONRTE-Assets-Features](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt58fba5fd3161a4cc/65df8b6531aca1a6307ef289/Egnyte-JSONRTE-Assets-Features.png)

        **Additional Resource:** You can use alignment and inline asset features to edit the asset placement within the [JSON Rich Text Editor](/docs/headless-cms/about-json-rich-text-editor/) field.

    8.  After adding the asset(s), **Save** and **Publish** your entry.
