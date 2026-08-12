---
title: "Brandfolder App Installation Guide"
description: "Learn to install the Brandfolder app from the Contentstack Marketplace and to fetch digital assets from the Brandfolder account into your entries."
url: /marketplace/brandfolder
---

# Brandfolder App Installation Guide

## Brandfolder App Installation Guide

Brandfolder is a cloud-based and customizable digital asset management platform many brands use to organize all digital assets in one place. Marketers and creatives use this platform to readily organize, control, create, distribute, and measure all their digital assets.

Contentstack Marketplace lets you install the Brandfolder app and use it within your stack to fetch and display digital assets from the Brandfolder account within your entries.

## Prerequisites

-   [Brandfolder account](https://brandfolder.com/signin/)
-   [Contentstack account](https://www.contentstack.com/login/)
-   Access to the Contentstack Organization/Stack as the Owner/Admin

Follow this step-by-step guide to install and configure Brandfolder within your stack.

## Steps for Execution

1.  [Retrieve credentials from your Brandfolder account](#retrieve-credentials-from-your-brandfolder-account)
2.  [Install and configure the Brandfolder app in Marketplace](#install-and-configure-the-brandfolder-app-in-marketplace)
3.  [Use the Brandfolder app within your stack](#use-the-brandfolder-app-within-your-stack)

1.  ## Retrieve Credentials from your Brandfolder Account
    
    To get the API Key for Brandfolder, log in to the [Brandfolder account](https://brandfolder.com/signin/) (as an **Owner** or **Admin**) and follow the steps given below:
    
    **Note:** If you already have a guest account, log in to the [Brandfolder account](https://brandfolder.com/signin/) (as a **Guest**), or create a new one.
    
    1.  To create a guest account, navigate to your workspace, click the horizontal ellipses, and select **Manage Users**.![Brandfolder-Retreive-Credentials-Manage-Users](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbe50ffb19899e41c/69300473178ae2328134e763/Brandfolder-Retreive-Credentials-Manage-Users.png)
    2.  You are redirected to the **All Users** > **User Management** section. Under the **Invite** tab, fill in the details and click **Send invitations**. You will get an invitation email.![Brandfolder-Retreive-Credentials-Send-Invitations](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltde0027ad2d1960e7/69300474ba187c59c82a827d/Brandfolder-Retreive-Credentials-Send-Invitations.png)
    3.  Click the **Accept Invitation** button in your email to go to the guest account dashboard.![Brandfolder-Retreive-Credentials-Accept-Invitation](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf05162c36511d56d/69300474e5684910596d9d0f/Brandfolder-Retreive-Credentials-Accept-Invitation.png)
    4.  Now, click the username dropdown in the top-right corner, and navigate to **My Profile**.![Brandfolder-Retreive-Credentials-My-Profile](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb01c499e3eb2ebf2/69300474d6ccd2247b637b0f/Brandfolder-Retreive-Credentials-My-Profile.png)
    5.  Click **Integrations** in the left panel and copy the **API Key**.![Brandfolder-Retreive-Credentials-API-Key](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8cb60830df57b4c3/6930047445d0fc55582c05ef/Brandfolder-Retreive-Credentials-API-Key.png)
2.  ## Install and Configure the Brandfolder App in Marketplace
    
    To install the app, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps:
    
    1.  Navigate to the “App Switcher” icon in the top-right corner and click **Marketplace**.![Contentstack-App-Switcher-Marketplace](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt47c618781b542b64/68ee96ad6bfd93c9913fee8a/Contentstack-App-Switcher-Marketplace.png)
    2.  Click **Apps** from the left panel.
    3.  Within the Marketplace, you can see the available apps. Hover over the **Brandfolder** app and click **Install**.![Brandfolder-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltae5d9a8d61c6f596/693006757d013440843a93a6/Brandfolder-App.png)
    4.  In the pop-up window, select the stack where you want to install the Brandfolder app, accept the **Terms of Service**, and click the **Install** button.
    5.  On the **Configuration** screen, you can add multiple configurations for Brandfolder. To do so, follow the steps given below:
        1.  Click the **\+ New Configuration** button to add new configuration details.![Brandfolder-Configuration-Add-New](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdb1e510eb6929cdd/693018edd6ccd21fd5637b67/Brandfolder-Configuration-Add-New.png)
        2.  In the **Add Configuration** modal, enter the configuration **Name** and click **Add**.![Brandfolder-Configuration-Add-New-Modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8039dd8ad7dab363/693018ed41f0921fc959130b/Brandfolder-Configuration-Add-New-Modal.png)
        3.  Enter the **Brandfolder API Key** retrieved from your Brandfolder account in [step 1](#retrieve-credentials-from-your-brandfolder-account).![Brandfolder-Configuration-API-Key](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1b77c3bf65adbcef/693018b2358e5b66774506db/Brandfolder-Configuration-API-Key.png)
        4.  **Set as Default**: To set this configuration as the default, click this checkbox.![Brandfolder-Configuration-Set-As-Default](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt58078d618fad57fa/693018b2178ae2660334e7e8/Brandfolder-Configuration-Set-As-Default.png)
            
            Alternatively, click the vertical ellipsis on the top-right side of the configuration section, then select **Set as Default** from the menu.
            
            ![Brandfolder-Configuration-Set-As-Default-Option](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf187f5179cabe373/693018b353245b5c06db8cd8/Brandfolder-Configuration-Set-As-Default-Option.png)
            
            **Note:** At least one app configuration should be selected as the default.
            
            Similarly, you can add multiple configurations by following the steps discussed above.
            
        5.  To delete the configuration, click the vertical ellipsis and select **Delete Configuration**.![Brandfolder-Configuration-Delete](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte7a8ca5fa82ae837/693018b3d6ccd28490637b63/Brandfolder-Configuration-Delete.png)
            
            In the **Confirm Deletion** modal, add the configuration name and click **Delete**.
            
            ![Brandfolder-Configuration-Delete-Modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte0a6f48fb54bf5b3/693018b3769c2e0457839934/Brandfolder-Configuration-Delete-Modal.png)
        6.  For an existing user, the credentials will be added as the default configuration, and named as **legacy\_config**.![Brandfolder-Configuration-Legacy-Config](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0c344678e68cb011/693018b353245bcd48db8cd4/Brandfolder-Configuration-Legacy-Config.png)
            
            **Warning:**
            
            -   **legacy\_config** is a reserved keyword and you cannot use it in adding new configurations.
            -   If you delete the **legacy\_config** configuration, data loss may occur and you will not be able to access the products and categories from the related accounts.
            
        7.  **Legacy Settings**: Legacy Settings allow you to use the Brandfolder Extension. To enable the extension, simply toggle the **Enable Extension Support** option. If this toggle is enabled, you will be able to get the asset JSON data similar to the Brandfolder Extension.![Brandfolder-Configuration-Legacy-Settings](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt74575a67bb82fb50/693004740735e19641bd8618/Brandfolder-Configuration-Legacy-Settings.png)
            
            **Note:** If the extension is enabled, **All Fields** and **Custom Fields** option cannot be accessed to save the Brandfolder keys within the entry.
            
        8.  **Choose the Brandfolder Keys to Save in Entry**: Choose how to save the data fetched from Brandfolder in Contentstack entries.
            
            1.  If you select the **All Fields** option, you can select only a limited number of assets in the entry.
            2.  With **Custom Fields**, you can search and add specific Brandfolder fields that you want to save in entries.
            
            ![Brandfolder-Configuration-Save-In-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0d9812bb44d91c6a/693018b30735e1b05abd867e/Brandfolder-Configuration-Save-In-Entry.png)
            
            If you select **Custom Fields**, then the **Brandfolder Keys** drop-down appears. By default, **id**, **name**, **url**, **assetId**, **filename**, **extension**, **sizeInBytes**, **dimensions**, and **apiDto.attributes.cdn\_url** keys are selected. If you want to create a new key, click the **\+ New Key Field** option.
            
            ![Brandfolder-Configuration-Save-In-Entry-New-Key-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc2d347585eb139a1/693018b22c96e0735134a341/Brandfolder-Configuration-Save-In-Entry-New-Key-Field.png)
            
            In the **Add Brandfolder Key Path** modal, enter the **Brandfolder Key Path** and click the **Create** button to create a new key.
            
            ![Brandfolder-Configuration-Save-In-Entry-Add-New-Key-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt61db9079d48f4b6b/693018b22e2f9df2a0de2069/Brandfolder-Configuration-Save-In-Entry-Add-New-Key-Field.png)
    6.  After adding the configuration details, click the **Save** button.
    7.  On the **UI Locations** tab, you can see the predefined app locations. You can use the toggle button corresponding to each UI location to enable or disable it based on your requirements.![10-Brandfolder-UI-locations](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3f65f4fd8504db23/6690e1cf3629be66755ccb76/10-Brandfolder-UI-locations.png)
        
        **Additional Resource:** For more information on UI locations, refer to the [Installed Apps](/docs/marketplace/installed-apps#view-edit-configuration-ui-locations-and-webhook) guide.
        
    8.  Click **Open Stack** to start using the Brandfolder app.
3.  ## Use the Brandfolder App within your Stack
    
    To use the Brandfolder app within an entry of your stack, follow the steps given below:
    
    1.  Navigate to the stack dashboard, click **Content Models** in the header, then **New Content Type.** From the dropdown, select **Create New**.![Contentstack-App-Switcher-Header-Content-Models](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbd4160bcd314fcd9/69301bcc53245b1431db8ce6/Contentstack-App-Switcher-Header-Content-Models.png)
    2.  [Create a content type](/docs/headless-cms/create-a-content-type) by adding relevant details as displayed below:![11-Brandfolder-Content-Type](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfa388e9d49edda0c/6690e1cf13658b0c83f60d1f/11-Brandfolder-Content-Type.png)
    3.  There are two ways to use the Brandfolder app in your entry:
        1.  [Custom Field](#use-the-brandfolder-app-as-a-custom-field)
        2.  [JSON Rich Text Editor field](#use-the-brandfolder-app-as-a-json-rte-plugin)
    
    ### Use the Brandfolder App as a Custom Field
    
    1.  In the **Content Type Builder** page, add a [Custom](/docs/headless-cms/custom/) field by clicking the **Insert a field** link represented by a **+** sign.
    2.  Under **Select Extension or App**, select **Brandfolder** and click the **Proceed** button.![12-Brandfolder-Custom-Field-Add-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf04f2188c7bb4a6d/6690e1cefb37921f7068d6b2/12-Brandfolder-Custom-Field-Add-App.png)
        
        Change the **Display Name** of the custom field to your choice, for example, **Brandfolder Custom Field**. Optionally, you can add **Help Text** and **Instruction Value** as required. This adds Brandfolder in the custom field.
        
        ![13-Brandfolder-Custom-Field-Added-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt94bd2bc2162c3ae2/6690e1d848f4c2630e655baf/13-Brandfolder-Custom-Field-Added-App.png)
        
        **Additional Resource:** To set the configuration object, refer to the [Set Advanced Config Object in Custom Field](#set-advanced-config-object-in-custom-field-optional) section.
        
    3.  After adding the app, click **Save** or **Save and Close** to save your changes.
    4.  To use the Brandfolder app, [create an entry](/docs/headless-cms/create-an-entry) for this newly created content type. Navigate to **Entries** in the header, click **\+ New Entry** to create an entry within the same content type, and click **Proceed**.
        
        You can see the Brandfolder app’s custom fields on your entry page as shown below:
        
        ![Brandfolder-Custom-Sample-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdb978eff9c2fa26b/69301ee0358e5b40f3450706/Brandfolder-Custom-Sample-Entry.png)
    5.  Click **\+ Choose Asset(s)** button.![Brandfolder-Custom-Choose-Assets](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta057da92d4e7d981/69301f897d0134447b3a941c/Brandfolder-Custom-Choose-Assets.png)
    6.  Choose the **Collection** to select the asset from your Brandfolder account to add them to your entry.![16-28-Brandfolder-Selector-Page-Select-Collection](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltaaa53efe9532d356/6690f9e445432599f1e5e254/16-28-Brandfolder-Selector-Page-Select-Collection.png)
        
        You can add the Brandfolder assets in two ways:
        
        1.  Hover over the image, click the **three ellipses** icon, and then click **Place** to add the asset to your custom field from the Brandfolder selector page.![17-29-Brandfolder-Selector-Page-Place-Asset](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf9d580159cad747b/6690f9e470080b74166fa9f6/17-29-Brandfolder-Selector-Page-Place-Asset.png)
        2.  Hover over the image and click **View Details**.![18-30-Brandfolder-Selector-Page-View-Details](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcd7c7be866c86b57/6690f9e41a58fa5838342fbf/18-30-Brandfolder-Selector-Page-View-Details.png)
            
            Go to **Placement options** and click **Place** to add the asset to your custom field from the Brandfolder selector page.
            
            ![19-31-Brandfolder-Selector-Page-Placement-Options](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc60534a5ebb41ee0/6690f9e4a6bf116eadaae32c/19-31-Brandfolder-Selector-Page-Placement-Options.png)
            
            You can edit the **File Type**, **Width**, and **Height** of the image before placing it.
            
        
        The assets you insert get referenced within your entry in the thumbnail view, by default.
        
        ![Brandfolder-Custom-Assets-View-Thumbail](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt504e4b19e58ae82c/69302c76b48b4596b33fd031/Brandfolder-Custom-Assets-View-Thumbail.png)
        
        **Note:** You can select only one asset at a time to add to your entry.
        
        To change the assets view, select **List** from the drop-down menu as shown in the following screenshot:
        
        ![Brandfolder-Custom-Assets-View-Options](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd3d04a9bb15e2775/69302c762e2f9dfd9cde20a4/Brandfolder-Custom-Assets-View-Options.png)
        
        The assets you insert get referenced within your entry in the list view.
        
        ![Brandfolder-Custom-Assets-View-List](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf3479d029c8dd530/69302c76ba187cd0662a8322/Brandfolder-Custom-Assets-View-List.png)
    7.  Hovering over the image will allow you to reorder, preview, or remove it.
        
        1.  To reorder the image, hover over it and select the **Reorder** icon. This allows you to drag and reorder the image to your desired position.
        2.  To preview the image, hover over it and select the **Preview** icon. You can view the image in a new tab.
        3.  To delete the image, hover over it and select the **Remove** icon.
        
        **Thumbnail View**
        
        ![Brandfolder-Custom-Assets-View-Thumbail-Options](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt14931a93a867f869/69302c752c96e00bd634a39b/Brandfolder-Custom-Assets-View-Thumbail-Options.png)
        
        **List View**
        
        ![Brandfolder-Custom-Assets-View-List-Options](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt87f4b75a0c619c59/69302c767d013495c93a9443/Brandfolder-Custom-Assets-View-List-Options.png)
    8.  After adding the asset(s), **Save** and **Publish** your entry.
    
    ### Set Advanced Config Object in Custom Field (Optional)
    
    While adding the Brandfolder app in the custom field in [step 3](#use-the-brandfolder-app-within-your-stack), you can set the configuration parameter if you have added multi-configuration details during app installation in [step 2](#install-and-configure-the-brandfolder-app-in-marketplace).
    
    Under **Advanced** properties, you can set the **Config Parameter** for all entries of a particular content type.
    
    ![Brandfolder-Custom-Advanced-Config-Parameter](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta1319097189728ea/693021d9d6ccd23f8d637b80/Brandfolder-Custom-Advanced-Config-Parameter.png)
    
    The **key:value** passed in the configuration object overrides the default app configuration settings.
    
    -   **Configuration Object:** In case you want to use a different Brandfolder configuration for any custom field within the same stack, you need to specify the configuration name in the Config Parameter.
        
        ```
        {
          "config_label": [
            "Configuration-2"
          ]
        }
        ```
        
    -   **Locale Based Configuration Object (Optional):** To add a locale-based configuration, add a locale parameter to the additional configuration object which specifies the locale value (for example: en-us) as the object key and the configuration object as the value to the locale.
        
        ```
        {
          "config_label": [
            "Configuration-2"
          ],
          "locale": {
            "en-us": {
              "config_label": [
                "Configuration-3"
              ]
            },
            "fr-fr": {
              "config_label": [
                "Configuration-1"
              ]
            }
          }
        }
        ```
        
    -   **Max Limit:** You can set the maximum number of assets that can be added in the Custom field. In our example, it is 5.
        
        ```
        {
          "advanced": {
            "max_limit": 5
          }
        }
        ```
        
    -   **Asset Validations:** Only those assets will be added in the custom field that satisfy the advance config constraints for size, height, and width.
        
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
        
    
    ### Use the Brandfolder app as a JSON RTE Plugin
    
    1.  In the **Content Type Builder** page, add a [JSON Rich Text Editor](/docs/headless-cms/about-json-rich-text-editor/) field by clicking the **Insert a field** link represented by a **+** sign.
    2.  Click inside the **Select JSON RTE Plugin(s)** field to open the **Select Plugin** modal.
    3.  Select **Brandfolder** from the available options and click **Add Plugin(s)**.![25-Brandfolder-JSONRTE-Add-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt025b78b94eb1895a/6690e21034b8ce1bef5dd072/25-Brandfolder-JSONRTE-Add-App.png)
        
        This adds Brandfolder in the JSON Rich Text Editor.
        
        ![26-Brandfolder-JSONRTE-Added-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltee36fb01786e9e1a/6690e2107fa8e74a4e756db5/26-Brandfolder-JSONRTE-Added-App.png)
        
        **Additional Resource:** To set the configuration object, refer to the [Set Advanced Config Object in JSON RTE Plugin](#set-advanced-config-object-in-json-rte-plugin-optional) section.
        
    4.  After adding the app in a JSON Rich Text Editor field, click **Save** or **Save and Close** to save your changes.
    5.  To use the Brandfolder app, [create an entry](/docs/headless-cms/create-an-entry) for this content type. To do this, navigate to the **Entries** page, click **\+ New Entry**, select the content type you created above, and then click **Proceed**.
        
        You will see the Brandfolder app icon inside the JSON RTE field in your entry page as shown below:
        
        ![Brandfolder-JSONRTE-Sample-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb07ed881241ae7a9/69302e22178ae20c4334e85c/Brandfolder-JSONRTE-Sample-Entry.png)
    6.  Choose the **Collection** to select the asset from your Brandfolder account to add them to your entry.![16-28-Brandfolder-Selector-Page-Select-Collection](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltaaa53efe9532d356/6690f9e445432599f1e5e254/16-28-Brandfolder-Selector-Page-Select-Collection.png)
        
        You can add the Brandfolder asset(s) in two ways:
        
        1.  Hover over the image, click the **three ellipses** icon, and then click **Place** to add the asset to your JSON Rich Text Editor field from the Brandfolder selector page.![17-29-Brandfolder-Selector-Page-Place-Asset](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf9d580159cad747b/6690f9e470080b74166fa9f6/17-29-Brandfolder-Selector-Page-Place-Asset.png)
        2.  Hover over the image and click **View Details**.![18-30-Brandfolder-Selector-Page-View-Details](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcd7c7be866c86b57/6690f9e41a58fa5838342fbf/18-30-Brandfolder-Selector-Page-View-Details.png)
            
            Go to **Placement options** and click **Place** to add the asset to your JSON Rich Text Editor field from the Brandfolder selector page.
            
            ![19-31-Brandfolder-Selector-Page-Placement-Options](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc60534a5ebb41ee0/6690f9e4a6bf116eadaae32c/19-31-Brandfolder-Selector-Page-Placement-Options.png)
            
            You can edit the **File Type**, **Width**, and **Height** of the image before placing it.
            
        
        The assets you select are added to your entry.
        
        ![Brandfolder-JSONRTE-Added-Assets](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5a554560c0ca00f5/69302c76f8653a7094b15271/Brandfolder-JSONRTE-Added-Assets.png)
        
        **Note:** You can select only one asset at a time to add to your entry.
        
    7.  To resize the image, drag the corner of the image and adjust the size as required. Hover over the image to view the following options:
        
        1.  Click the **Preview** icon to view the image.
        2.  Click the **Edit** icon to edit the image. Make the necessary changes and click the **Save** button.
        3.  Click the **Remove** icon to remove the selected image.![Brandfolder-JSONRTE-Added-Assets-Options](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt279c75e0874f60b0/69302c762e2f9df01dde20a0/Brandfolder-JSONRTE-Added-Assets-Options.png)
        
        **Additional Resource:** You can use alignment and inline asset features to edit the asset placement within the [JSON Rich Text Editor](/docs/headless-cms/about-json-rich-text-editor/) field.
        
    8.  After adding the asset(s), **Save** and **Publish** your entry.
    
    ### Set Advanced Config Object in JSON RTE Plugin (Optional)
    
    While adding the Brandfolder app in the JSON RTE Plugin in [step 3](#use-the-brandfolder-app-within-your-stack), you can set the configuration parameter if you have added multi-configuration details during app installation in [step 2](#install-and-configure-the-brandfolder-app-in-marketplace).
    
    To add the **Config Parameter** in the JSON RTE field, click the gear icon on the app plugin selector page. You can set the following validation for the JSON RTE field:
    
    ![Brandfolder-JSONRTE-Plugin-Config](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc3ecaf85b324d411/6930232feabd9e8046e30544/Brandfolder-JSONRTE-Plugin-Config.png)
    
    In case you want to use a different Brandfolder configuration for any JSON RTE field within the same stack, you need to specify the configuration name in the Config Parameter.
    
    **Configuration Object (Optional):**
    
    ```
    {
      "config_label": [
        "Configuration-2"
      ]
    }
    ```
