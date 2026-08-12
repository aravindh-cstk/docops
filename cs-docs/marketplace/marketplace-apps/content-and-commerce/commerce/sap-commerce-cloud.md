---
title: "SAP Commerce Cloud App Installation Guide"
description: "Fetch and display products and categories from your SAP store in a field of your Contentstack entries."
url: /marketplace/sap-commerce-cloud
---

# SAP Commerce Cloud App Installation Guide

## SAP Commerce Cloud App Installation Guide

SAP Commerce Cloud is one of the most flexible and efficient eCommerce project development platforms, specifically for B2B businesses and retailers. Using SAP Commerce Cloud, businesses can adapt to various demands and reduce their dependency on different application modules. It allows you to set up an online store to sell your products.

With the Contentstack Marketplace SAP Commerce Cloud app, you can use and refer to the products and categories from your SAP Commerce Cloud account within your Contentstack entries.

## Prerequisites

-   [SAP Commerce Cloud account](https://accounts.sap.com/)
-   [Contentstack account](https://www.contentstack.com/login/)
-   Access to the Contentstack Organization/Stack as the Owner/Admin

Let’s follow this step-by-step guide to install and configure the SAP Commerce Cloud app within your stack.

## Steps for Execution

1.  [Retrieve configuration details for SAP Commerce Cloud](#retrieve-configuration-details-for-sap-commerce-cloud)
2.  [Install and configure the SAP Commerce Cloud app in Marketplace](#install-and-configure-the-sap-commerce-cloud-app-in-marketplace)
3.  [Use the SAP Commerce Cloud app within your stack](#use-the-sap-commerce-cloud-app-within-your-stack)

1.  ## Retrieve Configuration Details for SAP Commerce Cloud
    
    To get your configuration details for SAP Commerce Cloud, follow the steps given below:
    
    1.  Log in to the [SAP Cloud Portal](https://portal.commerce.ondemand.com/) using your SAP Commerce Cloud account credentials.
    2.  Click **Environments** in the left panel, then click the environment for which you want to retrieve the configuration details.![SAP-Commerce-Cloud-Portal-Environments](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltca3995dc360b9930/639d68467a84980155704c47/SAP-Cloud_Portal-Environments.png)
    3.  Copy the **API** and **Backoffice** URLs. You will use them during app configuration in [step 2](#install-and-configure-the-sap-commerce-cloud-app-in-marketplace).![SAP-Commerce-Cloud-Portal-API-Backoffice](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt07f84184c097d5af/639d684ae11ee01263ab45c5/SAP-Cloud_Portal-API-Backoffice.png)
    4.  To retrieve the **Base Site ID**, follow the steps below:
        
        1.  Click the **Backoffice** URL, then log in using your SAP Commerce Cloud account credentials.
        2.  Under **Base Commerce**, in the left panel, click **Base Store**.
        3.  Click **Base Site** for which you want to retrieve theBase Site ID.
        
        You can find the Base Site ID under the **PROPERTIES** section.
        
        ![SAP-Cloud_Portal-Base_Site_ID](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt048dccee99d9a638/639d684d2a1f6055c6b824e3/SAP-Cloud_Portal-Base_Site_ID.png)
2.  ## Install and Configure the SAP Commerce Cloud App in Marketplace
    
    To install the app, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps below:
    
    1.  Navigate to the “App Switcher” icon in the top-right corner and click **Marketplace**.![Contentstack-App-Switcher-Marketplace](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt47c618781b542b64/68ee96ad6bfd93c9913fee8a/Contentstack-App-Switcher-Marketplace.png)
    2.  Click **Apps** from the left panel.
    3.  Within the Marketplace, you can see the available apps. Hover over the **SAP Commerce Cloud** app and click **Install**.  
        ![Marketplace_SAP_Commerce_Cloud.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8f51fe422a7e830e/6a0199f8472b14af19def566/Marketplace_SAP_Commerce_Cloud.png)
    4.  In the pop-up window, select the stack where you want to install the SAP Commerce Cloud app, accept the **Terms of Service** and click the **Install** button.![SAP-Commerce-Cloud-App-Install](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt48a342feed931425/68c949e658ae1782549a1050/SAP-Commerce-Cloud-App-Install.png)
    5.  On the **Configuration** screen, you can add multiple configurations for SAP Commerce Cloud. To do so, follow the steps given below:
        1.  Click the **\+ New Configuration** button to add new configuration details.![SAP-Commerce-Cloud-New-Configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0253a5f4bde52f82/68c94aaaf758490e8b1b2dfa/SAP-Commerce-Cloud-New-Configuration.png)
        2.  In the **Add Configuration** modal, enter the configuration **Name** and click **Add**.![SAP-Commerce-Cloud-Add-Configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt01e0a7c24a217c93/68c949e68f9bf10102c6ba96/SAP-Commerce-Cloud-Add-Configuration.png)
        3.  After adding the configuration, enter the following details:
            
            1.  **SAP URL Structure**: Choose the type of URL you want to use in your configuration.
                
                1.  For **OCC URL** (Omni Commerce Connect URL): You can provide the **API Base URL** retrieved from the SAP Commerce Cloud dashboard.
                2.  For **Custom URL**: If you are not using OCC URL (Omni Commerce Connect URL) from the SAP Commerce Cloud, you can select Custom URL and provide the respective **API Base URL** and **API Route**.
                
                **Note:** Please choose Custom URL if the URL does not start with https://your-base-url/occ/v2.
                
            2.  Enter the **API Base URL** and **API Route** retrieved from [step 1](#retrieve-configuration-details-for-sap-commerce-cloud).
                
                **Note:** Enter the URL starting from api.
                
            3.  Enter the **Base Site ID** and **Backoffice URL** retrieved from [step 1](#retrieve-configuration-details-for-sap-commerce-cloud).
            
            ![SAP-Commerce-Cloud-Configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt75b2bba9b26a10d4/68c949f672b4ed518d059338/SAP-Commerce-Cloud-Configuration.png)
        4.  **Set as Default**: To set this configuration as the default, click this checkbox.![SAP-Commerce-Cloud-Set-As-Default-Checkbox](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc2b033d0d260e3c7/68c94aaa1bf37eb6a0250945/SAP-Commerce-Cloud-Set-As-Default-Checkbox.png)
            
            Alternatively, you can set a configuration as the default by clicking the horizontal ellipses on the top-right side of the configuration section and then selecting **Set as Default**.
            
            ![SAP-Commerce-Cloud-Set-As-Default](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbce32618544be426/68ca63767ca4710514131610/SAP-Commerce-Cloud-Set-As-Default.png)
            
            **Note:** At least one app configuration should be selected as the default.
            
            Similarly, you can add multiple configurations by following the steps discussed above.
            
        5.  To delete the configuration, click the horizontal ellipses and select **Delete Configuration**.![SAP-Commerce-Cloud-Delete-Configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4a91ac65c69cfa8a/68ca63587b2e153708809666/SAP-Commerce-Cloud-Delete-Configuration.png)
            
            In the **Confirm Deletion** modal, add the configuration name and click **Delete.**
            
            ![SAP-Commerce-Cloud-Delete-Configuration-Modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3df5b640c7a3c37c/68c94a51371e4c53f036ac50/SAP-Commerce-Cloud-Delete-Configuration-Modal.png)
        6.  For an existing user, the credentials will be added as the default configuration, and named as **legacy\_config**.
            
            **Warning**:
            
            -   **legacy\_config** is a reserved keyword and you cannot use it in adding new configurations.
            -   If you delete the **legacy\_config** configuration, data loss may occur and you will not be able to access the products and categories from the related accounts.
            
        7.  **Choose the SAP Commerce Cloud Keys to Save in Entry**: Choose how to save the data fetched from the SAP Commerce Cloud account in Contentstack entries.
            
            1.  If you select the All Fields option, you can select only a limited number of products in the entry.
            2.  For **Custom Fields**, you can search and add specific SAP Commerce Cloud Fields you want to save in entries.![SAP-Commerce-Cloud-Save-In-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt157f04028b88d7e8/68c97deb3c509a517a6c380c/SAP-Commerce-Cloud-Save-In-Entry.png)
            
            If you select **Custom Fields** then the **SAP Commerce Cloud Keys** dropdown appears. By default, **code** and **name** keys are already selected. If you want to create a new key, click the **\+ New Key Field** option.
            
            ![SAP-Commerce-Cloud-New-Key-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt00b5f68cb98c4a43/68c97debb7a9190aa4012c51/SAP-Commerce-Cloud-New-Key-Field.png)
            
            In the **Add SAP Commerce Cloud Key Field** modal, enter the **Key Name or Path** and click the **Create** button to create a new key.
            
            ![SAP-Commerce-Cloud-Add-Key-Modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1f4c6e6a1cd6fb58/68c94ad5f7584914c51b2dfc/SAP-Commerce-Cloud-Add-Key-Modal.png)
    6.  After adding the configuration details, click the **Save** button.
    7.  On the **UI Locations** tab, you can see the predefined app locations. You can use the toggle button corresponding to each UI location to enable or disable it based on your requirements.![SAP-Commerce-Cloud-UI-Locations](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8c3887fab424ae9b/68c94aaa48d1be579361d995/SAP-Commerce-Cloud-UI-Locations.png)
        
        **Note:** The app requires at least one UI location to be enabled; otherwise, you would not be able to save your app configuration settings.
        
    8.  If the webhook is enabled for your app, you can view the webhook logs under the **Webhook** tab.
        
        **Additional Resource:** For more information on UI location and webhooks, please refer to the [Installed Apps](/docs/marketplace/installed-apps#view-edit-configuration-ui-locations-and-webhook) guide.
        
    9.  Click **Open Stack** to start using the SAP Commerce Cloud app.
3.  ## Use the SAP Commerce Cloud App within your Stack
    
    To use the SAP Commerce Cloud app within an entry of your stack, follow the steps given below:
    
    1.  Go to your stack, click the **Content Models** icon in the left navigation panel, and click the **\+ New Content Type** button.
    2.  Create a content type by adding relevant details as displayed below:![SAP-Commerce-Cloud-Content-Type](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt356625ae6a30c815/68c949f6d6e5002d39e1caad/SAP-Commerce-Cloud-Content-Type.png)
    3.  In the **Content Type Builder** page, add a [Custom](/docs/headless-cms/custom) field for product in your content type by clicking the **Insert a field** link represented by a **+** sign.
    4.  Under **Select Extension or App**, select **SAP Commerce Cloud - Product** and click **Proceed**.![SAP-Commerce-Cloud-Add-Product-In-Custom-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt964dd9e722b82c29/68c949e6cd8814091ef23be6/SAP-Commerce-Cloud-Add-Product-In-Custom-Field.png)
        
        This adds SAP Commerce Cloud - Product Field in the custom field.
        
        ![SAP-Commerce-Cloud-Added-Product-In-Custom-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7ea6cede89393e21/68c949e648d1beef7c61d98b/SAP-Commerce-Cloud-Added-Product-In-Custom-Field.png)
    5.  Add another [Custom](/docs/headless-cms/custom) field for category in your content type by clicking the **Insert a field** link represented by a **+** sign.
    6.  Under **Select Extension or App**, select **SAP Commerce Cloud - Category** and click **Proceed**.![SAP-Commerce-Cloud-Add-Category-In-Custom-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt443b6a596b305d2f/68c949e6d6e50063efe1caa9/SAP-Commerce-Cloud-Add-Category-In-Custom-Field.png)
        
        This adds SAP Commerce Cloud - Category Field in the custom field.
        
        ![SAP-Commerce-Cloud-Added-Category-In-Custom-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte2f6ee876989fa05/68c949e648d1be50c261d98d/SAP-Commerce-Cloud-Added-Category-In-Custom-Field.png)
    7.  Under **Advanced** properties, you have the option to set the **Config Parameter** for all entries of a particular content type. If you do so, it overrides the default app configuration that you set at the time of app installation on the Configuration screen.
        
        The key:value passed in the configuration object overrides the default app configuration settings.
        
        In case you want to use a different SAP Commerce Cloud configuration for any custom field within the same stack, you need to specify the configuration name in the Config Parameter.
        
        **Configuration Object:**
        
        ```
        {
         "config_label": [
        	"Configuration-2"
           ]
        }
        ```
        
        **Locale** **Based Configuration Object**: To add a locale\-based configuration, add a locale parameter to the additional configuration object which specifies the locale value (for example: en-us) as the object key and the configuration object as the value to the locale.
        
        **locale** **Configuration Object:**
        
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
        
        ![SAP-Commerce-Cloud-Advanced-Config-Parameter](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt30fb35a938054c73/68cd780ed4859ee0a031cbff/SAP-Commerce-Cloud-Advanced-Config-Parameter.png)
        
        **Note:** If any configuration value is not added, or if all the values are empty in the **Config Parameter** properties settings, the SAP Commerce Cloud app uses the default configuration which was set up in [step 2](#install-and-configure-the-sap-commerce-cloud-app-in-marketplace).
        
    8.  After adding the app, click **Save** or **Save and Close** to save your changes.
    9.  In the left navigation panel, navigate to the **Entries** page and click **\+ New Entry** to [create an entry](/docs/headless-cms/create-an-entry) for the above content type, and then click **Proceed**.
        
        You will see the SAP Commerce Cloud custom fields on your entry page as shown below:
        
        ![SAP-Commerce-Cloud-Sample-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt85e1a18b8605881d/68c94aaa39d1a82c2ad3142a/SAP-Commerce-Cloud-Sample-Entry.png)
    10.  Click the **Add Product(s)** button, select the products from your SAP Commerce Cloud store and add them to your entry.![SAP-Commerce-Cloud-Add-Products](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5f91ab59f1d70b20/68c949e641ecbeb5018c7990/SAP-Commerce-Cloud-Add-Products.png)
         
         Select the products from your SAP Commerce Cloud selector page and click **\+ Add Product(s)** to add them to your entry.
         
         ![SAP-Commerce-Cloud-Product-Selector-Page](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1509e0580b137cad/68c94a51b7a919aeb0012a8e/SAP-Commerce-Cloud-Product-Selector-Page.png)
         
         You can select the products from multiple configurations at once using the **Configuration** dropdown.
         
         ![SAP-Commerce-Cloud-Products-Selector-Page-Multiconfig](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt21d4b651b7117379/68c94aaa75e1e1155bdf121b/SAP-Commerce-Cloud-Products-Selector-Page-Multiconfig.png)
         
         You can also search for products in the SAP Commerce Cloud selector page based on the product name.
         
         ![SAP-Commerce-Cloud-Product-Selector-Page-Search](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt150e3d581e5c34d7/68c94a515bd988bb35f7f2e6/SAP-Commerce-Cloud-Product-Selector-Page-Search.png)
         
         Hover over the product on the SAP Commerce Cloud selector page, and you can see the **View in SAP Commerce Cloud** option to go directly to the SAP Commerce Cloud store.
         
         ![SAP-Commerce-Cloud-Product-Selector-Page-View-In-SAP-CC](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt57a3ad41de19cf7e/68c94a5172b4ed0af0059342/SAP-Commerce-Cloud-Product-Selector-Page-View-In-SAP-CC.png)
         
         The products you selected are referenced within your entry in the thumbnail view:
         
         ![SAP-Commerce-Cloud-Product-Thumbnail-View](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6f0cd40684711f9a/68c94a515bd9885d5ff7f2ea/SAP-Commerce-Cloud-Product-Thumbnail-View.png)
         
         To view the products in list view, select the **List** view option from the dropdown as given below:
         
         ![SAP-Commerce-Cloud-Product-View-Options](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltae30464547f0852c/68c94a51770c16c8d872c68b/SAP-Commerce-Cloud-Product-View-Options.png)
         
         The products you selected are referenced within your entry in the list view:
         
         ![SAP-Commerce-Cloud-Product-List-View](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6708f00a5ec84ec4/68c94a51d6e5004d21e1cab1/SAP-Commerce-Cloud-Product-List-View.png)
    11.  To reorder, open in SAP Commerce Cloud, or delete the selected product, hover over the product and perform the following:
         
         1.  Click the **Drag** icon to drag and reorder the product.
         2.  Click the **Open in SAP Commerce Cloud** icon to open the product in the SAP Commerce Cloud app.
         3.  Click the **Remove** icon to delete the product.
         
         **Thumbnail View**
         
         ![SAP-Commerce-Cloud-Product-Thumbnail-View-Options](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte963c2d15807e0b0/68c94a51c5d97147ff2bac04/SAP-Commerce-Cloud-Product-Thumbnail-View-Options.png)
         
         **List View**
         
         ![SAP-Commerce-Cloud-Product-List-View-Options](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt83b40f280d36bd7f/68c94a51e635bb17f033a82a/SAP-Commerce-Cloud-Product-List-View-Options.png)
    12.  Click the **Save** button to save your entry.
         
         You can view more product details in the Sidebar Widget.
         
         **Note:** You must save your entry to get the product details in the Sidebar Widget.
         
    13.  In the right navigation panel, select **Apps**, and then select **SAP Commerce Cloud** to view the product details.![SAP-Commerce-Cloud-Sidebar-Widget-Products](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt990f4701724caa96/68c94aaacd88147a81f23bf4/SAP-Commerce-Cloud-Sidebar-Widget-Products.png)
    14.  Enter the product name in the dropdown to search and view the product details.![SAP-Commerce-Cloud-Sidebar-Widget-Products-Search](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt266b7e63171c0c5f/68c94aaa60e5383ccde6df58/SAP-Commerce-Cloud-Sidebar-Widget-Products-Search.png)
    15.  Click the **Add Category(s)** button, select the categories from your SAP Commerce Cloud store and add them to your entry.![SAP-Commerce-Cloud-Add-Category](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5cfd02581751e896/68c949e60fb82557b7469dd6/SAP-Commerce-Cloud-Add-Category.png)
         
         Select the categories from your SAP Commerce Cloud selector page and click **\+ Add Category(s)** to add them to your entry.
         
         ![SAP-Commerce-Cloud-Category-Selector-Page](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte9b9cce98e5ff38a/68c949f6371e4ce7d736ac4a/SAP-Commerce-Cloud-Category-Selector-Page.png)
         
         You can select the categories from multiple configurations at once using the **Configuration** dropdown.
         
         ![SAP-Commerce-Cloud-Category-Selector-Page-Multiconfig](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdc85d27fa464ea47/68c949f6fe732def0786e1bb/SAP-Commerce-Cloud-Category-Selector-Page-Multiconfig.png)
         
         Hover over the category on the SAP Commerce Cloud selector page, and you can see the **View in SAP Commerce Cloud** option to go directly to the SAP Commerce Cloud store.
         
         ![SAP-Commerce-Cloud-Category-Selector-Page-View-In-SAP-CC](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt77d13a8ef89b4b36/68c949f6cd881402def23bee/SAP-Commerce-Cloud-Category-Selector-Page-View-In-SAP-CC.png)
         
         The categories you selected get referenced within your entry.
         
         ![SAP-Commerce-Cloud-Category-Thumbnail-View](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte37e3a35e36ccd7f/68c949f6cd8814509ef23bea/SAP-Commerce-Cloud-Category-Thumbnail-View.png)
    16.  To remove the selected category, hover over the category and click the **Remove** icon.![SAP-Commerce-Cloud-Category-Thumbnail-View-Options](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc0c2789b90bdfe67/68c949f63c509a63096c3624/SAP-Commerce-Cloud-Category-Thumbnail-View-Options.png)
    17.  After adding the category(s), **Save** and **Publish** your entry.
