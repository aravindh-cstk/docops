---
title: "Aprimo App Installation Guide"
description: "Integrate Aprimo with Contentstack. Easily fetch & display digital images from your Aprimo account within entries."
url: /marketplace/aprimo
---

# Aprimo App Installation Guide

## Aprimo App Installation Guide

Aprimo is a digital asset management (DAM) platform used by many brands to organize all digital assets in one place. For a collaborative workflow, you can upload, store, and manage images, videos, icons, logos, and documents. Using asset personalization, you can control and set the accessibility of certain assets within your team.

Contentstack Marketplace lets you install the Aprimo application and use it within your stack to fetch and display images from Aprimo within your entries.

## Prerequisites

-   Aprimo account
    -   Unique login URL provided by Aprimo with a tenant name (For example, https://<sometenant>.dam.aprimo.com)
-   [Contentstack account](https://www.contentstack.com/login/)
-   Access to the Contentstack Organization/Stack as the Owner/Admin

Let's follow this step-by-step guide to install and configure the Aprimo app within your stack.

## Steps for Execution

1.  [Fetch your Aprimo Credentials](#fetch-your-aprimo-credentials)
2.  [Install and Configure the Aprimo app from Marketplace](#install-and-configure-the-aprimo-app-from-marketplace)
3.  [Use the Aprimo app within your Stack](#use-the-aprimo-app-within-your-stack)

1.  ## Fetch your Aprimo Credentials
    
    1.  You can fetch Aprimo Account **Tenant** Name from the URL shared by Aprimo. For example, in the URL https://<sometenant>.dam.aprimo.com/, <sometenant> is the Tenant name.
    2.  To fetch the **Client ID** and **Client Secret** required during app configuration in [step 2](#install-and-configure-the-aprimo-app-from-marketplace), follow the steps:
        1.  Log in to your Aprimo account and select **Administration** from the left navigation panel.![Aprimo-Administration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1db49e9895a6e001/67e689f8ab275a95e0059d77/Aprimo-Administration.png)
        2.  Go to **Registrations** under the **Integration** section.![Aprimo-Registrations](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt02427f3801d74656/67e68a0d5861916c35d4ded4/Aprimo-Registrations.png)
        3.  On the right side, click **NEW** to add a new registration.![Aprimo-New-Registration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2ae9828d3862232d/67e68a0da3b7856f78f7967d/Aprimo-New-Registration.png)
        4.  Fill up the details and click **SAVE** to generate the Client ID.![Aprimo-Fill-Registration-Details-And-Save](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt582161c6b2c2a81a/67e6c6696d13e7989936f345/Aprimo-Fill-Registration-Details-And-Save.png)
            
            **Note**: Copy the **Client Secret** to the clipboard. You'll not be able to view it again.
            
        5.  You can get the **Client ID** after registration.![Aprimo-Registration-Client-ID](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt93f6d18f265f45be/67e68a0d697ba16d2e5fe679/Aprimo-Registration-Client-ID.png)
2.  ## Install and Configure the Aprimo app from Marketplace
    
    Log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps below:
    
    1.  Navigate to the “App Switcher” icon in the top-right corner and click **Marketplace**.![Contentstack-App-Switcher-Marketplace](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt47c618781b542b64/68ee96ad6bfd93c9913fee8a/Contentstack-App-Switcher-Marketplace.png)
    2.  Click **Apps** from the left panel.
    3.  Within the Marketplace, you can see the available apps. Hover over the **Aprimo** app click **Install**.  
        ![marketplace_appswitcher_aprimo.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/amc83e0a8a113d1001/83d066744cf676a5a2fcd258/marketplace_appswitcher_aprimo.png?locale=en-us)
    4.  In the pop-up window, select the stack where you want to install the Aprimo app, accept the **Terms of Service**, and click the **Install** button.![Aprimo-App-Install](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb30196d3adca13e1/67e6b45e1b33b80cf9382036/Aprimo-App-Install.png)
    5.  On the **Configuration** screen, you can add multiple configurations for Aprimo. To do so, follow the steps given below:
        1.  Click the **\+ New Configuration** button to add new configuration details.![Aprimo-New-Configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbd76d67b5540f4a4/67e6b18c3ed2b09e291e4bc2/Aprimo-New-Configuration.png)
        2.  In the **Add Configuration** modal, enter the configuration **Name** and click **Add**.![Aprimo-Add-Configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blteb0f5b6d2d99985e/67e6b17f5ea260db19cd28df/Aprimo-Add-Configuration.png)
        3.  After adding the configuration, enter the following details:
            1.  Enter the Aprimo Account **Tenant** Name retrieved in [step 1](#fetch-your-aprimo-credentials).![Aprimo-Configuration-Credentials](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltadaf7079bcb8ed01/67e6b180d7fca9b9d45f49a8/Aprimo-Configuration-Credentials.png)
            2.  **Advanced Settings** (Optional): Enter the **Client ID** and **Client Secret** retrieved from your Aprimo account in [step 1](#fetch-your-aprimo-credentials).
                
                Then, under the **Mapper** section, click **\+ Add rule** to map **Meta Fields** and **Languages** to **Content Types**. Click the checkmark icon to confirm and add the rule.
                
                ![Aprimo-Configuration-Advanced-Settings-Credentials](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt09dbcd1f55f2c009/686cff3f753ef2c6b03b5e38/Aprimo-Configuration-Advanced-Settings-Credentials.png)
                
                **Note**:
                
                -   You can see the additional Aprimo meta fields added in the assets JSON object within the entry.
                -   Existing users view the data in the default language. You can add multiple languages by editing the rule.
                -   If no language is selected in the Mapper, the default language is used to present the meta field data.
                -   You need to enable the multi-languages support settings for the meta fields in the Aprimo account to map fields with different languages while configuring the app.
                
            3.  **Set as Default**: To set this configuration as the default, click this checkbox.![Aprimo-Configuration-Set-As-Default](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6eeb60d3d4bbd4cc/67e6b180beb75331122ba635/Aprimo-Configuration-Set-As-Default.png)
                
                Alternatively, you can set a configuration as the default by clicking the three dots on the top-right side of the configuration section and then selecting **Set as Default**.
                
                ![Aprimo-Configuration-Set-As-Default-Option](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd4f8d0b7c35de165/67e6b180221e8667e36f3b93/Aprimo-Configuration-Set-As-Default-Option.png)
                
                **Note:** At least one app configuration should be selected as the default.
                
                Similarly, you can add multiple configurations by following the steps discussed above.
                
        4.  To delete the configuration, click the three dots and select **Delete Configuration**.![Aprimo-Delete-Configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb5886ca97ab76e97/67e6b180586191e6ffd4e13c/Aprimo-Delete-Configuration.png)
            
            In the **Confirm Deletion** modal, add the configuration name and click **Delete**.
            
            ![Aprimo-Delete-Configuration-Modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta16ce1548a793a5d/67e6b1801b997de297bec3bb/Aprimo-Delete-Configuration-Modal.png)
        5.  For an existing user, the credentials will be added as the default configuration, and named as **legacy\_config**.![Aprimo-Configuration-Legacy-Config](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf1de8c3c6d2fdc4c/67e6b180b004645886561b79/Aprimo-Configuration-Legacy-Config.png)
            
            Warning:
            
            -   **legacy\_config** is a reserved keyword and you cannot use it in adding new configurations.
            -   If you delete the **legacy\_config** configuration, data loss may occur and you will not be able to access the assets from the related accounts.
            
        6.  **Choose the Aprimo Keys to Save in Entry**: Choose how to save the data fetched from the Aprimo account in Contentstack entries.
            1.  If you select the **All Fields** option, you can select only a limited number of products in the entry.
            2.  For **Custom Fields**, you can search and add specific Aprimo Fields you want to save in entries.![Aprimo-Configuration-Save-In-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf8a65b24706ef82e/67e6b180697ba134935fe8ec/Aprimo-Configuration-Save-In-Entry.png)
                
                If you select **Custom Fields** then the **Aprimo Keys** drop-down appears. By default, **id**, **name**, and **rendition.publicuri** keys are already selected. If you want to create a new key, click the **\+ New Key Field** option.
                
                ![Aprimo-Configuration-Add-New-Key-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8150ab7d92ba3519/67e6b17fdeb0565a3fb00bb2/Aprimo-Configuration-Add-New-Key-Field.png)
                
                In the **Add Key Field** modal, enter the **Key Path** and click the **Create** or **Create and Apply** button to create a new key.
                
                ![Aprimo-Add-Key-Path](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltaf38b0e217d0505d/67e6b1b83768441c2378156e/Aprimo-Add-Key-Path.png)
    6.  After adding the configuration details, click the **Save** button.
    7.  On the **UI Locations** tab, you can see the predefined app locations. You can use the toggle button corresponding to each UI location to enable or disable it based on your requirements.![Aprimo-UI-Locations](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf6c1ae2d28f1afa2/67e6b5ea207d79800f0ef715/Aprimo-UI-Locations.png)
        
        **Note:** The app requires at least one UI location to be enabled; otherwise, you would not be able to save your app configuration settings.
        
        **Additional Resource:** For more information on UI locations, please refer to the [Installed Apps](/docs/marketplace/installed-apps#view-edit-configuration-ui-locations-and-webhook) guide.
        
    8.  Click **Open Stack** to start using the Aprimo application.
3.  ## Use the Aprimo App within your Stack
    
    1.  Go to your stack, and click the **Content Models** icon in the left navigation panel.
    2.  Click the **\+ New Content Type** button to create a new content type.
    3.  Add relevant details and click the **Save and proceed** button.
    
    There are two ways to use the Aprimo application in your entry.
    
    1.  [Custom Field](#steps-to-use-the-aprimo-application-using-a-custom-field)
    2.  [JSON Rich Text Editor field](#steps-to-use-the-aprimo-application-using-a-json-rich-text-editor-field)
    
    ### Steps to use the Aprimo application using a Custom field
    
    1.  Click the **Insert a field** link represented by a **+** sign to add a custom field.
    2.  Under **Select Extension/App**, select **Aprimo**, and then click **Proceed**.![Aprimo-Custom-Field-Add-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltec2db0f679f025c1/67e6c9da901312ec8506a0e2/Aprimo-Custom-Field-Add-App.png)
    3.  Under **Advanced** properties, you have the option to set the **Config Parameter** for all entries of a particular content type. If you do so, it overrides the default app configuration that you set at the time of app installation on the Configuration screen.
        
        The key:value passed in the configuration object overrides the default app configuration settings.
        
        1.  **Configuration Object** (Optional): In case you want to use a different Aprimo configuration for any custom field within the same stack, you need to specify the configuration name in the Config Parameter.
            
            ```
            {
              "config_label": [
                "config2"
              ]
            }
            ```
            
        2.  **Locale Based Configuration Object** (Optional): To add a locale-based configuration, add a locale parameter to the additional configuration object which specifies the locale value (for example: en-us) as the object key and the configuration object as the value to the locale.
            
            ```
            {
              "config_label": [
                "config2"
              ],
              "locale": {
                "en-us": {
                  "config_label": [
                    "config3"
                  ]
                },
                "fr-fr": {
                  "config_label": [
                    "config1"
                  ]
                }
              }
            }
            ```
            
        3.  **Max Limit** (Optional): You can set the maximum number of assets that can be added in the custom field. In our example, it is 5.
            
            ```
            {
                    "advanced": {
                       "max_limit":5,
            	}
            }
            ```
            
        4.  **Custom Settings** (Optional): We have added an object, named custom\_settings,which includes the following keys in the given format:
            
            -   limitingSearchExpression: You can filter assets on the selector page.
            
            ```
            {
              "custom_settings": {
                "compact_view_options": {
                  "limitingSearchExpression": "File.Version.Extension=mp4"
                }
              }
            }
            ```
            
            **Additional Resource:** You can add more optional parameters within the compact\_view\_options object. For detailed description of these optional parameters, refer to the [Aprimo Developer Documentation](https://developers.aprimo.com/docs/aprimo-content-selector).
            
    4.  After adding the app, click **Save** or **Save and Close** to save your changes.
    5.  To use the Aprimo app, create an entry for the above content type, and you will see the Aprimo custom field on your entry page as shown below:![Aprimo-Custom-Field-Sample-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7e06942210388c96/67e6e5e0697ba12f3e5fecb6/Aprimo-Custom-Field-Sample-Entry.png)
    6.  Click **\+ Choose Asset(s)** button.![Aprimo-Custom-Field-Choose-Assets](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt75d156cfc7397650/67e6e5e0ffec041e0baab405/Aprimo-Custom-Field-Choose-Assets.png)
        
        **Note:** After clicking the **\+ Choose Asset(s)** button, the app redirects you to log in to your Aprimo account if you are using it for the first time. Enter the **Login ID** and **Password** provided by Aprimo for fetching assets from your Aprimo account.
        
        Select image(s) from your Aprimo account.![Aprimo-Selector Page](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt972a896c971df79e/67e6e5fc29f0cd2cff183798/Aprimo-Selector_Page.png)
    7.  Choose the rendition and then click **Select** to add the image to your entry.![Aprimo-Seelctor-Page-Select-Asset](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcc3ae673fda4a11e/67e6e5fd5ea2607f44cd2c17/Aprimo-Seelctor-Page-Select-Asset.png)
        
    
    The assets you select are added within your entry.9.  ![Aprimo-Custom_Field-Assets](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt452a360e012288d5/6473be73731679c1ef6b522c/Aprimo-Custom_Field-Assets.png)
    10.  Hover over the image to view the options to remove or preview the image.
         
         1.  Click the **Preview** icon to view the image.
         2.  Click the **Remove** icon to delete the selected image.
         
         ![Aprimo-Custom-Field-Asset-Feature](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt43dd89a8ff4d2198/67e6e5e1f9f87b946ec4f83c/Aprimo-Custom-Field-Asset-Feature.png)
    11.  After adding the asset(s), **Save** and **Publish** your entry.
    
    ### Steps to use the Aprimo application using a JSON Rich Text Editor field
    
    1.  In the Content Type Builder page, add JSON Rich Text Editor in your content type by clicking on the **Insert a field** link represented by a **+** sign.
    2.  To add the Aprimo plugin in JSON RTE, click the **Properties** icon of JSON RTE, and under **Select JSON RTE Plugin(s)**, choose the Aprimo app, and then click the **Add Plugin(s)** button.![Aprimo-JSONRTE-Add-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt21e85d3cd3855741/67e6c9da207d793a8e0ef8c9/Aprimo-JSONRTE-Add-App.png)
        
        To add the Config Parameter in the JSON RTE field, click the gear icon on the app plugin selector page.
        
        You can set the following validations for the JSON RTE field:
        
        1.  In case you want to use a different Aprimo configuration for any JSON RTE field within the same stack, you need to specify the configuration name in the Config Parameter.
            
            ```
            {
              "config_label": [
                "config 2"
              ]
            }
            ```
            
        2.  **Custom Settings** (Optional): We have added an object, named custom\_settings,which includes the following keys in the given format:
            
            -   limitingSearchExpression: You can filter assets on the selector page.
            
            ```
            {
              "custom_settings": {
                "compact_view_options": {
                  "limitingSearchExpression": "File.Version.Extension=mp4"
                }
              }
            }
            ```
            
            **Additional Resource:** You can add more optional parameters within the compact\_view\_options object. For detailed description of these optional parameters, refer to the [Aprimo Developer Documentation](https://developers.aprimo.com/docs/aprimo-content-selector).
            
    3.  After adding the plugin, click **Save** or **Save and Close** to save your changes.
    4.  To use the Aprimo app as a JSON RTE plugin, create an entry for this content type, and you will see the Aprimo app icon in the JSON RTE field on your entry page, as shown below:![Aprimo-JSONRTE-App-Icon](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc37b76d710d4095c/67e6e5fb207d7902490efacb/Aprimo-JSONRTE-App-Icon.png)
    5.  Click the Aprimo app icon to open the **Media Library**.![Aprimo-Selector Page](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt972a896c971df79e/67e6e5fc29f0cd2cff183798/Aprimo-Selector_Page.png)
    6.  Choose the rendition and then click **Select** to add the image to your entry.![Aprimo-Seelctor-Page-Select-Asset](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcc3ae673fda4a11e/67e6e5fd5ea2607f44cd2c17/Aprimo-Seelctor-Page-Select-Asset.png)
    The selected asset(s) is displayed in the JSON RTE editor:7.  ![Aprimo-JSONRTE-Assets](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt374fb29c518974be/67e6e5fbf9f87b7925c4f842/Aprimo-JSONRTE-Assets.png)
    
    1.  To resize the image, drag the corner of the image and adjust the size as required.
    2.  Hover over the image to view, edit or delete it.
        
        1.  Click the **View** icon to view the image.
        2.  Click the **Edit** icon to edit the image. Make the necessary changes and click the **Save** button.
        3.  Click the **Delete** icon to delete the selected image.
        
        ![Aprimo-JSONRTE-Asset-Features](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltba1fadfec3f1c3f7/67e6e5fb5ea260dcb8cd2c13/Aprimo-JSONRTE-Asset-Features.png)
    3.  After adding the asset(s), **Save** and **Publish** your entry.
    
    **Note:** For a deleted configuration, the associated assets are not removed from the entry. Instead, a warning icon is displayed on the assets.
