---
title: "[Extensions] - commercetools"
description: Documentation for the commercetools extension to search and fetch products into Contentstack custom fields.
url: https://www.contentstack.com/docs/developers/create-custom-fields/commercetools
product: Contentstack
doc_type: integration-guide
audience:
  - developers
version: legacy-extensions
last_updated: 2026-03-26
---

# [Extensions] - commercetools

This page explains how to set up and use the legacy commercetools custom field extension in Contentstack to search, fetch, and store commercetools product (or category) data in entries. It is intended for developers configuring Contentstack stacks and content types, and should be used when implementing commercetools selection within a Custom field via extensions.

**Note**: This documentation uses the legacy approach with extensions. We have launched commercetools as a Marketplace App. For more information on commercetools, please refer to the [commercetools App Installation Guide](/docs/developers/marketplace-apps/commercetools).

The commercetools extension lets you search and fetch the products of your commercetools store and display them in a [field](/docs/developers/create-content-types/about-fields) in your [content type](/docs/developers/create-content-types/about-content-types). Thus, while creating [entries](/docs/content-managers/working-with-entries/about-entries) for this content type, you can select one of your store’s products as the input value for that field.

## Prerequisites
- [commercetools](https://commercetools.com/) account
- [Contentstack](https://app.contentstack.com/#!/stacks) account

This step-by-step guide explains how to create a **commercetools** custom field extension for your content types in Contentstack. The steps performed are as follows:
- [Retrieve your API client credentials](#retrieve-your-api-client-credentials)
- [Enable commercetools Search Functionality](#enable-commercetools-search-functionality)
- [Add the “commercetools” custom field extension to your stack](#add-the-commercetools-custom-field-extension-to-your-stack)
- [Use your custom field](#use-your-custom-field)
- [Use the data saved by the extension](#use-the-data-saved-by-the-extension)

## Retrieve your API client credentials

To use this extension, you will first need to retrieve the credentials of your commercetools store API client. The credentials include the **project key**, **client_id**, and **secret key** of your commercetools store API client.

**Note**: Also make a note of the auth_url, and project_key, as these will be required while setting up the commercetools extension.

**Additional Resource**: Refer to the [API Clients](https://docs.commercetools.com/merchant-center/api-clients#creating-an-api-client) and [HTTP APIs](https://docs.commercetools.com/api/authorization#requesting-an-access-token-using-commercetools-oauth-20-server) guides to learn how to generate these values.

While creating the API client to be used with this extension, make sure to select **Read only client **as the permission, as shown below.

**Additional Resource:** You can refer to the commercetools [documentation](https://docs.commercetools.com/api/authorization#requesting-an-access-token-using-commercetools-oauth-20-server) for more details.

The commercetools platform API is provided in five different regions, with different API URLs for each region. Follow the steps below to find your region and the corresponding API URL.

Navigate to the [**Regions**](https://docs.commercetools.com/api/general-concepts#regions) section in the commercetools documentation.
- Under the **Hosts **section, a list fo regions and URLs is presented. Note down the appropriate **API URL** of your region. We will be using this URL as a config param while setting up the extension in Contentstack, to fetch data from your commercetools project.For example, If your region is North America than your API URL is https://api.us-central1.gcp.commercetools.com/

Please note these keys as you need to use them to configure your commercetools store in **Step 3**.

**Note**: For the commercetools extension to work, you need to have a configured[commercetools](https://commercetools.com/)account.

## Enable commercetools Search Functionality

The search functionality in commercetools allows you to search and fetch products from your commercetools account into Contentstack.
Follow the steps below to enable the search functionality in commmercetools.

Navigate to commercetools **Project settings **page, and goto the **Storefront search **section.
- Under the **Indexing **option, enable the **Index status **button. This will allow you to search products from your commercetools account in Contenstack extension.

**Note**: By default, the **Storefront search Indexing **option is** **deactivated. Without activating the **Index status **you won't be able to search products in your commercetools extension. Read more about [Storefront search configuration](https://docs.commercetools.com/merchant-center/releases/2021-03-03-added-settings-for-storefront-search-configuration) in commercetools.

**Note**: Based on the number of products added to your commercetools project, index status may take some time to be activated.

## Add the “commercetools” custom field extension to your stack

To add this extension to your stack, perform the following steps:

Go to your [stack](/docs/developers/set-up-stack/about-stack), navigate to the “Settings” gear icon, and select **Extensions**. You can also use the shortcut keys “alt + X” for Windows OS users, and “option + X” for Mac OS users to access the extensions menu.
- On the **Extensions **page, click on the **+ Add Extension **button, and select **Create new**. If you have not added any extensions in the stack yet, click on the **create a new one **link as shown below.
- In the **Select Extension Type** window, select **Custom Field**.
- On the **Create New Extension **page, enter values in the fields as given below:

  **Title ***(required)*: Provide a suitable title, for example, “commercetools,” for your custom field. This title will be visible when you select the extension in the [**Custom**](/docs/developers/create-content-types/custom) field in your content type.
- **Field Data Type ***(required)*: Select the data type in which the input data of the field should be saved in Contentstack. In this case, select **JSON**.
- **Multiple ***(optional)*: Leave this field unchecked.
- **Hosting Method ***(required)*: Select **Hosted by Contentstack** as the hosting method for this content type.
- **Extension Source Code**: Specify the extension code here. If Extensions are part of your plan, contact our [Support](mailto:support@contentstack.com) team to get the code for the extension. The support team will provide you with the source code (src file). Copy the code from the `index.html` file located in the root folder and paste it into the **Extension source code** field.

  **Note**: In the downloaded code, inside the root folder, there's a redirect HTML file. Upload this file as an asset in Contentstack by following the steps mentioned in the [Create/Upload](/docs/content-managers/working-with-assets/create-upload-assets) asset article. After uploading the file, you'll get a URL in the [asset details](/docs/content-managers/working-with-assets/create-upload-assets#asset-details) section. Make note of this URL.
- **Config Parameter: **Provide values for the config parameters. Enter the configuration details retrieved in Step 1 in your extension settings.
Please note we have added sample values in the example below to help you understand the config parameters. Copy and paste the configuration details and add your values wherever needed.

```
{
    "navigator_url": >,
    "api_url": ">",
    "auth_url": ">",
    "type": "product_single",
    "page_count": "20",
    "project_key": ">",
    "client_id": ">",
    "client_secret": ">",
    "locale": ">",
    "redirect_url": ">"
}
```

- "navigator_url": Add the the address URL of your browser as the navigator URL, to directly navigate you to the commercetools category or product section after you **login**.
- "api_url": Add your API URL here. For eg. “api.us-central1.gcp.commercetools.com".
- "auth_url": Add AUTH URL here. For eg. “api.us-central1.gcp.commercetools.com".
- "type": Enter product type value. For eg. "product_single" (to select a single product from the available list of products using a radio button), "product_multiple" (to select more than one item from the available list), and "category"( to select item category).
- "page_count": Use the "page_count" key to control the number of items listed.
- "client_id": Add your client ID here,
- "client_secret": Add your client secret access key here.
- "locale": Add locale in this format “en-US”/”de-DE”.
- "redirect_url": The value of the "redirect_url" key is the URL of the HTML file that you uploaded as an asset in Contentstack.
- **Save** the custom field.
- Now, let’s understand how you can start using this custom field in your content type.

## Use your custom field

Once you have added a custom field, you can use it in your content type like any other field. To add a custom field in your content type, perform the following steps:

[Create a content type](/docs/developers/create-content-types/create-a-content-type) and add the [**Custom**](/docs/developers/create-content-types/custom) field to it.
- Under **Select Extension**, select the “commercetools” field that you created and set the other properties. You can add other fields as per requirement.
- Finally, click on either **Save** or **Save and Close** to save your changes.
- Next, [create an entry](/docs/content-managers/working-with-entries/create-an-entry) for this content type, and you will see the **commercetools **field in action.

**Note**: The number of items that can be selected depends on the size of the JSON that is to be stored, and currently, only 10 KB of data can be stored. This is due to the limitation of the JSON data stored via Custom Field. Refer to our [Custom Field Limitation](/docs/developers/create-custom-fields/limitations-of-custom-fields) doc for more detail.

## Use the data saved by the extension

This extension will embed the details of the selected product as JSON in an entry. That means we can save the details of the selected product as JSON. You can then use this data and display it on your presentation layer as per your requirement.

As shown in the image above, the extension-data.js file can be used to modify the extension data. By default, the ID gets saved for products and/or categories. However, you can update the file to save other details of the products or categories, as shown in the image below.

**Additional Resource**: Refer our detailed guide on how to [create an e-commerce app using Contentstack and commercetools](/docs/developers/sample-apps/build-an-e-commerce-website-using-contentstack-and-commercetools).

## Common questions

### Is this the recommended way to integrate commercetools with Contentstack?
No. **Note**: This documentation uses the legacy approach with extensions. We have launched commercetools as a Marketplace App. For more information on commercetools, please refer to the [commercetools App Installation Guide](/docs/developers/marketplace-apps/commercetools).

### What data type should the custom field use for this extension?
**Field Data Type ***(required)*: Select the data type in which the input data of the field should be saved in Contentstack. In this case, select **JSON**.

### Why can’t I search products in the commercetools extension?
**Note**: By default, the **Storefront search Indexing **option is** **deactivated. Without activating the **Index status **you won't be able to search products in your commercetools extension.

### How much data can be stored in the JSON custom field?
**Note**: The number of items that can be selected depends on the size of the JSON that is to be stored, and currently, only 10 KB of data can be stored. This is due to the limitation of the JSON data stored via Custom Field. Refer to our [Custom Field Limitation](/docs/developers/create-custom-fields/limitations-of-custom-fields) doc for more detail.