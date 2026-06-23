---
title: "[Marketplace guides and apps] - SAP Commerce Cloud App Installation Guide"
description: SAP Commerce Cloud App Installation Guide
url: https://www.contentstack.com/docs/marketplace/sap-commerce-cloud
product: Contentstack Marketplace
doc_type: marketplace-app-guide
audience:
  - developers
  - admins
version: current
last_updated: 2026-03-25
---

# [Marketplace guides and apps] - SAP Commerce Cloud App Installation Guide

This page explains how to install and configure the SAP Commerce Cloud app from the Contentstack Marketplace and how to use it inside a stack (content types and entries). It is intended for Contentstack stack owners/admins and developers integrating SAP Commerce Cloud products and categories into Contentstack entries.

## SAP Commerce Cloud App Installation Guide

SAP Commerce Cloud is one of the most flexible and efficient eCommerce project development platforms, specifically for B2B businesses and retailers. Using SAP Commerce Cloud, businesses can adapt to various demands and reduce their dependency on different application modules. It allows you to set up an online store to sell your products.

With the Contentstack Marketplace SAP Commerce Cloud app, you can use and refer to the products and categories from your SAP Commerce Cloud account within your Contentstack entries.

## Prerequisites

- [SAP Commerce Cloud account](https://accounts.sap.com/)
- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization/Stack as the Owner/Admin

Let’s follow this step-by-step guide to install and configure the SAP Commerce Cloud app within your stack.

## Steps for Execution

- [Retrieve configuration details for SAP Commerce Cloud](#retrieve-configuration-details-for-sap-commerce-cloud)
- [Install and configure the SAP Commerce Cloud app in Marketplace](#install-and-configure-the-sap-commerce-cloud-app-in-marketplace)
- [Use the SAP Commerce Cloud app within your stack](#use-the-sap-commerce-cloud-app-within-your-stack)

## Retrieve Configuration Details for SAP Commerce Cloud

To get your configuration details for SAP Commerce Cloud, follow the steps given below:

Log in to the [SAP Cloud Portal](https://portal.commerce.ondemand.com/) using your SAP Commerce Cloud account credentials.

- Click **Environments** in the left panel, then click the environment for which you want to retrieve the configuration details.
- Copy the **API** and **Backoffice** URLs. You will use them during app configuration in [step 2](#install-and-configure-the-sap-commerce-cloud-app-in-marketplace).
- To retrieve the **Base Site ID**, follow the steps below:Click the **Backoffice** URL, then log in using your SAP Commerce Cloud account credentials.
- Under **Base Commerce**, in the left panel, click **Base Store**.
- Click **Base Site** for which you want to retrieve theBase Site ID.

You can find the Base Site ID under the **PROPERTIES** section.

## Install and Configure the SAP Commerce Cloud App in Marketplace

To install the app, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps below:

In the left-hand side primary navigation, click the **Marketplace** icon.

- Click **Apps** from the left panel.
- Within the Marketplace, you can see the available apps. Hover over the **SAP Commerce Cloud** app and click **Install**.
- In the pop-up window, select the stack where you want to install the SAP Commerce Cloud app, accept the **Terms of Service** and click the **Install** button.
- On the **Configuration **screen, you can add multiple configurations for SAP Commerce Cloud. To do so, follow the steps given below:Click the **+ New Configuration** button to add new configuration details.
- In the **Add Configuration** modal, enter the configuration **Name** and click **Add**.
- After adding the configuration, enter the following details:**SAP URL Structure**: Choose the type of URL you want to use in your configuration.For **OCC URL** (Omni Commerce Connect URL): You can provide the **API Base URL** retrieved from the SAP Commerce Cloud dashboard.
- For **Custom URL**: If you are not using OCC URL (Omni Commerce Connect URL) from the SAP Commerce Cloud, you can select Custom URL and provide the respective **API Base URL** and **API Route**.

**Note**: Please choose Custom URL if the URL does not start with `https://your-base-url/occ/v2`.

- Enter the **API Base URL** and **API Route** retrieved from [step 1](#retrieve-configuration-details-for-sap-commerce-cloud).**Note**: Enter the URL starting from `api`.
- Enter the **Base Site ID** and **Backoffice URL** retrieved from [step 1](#retrieve-configuration-details-for-sap-commerce-cloud).
- **Set as Default**: To set this configuration as the default, click this checkbox.Alternatively, you can set a configuration as the default by clicking the horizontal ellipses on the top-right side of the configuration section and then selecting **Set as Default**.

**Note**: At least one app configuration should be selected as the default.

Similarly, you can add multiple configurations by following the steps discussed above.

- To delete the configuration, click the horizontal ellipses and select **Delete Configuration**.In the **Confirm Deletion** modal, add the configuration name and click **Delete.**
- For an existing user, the credentials will be added as the default configuration, and named as **legacy_config**.**Warning**:

**legacy_config** is a reserved keyword and you cannot use it in adding new configurations.

- If you delete the **legacy_config** configuration, data loss may occur and you will not be able to access the products and categories from the related accounts.
- **Choose the SAP Commerce Cloud Keys to Save in Entry**: Choose how to save the data fetched from the SAP Commerce Cloud account in Contentstack entries.If you select the All Fields option, you can select only a limited number of products in the entry.
- For **Custom Fields**, you can search and add specific SAP Commerce Cloud Fields you want to save in entries.

If you select **Custom Fields** then the **SAP Commerce Cloud Keys** dropdown appears. By default, **code** and **name** keys are already selected. If you want to create a new key, click the **+ New Key Field** option.

In the **Add SAP Commerce Cloud Key Field** modal, enter the **Key Name or Path** and click the **Create** button to create a new key.

- After adding the configuration details, click the **Save** button.
- On the **UI Locations** tab, you can see the predefined app locations. You can use the toggle button corresponding to each UI location to enable or disable it based on your requirements.**Note**: The app requires at least one UI location to be enabled; otherwise, you would not be able to save your app configuration settings.
- If the webhook is enabled for your app, you can view the webhook logs under the **Webhook** tab.**Additional Resource**: For more information on UI location and webhooks, please refer to the [Installed Apps](../marketplace-platform-guides/installed-apps.md#view-edit-configuration-ui-locations-and-webhook) guide.
- Click **Open Stack** to start using the SAP Commerce Cloud app.

## Use the SAP Commerce Cloud App within your Stack

To use the SAP Commerce Cloud app within an entry of your stack, follow the steps given below:

Go to your stack, click the **Content Models** icon in the left navigation panel, and click the **+ New Content Type** button.

- Create a content type by adding relevant details as displayed below:
- In the **Content Type Builder** page, add a [Custom](../create-content-types/custom.md) field for product in your content type by clicking the **Insert a field** link represented by a **+** sign.
- Under **Select Extension or App**, select **SAP Commerce Cloud - Product** and click **Proceed**.This adds SAP Commerce Cloud - Product Field in the custom field.
- Add another [Custom](../create-content-types/custom.md) field for category in your content type by clicking the **Insert a field **link represented by a **+** sign.
- Under **Select Extension or App**, select **SAP Commerce Cloud - Category** and click **Proceed**.This adds SAP Commerce Cloud - Category Field in the custom field.
- Under **Advanced** properties, you have the option to set the **Config Parameter** for all entries of a particular content type. If you do so, it overrides the default app configuration that you set at the time of app installation on the Configuration screen.The `key:value` passed in the configuration object overrides the default app configuration settings.

In case you want to use a different SAP Commerce Cloud configuration for any custom field within the same stack, you need to specify the configuration name in the Config Parameter.

**Configuration Object:**

```
{
 "config_label": [
	"Configuration-2"
   ]
}
```

`**Locale**`** Based Configuration Object**: To add a `locale`-based configuration, add a `locale` parameter to the additional configuration object which specifies the `locale` value (for example: en-us) as the object key and the configuration object as the value to the `locale`.

`**locale**`** Configuration Object:**

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

**Note**: If any configuration value is not added, or if all the values are empty in the **Config Parameter** properties settings, the SAP Commerce Cloud app uses the default configuration which was set up in [step 2](#install-and-configure-the-sap-commerce-cloud-app-in-marketplace).

- After adding the app, click **Save** or **Save and Close** to save your changes.
- In the left navigation panel, navigate to the **Entries** page and click **+ New Entry** to [create an entry](../../content-managers/author-content/create-an-entry.md) for the above content type, and then click **Proceed**.You will see the SAP Commerce Cloud custom fields on your entry page as shown below:
- Click the **Add Product(s)** button, select the products from your SAP Commerce Cloud store and add them to your entry.Select the products from your SAP Commerce Cloud selector page and click **+ Add Product(s)** to add them to your entry.

You can select the products from multiple configurations at once using the **Configuration** dropdown.

You can also search for products in the SAP Commerce Cloud selector page based on the product name.

Hover over the product on the SAP Commerce Cloud selector page, and you can see the **View in SAP Commerce Cloud** option to go directly to the SAP Commerce Cloud store.

The products you selected are referenced within your entry in the thumbnail view:

To view the products in list view, select the **List** view option from the dropdown as given below:

The products you selected are referenced within your entry in the list view:

- To reorder, open in SAP Commerce Cloud, or delete the selected product, hover over the product and perform the following:Click the **Drag** icon to drag and reorder the product.
- Click the **Open in SAP Commerce Cloud** icon to open the product in the SAP Commerce Cloud app.
- Click the **Remove** icon to delete the product.

**Thumbnail View**

**List View**

- Click the **Save** button to save your entry.You can view more product details in the Sidebar Widget.

**Note**: You must save your entry to get the product details in the Sidebar Widget.

- In the right navigation panel, select **Apps**, and then select **SAP Commerce Cloud** to view the product details.
- Enter the product name in the dropdown to search and view the product details.
- Click the **Add Category(s)** button, select the categories from your SAP Commerce Cloud store and add them to your entry.Select the categories from your SAP Commerce Cloud selector page and click **+ Add Category(s)** to add them to your entry.

You can select the categories from multiple configurations at once using the **Configuration** dropdown.

Hover over the category on the SAP Commerce Cloud selector page, and you can see the **View in SAP Commerce Cloud** option to go directly to the SAP Commerce Cloud store.

The categories you selected get referenced within your entry.

- To remove the selected category, hover over the category and click the **Remove** icon.
- After adding the category(s), **Save** and **Publish** your entry.

## Common questions

**Q: What URLs do I need from SAP Commerce Cloud to configure the app?**  
A: Copy the **API** and **Backoffice** URLs from the SAP Cloud Portal environment, and retrieve the **Base Site ID** from Backoffice.

**Q: Can I add multiple SAP Commerce Cloud configurations in one stack?**  
A: Yes, on the **Configuration** screen you can add multiple configurations and set at least one as the default.

**Q: What happens if no UI location is enabled?**  
A: The app requires at least one UI location to be enabled; otherwise, you would not be able to save your app configuration settings.

**Q: How do I use a different configuration for a specific content type or locale?**  
A: Use the **Config Parameter** under **Advanced** properties and pass a configuration object (including optional `locale` configuration) to override the default app configuration.