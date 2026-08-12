---
title: "Shopify App Installation Guide"
description: "Shopify App Installation Guide"
url: /marketplace/shopify
---

# Shopify App Installation Guide

## Shopify App Installation Guide

Shopify is a leading ecommerce platform for businesses of all sizes. It allows you to set up an online store to sell your products.

With the Contentstack Marketplace Shopify app, you can use and refer to the products from your Shopify account within your Contentstack entries.

## Prerequisites

-   [Shopify account](https://accounts.shopify.com/)
-   [Shopify store](https://accounts.shopify.com/store-login)
-   [Contentstack account](https://www.contentstack.com/login/)
-   Access to the Contentstack Organization/Stack as the Owner/Admin

Let's follow this step-by-step guide to install and configure Shopify within your stack.

## Steps for Execution

1.  [Get your Storefront API Access Token from Shopify](#get-your-storefront-api-access-token-from-shopify)
2.  [Install and Configure Shopify in Contentstack Marketplace](#install-and-configure-shopify-in-contentstack-marketplace)
3.  [Use Shopify within your Stack](#use-shopify-within-your-stack)

1.  ## Get your Storefront API access token from Shopify
    
    To get your configuration details for Shopify, follow the steps given below:
    
    1.  Log in to your [Shopify account](https://accounts.shopify.com/).
    2.  On the Admin portal, click **Apps** in the left navigation menu and then select **App and sales channel settings** from the dropdown.![Shopify-Account-App-and-Sales-Channel-Settings](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9eb85a5273ac219e/641c0d3eaf1f5455e8f49da4/Shopify-Account-App-and-Sales-Channel-Settings.png)
    3.  Click the **Develop apps** button.![Shopify-Account-Develop-Apps](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7af759442d975ba0/641c14059d04a8544bd872ac/Shopify-Account-Develop-Apps.png)
    4.  On the **App development** page, click **Create an app**. Mention the **App name** and select the **App developer** of your app, and then click the **Create app** button.![Shopify-Account-Create-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0e5d8827928cbff4/641c13ec9a08934e5773b47c/Shopify-Account-Create-App.png)
    5.  On the next screen, navigate to the **Configuration** section and configure the **Storefront API integration** for your app.
    6.  Select the access scopes for your Storefront API and **Save** your configuration.![Shopify-Account-Save-Configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltada290bcc7d3550e/641c0d3e33e7f95594918825/Shopify-Account-Save-Configuration.png)
    7.  Finally, under the **API credentials** section, click the **Install app** button, confirm your installation, and proceed to get the **Storefront API access token**.![Shopify-Account-Storefront-API-Access-Token](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4565f8d3d313a6b9/641c0d3f49e8cc4fc47ba2d0/Shopify-Account-Storefront-API-Access-Token.png)
        
        **Note:** The Storefront API access token is required to connect your store with Contentstack. Make a note of this access token to be used in the next step.
        
2.  ## Install and Configure Shopify in Contentstack Marketplace
    
    Follow the steps to install the app in Contentstack.
    
    1.  Log in to your [Contentstack account](https://www.contentstack.com/login/).
    2.  Navigate to the “App Switcher” icon in the top-right corner and click **Marketplace**.![Contentstack-App-Switcher-Marketplace](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt47c618781b542b64/68ee96ad6bfd93c9913fee8a/Contentstack-App-Switcher-Marketplace.png)
    3.  Click **Apps** in the left panel.
    4.  Within the Marketplace, you can see all the available apps. Hover over the **Shopify** app and click **Install**.![marketplace_app_switcher_shopify.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am5b91a896bb6dd0b4/bf9308b26f7243bdd2313560/marketplace_app_switcher_shopify.png?locale=en-us)
    5.  In the pop-up window, select the stack where you want to install the Shopify app, accept the terms of service, and click the **Install** button.![Shopify-App-Install](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf445c78d9962ded4/65d735bf421dd335deebc8b8/Shopify-App-Install.png)
    6.  On the **Configuration** screen, you can add multiple configurations for Shopify stores. To do this, follow the steps given below:
        
        1.  Click the **\+ New Configuration** button to add new configuration details.![Shopify-Configuration-Add-New-Configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt27244f3c67c83a84/65d735c0bd247c40a844fd17/Shopify-Configuration-Add-New-Configuration.png)
        2.  In the **Add Configuration** modal, enter the configuration **Name** and click **Add**.![Shopify-Configuration-Add-New-Configuration-Modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt464bd4c457f3bd74/65d735bfdb0cb47ba687c844/Shopify-Configuration-Add-New-Configuration-Modal.png)
        3.  After adding the configuration, enter the following details:
            1.  **Domain**: Enter the Store domain name retrieved from your Shopify Console in [step 1](#get-your-storefront-api-access-token-from-shopify).
                
                **Note:** Please enter the URL without the http:// and https:// prefixes.
                
            2.  **Storefront Access Token**: Enter the Storefront API access token retrieved from your Shopify account in [step 1](#get-your-storefront-api-access-token-from-shopify).
            3.  **Set As Default**: To set this configuration as the default, click this checkbox.![Shopify-Configuration-Add-New-Configuration-Credentials](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt26a04323dfff0213/65d735c03428f981f0fd9146/Shopify-Configuration-Add-New-Configuration-Credentials.png)
                
                Alternatively, you can set a configuration as the default by clicking three dots on the top-right side of the configuration section and then selecting **Set As Default**.
                
                ![Shopify-Configuration-Set-As-Default](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0e6f97144d3b9c45/65d735c077bb0f3783afade3/Shopify-Configuration-Set-As-Default.png)
                
                **Note:** At least one store configuration should be selected as the default.
                
        4.  To delete the configuration, click the three dots and select **Delete Configuration**.![Shopify-Configuration-Delete-Configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7e3c6737a369e9d5/65d735c01c52b849fbc2e718/Shopify-Configuration-Delete-Configuration.png)
            
            In the **Confirm Deletion** modal, add the configuration name and click **Delete**.
            
            ![Shopify-Configuration-Delete-Configuration-Modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt90a0e964b1fd8536/65d735c050e2f80085c477ce/Shopify-Configuration-Delete-Configuration-Modal.png)
            
            Similarly, you can add multiple configurations by following the steps discussed above.
            
        5.  **Choose the Shopify Keys to Save In Entry**: Choose how you want to save your data in Contentstack entries.
            1.  If you select the **All Fields**option, you can select only a limited number of products in the entry.
            2.  For **Custom Fields**, you should search and add specific **Shopify Keys** you want to fetch.![Shopify-Save-In-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1f610462354d5eb0/682e811564f73f4323904498/Shopify-Save-In-Entry.png)
                
                If you select **Custom Fields** then the **Shopify Keys** drop-down appears. By default, the **id** and **title** keys are already selected inside the dropdown.If you want to create a new key, click the **\+ New Key Field** option.
                
                ![Shopify-Shopify-Keys](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt58c6d0e5427e9aba/682e8115a4165a644fae1390/Shopify-Shopify-Keys.png)
                
                In the **Add Shopify Key Field** modal, enter the **Key Name or Path** and click the **Create** button to create a new key.
                
                ![Shopify-Add-New-Key](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta0331065e891abd7/682e81159c70ae1916830127/Shopify-Add-New-Key.png)
        6.  **Legacy Settings**: If you want to use the old version of the Shopify app, enter the configuration details in this section.
            
            1.  Enter the Store **Domain** name retrieved from your Shopify Console in [step 1](#get-your-storefront-api-access-token-from-shopify).
                
                **Note:** Please enter the URL without the http:// and https:// prefixes.
                
            2.  Enter the **Storefront Access Token** retrieved from your Shopify account in [step 1](#get-your-storefront-api-access-token-from-shopify).
            3.  Select the **Type** and **Selection**.
            4.  Enable the **Save Full Response** toggle button to save all fields data in the entry.
            
            ![Shopify-Configuration-Legacy-Settings](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6572fd134962268c/65d735c05cfee3277247f381/Shopify-Configuration-Legacy-Settings.png)
        
        **Note**:
        
        1.  If you have installed the app previously, you will have the app pre-populated with the old configuration values.
        2.  The legacy version of the Shopify app has the following limitations:
            1.  The app does not support the Sidebar Widget feature.
            2.  You can only select either product or collection in the same entry.
            3.  You cannot select products based on the collection.
            4.  The app does not support multiple configurations.
        
    7.  Click the **Save** button.
    8.  On the **UI Locations** tab, you can see the predefined app locations. You can use the toggle button corresponding to each UI location to enable or disable it based on your requirements.
        
        **Additional Resource:** For more information on UI locations, please refer to the [Installed Apps](/docs/marketplace/installed-apps#view-edit-configuration-ui-locations-and-webhook) guide.
        
        ![Shopify-UI-Locations](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbec00f56c53821f9/65d738c7421dd3089aebc8cd/Shopify-UI-Locations.png)
    9.  Click **Open Stack** to start using the Shopify app.
3.  ## Use Shopify within your Stack
    
    To use the Shopify app within an entry of your stack, follow the steps given below:
    
    1.  Go to your stack, click the **Content Models** icon in the left navigation panel, and click the **\+ New Content Type** button.
    2.  Create a content type by adding relevant details as displayed below:![Shopify-Content-Type](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3e9afa6bb0aa522c/65d739de743cbbef8b7c2257/Shopify-Content-Type.png)
    3.  In the **Content Type Builder** page, add a [Custom](/docs/headless-cms/custom) field for product in your content type by clicking the **Insert a field** link represented by a **\+** sign.
    4.  Under **Select Extension or App**, select **Shopify-Product Field** and click the **Proceed** button.![Shopify-Custom-Product-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdd0656771ca48d99/65d739df2cb8e7393feda1fe/Shopify-Custom-Product-Field.png)
        
        This adds Shopify-Product Field in the custom field.
        
        ![Shopify-Custom-Product-Field-Added](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf5bba5049c81ef92/65d739de88537859157832df/Shopify-Custom-Product-Field-Added.png)
    5.  Add another [Custom](/docs/headless-cms/custom) field for collection in your content type by clicking the **Insert a field** link represented by a + sign.
    6.  Under **Select Extension or App**, select **Shopify-Collection Field** and click the **Proceed** button.![Shopify-Custom-Collection-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt605d3fadceb57071/65d739de421dd32684ebc8d3/Shopify-Custom-Collection-Field.png)
        
        This adds Shopify-Collection Field in the custom field.
        
        ![Shopify-Custom-Collection-Field-Added](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9407f329ac316a6e/65d739dee4d5eab58eac3d23/Shopify-Custom-Collection-Field-Added.png)
    7.  To add a deprecated version of the Shopify app to your entry, add yet another [Custom](/docs/headless-cms/custom) field in your content type by clicking the **Insert a field** link represented by a + sign.
    8.  Under **Select Extension or App**, select **Shopify-Deprecated** and click the **Proceed** button.![Shopify-Custom-Deprecated](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt83a59ca21180c457/65d739df77bb0febf4afadfd/Shopify-Custom-Deprecated.png)
        
        This adds Shopify-Deprecated in the custom field.
        
        ![Shopify-Custom-Deprecated-Added](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbfe8feff0a540b8e/65d739de50a74929eea9a8ff/Shopify-Custom-Deprecated-Added.png)
    9.  After adding the app, click **Save** or **Save and Close** to save your changes.![Shopify-Content-Type-Fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt61aad937ccf49630/65d739deee1d166453aa3100/Shopify-Content-Type-Fields.png)
    10.  Under **Advanced** properties, you also have the option to set the **Config Parameter** for all entries of a particular content type. This will override the default app configuration which you set at the time of app installation on the **Configuration screen**.
         
         The key:value passed in the configuration object overrides the default app configuration settings.
         
         In case you want to use a different Shopify account(s) for any custom field within the same stack, you need to specify the Shopify store name in the **Config Parameter**.
         
         **Configuration Object**:
         
         ```
         {
                   "config_label": ["Store 2"],
                 }
         ```
         
         **Adding** **locale** **based configuration:**:
         
         To add a locale based configuration, add a locale parameter to the additional configuration object which specifies the locale value (for example: en-us) as the object key and the configuration object as the value to the locale.
         
         **locale****Configuration Object**:
         
         ```
         {
                   "config_label": ["Store 2"],
                   "locale": {
                       "en-us": { 
                           "config_label": ["Store 1", "Store 3"]
                       },
                       "fr-fr": { 
                           "config_label": [] 
                       }
                    }
                 }
         ```
         
         ![Shopify-Custom-Field-Add-Config-Parameter](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4b76b84eb9dcd88e/65d739df5d2ab29b5a73dfd0/Shopify-Custom-Field-Add-Config-Parameter.png)
         
         **Note:** If any configuration value is not added, or if all the values are empty in the **Config Parameter** properties settings, the Shopify app uses the default configuration which was set up in [step 2](#install-and-configure-shopify-in-contentstack-marketplace).
         
    11.  In the left navigation panel, navigate to the **Entries** page and click **+ New Entry** to create a new entry for the above content type. Click **Proceed**.  
         You will see the Shopify custom fields on your entry page as shown below:![Shopify-Sample-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc96df1a3ca8d06a1/65d73efe8853783d5f7832fb/Shopify-Sample-Entry.png)
         
         **Note:** In the new version of Shopify, you can select both products and collections in the same entry.
         
    12.  Click the **Add Product(s)** button, select the products from your Shopify selector page, and add them to your entry.![Shopify-Product-Selector-Page](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte646de3869cb2b7a/65d73efe1c52b8944bc2e749/Shopify-Selector-Page.png)
         
         You can filter products based on your stores. By default, the store configured at the time of installation in [step 2](#install-and-configure-shopify-in-contentstack-marketplace) is selected.
         
         ![Shopify-Product-Selector-Page-Store-Filter.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt704d375378459e73/65d7504512bcfacd97e0ab24/Shopify-Product-Selector-Page-Store-Filter.png)
         
         You can filter products based on your collections. Click the **Select Collection** drop-down and choose the collection to filter the products.
         
         ![Shopify-Product-Selector-Page-Collection-Filter.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdea355a84a20d552/65d7504556b7e1a23db90bdf/Shopify-Product-Selector-Page-Collection-Filter.png)
         
         You can also search and filter products in the Shopify selector page.
         
         ![Shopify-Product-Selector-Page-Search.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcda6363a21045168/65d750462cb8e74a7eeda2a8/Shopify-Product-Selector-Page-Search.png)
         
         Hover over the product on the Shopify selector page, and you can see the **View in Shopify** option to go directly to the Shopify platform.
         
         ![Shopify-Product-Selector-Page-View-In-Shopify.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfabf8f8bb18b4dfb/65d7504612bcfa08e9e0ab28/Shopify-Product-Selector-Page-View-In-Shopify.png)
         
         The products you selected are referenced within your entry in the thumbnail view.
         
         ![Shopify-Product-View-Thumbnail](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbdb2abf4831ef5d6/65d73efe735c93ebe022e99c/Shopify-Product-View-Thumbnail.png)
         
         To view the products in list view, select the **List** view option from the dropdown.
         
         ![Shopify-Product-View-Options](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6d2d142eb7f492e5/65d73efd3428f93652fd9176/Shopify-Product-View-Options.png)
         
         The products you selected are referenced within your entry in a list.
         
         ![Shopify-Product-View-List](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt28e5012423aceb95/65d73efd8938e62f752657fe/Shopify-Product-View-List.png)
    13.  To reorder, open in Shopify, or remove the selected product, hover over the product to get the available options, then perform the following:
         
         1.  Click the **Reorder** icon to drag and reorder the product.
         2.  Click the **Open in Shopify** icon to open the image in the Shopify app.
         3.  Click the **Remove** icon to delete the product.
         
         **Thumbnail View**
         
         ![Shopify-Product-View-Thumbnail-Features](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb629cd417faec6e2/65d73efe5d2ab20b6f73e009/Shopify-Product-View-Thumbnail-Features.png)
         
         **List View**
         
         ![Shopify-Product-View-List-Features](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt17a898bfc620104a/65d73efd743cbb74e37c227c/Shopify-Product-View-List-Features.png)
    14.  Click the **Save** button to save your entry.  
         You can view more product details in the Sidebar Widget.
         
         **Note:** You must save your entry to get the product details in the Sidebar Widget.
         
    15.  In the right navigation panel, select **Widgets**, and then select **Shopify** to view the product details.![Shopify-Sidebar-Widget.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2d853cc874cdf377/65d74ef8ee1d16fc74aa318f/Shopify-Sidebar-Widget.png)
         
         **Note**:
         
         -   Deprecated version of the Shopify app does not support the Sidebar Widget.
         -   When a product, which is referenced in the entry, gets deleted from the store, an error message is displayed in the Custom field and Sidebar widget.
         
         You can also search and view the product details.
         
         ![Shopify-Sidebar-Widget-Search.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt666fcd6a601bf068/65d74ef8990a7b80c5ef7d3d/Shopify-Sidebar-Widget-Search.png)
    16.  Click the **Add Collection(s)** button, select the collections from your Shopify selector page, and add them to your entry.![Shopify-Collection-Selector-Page](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta22f7068ff8929eb/65d73d0eee1d16a45eaa3125/Shopify-Collection-Selector-Page.png)
         
         You can filter collections based on your stores. By default, the store configured at the time of installation in [step 2](#install-and-configure-shopify-in-contentstack-marketplace) is selected.
         
         ![Shopify-Collection-Selector-Page-Store-Filter](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb6906c72598c892e/65d74e150f322591340a1bd9/Shopify-Collection-Selector-Page-Store-Filter.png)
         
         You can also search and filter collections in the Shopify selector page.
         
         ![Shopify-Collection-Selector-Page-Search](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1e80faea566220eb/65d74e15885378102a783374/Shopify-Collection-Selector-Page-Search.png)
         
         Hover over the collection on the Shopify selector page, and you can see the **View in Shopify** option to go directly to the Shopify platform.
         
         ![Shopify-Collection-Selector-Page-View-In-Shopify](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2f8c54d965b9078c/65d74e15735c937aeb22e9f3/Shopify-Collection-Selector-Page-View-In-Shopify.png)
         
         The collections you selected are referenced within your entry.
         
         ![Shopify-Collection-View-Thumbnail](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltda4f90cb1b9c7719/65d73d0f5d2ab2c26373dfef/Shopify-Collection-View-Thumbnail.png)
         
         To view the collections in list view, select the **List** view option from the dropdown.
         
         ![Shopify-Collection-View-Options](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blteca4c4cd6dfd83a3/65d73d0f22655a32b0bf73b7/Shopify-Collection-View-Options.png)
         
         The collections you selected are referenced within your entry in a list.
         
         ![Shopify-Collection-View-List](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt126fe658aecee52c/65d73d0e421dd31ca0ebc8f7/Shopify-Collection-View-List.png)
    17.  To reorder, open in Shopify, or remove the selected collection, hover over the product to get the available options, and then perform the following:
         
         1.  Click the **Reorder** icon to drag and reorder the collection.
         2.  Click the **Open in Shopify** icon to open the collection in the Shopify app.
         3.  Click the **Remove** icon to delete the collection.
         
         **Thumbnail View**
         
         ![Shopify-Collection-View-Thumbnail-Features](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbda6fa2ecdb1d20b/65d73d0fbd247cdfa144fd72/Shopify-Collection-View-Thumbnail-Features.png)
         
         **List View**
         
         ![Shopify-Collection-View-List-Features](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0e748a63719eed0a/65d73d0f2cb8e7326deda233/Shopify-Collection-View-List-Features.png)
    18.  You can continue to use the old version of the Shopify app in the current version by adding products(or collections) using the Shopify Deprecated custom field.![Shopify-Deprecated-Product-Added](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcded075e5501dc56/65d739de421dd3bdbbebc8d7/Shopify-Deprecated-Product-Added.png)
    19.  Click the **Save** button to save your entry.
