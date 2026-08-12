---
title: "Akeneo App Installation Guide"
description: "Fetch and display your Akeneo account products and categories into Contentstack entries."
url: /marketplace/akeneo
---

# Akeneo App Installation Guide

## Akeneo App Installation Guide

Akeneo is an open-source product information management system that enables enterprises to create, maintain, and distribute their entire product catalog across multiple channels. It simplifies translation workflows, ensures consistency across every channel, streamlines collaboration on product information, and provides intuitive analytics to optimize product selection.

With the Contentstack Marketplace Akeneo app, you can add products and categories from Akeneo account within your Contentstack entries via [Custom Fields](/docs/developers/create-custom-fields/about-custom-fields). You can also view the product details and search for the products directly in the [Sidebar Widget](/docs/developer-hub/sidebar-location).

## Prerequisites

-   [Akeneo account](https://contentstack.demo.cloud.akeneo.com)
-   [Contentstack account](https://www.contentstack.com/login/)
-   Access to the Contentstack Organization/Stack as the Owner/Admin

Let's follow this step-by-step guide to install and configure the Akeneo app within your stack.

## Steps for Execution

1.  [Retrieve Configuration Details from Akeneo](#retrieve-configuration-details-from-akeneo)
2.  [Install and Configure the Akeneo app in Contentstack Marketplace](#install-and-configure-the-akeneo-app-in-contentstack-marketplace)
3.  [Use Akeneo within your Stack](#use-akeneo-within-your-stack)

1.  ## Retrieve Configuration Details from Akeneo
    
    To get your configuration details for Akeneo, follow the steps given below:
    
    1.  Log in to the [Akeneo account](https://contentstack.demo.cloud.akeneo.com) using your Akeneo account credentials.
    2.  In the left navigation panel, click **Connect**.  
        ![Akeneo-Account-Connect](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt46ccdc95a1c4ffe6/642d4ea98f121010dc4c95c8/Akeneo-Account-Connect.png)
    3.  Click **Connection settings** from the left-hand side **Connect Navigation** panel, and then click the **CREATE** button.  
        ![Akeneo-Account-Connection-Create](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blteaa51c8c6abb6ca9/644bc5087f34014b36bef99c/Akeneo-Account-Connection-Create.png)  
        
    4.  Enter the **Label**, **Code**, and **Flow Type** as **Data destination**, then click the **SAVE** button.  
        ![Akeneo-Account-Connection-Save](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt03f060fa85c7e203/644bc508a6ac921a029a0acf/Akeneo-Account-Connection-Save.png)
    5.  You can see the Akeneo app configuration details - **Client ID**, **Secret**, **Username**, and **Password**. Copy and paste the information to your clipboard.  
        ![Akeneo-Account-Credentials](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9ac23643b7a9cab2/644bc4a7d483864ab3657c90/Akeneo-Account-Credentials.png)  
          
        
        **Note:** The **Password** is visible only once when you are creating a connection.
        
        You can view your newly created connection under the **Data Destination** section.  
        ![Akeneo-Account-Connection-View](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltac48f17d31a4805c/644bc50925dc1411156005bc/Akeneo-Account-Connection-View.png)  
          
        
        **Note:** Existing connection(s) can be directly viewed under the **Data Destination** section.
        
2.  ## Install and Configure the Akeneo app in Contentstack Marketplace
    
    Follow the steps to install the application in Contentstack.
    
    1.  Log in to your [Contentstack account](https://www.contentstack.com/login/).
    2.  Navigate to the “App Switcher” icon in the top-right corner and click **Marketplace**.![Contentstack-App-Switcher-Marketplace](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt47c618781b542b64/68ee96ad6bfd93c9913fee8a/Contentstack-App-Switcher-Marketplace.png)
    3.  Click **Apps** from the left panel.
    4.  Within the Marketplace, you can see all the available apps. Hover over the **Akeneo** app and click **Install**.  
        ![Marketplace_Akeneo.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltff967556471e487e/6a01990a3e294d1a0acfc07d/Marketplace_Akeneo.png)  
        
    5.  In the popup window, select the stack where you want to install the Akeneo app and click the **Install** button.  
        ![Akeneo-Install-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd9e54fe82402d84b/64b9055e1add4db7ebfbb279/Akeneo-Install-App.png)  
          
        
    6.  On the **Configuration** screen, enter the following details:
        1.  **Akeneo Credentials**:
            1.  Enter the **Base URL** which is used to log in to your Akeneo Account. Akeneo provides you with your Base URL when you sign up.
            2.  Enter the **Username**, **Password**, **Client ID**, and **Client Secret** retrieved from your Akeneo Account in [step 1](#retrieve-configuration-details-from-akeneo).
        2.  Click the **Next** button.  
            ![Akeneo-Config-Credentials](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt883b28941637978e/65b7fae308561640d75e0db5/Akeneo-Config-Credentials.png)  
            
        3.  **Akeneo Fields**:
            1.  Select the default **Channel** from the dropdown from which the products will be fetched.
            2.  Select the default **Locale** from the dropdown to display the product details.
        4.  Click the **Next** button.  
            ![Akeneo-Config-Akeneo-Fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt751de404f8031be3/65b7faf49274060244eb6a3f/Akeneo-Config-Akeneo-Fields.png)  
            
        5.  **Contentstack Akeneo Fields Mapper**: Map the Contentstack fields with the Akeneo fields to fetch the product details. Image, name, sku, price, and description are the mandatory fields. You can also add and map other **Contentstack Fields** with their relevant **Akeneo Fields**.
            
            **Note:** Contentstack fields display the product details in the Sidebar Widget and Custom fields. To avoid any mismatch, map the Contentstack fields with the correct Akeneo product fields.
            
        6.  Click the **Next** button.  
            ![Akeneo-Config-Fields-Mapper](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc31aeecbf257dde6/65b7fb03d2067b184f8c5b01/Akeneo-Config-Fields-Mapper.png)  
            
        7.  **Field Selector**:
            1.  **Save in Entry**: Choose how to save the data fetched from the Akeneo account in Contentstack entries.
                1.  If you select the **All Fields** option, you can select only a limited number of products in the entry.
                2.  For **Custom Fields**, you can search and add specific Akeneo Fields you want to save in entries. By default, the **uuid** and **name** of the products are selected.
            2.  **Items per Page**: Enter the number of items you want to fetch and display on the Akeneo app selector page at a time.
                
                **Note:** You can enter the page count as numbers, for example, 10, 15, 20, etc. The minimum page count should be ten.
                
        8.  Click the **Finish** button.  
            ![Akeneo-Config-Field-Selector](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1fdc9a60f5351aac/65b7fb125f12ed0cd1e21d98/Akeneo-Config-Field-Selector.png)  
            
    7.  On the **UI Locations** tab, you can see the predefined app locations. You can use the toggle button corresponding to each UI location to enable or disable it based on your requirements. ![Akeneo-UI-Locations](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte285c4c82462f1b3/65b7fb1cd791ca30967660d4/Akeneo-UI-Locations.png)
    8.  If the webhook is enabled for your app, you can view the webhook logs under the **Webhook** tab.
    9.  **Additional Resource:** For more information on UI location and webhooks, please refer to the [Installed Apps](/docs/marketplace/installed-apps#view-edit-configuration-ui-locations-and-webhook) guide.
        
    10.  After configuring all the details, click the **Save** button.
    11.  Click the **Open Stack** button to start using the Akeneo application.
3.  ## Use Akeneo within your Stack
    
    To use the Akeneo application within an entry of your stack, follow the steps given below:
    
    1.  Go to your stack, click the **Content Models** icon in the left navigation panel, and click the **\+ New Content Type** button.
    2.  Create a content type by adding relevant details as displayed below:  
        ![Akeneo-Content-Type](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd071a4055770b188/642d4fc3c3a87d1213a86e26/Akeneo-Content-Type.png)
    3.  In the Content Type Builder page, add a Custom field for product in your content type by clicking the **Insert a field** link represented by a **+** sign.
    4.  Under **Select Extension/App**, select **Akeneo - Product**, and then click the **Proceed** button.  
        ![Akeneo-Product-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd94d8044af817a90/649bfa3a9c69d87dddc1cc4e/Akeneo-Product-Field.png)  
        This adds Akeneo - Product in the custom field.  
        ![Akeneo-Product-Custom-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt76c3f0a289f669a2/642d4fc41c314d10b1b9f8b9/Akeneo-Product-Custom-Field.png)
    5.  Add another Custom field for category in your content type by clicking the **Insert a field** link represented by a **+** sign.
    6.  Under **Select Extension/App**, select **Akeneo - Category**, and then click the **Proceed** button.  
        ![Akeneo-Category-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd3ac69d43db30799/649bfa4ff7bfd1499d83274e/Akeneo-Category-Field.png)  
        This adds Akeneo - Category in the custom field.  
        ![Akeneo-Category-Custom-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8b72b48c58fda3e8/642d4eaa0c498f10e8dbcd5b/Akeneo-Category-Custom-Field.png)
    7.  After adding the custom fields for the app, click **Save** or **Save and Close** to save your changes.  
        ![Akeneo-Custom-Fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1bf055c2ec0857ac/642d4fc40afb1c108e793409/Akeneo-Custom-Fields.png)
    8.  To use the Akeneo app, create an entry for this content type. In the left navigation panel, navigate to the Entries page, click **\+ New Entry** to create a new entry for the above content type, and then click **Proceed**.  
        You can see the Akeneo app’s custom fields on your entry page as shown below:  
        ![Akeneo-Sample-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb73f19541f6a1a11/649bf985c411210c49a197ec/Akeneo-Sample-Entry.png)  
        
    9.  Click the **\+ Add Product(s)** button to choose the product(s).  
        ![Akeneo-Add-Products](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltaaa3f52a9e833c18/649bf9759c69d8304dc1cc48/Akeneo-Add-Products.png)  
        
    10.  Select the product(s) from your Akeneo selector page to add them to your entry.  
         ![Akeneo-Products-Selector-Page](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdcbce47ad2e41208/649bf9626c102e6f24a56a3c/Akeneo-Products-Selector-Page.png)  
         You can filter products based on channels. By default, the channel configured at the time of installation in [step 2](#install-and-configure-the-akeneo-app-in-contentstack-marketplace) is selected.  
         ![Akeneo-Product-Selector-Page-Channel-Filter](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2618cada35036590/649bf93abcdab03f4f3bf0b8/Akeneo-Product-Selector-Page-Channel-Filter.png)  
         Click the **Channel** dropdown and choose the option. In the popup, click **Proceed** to change the channel and select the products.  
         ![Akeneo-Product-Selector-Page-Channel-Filter-Popup](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2650725c063443e7/649c07f4bcdab077113bf13d/Akeneo-Product-Selector-Page-Channel-Filter-Popup.png)  
         You can also view the products in different locales. By default, the locale configured at the time of installation in [step 2](#install-and-configure-the-akeneo-app-in-contentstack-marketplace) is selected.  
         ![Akeneo-Product-Selector-Page-Locale-Filter](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt307f7001cb2a254f/649bf92694be108320894286/Akeneo-Product-Selector-Page-Locale-Filter.png)  
         Click the **Locale** dropdown and choose the option. In the popup, click **Proceed** to change the locale and select the products.  
         ![Akeneo-Product-Selector-Page-Locale-Filter-Popup](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt04c689a33004e221/649c07f47c84d2eca5c2a085/Akeneo-Product-Selector-Page-Locale-Filter-Popup.png)  
         You can filter products based on categories. Click the **Select Category** dropdown and choose the category(s) to filter products.  
         ![Akeneo-Product-Selector-Page-Category-Filter](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt27a78025dd1e8d47/649bf95094be101fba894288/Akeneo-Product-Selector-Page-Category-Filter.png)  
         You can also search for products in the Akeneo selector page based on the product name.  
         ![Akeneo-Product-Selector-Page-Search](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd699815572f4b16a/649bfe7fb93cad5bfba702bf/Akeneo-Product-Selector-Page-Search.png)  
         Hover over the product on the Akeneo selector page, and you can see the **View in Akeneo** option to go directly to the Akeneo platform.  
         ![Akeneo-Product-Selector-Page-View-In-Akeneo](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt94e78b93d64c1b9d/649bfe3d6c102e23dda56a58/Akeneo-Product-Selector-Page-View-In-Akeneo.png)  
         Click the **Add Product(s)** button to add products to your entry.  
         ![Akeneo-Products-Selected](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltaf052239772b2dfd/649c08927c84d2ac99c2a089/Akeneo-Products-Selected.png)  
         The products you selected are referenced within your entry in the thumbnail view.  
         ![Akeneo-Products-Thumbnail-View](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltab6796fd8a67781e/649c08dfc4112157fea19836/Akeneo-Products-Thumbnail-View.png)  
           
         
         **Note:** You can change the **Channel** and **Locale** from the respective dropdowns. All the unavailable products will be permanently removed from the entry as per the selected channel.
         
         Select the list view option from the dropdown to view the products in the list view.  
         ![Akeneo-Products-View-Options](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6ba65ff46a02284e/649c0907e9365abdd4c3591d/Akeneo-Products-View-Options.png)  
         The products you selected are referenced within your entry in the list view.  
         ![Akeneo-Products-List-View](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt35ccc7e406e3d543/649bfe6afcb6fd78c55ac5cd/Akeneo-Products-List-View.png)  
         
    11.  To reorder, open in Akeneo, or delete the selected product, hover over the product to get the available options, then perform the following:
         
         1.  Click the **Reorder** icon to drag and reorder the product.
         2.  Click the **Open in Akeneo** icon to open the product in the Akeneo app.
         3.  Click the **Delete** icon to delete the product.
         
           
         **Thumbnail View**![Akeneo-Products-Thumbnail-View-Features](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb0c0e7ad9baa1a59/649c097e05ac38971caebd62/Akeneo-Products-Thumbnail-View-Features.png)  
         **List View**  
         ![Akeneo-Products-List-View-Features](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc0a8375e1d534be8/649bfe5384a4c70df9d8d8c5/Akeneo-Products-List-View-Features.png)
    12.  Click the **Save** button to save your entry.  
         You can view more product details in the Sidebar Widget.
         
         **Note:** You must first save your entry to get the product details in the Sidebar Widget.
         
    13.  In the right navigation panel, select **Widgets**, select **Akeneo**, and then select the product to view the product details. By default, the Sidebar Widget displays the details of the first product added in the custom field.  
         ![Akeneo-Products-Sidebar-Widget](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0cafa8e9501052a3/649bfe0b29ad9828588260dd/Akeneo-Products-Sidebar-Widget.png)  
         
    14.  You can also search for products by typing the product name in the dropdown and view the product details.  
         Click the **Products** dropdown to view the Search bar, type the name of the product, and then click the preferred product to view the details.  
         ![Akeneo-Products-Sidebar-Widget-Search](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf0927cf268ff1fb4/649bfe2748bdd20373104352/Akeneo-Products-Sidebar-Widget-Search.png)  
         
    15.  Click the **\+ Add Category(s)** button to choose the category(s).  
         ![Akeneo-Add-Category](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4496bd7e5ea9ee60/642d4ea9200d461080821b36/Akeneo-Add-Category.png)
    16.  Select the category(s) from your Akeneo selector page and click the **Add Category(s)** button to add them to your entry.  
         ![Akeneo-Category-Selector-Page](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcce71927e98e7981/642d4eaa884f2510c3893994/Akeneo-Category-Selector-Page.png)  
         You can also search and filter categories in the Akeneo selector page using a full-text search based on the category ID.  
         ![Akeneo-Category-Selector-Page-Search](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltaacd3070e49f1bbb/642d4eaab2ef0d11ece9f2cb/Akeneo-Category-Selector-Page-Search.png)  
         Hover over the category on the Akeneo selector page, and you can see the **View in Akeneo** option to go directly to the Akeneo platform.  
         ![Akeneo-Category-Selector-Page-View-In-Akeneo](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt95990d99595543b3/642d4fc443365211f62d5f84/Akeneo-Category-Selector-Page-View-In-Akeneo.png)  
         The category(s) you selected are referenced within your entry in the thumbnail view.  
         ![Akeneo-Categories-Thumbnail-View](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt057aee1353727e22/649bff514a3adfce9e052b9b/Akeneo-Categories-Thumbnail-View.png)  
         Select the list view option from the dropdown to view the category(s) in the list view.  
         ![Akeneo-Categories-View-Options](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt54433a6e1bb0edde/649bff507c84d2570ac2a065/Akeneo-Categories-View-Options.png)  
         The category(s) you selected are referenced within your entry in the list view.  
         ![Akeneo-Categories-List-View](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte14292f0d83c7df1/649bff5096c4d6e713a4202e/Akeneo-Categories-List-View.png)  
         
    17.  To reorder, open in Akeneo, or delete the selected category, hover over the category to get the available options, then perform the following:
         
         1.  Click the **Reorder** icon to drag and reorder the category.
         2.  Click the **Open in Akeneo** icon to open the category in the Akeneo app.
         3.  Click the **Delete** icon to delete the category.
         
           
         **Thumbnail View**![Akeneo-Categories-Thumbnail-View-Features](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc300095c0eb71224/649bff517ad988329831d36b/Akeneo-Categories-Thumbnail-View-Features.png)  
         **List View**  
         ![Akeneo-Caetgories-List-View-Features](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt080160f3dbf2860b/649bff516c102e23d6a56a66/Akeneo-Caetgories-List-View-Features.png)
    18.  After adding the category(s), **Save** and **Publish** your entry.
