---
title: "Elastic Path App Installation Guide"
description: "Fetch the products and hierarchies from your Elastic Path Commerce Cloud account into Contentstack entries."
url: /marketplace/elastic-path
uid: blt5c885e68f7dc905d
---

# Elastic Path App Installation Guide

## Elastic Path App Installation Guide

Elastic Path Commerce Cloud is a flexible, cloud-based e-commerce platform designed for enterprises that need to create highly customized, scalable, and innovative digital commerce experiences. It is a headless API-driven platform that can be integrated with various front-end technologies, such as web and mobile applications, to create customized and engaging digital storefronts.

With the Contentstack Marketplace Elastic Path Commerce Cloud app, you can add products and hierarchies from your Elastic Path Commerce Cloud account within your Contentstack entries. You can also view the product details and search for the selected products directly in the Sidebar Widget.

## Prerequisites

-   Elastic Path Commerce Cloud account
-   [Contentstack account](https://www.contentstack.com/login/)
-   Access to the Contentstack Organization/Stack as the Owner/Admin

This step-by-step guide explains how to install and configure the Elastic Path Commerce Cloud app within your stack.

The steps to be performed are as follows:

1.  [Retrieve Configuration Details from Elastic Path Commerce Cloud](#retrieve-configuration-details-from-elastic-path-commerce-cloud)
2.  [Install and Configure Elastic Path Commerce Cloud in Contentstack Marketplace](#install-and-configure-elastic-path-commerce-cloud-in-contentstack-marketplace)
3.  [Use Elastic Path Commerce Cloud within your Stack](#use-elastic-path-commerce-cloud-within-your-stack)

1.  ## Retrieve Configuration Details from Elastic Path Commerce Cloud

    To get your configuration details for Elastic Path Commerce Cloud, follow the steps given below:

    1.  Log in to the Elastic Path Portal using your Elastic Path Commerce Cloud account credentials.
    2.  Select your store from a list of stores you have created before. 
    3.  ![EPCC_-_Stores_List.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt01c0229cbf6ec32f/640b5f25a43dca105a686510/EPCC_-_Stores_List.png)
    4.  Alternatively, you can create a new store. To do this, follow the steps below:
        1.  Click the **Create new store** button.
        2.  Enter the name of the store.
        3.  Click the **Create** button.
    5.  ![EPCC_-_Create_Store.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd2ea5a4913fc3af1/640b5efee16bc77f58332f40/EPCC_-_Create_Store.png)
    6.  To integrate Elastic Path Commerce Cloud in Contentstack, we need the Login Base URL, API Base URL, Client ID, and the Client Secret of the store. To retrieve these values, under the **System** options, click **Application Keys** in the left panel.
    7.  ![EPCC_-_Application_Keys.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd47436dcd683894b/640b5ee8e9f75310481c457e/EPCC_-_Application_Keys.png)
    8.  **Note:** Elastic Path Commerce Cloud provides you with your Login Base URL when you sign up.

    9.  To create new Application Keys, click the **Create New** button.
    10.  ![EPCC_-_Create_New_key.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4d6500054401f59e/640b5ee8205f2b7a60b75139/EPCC_-_Create_New_key.png)
    11.  In the new screen, enter the name of the **Application Key** and click the **Create** button.
    12.  ![EPCC_-_Key_Name.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3cb3c6d5b4ae3087/640b5effc17ecc10752ce682/EPCC_-_Key_Name.png)
    13.  The new **Application Key** is generated. A pop-up displays the **Client Secret.**

    14.  **Note:** Since the Client Secret is confidential, it is displayed only once. In case you do not copy it to your clipboard, you will need to create a new Application Key.

    15.  Click the **Copy Client Secret** button to copy the Client Secret.
    16.  ![EPCC_-_Client_Secret.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0bb0bb1a6b1b51a0/640b5ee7c448032f744a8f7e/EPCC_-_Client_Secret.png)
    17.  **Note:** Keep the Client Secret safe for future use.

    18.  Click the **Dismiss** button.  
         You can see your API Base URL, Client ID, and Client Secret displayed on the screen.
    19.  Click the copy icon next to the **API Base URL** and **Client ID** to store the values for future use. 
    20.  ![EPCC_-_API_ID_Secret_Key.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt11538a9c3a0d831c/640b5ee710ff830ebb560b45/EPCC_-_API_ID_Secret_Key.png)
    21.  Repeat the process from [Step 5](#retrieve-configuration-details-from-elastic-path-commerce-cloud) if you want to add more Application Keys to your store.

    22.  Now click **Application Keys** in the left panel to see the list of all Application Keys generated for your store. 
    23.  ![EPCC_-_Application_Keys_list.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3d337750feade64e/640b5ee74fd99f36ebe239e8/EPCC_-_Application_Keys_list.png)
2.  ## Install and Configure Elastic Path Commerce Cloud in Contentstack Marketplace

    To install the application in Contentstack, follow the steps below:

    1.  Log in to your [Contentstack account](https://www.contentstack.com/login/).
    2.  Navigate to the “App Switcher” icon in the top-right corner and click **Marketplace**.![Contentstack-App-Switcher-Marketplace](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt47c618781b542b64/68ee96ad6bfd93c9913fee8a/Contentstack-App-Switcher-Marketplace.png)
    3.  Click **Apps** from the left panel.
3.  Within the Marketplace, you can see all the available apps. Hover over the **Elastic Path Commerce Cloud** app and click the **Install** button.  
    ![Marketplace_Elastic_Path.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1c6ee692beac595c/6a0197a57356ce0c12ee8cc6/Marketplace_Elastic_Path.png)  
    1.  In the popup window, select the stack where you want to install the Elastic Path Commerce Cloud app and click the **Install** button.  
        ![Elastic-Path-Install-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcea2b856cf2acdb0/64b9050ab6e66540e1510bfb/Elastic-Path-Install-App.png)  

    2.  On the **Configuration** screen, enter the following details retrieved from your Elastic Path Commerce Cloud Account:

        1.  **Login Base URL**: The URL used to log in to the Elastic Path Commerce Cloud account.
        2.  **API Base URL**: The API Base URL retrieved from the Elastic Path Commerce Cloud account.
        3.  **Client ID**: The Client ID retrieved from the Elastic Path Commerce Cloud account.
        4.  **Client Secret**: The Client Secret retrieved from the Elastic Path Commerce Cloud account.
        5.  **Save in Entry:** Choose how to save the data fetched from Elastic Path Commerce Cloud in Contentstack entries.
            1.  If you select **All Fields**, you can select only a limited number of products.
            2.  For **Custom Fields**, you can search and add specific **Elastic Path Fields** you want to save in entries. By default, the **id** and **name** of the products are selected.
        6.  **Items per Page:** Enter the number of products and hierarchies to display in the selector page based on the hierarchies or catalog filters or upon search or refresh.  


        ![Elastic-Path-Config-Screen.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2a9182698f56d10f/643d90533e745b11edf8181a/Elastic-Path-Config-Screen.png)
    3.  Click the **Save** button.
    4.  Click the **Open Stack** button to start using the Elastic Path Commerce Cloud application.
4.  ## Use Elastic Path Commerce Cloud within your Stack

    To use the Elastic Path Commerce Cloud application within an entry of your stack, follow the steps given below:

    1.  Go to your stack, click the **Content Models** icon in the left navigation panel, and click the **\+ New Content Type** button.
    2.  Create a content type by adding relevant details as displayed below:  
        ![Elastic-Path-Content-Type.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt42e339e13011f59a/643d9052686ac411e37e3d6c/Elastic-Path-Content-Type.png)
    3.  In the Content Type Builder page, add a Custom field for hierarchy in your content type by clicking the **Insert a field** link represented by a **\+** sign.
    4.  Under **Select Extension/App**, select **Elastic Path - Hierarchy Field** and click the **Proceed** button.  
        ![Elastic-Path-Hierarchy-Field.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3dbbaeb5caed795f/643d9053a39e8e5aa0f4560b/Elastic-Path-Hierarchy-Field.png)
    5.  Add another Custom field for product in your content type by clicking the **Insert a field** link represented by a **\+** sign.
    6.  Under **Select Extension/App**, select **Elastic Path - Product Field** and click the **Proceed** button.  
        ![Elastic-Path-Product-Field.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8de4540b3f1cb3b8/643d905ca4989052e0336ee7/Elastic-Path-Product-Field.png)
    7.  After adding the custom fields for the app, click **Save** or **Save and Close** to save your changes.  
        ![Elastic-Path-Custom-Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt907f349d7a90713e/643d90530736ac330839a9d8/Elastic-Path-Custom-Fields.png)
    8.  In the left navigation panel, navigate to the Entries page and click **\+ New Entry** to create a new entry for the above content type. And then click **Proceed**.  
        You will see the Elastic Path Commerce Cloud app's custom fields on your entry page, as shown below:  
        ![Elastic-Path-Sample-Entry.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5981650a1dfb5082/643d905cd194fd5a99de95ea/Elastic-Path-Sample-Entry.png)
    9.  Click the **Add Hierarchy(ies)** button, select the hierarchies from your Elastic Path Commerce Cloud store, and add them to your entry.  
        ![Elastic-Path-Hierarchy-Selector-Page.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt60b8b78bb5177bb5/643d9053507a5f582f9166c9/Elastic-Path-Hierarchy-Selector-Page.png)
    10.  **Note:** You can filter hierarchies by catalog or by a full-text search based on ID or name.

    11.  The hierarchies you selected are referenced within your entry.  

    12.  ![Elastic-Path-Hierarchy-Added.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltce1bc673f60e78b6/643d905267e76213aa9b9e40/Elastic-Path-Hierarchy-Added.png)
    13.  To remove the selected hierarchy, hover over the hierarchy and click the **Remove** icon.  
         ![Elastic-Path-Hierarchy-Remove.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf8e39c3bac48e868/643d90525f834b59633e0b95/Elastic-Path-Hierarchy-Remove.png)
    14.  Click the **Save** button to save your entry.
    15.  Click the **Add Product(s)** button, select the products from your Elastic Path Commerce Cloud store, and add them to your entry.  
         ![Elastic-Path-Product-Selector-Page.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt928b4af1fc88a9f9/643d905cea4ed2292f8d3664/Elastic-Path-Product-Selector-Page.png)
    16.  **Note:** You can filter products by catalog and hierarchies or by a full-text search based on SKU or name.

    17.  The products you selected are referenced within your entry in the thumbnail view:  

    18.  ![Elastic-Path-Product-Added-Thumbnail-View.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4f9cd233727578b0/643d905cc93b1e54916ba51d/Elastic-Path-Product-Added-Thumbnail-View.png)
    19.  To view the products in list view, select the list view option from the dropdown as given below:  

    20.  ![Elastic-Path-Product-View-Options.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt648f8b7d8faccb4f/643d905ce082c431c88bf8fd/Elastic-Path-Product-View-Options.png)
    21.  The products you selected are referenced within your entry in the list view:  

    22.  ![Elastic-Path-Product-Added-List-View.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcd10adcdc1508da2/643d9053686ac411e37e3d70/Elastic-Path-Product-Added-List-View.png)
    23.  To reorder, open in Elastic Path Commerce Cloud or delete the selected product, hover over the product to get the options available, then perform the following:
         1.  Click the **Reorder** icon to drag and reorder the product.
         2.  Click the **Open in Elastic Path** **Commerce Cloud** icon to open the product in the Elastic Path Commerce Cloud app.
         3.  **Note:** Ensure that you are logged in to your Elastic Path Commerce Cloud account and have selected the store which contains all the imported products.

         4.  Click the **Delete** icon to delete the product.  


    24.  **Thumbnail View**

    25.  ![Elastic-Path-Product-Added-Thumbnail-View-Features.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf5b4c597ada9c9d2/643d905c9074ca2928c79936/Elastic-Path-Product-Added-Thumbnail-View-Features.png)
    26.  **List View**

    27.  ![Elastic-Path-Product-Added-List-View-Features.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8ce44017ea3795cf/643d90549074ca2928c79932/Elastic-Path-Product-Added-List-View-Features.png)
    28.  Click the **Save** button to save your entry.
    29.  You can view more product details in the Sidebar Widget.

    30.  **Note:** You must save your entry to get the product details in the Sidebar Widget.

    31.  In the right navigation panel, select **Widgets**, and then select **Elastic Path Commerce Cloud** to view the product details.  
         ![Elastic-Path-Sidebar-Widget.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt461535e141f60169/643d905ce8b191595dde4012/Elastic-Path-Sidebar-Widget.png)
    32.  Enter the product name in the dropdown to search and view the product details.  
         ![Elastic-Path-Sidebar-Widget-Search.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltad535e7b00fb99d0/643d905d686ac411e37e3d74/Elastic-Path-Sidebar-Widget-Search.png)
    33.  Click the **Publish** button to publish your entry.
