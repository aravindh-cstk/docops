---
title: "[Marketplace guides and apps] - commercetools App Installation Guide"
description: commercetools App Installation Guide
url: https://www.contentstack.com/docs/developers/marketplace-apps/commercetools
product: Contentstack Marketplace
doc_type: marketplace-app-guide
audience:
  - developers
version: v1
last_updated: 2026-03-25
---

# [Marketplace guides and apps] - commercetools App Installation Guide

This page explains how to install and configure the commercetools app from the Contentstack Marketplace and how to use its Product and Category fields inside your stack entries. It is intended for Contentstack stack owners/admins and commercetools project users who need to connect commercetools products/categories to Contentstack content.

## commercetools App Installation Guide

commercetools is a leading digital commerce platform that allows you to create powerful, highly customized commerce experiences while building a profitable, sustainable brand.

With Marketplace, you can easily install the commercetools app and use it in your entry to refer to products or product categories from commercetools in your entries.

## Prerequisites
- [commercetools account](https://mc.commercetools.com/)
- Access to Project in commercetools
- Access to create API clients in commercetools
- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization/Stack as the [Owner](/docs/developers/invite-users-and-assign-roles/types-of-roles#owner)/[Admin](/docs/developers/invite-users-and-assign-roles/types-of-roles#admin)

This step-by-step guide explains how to install and configure commercetools in your stack.

## Steps for Execution
- [Create a New commercetools API Client](#create-a-new-commercetools-api-client)
- [Install and Configure commercetools in Marketplace](#install-and-configure-commercetools-in-marketplace)
- [Use the commercetools app within your Stack](#use-the-commercetools-app-within-your-stack)

## Create a New commercetools API Client

Log in to your account at the [commercetools Merchant Center](https://mc.commercetools.com/) and select your project.
- On the sidebar, click **Settings **and select **Developer settings**.
- Click **Create new API client**.
- Give a suitable name and select the scopes as shown below from the view section and then click the **Create API client **button.
- Store the generated **project key**, **client ID**, and **client secret**, since you will need them to configure the app in Contentstack in [step 2](#install-and-configure-commercetools-in-marketplace).**Note**: Refer to the [commercetools Composable Commerce Regions](https://docs.commercetools.com/docs/login) page to know the region of your commercetools account. You can check the locale you use to specify the search locale in config field locales through **Settings > Project settings > Languages Section**.

## Install and Configure commercetools in Marketplace

To install the app in Contentstack, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps below:

From the left-hand side primary navigation, click the **Marketplace** icon.
- Click **Apps** from the left panel.
- Within the Marketplace, you can see all available apps. Hover over the **commercetools** app and click **Install**.
- In the pop-up window, select the stack where you want to install the commercetools app, accept the **Terms of Service**, and click the **Install** button.
- On the **Configuration** screen, you can add multiple configurations for commercetools. To do this, follow the steps given below:
  - Click the **+ New Configuration** button to add new configuration details.
- In the **Add Configuration** modal, enter the configuration **Name** and click **Add**.
- After adding the configuration, enter the following details:
  - Select the **Region**, enter the **Project Key**, **Client ID**, and **Client Secret** retrieved from your commercetools Account in [step 1](#create-a-new-commercetools-api-client).
- Now, select the **Default Locale** value and **Default Currency** value from the respective dropdowns.
- **Set as Default**: To set this configuration as the default, click this checkbox.
  - Alternatively, you can set a configuration as the default by clicking the three dots on the top-right side of the configuration section and then selecting **Set as Default**.

  **Note**: At least one app configuration should be selected as the default.

  Similarly, you can add multiple configurations by following the steps discussed above.
- To delete the configuration, click the three dots and select **Delete**.
  - In the **Confirm Deletion** modal, add the configuration name and click **Delete**.
- For an existing user, the credentials will be added as the default configuration, and named as **legacy_config**.

  **Warning**:

  **legacy_config** is a reserved keyword and you cannot use it in adding new configurations.
- If you delete the **legacy_config** configuration, data loss may occur and you will not be able to access the products and categories from the related accounts.
- **Choose commercetools Keys to Save in Entry**: Choose how to save the data fetched from the commercetools account in Contentstack entries.
  - If you select the **Only ID** option, you can select only ID of products in the entry.**Note**: The **Only ID** option does not support multi configuration.
- If you select the **All Fields** option, you can select only a limited number of products in the entry.
- For **Custom Fields**, you can search and add specific commercetools Fields you want to save in entries.

  If you select **Custom Fields** then the **commercetools Keys** drop-down appears. By default, **id** and **name** keys are already selected. If you want to create a new key, click the **+ New Key Field** option.

  In the **Add commercetools Key Field** modal, enter the **Key Name or Path** and click the **Create** button to create a new key.
- You can also configure the view column settings to customize the product and category list views by selecting which columns to display based on your requirements.
  - **Product List View Columns**: Select the product attributes you want to display in the list view from the **Product List View Columns** drop down. By default, **name**, **masterVariant.images.[0].url**, and **masterVariant.prices** keys are already selected. If you want to create a new key, click the **+ New Key Field** option.
    - In the **Add commercetools Key Field** modal, enter the **Key Name or Path** and click the **Create** button to create a new key.
- **Category List View Columns**: Select the category attributes you want to display in the list view from the **Category List View Columns** drop down. By default, **key** and **name** keys are already selected. If you want to create a new key, click the **+ New Key Field** option.
  - In the **Add commercetools Key Field** modal, enter the **Key Name or Path** and click the **Create** button to create a new key.
- Click the **Save** button.
- On the **UI Locations** tab, you can see the predefined app locations. You can use the toggle button corresponding to each UI location to enable or disable it based on your requirements.
  **Note**: The app requires at least one UI location to be enabled, otherwise you will not be able to save your app configuration settings.
- If the webhook is enabled for your app, you can view the webhook logs under the **Webhook** tab.**Additional Resource**: For more information on UI location and webhooks, please refer to the [Installed Apps](/docs/developers/marketplace-platform-guides/installed-apps#view-edit-configuration-ui-locations-and-webhook) guide.
- Click **Open Stack** to start using the commercetools app.

## Use the commercetools App within your Stack

To use the commercetools app within an entry of your stack, follow the steps given below:

Go to your stack and click the **Content Models** + New Content Type button.
- Create a content type by adding relevant details as displayed below:
- In the **Content Type Builder** page, add a custom field for Product in your content type by clicking the **Insert a field **link represented by a **+** sign.
- Under **Select Extension/App**, select **commercetools - Product Field, **and then click the **Proceed** button.
  This adds commercetools - Product Field in the custom field.
- Add another custom field for Category in your content type by clicking the **Insert a field** link represented by a **+** sign.
- Under **Select Extension/App**, select **commercetools - Category Field**, and then click the **Proceed** button.
  This adds commercetools - Category Field in the custom field.
- After adding the custom fields for the app, click **Save** or **Save and Close** to save your changes.
- Under **Advanced** properties, you have the option to set the **Config Parameter** for all entries of a particular content type. If you do so, it overrides the default app configuration you set at the time of app installation on the Configuration screen.The `key:value` passed in the configuration object overrides the default app configuration settings.

  If you want to use a different commercetools configuration for any custom field within the same stack, you need to specify the configuration name in the Config Parameter as follows:

  **Configuration Object**:

```
{
  "config_label": [
    "config2"
  ]
}
```

  `**Locale**`** Based Configuration Object**: To add a `locale`-based configuration, add a `locale` parameter to the additional configuration object which specifies the `locale` value (for example: en-us) as the object key and the configuration object as the value to the `locale`.

  `**locale**`** Configuration Object**:

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

  **Note**: If any configuration value is not added, or if all the values are empty in the **Config Parameter** properties settings, the commercetools app uses the default configuration which was set up in [step 2](#install-and-configure-commercetools-in-marketplace).
- After adding the custom fields for the app, click **Save** or **Save and Close** to save your changes.
- To use the commercetools app, create an entry for this content type. In the left navigation panel, navigate to the Entries page, click **+ New Entry** to create a new entry for the above content type, and then click **Proceed**.You can see the commercetools app’s custom fields on your entry page as shown below:
- Click the **+ Add Product(s)** button to choose the product(s).
- Select the product(s) from your commercetools selector page and click **+ Add Product(s)** to add them to your entry.
  You can select the products from multiple configurations at once using the **Configuration** drop-down.

  You can also search for products in the commercetools selector page based on the product name.

  Hover over the product on the commercetools selector page, and you can see the **View in commercetools** option to go directly to the commercetools platform.

  After adding the products, you can click **Show Selected** to view all the added products.

  The products you selected are referenced within your entry in the thumbnail view.

  Select the list view option from the dropdown to view the products in the list view.

  The products you selected are referenced within your entry in the list view.
- To reorder, open in commercetools, or delete the selected product, hover over the product to get the available options, then perform the following:
  - Click the **Reorder** icon to drag and reorder the product.
- Click the **Open in commercetools** icon to open the product in the commercetools app.
- Click the **Delete** icon to delete the product.

  **Thumbnail View**

  **List View**
- Click the **Save** button to save your entry. You can view more product details in the Sidebar Widget.**Note**: You must first save your entry to get the product details in the Sidebar Widget.
- In the right navigation panel, select **Widgets**, select **commercetools**, and then select the product to view the product details. By default, the Sidebar Widget displays the details of the first product added in the custom field.
- You can also search for products by typing the product name in the dropdown and view the product details. Click the **Product** dropdown to view the Search bar, type the name of the product, and then click the preferred product to view the details.
- Click the **+ Add Category(s)** button to choose the category(s).
- Select the category(s) from your commercetools selector page and click the **+ Add Category(s)** button to add them to your entry.
  You can select the categories from multiple configurations at once using the **Configuration** drop-down.

  You can also search and filter categories in the commercetools selector page using a full-text search based on the Category Name.

  Hover over the category on the commercetools selector page, and you can see the **View in commercetools** option to go directly to the commercetools platform.

  After adding the categories, you can click **Show Selected** to view all the added categories.

  The category(s) you selected are referenced within your entry.
- To edit, or delete the selected category, hover over the category to get the available options, then perform the following:
  - Click the **Edit** icon to edit the category.
- Click the **Delete** icon to delete the category.
- After adding the category(s), **Save** and **Publish** your entry.

**Note**:
- If you delete a configuration with products and categories, and create a new one with the same label but different credentials, the original products and categories may not work correctly.
- For a deleted configuration, the associated products and categories are not removed from the entry, instead a warning icon is displayed on them.

## Common questions

### Do I need to set a default configuration?
Yes. **Note**: At least one app configuration should be selected as the default.

### What happens if I delete the legacy_config configuration?
If you delete the **legacy_config** configuration, data loss may occur and you will not be able to access the products and categories from the related accounts.

### Can I use multiple commercetools configurations in the selector?
Yes. You can select the products or categories from multiple configurations at once using the **Configuration** drop-down.

### Why can’t I save the app configuration?
**Note**: The app requires at least one UI location to be enabled, otherwise you will not be able to save your app configuration settings.