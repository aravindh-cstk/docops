---
title: "Frontify App Installation Guide"
description: "Frontify is an asset management platform that helps you manage your digital assets at one place and customize the access within your team"
url: /marketplace/frontify
uid: blt1ec51fed273556b5
---

# Frontify App Installation Guide

## Frontify App Installation Guide

Frontify is an asset management platform many brands use to organize all digital assets in one place. You can upload, store, and manage images, videos, icons, logos, and documents for a collaborative workflow. With asset personalization, you can govern and set the accessibility of certain assets within your team.

Contentstack Marketplace lets you install the Frontify application and use it within your stack to fetch and display assets from Frontify within your entries.

## Prerequisites

-   [Frontify account](https://app.frontify.com/auth/?referer=%2F)
-   [Contentstack account](https://www.contentstack.com/login/)
-   Access to the Contentstack Organization/Stack as the Owner/Admin

Let's follow this step-by-step guide to install and configure Frontify within your stack.

## Steps for Execution

1.  [Fetch Credentials from Frontify](#fetch-credentials-from-frontify)
2.  [Install and Configure Frontify in Contentstack Marketplace](#install-and-configure-frontify-in-contentstack-marketplace)
3.  [Use Frontify within your Stack](#use-frontify-within-your-stack)

1.  ## Fetch Credentials from Frontify

    You must fetch the credentials from the Frontify dashboard to configure the app. Follow the steps to do so:

    1.  Go to [Frontify](https://app.frontify.com/auth/?referer=%2F) and create a new account.
    2.  To fetch the Domain URL, click the **profile** icon on the bottom left corner, then click **Domain Management**. You will find the list of domain URLs under Domain. Use the accessible domain.  
        ![Domain-Management](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt57d520590a4416e6/6311c2dbc593ff7e8241b991/Domain-Management.png)

        **Note:** While using the Domain URL, precede it with https://. For example, https://frontify.example.com

        ![Select-Domain](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt1c82ecb25963ab66/6311c2f0eb56af58391128f7/Select-Domain.png)

        **Additional Resource:** Refer to the [Domain Path](https://help.frontify.com/en/articles/6294953-domain-path) documentation to know more about domain management for Frontify.

    3.  To get the Client ID, you need to create an application. To do so, click the **profile** icon at the bottom left corner.
    4.  Under user profile, click **Applications**.  
        ![Applications](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltc3fba50a7e6aa165/6311c2dae3d6117d48a754db/Applications.png)
    5.  Click **Add Application**.  
        ![Add-Application](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt789e2850d98ae33c/6311c2dac350df140f26ae95/Add-Application.png)
    6.  Enter details such as Name, Description, enable Support Authenticator, disable Confidential Option, and add the scopes as basic:read and finder:read.  
        ![Define-Scope](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt563c62aa6b446a73/6311c2db57bb880636506847/Define-Scope.png)
    7.  After filling up the details, click the **Create App** button to create the app.  
        ![Define-Scope-And-Create-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf978d13034f5412c/6473c43714eef67ea1883416/Define-Scope-And-Create-App.png)
    8.  Once done, click the app to view the **Client ID**.  
        ![Client-ID](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt933e42965e422a2f/6311c2dbd6f96e04e700fb50/Client-ID.png)
2.  ## Install and Configure Frontify in Contentstack Marketplace

    Follow the steps to install the application in Contentstack.

    1.  Log in to your [Contentstack account](https://www.contentstack.com/login/).
    2.  Navigate to the “App Switcher” icon in the top-right corner and click **Marketplace**.![Contentstack-App-Switcher-Marketplace](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt47c618781b542b64/68ee96ad6bfd93c9913fee8a/Contentstack-App-Switcher-Marketplace.png)
    3.  Click **Apps** from the left panel.
    4.  Within the Marketplace, you will be able to see all the available apps. Hover over the **Frontify** app and click **Install.**![marketplace_appswithcer_frontify.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am24bb30ced5611b33/79f0b246a515a07d46da9e90/marketplace_appswithcer_frontify.png?locale=en-us)
    5.  In the popup window, select the stack where you want to install the Frontify app and click the **Install** button.  
        ![Frontify-Install-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta6bd57bab9a6b57c/64b92905b0191622e1b17d8b/Frontify-Install-App.png)  

    6.  On the **Configuration** page, enter the following details:
        1.  Enter the **Frontify Domain URL** and **Frontify Client ID** retrieved from Frontify in [step 1](#fetch-credentials-from-frontify).
        2.  Select a **Mode**.
            -   With **Multi Select**, you can select multiple assets at a time from your media gallery.
            -   With **Single Select**, you can select a single asset at a time from your media gallery.
    7.  ![Frontify-Configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb744aade940a834b/65ba7fd0ebfd03346b3d1f56/Frontify-Configuration.png)
    8.  On the **UI Locations** tab, you can see the predefined app locations. You can use the toggle button corresponding to each UI location to enable or disable it based on your requirements.![Frontify-UI-Locations](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta047dd9a3900bfc8/65ba7fe1a0c878de22592f1a/Frontify-UI-Locations.png)
    9.  **Additional Resource:** For more information on UI locations, please refer to the [Installed Apps](/docs/marketplace/installed-apps#view-edit-configuration-ui-locations-and-webhook) guide.

    10.  Click the **Save** button.
    11.  Click **Open Stack** to start using the Frontify application.
3.  ## Use Frontify within your Stack

    1.  Go to your stack, and click the **Content Models** icon in the left navigation panel.
    2.  Click the **\+ New Content Type** button to create a new content type.
    3.  Add relevant details and click the **Save and proceed** button.  
        ![Add-Content-Type](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt781f96c7fabee430/6311c2db7066f57e88f6cd18/Add-Content-Type.png)

    There are two ways to use the Frontify application in your entry.

    1.  [Custom Field](#steps-to-use-the-frontify-application-using-a-custom-field)
    2.  [JSON Rich Text Editor field](#steps-to-use-the-frontify-application-using-a-json-rich-text-editor-field)

    ### Steps to use the Frontify application using a Custom field:

    1.  Click the **Insert a field** link represented by a **+** sign to add a custom field.
    2.  Under **Select Extension/App**, select **Frontify**, and then click **Proceed**.  
        ![Select-Custom-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6d7de03fb713291b/6482e202352ac604e8da244b/Select-Custom-App.png)  

        **Add Configuration to Frontify’s Custom Field**  
        To customize the configuration for a specific custom field added in a content type, follow the steps given below:

        1.  Click the **Properties** icon of the Custom field.
        2.  Go to **Advanced**.
        3.  Under **Config Parameter**, add the configuration for that custom field (in object format). For example:

            ```
            {
            "mode": "MultiSelect",
            "clientId": "",
            "domain_url": ""
            }
            ```

            Config parameters for Frontify Marketplace App are mode, clientId, and domain\_url.  

            ![Custom-Properties-Configuration](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt92ccbc307f759d80/6311c2db1ee78a063c5995dc/Custom-Properties-Configuration.png)

            Here are the possible values you can use for **mode** in the configuration:

            1.  MultiSelect
            2.  SingleSelect

            **Note:** You can override the default app configuration for a particular custom field of content type by adding the required configuration in the Config Parameter under Properties of custom field. The key:value passed in the configuration object overrides the default app configuration.  
            If any configuration value is not added or the value is empty in the configuration object entered in the custom field of the content type, then the Contentstack Frontify app will use the default app configuration from the app’s configuration specified during [step 2](#install-and-configure-frontify-in-contentstack-marketplace).

    3.  To use the Frontify app, create an entry for the above content type, and you will see the Frontify custom field on your entry page as shown below:  
        ![Choose-Assets-Custom](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3a5b460af0f3bcc8/6473c32eae5aa2ad924caf9f/Choose-Assets-Custom.png)  

    4.  Click **\+ Choose Asset(s)** to select assets or files from your Frontify account and add them to your entry.  
        ![Choose-Assets-Custom-Button](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt281d19321d65cd5c/6473c43724b32402f8dadf9c/Choose-Assets-Custom-Button.png)

        1.  For **Single Select** mode, you can select one asset and click **Choose** to add to your entry.  
            ![Single-Select-Assets](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd547b7cc7f219a82/6473c4263f34da08987b5816/Single-Select-Assets.png)  

        2.  For **Multi Select** mode, you can select multiple assets and click **Choose** to add to your entry.  
            ![Multi-Select-Assets](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltaa7b5263af9434ca/6473c4181c27dd46153a679f/Multi-Select-Assets.png)  


        **Note:** While selecting the images from the media gallery, an authentication screen will appear for the first-time, asking the user to authenticate the application by entering the username and password. After authentication, the user needs to authorize the application in order to fetch the assets from their Frontify account.

    5.  The assets you select are added within your entry.  
        ![Assets-Added-In-Custom-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt742de033ef6756d2/6473c3201c27dd05813a679d/Assets-Added-In-Custom-Field.png)  

    6.  Hover over the image to view the options to remove or preview the image.

        1.  Click the **Preview** icon to view the image.
        2.  Click the **Remove** icon to delete the selected image.

        ![Edit-The-Custom-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta5a89cea8be84695/6473c3d9c1800102fd432efe/Edit-The-Custom-Field.png)
    7.  For documents or files, hover over the document to view the remove option.  
        1.  Click the **Remove** icon to delete the document/media asset.  
            ![JSON-Asset-Doc-File-Type-Remove](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt38028f1b3b0831a9/6474092f3f34dafff87b5841/JSON-Asset-Doc-File-Type-Remove.png)
    8.  After adding the asset(s), **Save** and **Publish** your entry.

    ### Steps to use the Frontify application using a JSON Rich Text Editor field:

    1.  In the Content Type Builder page, add JSON Rich Text Editor in your content type by clicking on the **Insert a field** link represented by a **+** sign.  

    2.  To add the Frontify plugin in JSON RTE, click the **Properties** icon of JSON RTE, and under **Select JSON RTE Plugin(s)**, choose the Frontify app, and then click the **Add Plugin(s)** button.  
        ![Select-App-From-Json](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7c934b7ec55e1a72/6482e1de9625e1733cb35d31/Select-App-From-Json.png)  

    3.  After adding the plugin, click **Save** or **Save and Close** to save your changes.  
        ![Save-Close-JSON-Plugin](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltf314d8bebaccecda/6311c2e97cb46356cd3a9565/Save-Close-JSON-Plugin.png)
    4.  To use the Frontify app as a JSON RTE plugin, create an entry for this content type, and you will see the Frontify app icon in the JSON RTE field on your entry page, as shown below:  
        ![JSON-Frontify-Icon](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf96047b9356458d1/6473c40aaeb2db22a11181b4/JSON-Frontify-Icon.png)  

    5.  Click the Frontify app icon to open the **Media Library**.
    6.  Choose one or more products from the **Media Library** and add them to your entry.
        1.  For **Single Select** mode, you can select one asset and click **Choose** to add to your entry.  
            ![Single-Select-Assets](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd547b7cc7f219a82/6473c4263f34da08987b5816/Single-Select-Assets.png)  

        2.  For **Multi Select** mode, you can select multiple assets and click **Choose** to add to your entry.  
            ![Multi-Select-Assets](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltaa7b5263af9434ca/6473c4181c27dd46153a679f/Multi-Select-Assets.png)  

    7.  The selected asset(s) is displayed in the JSON RTE editor:  
        ![JSON-Asset-Selected](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt908888ba48d71730/6473c3f986bda5811153016d/JSON-Asset-Selected.png)  

    8.  To resize the image, drag the corner of the image and adjust the size as per your need.
    9.  Hover over the image to perform the view, edit and delete operations.

        1.  Click the **View** icon to view the image(s).
        2.  Click the **Edit** icon to edit the asset in the Frontify app.
        3.  Click the **Delete** icon to delete the selected image.
        4.  To edit the image, click the Edit icon, make the necessary changes and click **Save**.

        ![JSON-Asset-Edit](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7977e0bfeda45bd0/6473c3ea04cf0c23d0c4893f/JSON-Asset-Edit.png)
    10.  After adding the asset(s), **Save** and **Publish** your entry.
4.  **Note:** In order to use the Frontify application, you need to have the below browser settings:  
    \- Pop-ups should be enabled.  
    \- Third-party cookies should be enabled.
