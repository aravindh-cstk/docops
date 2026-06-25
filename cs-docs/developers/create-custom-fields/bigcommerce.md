---
title: "[Extensions] - BigCommerce"
description: Create a BigCommerce custom field extension for Contentstack to search and fetch products/categories and use them in entries.
url: https://www.contentstack.com/docs/developers/create-custom-fields/bigcommerce
product: Contentstack
doc_type: developer-guide
audience:
  - developers
version: legacy-extensions
last_updated: 2026-03-26
---

# [Extensions] - BigCommerce

This page explains how to create and configure a legacy BigCommerce custom field extension in Contentstack using AWS Lambda and API Gateway, intended for developers who need to integrate BigCommerce product/category selection into entry creation via a custom field.

## BigCommerce

**Note**: This documentation uses the legacy approach with extensions. We have launched BigCommerce as a Marketplace App and Automate Connector. For more information on BigCommerce, please refer to the [BigCommerce App Installation Guide](../marketplace-apps/bigcommerce.md) for Marketplace and [BigCommerce Connector](/docs/developers/automation-hub-connectors/bigcommerce/) documentation for Automate.

The BigCommerce extension lets you search and fetch the products of your BigCommerce store and display them in your [entry](../../content-managers/author-content/about-entries.md) page via a [custom field](./about-custom-fields.md). Thus, while creating [entries](../../content-managers/author-content/about-entries.md) for this content type, you can select a single/ multiple products or categories of your store as the input value for that field.

## Prerequisites

