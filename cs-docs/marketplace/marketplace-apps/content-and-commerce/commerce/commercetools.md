---
title: "commercetools App Installation Guide"
description: "Effortlessly enhance your brand with commercetools on Contentstack. Customize your experiences by integrating products and categories seamlessly."
url: /marketplace/commercetools
---

# commercetools App Installation Guide

## commercetools App Installation Guide

commercetools is a leading digital commerce platform that allows you to create powerful, highly customized commerce experiences while building a profitable, sustainable brand.

With Marketplace, you can easily install the commercetools app and use it in your entry to refer to products or product categories from commercetools in your entries.

## Prerequisites

-   [commercetools account](https://mc.commercetools.com/)
-   Access to Project in commercetools
-   Access to create API clients in commercetools
-   [Contentstack account](https://www.contentstack.com/login/)
-   Access to the Contentstack Organization/Stack as the [Owner](/docs/headless-cms/types-of-roles#owner)/[Admin](/docs/headless-cms/types-of-roles#admin)

This step-by-step guide explains how to install and configure commercetools in your stack.

## Steps for Execution

1.  [Create a New commercetools API Client](#create-a-new-commercetools-api-client)
2.  [Install and Configure commercetools in Marketplace](#install-and-configure-commercetools-in-marketplace)
3.  [Use the commercetools app within your Stack](#use-the-commercetools-app-within-your-stack)

1.  ## Create a New commercetools API Client
    
    1.  Log in to your account at the [commercetools Merchant Center](https://mc.commercetools.com/) and select your project.
    2.  On the sidebar, click **Settings** and select **Developer settings**.![1-Developer-Setting](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt809e2f46f2f8202b/638657759743b810a4de81fd/Developer_Setting.jpg)
    3.  Click **Create new API client**.![2-Create-New-API-Client](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt6c61e9c97cf02f87/6386579013bca61092bd44f6/Create_New_API_Client.jpg)
    4.  Give a suitable name and select the scopes as shown below from the view section and then click the **Create API client** button.![3-api-client-create-btn](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt3736641e590c8dec/638657aeced3b4106dca055a/api_client_create_btn.jpg)
    5.  Store the generated **project key**, **client ID**, and **client secret**, since you will need them to configure the app in Contentstack in [step 2](#install-and-configure-commercetools-in-marketplace).
        
        **Note:** Refer to the [commercetools Composable Commerce Regions](https://docs.commercetools.com/docs/login) page to know the region of your commercetools account. You can check the locale you use to specify the search locale in config field locales through **Settings > Project settings > Languages Section**.
        
2.  ## Install and Configure commercetools in Marketplace
    
    To install the app in Contentstack, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps below:
    
    1.  Navigate to the “App Switcher” icon in the top-right corner and click **Marketplace**.![Contentstack-App-Switcher-Marketplace](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt47c618781b542b64/68ee96ad6bfd93c9913fee8a/Contentstack-App-Switcher-Marketplace.png)
    2.  Click **Apps** from the left panel.
    3.  Within the Marketplace, you can see all available apps. Hover over the **commercetools** app and click **Install**.  
        ![Marketplcae_app_switcher_Commercetools.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am1f580bc1d5057701/47b041e116a3501ec847c82a/Marketplcae_app_switcher_Commercetools.png?locale=en-us)
    4.  In the pop-up window, select the stack where you want to install the commercetools app, accept the **Terms of Service**, and click the **Install** button.![6-commercetools-App-Install](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8ff95f4cce765918/66c47eb577be39035cea9c43/6-commercetools-App-Install.png)
    5.  On the **Configuration** screen, you can add multiple configurations for commercetools. To do this, follow the steps given below:
        1.  Click the **\+ New Configuration** button to add new configuration details.![7-a-commercetools-New-Configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc510820dce1a7ed5/67346a363bea8f945c12379e/7-a-commercetools-New-Configuration.png)
        2.  In the **Add Configuration** modal, enter the configuration **Name** and click **Add**.![7-a-a-commercetools-Add-Configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt84d9615b4d0b3a14/6735fb9b3c3ebb0b381405a4/7-a-a-commercetools-Add-Configuration.png)
        3.  After adding the configuration, enter the following details:
            1.  Select the **Region**, enter the **Project Key**, **Client ID**, and **Client Secret** retrieved from your commercetools Account in [step 1](#create-a-new-commercetools-api-client).![7-b-commercetools-Configuration-Details](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt16d5fde861152b07/67346a364b891dd0cb71c4ca/7-b-commercetools-Configuration-Details.png)
            2.  Now, select the **Default Locale** value and **Default Currency** value from the respective dropdowns.
            3.  **Set as Default**: To set this configuration as the default, click this checkbox.![7-c-commercetools-Configuration-Locale-And-Currency](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd3cf7ab96b1ffc46/67346a36824c1a50d68db350/7-c-commercetools-Configuration-Locale-And-Currency.png)
                
                Alternatively, you can set a configuration as the default by clicking the three dots on the top-right side of the configuration section and then selecting **Set as Default**.
                
                ![7-d-commercetools-Configuration-Set-As-Default](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt55adc6bfdfdee704/67346a36252d981357a088d8/7-d-commercetools-Configuration-Set-As-Default.png)
                
                **Note:** At least one app configuration should be selected as the default.
                
                Similarly, you can add multiple configurations by following the steps discussed above.
                
        4.  To delete the configuration, click the three dots and select **Delete**.![7-e-commercetools-Configuration-Delete](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt214e379ed13b2499/67346a36f4137005987c84d0/7-e-commercetools-Configuration-Delete.png)
            
            In the **Confirm Deletion** modal, add the configuration name and click **Delete**.
            
            ![7-f-commercetools-Configuration-Delete-Modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta1fbc3264e2d75c6/67346a36f413704d707c84cc/7-f-commercetools-Configuration-Delete-Modal.png)
        5.  For an existing user, the credentials will be added as the default configuration, and named as **legacy\_config**.![7-g-commercetools-Configuration-Legacy-Config](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4c9b1d30d7097757/67346a3615798d423f01e85e/7-g-commercetools-Configuration-Legacy-Config.png)
            
            **Warning**:
            
            -   **legacy\_config** is a reserved keyword and you cannot use it in adding new configurations.
            -   If you delete the **legacy\_config** configuration, data loss may occur and you will not be able to access the products and categories from the related accounts.
            
        6.  **Choose commercetools Keys to Save in Entry**: Choose how to save the data fetched from the commercetools account in Contentstack entries.
            
            1.  If you select the **Only ID** option, you can select only ID of products in the entry.
                
                **Note:** The **Only ID** option does not support multi configuration.
                
            2.  If you select the **All Fields** option, you can select only a limited number of products in the entry.
            3.  For **Custom Fields**, you can search and add specific commercetools Fields you want to save in entries.
            
            ![8-commercetools-Configuration-Save-In-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd1fe6bc87c65a9d1/67346a84d01b2c85008ebd9d/8-commercetools-Configuration-Save-In-Entry.png)
            
            If you select **Custom Fields** then the **commercetools Keys** drop-down appears. By default, **id** and **name** keys are already selected. If you want to create a new key, click the **\+ New Key Field** option.
            
            ![9-commercetools-Configuration-New Key-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt341fc8ae421d11b4/66c47eb577be3906b8ea9c3f/9-commercetools-Configuration-New_Key-Field.png)
            
            In the **Add commercetools Key Field** modal, enter the **Key Name or Path** and click the **Create** button to create a new key.
            
            ![10-commercetools-Configuration-Create-Key-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8ded27f4d70f2ddf/66c47eb588b74e3939b15480/10-commercetools-Configuration-Create-Key-Field.png)
        7.  You can also configure the view column settings to customize the product and category list views by selecting which columns to display based on your requirements.
            1.  **Product List View Columns**: Select the product attributes you want to display in the list view from the **Product List View Columns** drop down. By default, **name**, **masterVariant.images.\[0\].url**, and **masterVariant.prices** keys are already selected. If you want to create a new key, click the **\+ New Key Field** option.![commercetools-Product-View-Column](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcdc20b2780f430c6/6821bc4d4967fc3ac5bf3ca4/commercetools-Product-View-Column.png)
                
                In the **Add commercetools Key Field** modal, enter the **Key Name or Path** and click the **Create** button to create a new key.
                
                ![commercetools-View-Column-Settings-Add-Key](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt131aaef4517783bc/6821bc4dc555f822b4309416/commercetools-View-Column-Settings-Add-Key.png)
            2.  **Category List View Columns**: Select the category attributes you want to display in the list view from the **Category List View Columns** drop down. By default, **key** and **name** keys are already selected. If you want to create a new key, click the **\+ New Key Field** option.![commercetools-Category-View-Column](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2d3d69725484fb14/6821bc4df2fd7abfc0027276/commercetools-Category-View-Column.png)
                
                In the **Add commercetools Key Field** modal, enter the **Key Name or Path** and click the **Create** button to create a new key.
                
                ![commercetools-View-Column-Settings-Add-Key](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt131aaef4517783bc/6821bc4dc555f822b4309416/commercetools-View-Column-Settings-Add-Key.png)
    6.  Click the **Save** button.
    7.  On the **UI Locations** tab, you can see the predefined app locations. You can use the toggle button corresponding to each UI location to enable or disable it based on your requirements.![11-commercetools-UI-Locations](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd833836b11c90175/66c488294b8e1430f6bc7239/11-commercetools-UI-Locations.png)
        
        **Note:** The app requires at least one UI location to be enabled, otherwise you will not be able to save your app configuration settings.
        
    8.  If the webhook is enabled for your app, you can view the webhook logs under the **Webhook** tab.
        
        **Additional Resource:** For more information on UI location and webhooks, please refer to the [Installed Apps](/docs/marketplace/installed-apps#view-edit-configuration-ui-locations-and-webhook) guide.
        
    9.  Click **Open Stack** to start using the commercetools app.
3.  ## Use the commercetools App within your Stack
    
    To use the commercetools app within an entry of your stack, follow the steps given below:
    
    1.  Go to your stack and click the **Content Models** + New Content Type button.
    2.  Create a content type by adding relevant details as displayed below:![12-commercetools-Content-Type](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf0fd1df3c45a6348/66c488297118671dcaaa0fb9/12-commercetools-Content-Type.png)
    3.  In the **Content Type Builder** page, add a custom field for Product in your content type by clicking the **Insert a field** link represented by a **+** sign.
    4.  Under **Select Extension/App**, select **commercetools - Product Field,** and then click the **Proceed** button.![13-commercetools-Add-Product-In-Custom-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt915f1fa9c5670705/66c47eb56cbe3c5beb445a22/13-commercetools-Add-Product-In-Custom-Field.png)
        
        This adds commercetools - Product Field in the custom field.
        
        ![14-commercetools-Added-Product-In-Custom-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1c13c5e7bf7f2033/66c47eb44735072a45095e5a/14-commercetools-Added-Product-In-Custom-Field.png)
    5.  Add another custom field for Category in your content type by clicking the **Insert a field** link represented by a **+** sign.
    6.  Under **Select Extension/App**, select **commercetools - Category Field**, and then click the **Proceed** button.![15-commercetools-Add-Category-In-Custom-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4f6ff39dc68f175a/66c47ebdeb9a5259dc761a54/15-commercetools-Add-Category-In-Custom-Field.png)
        
        This adds commercetools - Category Field in the custom field.
        
        ![16-commercetools-Added-Category-In-Custom-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt999cccd4d7729ac2/66c47ebd88b74e1c3ab15485/16-commercetools-Added-Category-In-Custom-Field.png)
    7.  After adding the custom fields for the app, click **Save** or **Save and Close** to save your changes.
    8.  Under **Advanced** properties, you have the option to set the **Config Parameter** for all entries of a particular content type. If you do so, it overrides the default app configuration you set at the time of app installation on the Configuration screen.
        
        The key:value passed in the configuration object overrides the default app configuration settings.
        
        If you want to use a different commercetools configuration for any custom field within the same stack, you need to specify the configuration name in the Config Parameter as follows:
        
        **Configuration Object**:
        
        ```
        {
          "config_label": [
            "config2"
          ]
        }
        ```
        
        **Locale** **Based Configuration Object**: To add a locale\-based configuration, add a locale parameter to the additional configuration object which specifies the locale value (for example: en-us) as the object key and the configuration object as the value to the locale.
        
        **locale** **Configuration Object**:
        
        ```
        {
          "config_label": [
         	   "Configuration-1",
         	   "Configuration-2"
          ],
          "locale": {
            	"en-us": {
             	 "config_label": []
           	 },
          	  "en-ZA": {
          	    "config_label": []
          	  }
         	 }
        }
        ```
        
        ![16-a-commercetools-Advanced-Config-Parameter](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte90fa35100565535/6734a61c86ddd2594724d8e4/16-a-commercetools-Advanced-Config-Parameter.png)
        
        **Note:** If any configuration value is not added, or if all the values are empty in the **Config Parameter** properties settings, the commercetools app uses the default configuration which was set up in [step 2](#install-and-configure-commercetools-in-marketplace).
        
    9.  After adding the custom fields for the app, click **Save** or **Save and Close** to save your changes.
    10.  To use the commercetools app, create an entry for this content type. In the left navigation panel, navigate to the Entries page, click **\+ New Entry** to create a new entry for the above content type, and then click **Proceed**.
         
         You can see the commercetools app’s custom fields on your entry page as shown below:
         
         ![17-commercetools-Sample-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb2a2436f7ac041c4/66c47ebd4735072280095e5f/17-commercetools-Sample-Entry.png)
    11.  Click the **\+ Add Product(s)** button to choose the product(s).![18-commercetools-Add-Product-In-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9d0edaa2ad1813d5/66c47ebdf8d31f5f2fb688f4/18-commercetools-Add-Product-In-Entry.png)
    12.  Select the product(s) from your commercetools selector page and click **\+ Add Product(s)** to add them to your entry.![19-commercetools-Product-Selector-Page](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0290415728e54cf8/66c47ebd45395def3fbb775c/19-commercetools-Product-Selector-Page.png)
         
         You can select the products from multiple configurations at once using the **Configuration** drop-down.
         
         ![19-a-commercetools-Product-Selector-Page-Multi-Config](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6ae6629ebead2c46/6734aa5320ed6c2047a52278/19-a-commercetools-Product-Selector-Page-Multi-Config.png)
         
         You can also search for products in the commercetools selector page based on the product name.
         
         ![20-commercetools-Product-Selector-Page-Search](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc892d94b525bfb34/66c47ebd88b74e90b3b15489/20-commercetools-Product-Selector-Page-Search.png)
         
         Hover over the product on the commercetools selector page, and you can see the **View in commercetools** option to go directly to the commercetools platform.
         
         ![21-commercetools-Product-Selector-Page-View-In-Commercetools](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte4d77d9214b53444/66c47ebd473507c6c4095e63/21-commercetools-Product-Selector-Page-View-In-Commercetools.png)
         
         After adding the products, you can click **Show Selected** to view all the added products.
         
         The products you selected are referenced within your entry in the thumbnail view.
         
         ![22-commercetools-Added-Product-In-Thumbnail-View](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7963d23cb4b4c89a/66c47ebd46b3f496589716f2/22-commercetools-Added-Product-In-Thumbnail-View.png)
         
         Select the list view option from the dropdown to view the products in the list view.
         
         ![23-commercetools-Added-Product-View-Options](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt14eb89b650b3f64e/66c47ebdde79443a3e40f185/23-commercetools-Added-Product-View-Options.png)
         
         The products you selected are referenced within your entry in the list view.
         
         ![24-commercetools-Added-Product-In-List-View](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltaef5124042874a24/66c47ebdde7944719040f187/24-commercetools-Added-Product-In-List-View.png)
    13.  To reorder, open in commercetools, or delete the selected product, hover over the product to get the available options, then perform the following:
         
         1.  Click the **Reorder** icon to drag and reorder the product.
         2.  Click the **Open in commercetools** icon to open the product in the commercetools app.
         3.  Click the **Delete** icon to delete the product.
         
         **Thumbnail View**
         
         ![25-commercetools-Product-Options-In-Thumbnail-View](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3f03a19215afd485/66c47ec4eb9a525cc8761a58/25-commercetools-Product-Options-In-Thumbnail-View.png)
         
         **List View**
         
         ![26-commercetools-Product-Options-In-List-View](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9588b5017956da35/66c47ec4492abc4a37c00ab9/26-commercetools-Product-Options-In-List-View.png)
    14.  Click the **Save** button to save your entry. You can view more product details in the Sidebar Widget.
         
         **Note:** You must first save your entry to get the product details in the Sidebar Widget.
         
    15.  In the right navigation panel, select **Widgets**, select **commercetools**, and then select the product to view the product details. By default, the Sidebar Widget displays the details of the first product added in the custom field.![27-commercetools-Product-Sidebar-Widget](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5f1cfb6b3ba98c78/66c47ec5492abcf20dc00abd/27-commercetools-Product-Sidebar-Widget.png)
    16.  You can also search for products by typing the product name in the dropdown and view the product details. Click the **Product** dropdown to view the Search bar, type the name of the product, and then click the preferred product to view the details.![28-commercetools-Product-Sidebar-Widget-Search](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt39bad7a03ded5bac/66c47ec56cbe3c77ae445a2a/28-commercetools-Product-Sidebar-Widget-Search.png)
    17.  Click the **\+ Add Category(s)** button to choose the category(s).![29-commercetools-Add-Category-In-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt49909c836f1d6f03/66c47ec46cbe3c7d65445a26/29-commercetools-Add-Category-In-Entry.png)
    18.  Select the category(s) from your commercetools selector page and click the **\+ Add Category(s)** button to add them to your entry.![30-commercetools-Category-Selector-Page](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltce2f771cb9f4508a/66c47ec46412438651a70ffd/30-commercetools-Category-Selector-Page.png)
         
         You can select the categories from multiple configurations at once using the **Configuration** drop-down.
         
         ![30-a-commercetools-Category-Selector-Page-Multi-Config](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt30c5a0adc945b991/6734aa537ca8e84340488dc2/30-a-commercetools-Category-Selector-Page-Multi-Config.png)
         
         You can also search and filter categories in the commercetools selector page using a full-text search based on the Category Name.
         
         ![31-commercetools-Category-Selector-Page-Search](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt52b1cbdcd29c501d/66c47ec43166535f3b4a20b3/31-commercetools-Category-Selector-Page-Search.png)
         
         Hover over the category on the commercetools selector page, and you can see the **View in commercetools** option to go directly to the commercetools platform.
         
         ![32-commercetools-Category-Selector-Page-View-In-Commercetools](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb5d758cdc40d5b02/66c47ec42f80d2df7cf37620/32-commercetools-Category-Selector-Page-View-In-Commercetools.png)
         
         After adding the categories, you can click **Show Selected** to view all the added categories.
         
         The category(s) you selected are referenced within your entry.
         
         ![33-commercetools-Added-Category-In-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt921a5e7e959894d3/66c47ec400bccd63dfef147b/33-commercetools-Added-Category-In-Entry.png)
    19.  To edit, or delete the selected category, hover over the category to get the available options, then perform the following:
         
         1.  Click the **Edit** icon to edit the category.
         2.  Click the **Delete** icon to delete the category.
         
         ![34-commercetools-Category-Options](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta21db6303edf5eb6/66c47ec4f641a6a98cabe41a/34-commercetools-Category-Options.png)
    20.  After adding the category(s), **Save** and **Publish** your entry.

**Note**:

-   If you delete a configuration with products and categories, and create a new one with the same label but different credentials, the original products and categories may not work correctly.
-   For a deleted configuration, the associated products and categories are not removed from the entry, instead a warning icon is displayed on them.
