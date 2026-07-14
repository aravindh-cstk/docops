---
title: "[Marketplace guides and apps] - BigCommerce App Installation Guide"
description: BigCommerce App Installation Guide
url: https://www.contentstack.com/docs/marketplace/bigcommerce
product: Contentstack Marketplace
doc_type: marketplace-app-guide
audience:
  - developers
  - admins
version: current
last_updated: 2026-03-26
---

# [Marketplace guides and apps] - BigCommerce App Installation Guide

This page explains how to install and configure the BigCommerce app from Contentstack Marketplace and how to use it inside your stack entries. It is intended for Contentstack Organization/Stack Owners or Admins who need to connect a BigCommerce store and reference products and categories in content types and entries.

## BigCommerce App Installation Guide

BigCommerce is a leading cloud-based ecommerce platform for businesses of all sizes. Using its powerful online store management features, you can set up an online store, sell your products, and rapidly grow your business.

Contentstack Marketplace allows you to easily install the BigCommerce application and use it within your stack to add products from the BigCommerce store into the entries of your content type.

## Prerequisites

- [BigCommerce account](https://login.bigcommerce.com/login)
- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization/ Stack as the Owner/ Admin

This step-by-step guide explains how to install and configure BigCommerce in your stack.

## Steps for Execution

- [Retrieve your API client credentials from BigCommerce](#retrieve-your-api-client-credentials-from-bigcommerce)
- [Install and Configure BigCommerce in Marketplace](#install-and-configure-bigcommerce-in-marketplace)
- [Use BigCommerce within your Stack](#use-bigcommerce-within-your-stack)

## Retrieve your API Client Credentials from BigCommerce

Log in to your [BigCommerce account](https://login.bigcommerce.com/login).

- Follow BigCommerce’s detailed guide to [retrieve the API client credentials](https://developer.bigcommerce.com/api-docs/getting-started/authentication/rest-api-authentication#obtaining-store-api-credentials#obtaining-store-api-credentials) of your BigCommerce store.The credentials include the API Path URL and access token of your BigCommerce store API client.

  **Note**: Make a note of the **API URL** and **access token** as these will be required while configuring the BigCommerce app in Marketplace.

  While creating the API account in BigCommerce, make sure that **read-only** is selected under **Products**.

  **Additional Resource: **Refer to the [Authenticating BigCommerce’s REST APIs](https://support.bigcommerce.com/s/article/Store-API-Accounts?language=en_US#creating) page to get the API credentials.

## Install and Configure BigCommerce in Marketplace

To install the app in Contentstack, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps below:

In the left-hand side primary navigation, click the **Marketplace** icon.

- Click **Apps** from the left panel.
- Within the Marketplace, you can see all available apps. Hover over the **BigCommerce** app and click **Install**.![marketplace_appswitcher_bigcommerce.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/amc705de54d3ca8548/d3edc55266d9772b877a4add/marketplace_appswitcher_bigcommerce.png?locale=en-us)
- In the pop-up window, select the stack where you want to install the BigCommerce app, accept the **Terms of Service**, and click the **Install** button.![BigCommerce-App-Install](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt609c23b5c74e0ca6/6756c22d30b280c6afdf22ea/BigCommerce-App-Install.png)
- On the **Configuration** screen, you can add multiple configurations for BigCommerce. To do this, follow the steps given below:
  - Click the **+ New Configuration** button to add new configuration details.![BigCommerce-New-Configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8c8437bc2ea6a747/6756c23aa3d5213da151bec0/BigCommerce-New-Configuration.png)
- In the **Add Configuration** modal, enter the configuration **Name** and click **Add**.![BigCommerce-Add-Configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6bf97fd9744f6024/6756c22c93cf2943d26bb8a3/BigCommerce-Add-Configuration.png)
- After adding the configuration, enter the following details:
  - **Store ID**: Enter the BigCommerce **API URL** we retrieved in [step 1](#retrieve-your-api-client-credentials-from-bigcommerce).
- **Auth Token**: Enter the BigCommerce **Auth token** that we retrieved in [step 1](#retrieve-your-api-client-credentials-from-bigcommerce).
- **Is Multi-Storefront?**: Enabling this option adds a channel filter to your stack to filter the products and categories.![BigCommerce-Configuration-Credentials](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt449db034c45168a1/6756c22d4e767593fbeee479/BigCommerce-Configuration-Credentials.png)
- **Set as Default**: To set this configuration as the default, click this checkbox.

  Alternatively, you can set a configuration as the default by clicking the three dots on the top-right side of the configuration section and then selecting **Set as Default**.

  **Note**: At least one app configuration should be selected as the default.

  Similarly, you can add multiple configurations by following the steps discussed above.
- To delete the configuration, click the three dots and select **Delete Configuration**.

  In the **Confirm Deletion** modal, add the configuration name and click **Delete**.
- For an existing user, the credentials will be added as the default configuration, and named as **legacy_config**.

  **Warning**:

  **legacy_config** is a reserved keyword and you cannot use it in adding new configurations.
- If you delete the **legacy_config** configuration, data loss may occur and you will not be able to access the products and categories from the related accounts.
- **Choose BigCommerce Keys to Save in Entry**: Choose how to save the data fetched from the BigCommerce account in Contentstack entries.

  If you select the **All Fields** option, you can select only a limited number of products in the entry.
- For **Custom Fields**, you can search and add specific BigCommerce Fields you want to save in entries.

  If you select **Custom Fields** then the **BigCommerce Keys** drop-down appears. By default, **id** and **name** keys are already selected. If you want to create a new key, click the **+ New Key Field** option.

  In the **Add BigCommerce Key Field** modal, enter the **Key Name or Path** and click the **Create** button to create a new key.
- **Choose Category Structure to Save in Entry**: Choose how to save the category in Contentstack entries.

  If you select the **Old Category Structure** option, you are saving the data using **id**.
- If you select the **New Category Structure** option, you are saving the data using **category_id**.

  **Additional Resource**: To learn more, refer to [BigCommerce Catalog - Categories](https://developer.bigcommerce.com/docs/rest-catalog/categories) documentation.
- After adding the configuration details, click the **Save** button.
- On the **UI Locations** tab, you can see the predefined app locations. You can use the toggle button corresponding to each UI location to enable or disable it based on your requirements.

  **Note**: The app requires at least one UI location to be enabled, otherwise you will not be able to save your app configuration settings.
- If the webhook is enabled for your app, you can view the webhook logs under the **Webhook** tab.

  **Additional Resource**: For more information on UI location and webhooks, please refer to the [Installed Apps](../marketplace-platform-guides/installed-apps.md#view-edit-configuration-ui-locations-and-webhook) guide.
- Click **Open Stack** to start using the BigCommerce application.

## Use BigCommerce within your Stack

To use the BigCommerce application within an entry of your stack, follow the steps given below:

Go to your stack and click the **Content Models** icon on the left navigation panel, and click the **+ New Content Type** button.

- Create a content type by adding relevant details as displayed below:

  **Note**: With the BigCommerce app, you can fetch products as well as product categories. To fetch both products and categories in an entry, we recommend you create two custom fields: one for products and another one for categories.
- In the Content Type Builder page, add a Custom field for product in your content type by clicking the **Insert a field** link represented by a **+** sign.
- Under **Select Extension/App**, select **BigCommerce - Product Field** and click **Proceed**.![Marketplace_BigCommerce_ProductField](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt24e85d5caabefb84/6597e3bbc4b620dc45fb8780/Marketplace_BigCommerce_ProductField.png)
- Add another Custom field for category in your content type by clicking the **Insert a field** link represented by a **+** sign.
- Under **Select Extension/App**, select **BigCommerce - Category Field** and click **Proceed**![Marketplace_BigCommerce_CategoryField](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1d6c7e1402e0e9b1/6597e3bbc3fb27354219eab5/Marketplace_BigCommerce_CategoryField.png)
- Under **Advanced** properties, you have the option to set the **Config Parameter** for all entries of a particular content type. If you do so, it overrides the default app configuration you set at the time of app installation on the Configuration screen.The **key:value** passed in the configuration object overrides the default app configuration settings.

  If you want to use a different BigCommerce configuration for any custom field within the same stack, you need to specify the configuration name in the Config Parameter as follows:

  **Configuration Object**:

  ```
  {
    "config_label": [
      "config2"
    ]
  }
  ```
- After adding the app, click **Save** or **Save and Close** to save your changes.
- In the left navigation panel, navigate to the **Entries** page and click **+ New Entry** to create a new entry for the above content type. And then click **Proceed**. You will see the BigCommerce custom fields on your entry page as shown below:![BigCommerce_Entry_Page](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt06e233c27ca51e3e/6597dc37c3fb27978f19ea88/BigCommerce_Entry_Page.png)
- With the latest app update, you can filter products and categories by **Channels**. To choose product(s) according to the **categories** or **channels**:
  - Select the option from the **Select Category** drop-down to segregate the products based on the categories.![BigCommerce_Select_Category.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt215a3b0464bb8e9c/6597dea44135c4402556a671/BigCommerce_Select_Category.png)
- Select the option from the **Select Channel** drop-down to segregate the products based on the channels.![BigCommerce_Select_Channel.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt64160fc03cfbb574/6597dea47d6d2e03c5b8e75a/BigCommerce_Select_Channel.png)
- Select the option from the **Select Channel** drop-down, then choose the preferred category from the **Select Category** drop-down for extensive filtering.![BigCommerce_Select_Channel_and_Category.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt139db65b5ab1db02/6597dea3a2c41f5b43db1f71/BigCommerce_Select_Channel_and_Category.png)
- Click the **Add Product(s)** button and select the products from your BigCommerce store to add them to your entry.![BigCommerce_Add_Products.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt385b360883f4c454/6597dc3790dcf2fc1a64810e/BigCommerce_Add_Products.png)
- Click the **Add Category(s)** button and select the categories from your BigCommerce store to add them to your entry.![BigCommerce_Add_Categories.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3f99ab99e8114b71/6597dc363ea36147465775ff/BigCommerce_Add_Categories.png)
- The products and categories you select are referenced within your entry. Finally, click **Save** to save your entry.![BigCommerce_Products_and_Categories.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt41449d59da25aa2f/6597dc37b6f924974abe2ab9/BigCommerce_Products_and_Categories.png)
- You can drag and drop the products to arrange them in required order in both **Thumbnail** and **List** views.
  - **Thumbnail View**: It displays the images, names and prices of the selected product.![BigCommerce_Thumbnail.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt28514ae047371f67/6597dc377d6d2e02ecb8e749/BigCommerce_Thumbnail.png)
- **List View**: Lists display the names and prices of the selected product.![BigCommerce_List.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0f27fed0ed3d19e8/6597dc372d26123b7ae75f6b/BigCommerce_List.png)
- Click the **Save** button to save your entry.You can view more product details in **Sidebar Widget**.

  **Note**: You must save your entry to get the product details in the Sidebar Widget.
- In the right navigation panel, select **Widgets** and then select **BigCommerce** to view the product details.![BigCommerce_Widget1.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt27c05eeea40a049a/6597dc37254effb9aa747a35/BigCommerce_Widget1.png)
- Enter the product name in the **Product** drop-down to search and view the product details.![BigCommerce_Widget2.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt70543ec868e2a05e/6597dc37b782f07ba1586237/BigCommerce_Widget2.png)

**Note**:

- If you delete a configuration with products and categories, and create a new one with the same label but different credentials, the original products and categories may not work correctly.
- For a deleted configuration, the associated products and categories are not removed from the entry, instead a warning icon is displayed on them.

## Common questions

### What credentials do I need from BigCommerce to configure the app?
You need the **API URL** and **access token** from your BigCommerce store API client.

### Can I add more than one BigCommerce configuration in Contentstack?
Yes, on the **Configuration** screen, you can add multiple configurations for BigCommerce.

### What happens if no UI locations are enabled?
The app requires at least one UI location to be enabled, otherwise you will not be able to save your app configuration settings.

### What should I know before deleting a configuration?
If you delete the **legacy_config** configuration, data loss may occur and you will not be able to access the products and categories from the related accounts, and for a deleted configuration, the associated products and categories are not removed from the entry, instead a warning icon is displayed on them.