- [BigCommerce account](https://login.bigcommerce.com/login)
- [Contentstack account](https://app.contentstack.com/#!/login)
- Access to AWS environment
- [Working knowledge of AWS lambda and AWS API Gateways](https://docs.aws.amazon.com/lambda/latest/dg/services-apigateway.html)

This step-by-step guide explains how to create a **BigCommerce** custom field extension for your [content types](../create-content-types/about-content-types.md) in Contentstack.

## Steps for Execution

- [Retrieve your API client credentials from BigCommerce](#retrieve-your-api-client-credentials-from-bigcommerce)
- [Set up a lambda function and an API Gateway trigger](#set-up-a-lambda-function-and-an-api-gateway-trigger)
- [Add the “BigCommerce” custom field extension to your stack](#add-the-bigcommerce-custom-field-extension-to-your-stack)
- [Use the custom field](#use-the-custom-field)

## Retrieve your API client credentials

In order to use this extension, firstly login to your [BigCommerce account](https://login.bigcommerce.com/login). Now, you need to [retrieve the API client credentials](https://developer.bigcommerce.com/api-docs/getting-started/authentication/rest-api-authentication#obtaining-store-api-credentials#obtaining-store-api-credentials) of your BigCommerce store. The credentials include the **API Path URL** and **access token** of your BigCommerce store API client.

**Note**: Make note of the API URL and access token as these will be required while configuring the parameters and setting up the lambda function.

While making an API account to be used with the extension, make sure to select **Product read-only **as the permission as shown below.

**Additional Resource:** Refer to the [Authenticating BigCommerce’s REST APIs](https://developer.bigcommerce.com/api-docs/getting-started/authentication/rest-api-authentication#obtaining-store-api-credentials#obtaining-store-api-credentials) page to get the required API credentials.

## Set up a Lambda Function and an API Gateway Trigger

In this guide, we use an AWS Lambda Function and API Gateway that triggers the BigCommerce extension we create in our content type. To do this, perform the following steps:

Log in to your [AWS Management Console](https://signin.aws.amazon.com/signin?redirect_uri=https%3A%2F%2Fconsole.aws.amazon.com%2Fconsole%2Fhome%3Fstate%3DhashArgs%2523%26isauthcode%3Dtrue&client_id=arn%3Aaws%3Aiam%3A%3A015428540659%3Auser%2Fhomepage&forceMobileApp=0&code_challenge=eIfp5rbZe_3p9Tw2Tehn2bXwi6w4tXUzcpFAuPKGhU4&code_challenge_method=SHA-256), select** Lambda **from the **Service** list.

- Click on the **Create function** button, and then the **Author from Scratch** option.
- Provide a name to your lambda function inside the **Function name** field, select **Node.js 14.x **or any other version of Node as your **Runtime** language, and click on the **Create function** button.
- For this exercise, we have created a sample code that will help you set up the system. If Extensions are part of your plan, contact our [Support](mailto:support@contentstack.com) team to get the code for the extension.

**Note**: The support team will provide you a file that contains the BigCommerce lambda function code, the extension source code and a redirect.html file.

- Once you download the code, upload the BigCommerce lambda file (as a zip file) by scrolling down to the **Actions** dropdown (in the **Function code** section) and selecting **Upload a .zip file.**
- Keep **Handler** as **index.handler** and click on **Save**.
- Now scroll up and click on **Configurations**, go to the **Environment variables** section and add the following variables to it by clicking on **Edit** and then **Add environment variable**.
- Next, set **Environment variables** for your lambda function as follows:
- **Save** your settings.
- Your lambda function is now ready. Scroll up to the **Designer** section and click on **+ Add trigger**.
- On the **Add trigger** screen, from the **Select a trigger** dropdown, select **API Gateway**.
- Select **Create an API**, from the **API** dropdown. Then, select **REST API** inside the **API type** block, select **Open** from the **Security** dropdown, and click on **Add**.
- An API is created for your lambda function. Under the **Designer **block, click on **API Gateway**. Click on **Details** and you will find your **API endpoint**. Make a note of it as we will need it while setting up the BigCommerce extension in Contentstack.
- Lastly, [Enable CORS](https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-cors-console.html) in Amazon API Gateway console. It is mandatory for successful implementation of this extension.

## Add the “BigCommerce” Custom Field Extension to your Stack

To add this extension to your stack, log in to your [Contentstack account](https://app.contentstack.com/#!/stacks), go to your [stack](../set-up-stack/about-stack.md), and perform the following steps:

Click the “Settings” icon on the left navigation panel.

- Select **Extensions**. You can also use the shortcut keys “alt + X” for Windows OS users, and “option + X” for Mac OS users to access the extensions menu.
- Now, click on the **+ New Extension** button, and select **Create new**.
- In the **Select Extension Type** window, select **Custom Field**.
- On the **Create New Extension **page, enter values in the fields as given below:**Title ***(required)*: Provide a suitable title, for example, “BigCommerce,” for your custom field. This title will be visible when you select the extension in the [**Custom**](../create-content-types/custom.md) field in your content type.
- **Field Data Type ***(required)*: Select the data type in which the input data of the field should be saved in Contentstack. In this case, select **JSON**.
- **Multiple ***(optional)*: Leave this field unchecked.
- **Hosting Method ***(required)*: Select **Hosted by Contentstack** as the hosting method for this content type.
- **Extension Source Code**: Specify the extension code here. Copy the source code from the index.html file located in the root folder that you get from our [Support](mailto:support@contentstack.com)team, and paste it into the **Extension source code** field.

**Note**: The root folder contains a redirect HTML file. Upload this file as an asset in Contentstack by following the steps mentioned in the [Create/Upload](../../content-managers/author-content/create-upload-assets.md) asset article. After uploading the file, you'll get a URL in the [asset details](../../content-managers/author-content/create-upload-assets.md#asset-details) section, make note of this URL.

- **Config Parameter**: Provide values for the config parameters.

```
{
"url": " ",
"type": " ",
"page_count": " ",
"store_id": " ",
"redirect_url": " "
}
```

Enter the configuration details in your extension settings as follows:

- "url": Enter the lambda API endpoint URL that we got in [Step 2](#set-up-a-lambda-function-and-an-api-gateway-trigger).
- "type": This key can have different values such as "category"( to select item category), "product_single" (to select a single product from the available list of products using a radio button) or "product_multiple" (to select more than one item from the available list).
- "page_count": This key allows you to control the number of items listed.
- "store_id": Enter the Store Hash value that we generated in [**Step 1**](#retrieve-your-api-client-credentials-from-bigcommerce). The API PATH URL consists of the store hash value: https://api.bigcommerce.com/stores/<<STOREHASH>>/v3
- "redirect_url": The value for redirect_url is the URL of the redirect HTML file which you uploaded as an asset.
- **Save** the custom field.

## Use the Custom Field

Once you have added a custom field, you can use it in your content type. To add a custom field in your content type, follow the steps below:

Click on the “Content Models” icon on the left navigation panel.

- Click on the **+ New Content Type** button, enter the required details, and click **Proceed**.
- Click on the “Insert a field” link (**+** sign), and add the [**Custom**](../create-content-types/custom.md) field to it.
- Under **Select Extension** drop-down menu in **Basic** properties, select the “BigCommerce” extension field that you created.
- Finally, click on **Save and Close**.
- Now create an entry for this content type, and you will see the **BigCommerce **custom field in action.
- Click on the **Add Products **button to add products of your choice to the custom field.
- Select the products of your choice and click on the **Add Product(s)** button.
- Finally, click on the **Save** button to save your entry.

**Note**: The number of items that can be selected depends on the size of the JSON that is to be stored, and currently, only 10 KB of data can be stored. This is due to limitation of the JSON data stored via Custom Field. Refer to our [Custom Field Limitation](./limitations-of-custom-fields.md) doc for more details.

## Common questions

### Is this BigCommerce documentation for the Marketplace App or Automate Connector?
**Note**: This documentation uses the legacy approach with extensions. We have launched BigCommerce as a Marketplace App and Automate Connector. For more information on BigCommerce, please refer to the [BigCommerce App Installation Guide](../marketplace-apps/bigcommerce.md) for Marketplace and [BigCommerce Connector](/docs/developers/automation-hub-connectors/bigcommerce/) documentation for Automate.

### What BigCommerce credentials are required for this extension?
The credentials include the **API Path URL** and **access token** of your BigCommerce store API client.

### What should be used for the `url` config parameter?
"url": Enter the lambda API endpoint URL that we got in [Step 2](#set-up-a-lambda-function-and-an-api-gateway-trigger).

### Why can only a limited number of items be selected in the custom field?
**Note**: The number of items that can be selected depends on the size of the JSON that is to be stored, and currently, only 10 KB of data can be stored. This is due to limitation of the JSON data stored via Custom Field. Refer to our [Custom Field Limitation](./limitations-of-custom-fields.md) doc for more details.