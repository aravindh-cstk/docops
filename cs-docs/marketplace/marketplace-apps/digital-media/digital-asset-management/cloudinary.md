---
title: "Cloudinary App Installation Guide"
description: "Use the Contentstack Marketplace Cloudinary app to fetch and manage your media assets effortlessly."
url: /marketplace/cloudinary
---

# Cloudinary App Installation Guide

## Cloudinary App Installation Guide

Cloudinary is a comprehensive media management platform that helps streamline the process of uploading, storing, managing, and delivering digital media content. With its robust capabilities for optimizing and transforming images and videos on-the-fly, it ensures they are delivered efficiently across various devices and platforms.

Cloudinary's powerful APIs and user-friendly interface enable developers and content creators to seamlessly integrate media management into their workflows, enhancing performance and user experience.

The Contentstack Marketplace lets you install the Cloudinary app and use it within your stack to refer media files from your Cloudinary account.

## Prerequisites

-   [Cloudinary account](https://cloudinary.com/users/login/)
-   [Contentstack account](https://www.contentstack.com/login/)
-   Access to the Contentstack Organization/Stack as the [Owner](/docs/headless-cms/types-of-roles#owner)/[Admin](/docs/headless-cms/types-of-roles#admin)

This step-by-step guide explains how to install and configure Cloudinary within your stack.

## Steps for Execution

1.  [Get your credentials from Cloudinary](#get-your-credentials-from-cloudinary)
2.  [Install and Configure the Cloudinary app in Marketplace](#install-and-configure-the-cloudinary-app-in-marketplace)
3.  [Use the Cloudinary app within your Stack](#use-the-cloudinary-app-within-your-stack)

1.  ## Get your Credentials from Cloudinary
    
    To get your **Cloud Name** and **API Key** from Cloudinary, follow the steps given below:
    
    1.  Log in to your [Cloudinary account](https://cloudinary.com/users/login/).
    2.  On the left-hand side primary navigation, click the **Settings** gear icon. Then, go to **Account** under **Account settings** to view your **cloud name**.![1-Cloudinary-Get-Cloud-Name](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd7b2eff5a2c7952a/668d69233d793ff0bd76cffc/1-Cloudinary-Get-Cloud-Name.png)
    3.  Click **API Keys** under **Product environment settings** to view your **API Key**.![2-Cloudinary-Get-API-Key](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc1c12911704ea3ea/668d692242bfaccfb686ba0c/2-Cloudinary-Get-API-Key.png)
    4.  Save the **Cloud Name** and **API Key**; you will need it while configuring your Cloudinary app in Contentstack in [step 2](#install-and-configure-the-cloudinary-app-in-marketplace).
        
        **Note:** To view the restricted assets, you need to configure the **Access Control Key** in [step 2](#install-and-configure-the-cloudinary-app-in-marketplace). Please contact the Cloudinary Support team to get this credential.
        
2.  ## Install and Configure the Cloudinary App in Marketplace
    
    To install the app, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps:
    
    1.  Navigate to the “App Switcher” icon in the top-right corner and click **Marketplace**.![Contentstack-App-Switcher-Marketplace](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt47c618781b542b64/68ee96ad6bfd93c9913fee8a/Contentstack-App-Switcher-Marketplace.png)
    2.  Click **Apps** from the left panel.
    3.  Within the Marketplace, you can see all available apps. Hover over the **Cloudinary** app and click **Install**.  
        ![marketplace_appswitcher_cloudinary.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am426d89bf35362c2a/86ce13200edc150e09a6509a/marketplace_appswitcher_cloudinary.png?locale=en-us)
    4.  In the pop-up window, select the stack where you want to install the Cloudinary app, accept the **Terms of Service**, and click the **Install** button.![Cloudinary-App-Install](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2ceda044f82140f5/672367ee91ff449071d70078/Cloudinary-App-Install.png)
    5.  On the **Configuration** screen, you can add multiple configurations for Cloudinary. To do this, follow the steps given below:
        
        1.  Click the **\+ New Configuration** button to add new configuration details.![Cloudinary-New-Configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6ed922675cd99ff8/672367ee8b77aef83a476e23/Cloudinary-New-Configuration.png)
        2.  After adding the configuration, enter the following details:
            1.  **Cloud Name** and **API Key**: Enter the Cloudinary **Cloud Name** and **API Key** retrieved from your Cloudinary Account in [step 1](#get-your-credentials-from-cloudinary).![Cloudinary-Name-API-Key](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4246152984212d93/672367ee036274291f5a4891/Cloudinary-Name-API-Key.png)
            2.  **Access Control**: Click the **Enable Access Control** toggle button to view the restricted assets. Enable this option and add the **Access Control Key** which you have received from the Cloudinary Support team in [step 1](#get-your-credentials-from-cloudinary).![Cloudinary-Access-Control](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfc7d3700da1dc7ba/672367ee76b6797b5a7e2c63/Cloudinary-Access-Control.png)
            3.  **Set As Default**: To set this configuration as the default, click this checkbox.![Cloudinary-Set-As-Default](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4f4755659e9d8097/672367eeb3d375d794930e3c/Cloudinary-Set-As-Default.png)
                
                Alternatively, you can set a configuration as the default by clicking three dots on the top-right side of the configuration section and then selecting **Set As Default**.
                
                ![Cloudinary-Set-As-Default-Options](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbd521abc0d9110b8/672367ee3ed56f65bf6b54c6/Cloudinary-Set-As-Default-Options.png)
                
                **Note:** At least one store configuration should be selected as the default.
                
            4.  To delete the configuration, click the three dots and select **Delete Configuration**.![Cloudinary-Delete-Configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta70a5a2e9958d2ee/672367ee709d07c10839d222/Cloudinary-Delete-Configuration.png)
                
                In the **Confirm Deletion** modal, add the configuration name and click **Delete**.
                
                ![Cloudinary-Delete-Confirm](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdff7b2baec678a9f/672367ee0d8cdc2489dcd482/Cloudinary-Delete-Confirm.png)
                
                Similarly, you can add multiple configurations by following the steps discussed above.
                
            5.  For an existing user, the credentials will be added as the default configuration, and named as **legacy\_config**.![Cloudinary-Legacy-Config](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltba9c1709ed48891a/672367ee8f426cca9adc4c69/Cloudinary-Legacy-Config.png)
                
                **Warning**:
                
                -   **legacy\_config** is a reserved keyword and you cannot use it in adding new configurations.
                -   If you delete the **legacy\_config** configuration, data loss may occur and you will not be able to access the assets from the related accounts.
                
        3.  **Choose the Cloudinary Keys to Save in Entry**: Choose how to save the data fetched from the Cloudinary account in Contentstack entries. If you select the **All Fields** option, you can select only a limited number of assets in the entry. With **Custom Fields**, you can search and add specific Cloudinary fields you want to save in entries.
            
            **Warning:** When you change the settings from **All Fields** to **Custom Fields**, and vice versa, any existing assets will follow the old configuration settings, whereas newly added assets in the entry will store the data according to the updated configuration settings.
            
            ![8-Cloudinary-Configuration-Save-In-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbfc7ed3e0d504643/668d6923cf6f6597956e7cfe/8-Cloudinary-Configuration-Save-In-Entry.png)
            
            If you select Custom Fields then the Cloudinary Keys drop-down appears in which **id**, **public\_id**, **access\_control**, **secure\_url**, and **derived\[0\].secure\_url** Cloudinary Keys options are selected by default. If you want to create a new key, click the **\+ New Key Field** option.
            
            ![9-Cloudinary-Configuration-Add-New-Key-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt682722bd7ca07bb6/67446743b09fe942e0c0508f/9-Cloudinary-Configuration-Add-New-Key-Field.png)
            
            In the **Add Cloudinary Key Path** modal, enter the **Cloudinary Key Path** and click the **Create** or **Create and Apply** button to create a new key.
            
            ![10-Cloudinary-Configuration-Add-New-Key-Path-Modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf30245d6705c6f78/668d692303254569bb8857a2/10-Cloudinary-Configuration-Add-New-Key-Path-Modal.png)
            
            You can map nested or complex structures in the following manner:
            
            1.  While mapping nested fields, you must specify the object and its field using the dot(.) notation.
                
                For example, **Object.age** for accessing the age field within the object.
                
            2.  While mapping arrays, use indexing.
                
                For example, **Array\[1\]** for accessing the second value of an array.
                
            
            You can use the above rules to create mapping rules for complex structures that include objects and arrays. All Cloudinary fields are supported through this feature.
            
            **Example**: Cloudinary Object
            
            ```
            {
               "public_id": "mens_nyfw_banner_efpxor",
               "resource_type": "image",   
               "tags": ["mensignal", "womenwear"],
               "metadata": { "product_id": "0" },
            }
            eg: tags[1] and metadata.product_id
            ```
            
        
        **Note:** The **Choose the Cloudinary keys to Save in Entry** feature is applicable to Cloudinary Custom Fields only.
        
    6.  Click the **Save** button.
    7.  On the **UI Locations** tab, you can see the predefined app locations. You can use the toggle button corresponding to each UI location to enable or disable it based on your requirements.![11-Cloudinary-UI-Locations](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9da548447ba6df71/668d8712bb79f2d0cb67532a/11-Cloudinary-UI-Locations.png)
        
        **Note:** The app requires at least one UI location to be enabled, otherwise you will not be able to save your app configuration settings.
        
    8.  If the webhook is enabled for your app, you can view the webhook logs under the Webhook tab.
        
        **Additional Resource:** For more information on UI locations and webhooks, please refer to the [Installed Apps](/docs/marketplace/installed-apps#view-edit-configuration-ui-locations-and-webhook) guide.
        
    9.  Click **Open Stack** to start using the Cloudinary app.
3.  ## Use the Cloudinary App within your Stack
    
    To use the Cloudinary app within an entry of your stack, follow the steps given below:
    
    1.  Go to your stack and click the **Content Models** icon in the left navigation panel, and click the **\+ New Content Type** button.
    2.  [Create a content type](/docs/headless-cms/create-a-content-type) by adding relevant details as displayed below:![12-Cloudinary-Content-Type](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt365c6e5bd2a24cc8/668d6929534bb9740626f693/12-Cloudinary-Content-Type.png)
    
    There are two ways to use the Cloudinary app in your entry.
    
    1.  [Custom field](#steps-to-use-the-cloudinary-app-as-a-custom-field)
    2.  [JSON Rich Text Editor field](#steps-to-use-the-cloudinary-app-as-a-json-rte-plugin)
    
    ### Steps to use the Cloudinary App as a Custom Field
    
    1.  In the **Content Type Builder** page, add a [Custom](/docs/headless-cms/custom/) field in your content type by clicking the **Insert** **a field** link represented by a + sign.
    2.  Under **Select Extension or App**, select **Cloudinary** and click the **Proceed** button.![13-Cloudinary-Custom-Field-Add-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6cf30a82a93ed962/668d69293d793f274676d004/13-Cloudinary-Custom-Field-Add-App.png)
        
        Change the **Display Name** of the custom field to your choice, for example, **Cloudinary Custom Field**. Optionally, you can add **Help Text** and **Instruction Value** for your custom field. This adds the Cloudinary app in the custom field.
        
        ![14-Cloudinary-Custom-Field-Added-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0d05c05fdaffdd1f/668d692962008a6f7810fb62/14-Cloudinary-Custom-Field-Added-App.png)
    3.  Under **Advanced** properties, you have the option to set the **Config Parameter** for all entries of a particular content type. If you do so, it overrides the default app configuration you set at the time of app installation on the Configuration screen.
        
        The key:value passed in the configuration object overrides the default app configuration settings.
        
        -   In case you want to use a different Cloudinary configuration for any Custom field within the same stack, you need to specify the configuration name in the Config Parameter.
            
            **Configuration Object**:
            
            ```
            {
              "config_label": [
                "config2"
              ]
            }
            ```
            
        -   **Locale Based Configuration Object**: To add a locale-based configuration, add a locale parameter to the additional configuration object which specifies the locale value (for example: en-us) as the object key and the configuration object as the value to the locale.
            
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
            
        -   **Asset Validations**: Only those asset will be added in the Custom field that satisfy the advance config constraints for size, height, and width.
            
            ```
            {
              "advanced": {
                  "size": {
                  "max": 10,
                  "min": 5
                },
                "height": {
                  "max": 10,
                  "min": 5,
                  "exact": 25
                },
                "width": {
                  "max": 10,
                  "min": 5,
                  "exact": 25
                }
              }
            }
            ```
            
        -   **Max Limit**: You can set the maximum number of assets that can be added in the Custom field. In our example, it is 5.
            
            ```
            {
                    "advanced": {
                       "max_limit":5
                    }
            }
            ```
            
        -   **Custom Settings**: We have added an object, named custom\_settings, which includes the following keys in the given format:
            
            -   path: Holds the path of the folder which is, by default, selected to choose products.
            -   resource\_type: Holds the type of assets you want to add. In our example, we want to add **images** only.
            
            ```
            {
                    "custom_settings": {
                       "compact_view_options": {
                           "folder": {
                              "path":"demo_assets/sample",
                              "resource_type":"image"
                            }
                        }
                    } 
                }
            ```
            
            **Additional Resource:** You can add more optional parameters within the compact\_view\_options object. For detailed description of these optional parameters, refer to the Cloudinary [Media Library Widget](https://cloudinary.com/documentation/media_library_widget#2_set_the_configuration_options) documentation.
            
    4.  After adding the app, click **Save** or **Save and Close** to save your changes.
    5.  To use the Cloudinary app, [create an entry](/docs/headless-cms/create-an-entry) for this newly created content type. To do this, in the left navigation panel, navigate to the **Entries** page, click **\+ New Entry** to create a new entry for the above content type, and then click **Proceed**.
        
        You will see the Cloudinary app added as a custom field in your entry page as shown below:
        
        ![16-Cloudinary-Custom-Field-Sample-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1a82f3ed1c2df79e/668d692962008a0d4010fb66/16-Cloudinary-Custom-Field-Sample-Entry.png)
    6.  Click the **\+ Choose Asset(s)** button to select assets from your Cloudinary account.![17-Cloudinary-Custom-Field-Choose-Assets](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc6e2b016527d60f8/668d692994a8163b3c07f0a9/17-Cloudinary-Custom-Field-Choose-Assets.png)
    7.  If you are not logged into your Cloudinary account, it will ask you to enter your credentials. Once you do that, you are directed to your assets section. Then, select the image file(s) that you want to add and click the **Insert** button.![18-32-Cloudinary-Selector-Page-Insert-Assets](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc13a4e6e72fab8c6/668d692aa4dbae20e74dbc15/18-32-Cloudinary-Selector-Page-Insert-Assets.png)
        
        **Note:** If you have set the **Config Parameter** in the **Custom Field Advanced Properties**, you will directly land to the selected folder.
        
        You can also add transformed assets. Transformed Assets are the files (such as images, videos, etc.) that have been modified or processed using Cloudinary's extensive transformation capabilities. These transformations can include resizing, cropping, format conversion, applying effects, watermarking, and more.
        
        Select the image, click the three ellipses, then click **Open** from the list, you can see several transformed options under the **Templates** heading. You can create a new template or select the transformed asset and click the corresponding **Insert** button to add it to the Custom field.
        
        ![19-33-Cloudinary-Selector-Page-Transformed-Assets](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5fc3e18b43082350/668d692abb79f2aeb4675173/19-33-Cloudinary-Selector-Page-Transformed-Assets.png)
        
        You can also add restricted assets in the Custom field.
        
        ![20-34-Cloudinary-Selector-Page-Private-Assets](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4fbca38e2b78b7e6/668d692a34b8ce753f5db3d1/20-34-Cloudinary-Selector-Page-Private-Assets.png)
        
        **Note:** To successfully add and view private images to the Custom field, make sure to configure the **Access Control Key** in [step 2](#install-and-configure-the-cloudinary-app-in-marketplace).
        
        The assets you insert are referenced within your entry in the thumbnail view, by default.
        
        ![21-Cloudinary-Custom-Field-Assets-Added-Thumbnail](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb945d61d4479c58e/668d692a0050a33ff2759627/21-Cloudinary-Custom-Field-Assets-Added-Thumbnail.png)
        
        To change the assets view, select **List** from the drop-down menu as shown in the following screenshot:
        
        ![22-Cloudinary-Custom-Field-View-Options](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9a7ef12b3f680cfb/668d693194a81606df07f0ad/22-Cloudinary-Custom-Field-View-Options.png)
        
        The assets you insert get referenced within your entry in the list view.
        
        ![23-Cloudinary-Custom-Field-Assets-Added-List](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltecec30ddf7ff04e7/668d693034b8ced78e5db3d5/23-Cloudinary-Custom-Field-Assets-Added-List.png)
        
        **Note:** Once you add the maximum number of assets, as defined in **config parameter**, the **Choose Assets** button becomes disabled. You cannot add more assets than the preconfigured limit in the Custom field.
        
        When the **Access Control Key** is no longer served, the private assets become restricted to the user.
        
        ![24-Cloudinary-Custom-Field-Private-Asset](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2270146c9189fb36/668d69306aa94448701ce0da/24-Cloudinary-Custom-Field-Private-Asset.png)
    8.  Hovering over the image will allow you to reorder, preview, or remove it.
        
        1.  To reorder the image, hover over it and select the **Reorder** icon. This will allow you to drag and reorder the image to your desired position.
        2.  To preview the image, hover over it and select the **Preview** icon. You will be able to view the image in a new tab.
        3.  To delete the image, hover over it and select the **Remove** icon.
        
        **Thumbnail View**
        
        ![25-Cloudinary-Custom-Field-Assets-Added-Thumbnail-Options](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte464851046ebcc6a/668d6931aba9d738b2c00c90/25-Cloudinary-Custom-Field-Assets-Added-Thumbnail-Options.png)
        
        **List View**
        
        ![26-Cloudinary-Custom-Field-Assets-Added-List-Options](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt78cd2fb3aa6238f3/668d6930b9959a3853740eed/26-Cloudinary-Custom-Field-Assets-Added-List-Options.png)
    9.  Once you have added the assets, **Save** and **Publish** your entry.
    
    ### Steps to use the Cloudinary App as a JSON RTE Plugin
    
    1.  In the **Content Type Builder** page (while creating the content type), add [JSON Rich Text Editor](/docs/headless-cms/about-json-rich-text-editor/) in your content type by clicking the **Insert a field** link represented by a **\+** sign.
    2.  Under **Select Plugin**, select **Cloudinary**, and then click **Add Plugin(s)**.![27-Cloudinary-JSONRTE-Add-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc8e196a7d0fe9ea8/668d693062008ad83510fb6b/27-Cloudinary-JSONRTE-Add-App.png)
        
        To add the **Config Parameter** in the JSON RTE field, click the gear icon on the app plugin selector page.
        
        ![28-Cloudinary-JSONRTE-Add-Config-Parameter](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt51a13a7b54a728bb/668d6930a4dbae8bb94dbc19/28-Cloudinary-JSONRTE-Add-Config-Parameter.png)
        
        You can set the following validations for the JSON RTE field:
        
        -   In case you want to use a different Cloudinary configuration for any JSON RTE field within the same stack, you need to specify the configuration name in the Config Parameter.
            
            ```
            {
              "config_label": [
                "config 2"
              ]
            }
            ```
            
        -   **Asset Validations**: Only those assets will be added in the JSON RTE field that satisfy the advance config constraints for size, height, and width.
            
            ```
            {
              "advanced": {
                  "size": {
                  "max": 10,
                  "min": 5
                },
                "height": {
                  "max": 10,
                  "min": 5,
                  "exact": 25
                },
                "width": {
                  "max": 10,
                  "min": 5,
                  "exact": 25
                }
              }
            }
            ```
            
        -   **Custom Settings**: We have added an object, named custom\_settings, which includes the following keys in the given format:
            
            -   path: Holds the path of the folder which is, by default, selected to choose products.
            -   resource\_type: Holds the type of assets you want to add. In our example, we want to add **images** only.
            
            ```
            {
                    "custom_settings": {
                       "compact_view_options": {
                           "folder": {
                              "path":"demo_assets/sample",
                              "resource_type":"image"
                            }
                        }
                    } 
                }
            ```
            
            **Additional Resource:** You can add more optional parameters within the compact\_view\_options object. For detailed description of these optional parameters, refer to the Cloudinary [Media Library Widget](https://cloudinary.com/documentation/media_library_widget#2_set_the_configuration_options) documentation.
            
        
        This adds Cloudinary in the JSON Rich Text Editor.
        
        ![30-Cloudinary-JSONRTE-Added-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte14bfa40515a0552/668d693042bfac033c86ba11/30-Cloudinary-JSONRTE-Added-App.png)
    3.  After adding the app in a JSON Rich Text Editor field, click **Save** or **Save and Close** to save your changes.
    4.  To use the Cloudinary app as a JSON RTE plugin, [create an entry](/docs/headless-cms/create-an-entry) for this content type. To do this, in the left navigation panel, navigate to the **Entries** page, click **\+ New Entry** to create a new entry for the above content type, and then click **Proceed**.
        
        You will see the Cloudinary app icon inside the JSON RTE field in your entry page as shown below:
        
        ![31-Cloudinary-JSONRTE-Sample-Entry-App-Icon](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc45a194a23048d87/668d69310050a3261175962b/31-Cloudinary-JSONRTE-Sample-Entry-App-Icon.png)
    5.  Click the **Cloudinary** app icon to open the selector page or **Media Library**.
    6.  If you are not logged into your Cloudinary account, it will ask you to enter your credentials. Once you do that, you are directed to your assets section. Choose one or more media files from the **Media Library** folder and then click the **Insert** button.![18-32-Cloudinary-Selector-Page-Insert-Assets](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc13a4e6e72fab8c6/668d692aa4dbae20e74dbc15/18-32-Cloudinary-Selector-Page-Insert-Assets.png)
        
        **Note:** If you have set the **Config Parameter** in the JSON RTE field, you will directly land to the selected folder.
        
        You can also add transformed assets. Transformed Assets are files (such as images, videos, etc.) that have been modified or processed using Cloudinary's extensive transformation capabilities. These transformations can include resizing, cropping, format conversion, applying effects, watermarking, and more.
        
        Select the image, click the three ellipses, and then click **Open** from the list. You can see several transformed options under the **Templates** heading. You can create a new template or select the transformed asset and click the corresponding **Insert** button to add it to the JSON Rich Text Editor field.
        
        ![19-33-Cloudinary-Selector-Page-Transformed-Assets](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5fc3e18b43082350/668d692abb79f2aeb4675173/19-33-Cloudinary-Selector-Page-Transformed-Assets.png)
        
        You can also add restricted assets in the JSON Rich Text Editor field.
        
        ![20-34-Cloudinary-Selector-Page-Private-Assets](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4fbca38e2b78b7e6/668d692a34b8ce753f5db3d1/20-34-Cloudinary-Selector-Page-Private-Assets.png)
        
        **Note:** To successfully add and view private images to the JSON Rich Text Editor field, make sure to configure the **Access Control Key** in [step 2](#install-and-configure-the-cloudinary-app-in-marketplace).
        
        The selected asset(s) gets displayed in the JSON Rich Text Editor:
        
        ![35-Cloudinary-JSONRTE-Assets-Added](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdd0468e7fc8ab63c/668d6937cf6f653a206e7d02/35-Cloudinary-JSONRTE-Assets-Added.png)
        
        When the **Access Control Key** is no longer served, the private assets become restricted to the user.
        
        ![36-Cloudinary-JSONRTE-Private-Asset](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt063a6054b32e9924/668d693742bfac826086ba15/36-Cloudinary-JSONRTE-Private-Asset.png)
    7.  To resize the image, drag the corner of the image and adjust the size as required. Hover over the image to view the following options:
        
        1.  Click the **Preview** icon to view the image.
        2.  Click the **Open in Cloudinary** icon to open the image in Cloudinary.
        3.  Click the **Edit** icon to edit the image. Make the necessary changes and click the **Save** button.
        4.  Click the **Remove** icon to remove the selected image.
        
        ![37-Cloudinary-JSONRTE-Assets-Added-Options](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0c58686b05054627/668d693742bfaca7f886ba19/37-Cloudinary-JSONRTE-Assets-Added-Options.png)
        
        **Additional Resource:** You can use alignment and inline asset features to edit the asset placement within the [JSON Rich Text Editor](/docs/headless-cms/about-json-rich-text-editor/) field.
        
    8.  After adding the asset(s), **Save** and **Publish** your entry.

**Note**:

-   If you delete a configuration with private assets and create a new one with the same label but different credentials, the original private assets may not work correctly.
-   For a deleted configuration, the associated assets are not removed from the entry, instead a warning icon is displayed on the assets.
