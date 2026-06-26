---
title: "[Extensions] - Eloqua"
description: Create an Eloqua custom field extension in Contentstack to fetch and display Eloqua forms in entries.
url: https://www.contentstack.com/docs/developers/create-custom-fields/eloqua
product: Contentstack
doc_type: guide
audience:
  - developers
version: unknown
last_updated: 2026-03-26
---

# [Extensions] - Eloqua

This page explains how to create and configure an Eloqua custom field extension in Contentstack so developers can fetch and display Eloqua forms inside a field on a content type, and then select and render those forms when creating entries.

## Eloqua

Eloqua is a marketing automation platform by Oracle. You can use Eloqua as an extension (custom field) that fetches and displays your Eloqua forms into a [field](../create-content-types/about-fields.md) of your [content type](../create-content-types/about-content-types.md).

Subsequently, while creating the [entry](../../content-managers/author-content/about-entries.md), you can select a suitable form in the entry. Based on the selection, the form will be rendered on the presentation layer using the form details from the entry.

You can configure the depth details saved for an Eloqua form through the extension config or field-level instance config. We have used AWS Lambda & Eloqua Forms Rest API 2.0 to retrieve the list of forms. You can find the AWS Lambda code (lambda.js) with the extension code.

This step-by-step guide explains how to create an Eloqua extension in Contentstack. The steps to be performed are as follows:
- [Get your Eloqua account details](#get-your-eloqua-account-details)
- [Deploy Lambda function](#deploy-lambda-function)
- [Add the Eloqua custom field extension to your stack](#add-the-eloqua-custom-field-extension-to-your-stack)
- [Use your custom field](#use-your-custom-field)

## Get Your Eloqua Account Details

In order to set up this extension, you will need the following information from your Eloqua account:

Your Eloqua Account Base URL
- Your Eloqua Account Basic Auth Token

Read more on how to retrieve [Eloqua Base URL](https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/DeterminingBaseURL.html) and [Eloqua Basic Auth Token](https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/Authentication_Basic.html).

**Note**: The account from which we use the username and password to generate the basic auth token should have limited permissions for security.

## Deploy Lambda Function

To protect sensitive information, such as Eloqua Basic Auth Token and to avoid **Cross-Origin Resource Sharing** (**CORS**) issues, we will use [AWS Lambda](https://aws.amazon.com/lambda/) function for this extension.

In the **Environment variables** section of AWS Lambda, enter the credentials against the variables as shown in the following image:

## Add the Eloqua Custom Field Extension to Your Stack

To use this extension in Contentstack, log in to your [Contentstack account](https://app.contentstack.com/#!/login) and perform the following steps:

Go to your [stack](../set-up-stack/about-stack.md) and click on the “Settings” icon on the left navigation panel.
- Click on **Extensions**. You can also use the shortcut keys “alt + X” for Windows OS users, and “option + X” for Mac OS users to access the extensions menu.
- On the **Extensions **page, click on the **+ New Extension** button, and select **Create new**.
- In the **Select Extension Type** window, select **Custom Field**.
- On the **Create New Extension **page, enter values in the fields as given below:**Title ***(required)*: Provide a suitable title, for example “Eloqua,” for your custom field. This title will be visible when you select the extension in the [**custom**](../create-content-types/custom.md) field in your content type.
- **Field data type ***(required)*: Select the data type in which the input data of the field should be saved in Contentstack. In this case, select **JSON**.
- **Multiple ***(optional)*: Leave this field unchecked.
- **Hosting method ***(required)*: Select **Hosted by Contentstack** as the hosting method for this content type.
- **Extension source code** - *(required)*: Specify the extension code here. If Extensions are part of your plan, contact our [Support](mailto:support@contentstack.com) team to get the code for the extension.The support team will provide you with the source code (src file). Copy the code from the `index.html` file located in the root folder and paste it in the **Extension source code** field.
- **Config Parameter** *(required)*:To configure this extension, you can either use the extension's **Config Parameters** field while setting up the extension. Alternatively, you can use the [field's instance config](../create-content-types/config-parameter-for-custom-fields-only.md). The configuration settings to be used are given below:*

url - URL to trigger AWS lambda function

x-api-key - Your AWS API Gateway API key (optional)

depth - Depth of details you want to store for the form (optional, default: minimal)*
- **Save **the custom field.

Now, let’s understand how you can start using this custom field in your content type.

## Use Your Custom Field

Once you have added a custom field, you can use it in your content type like any other field. To add a custom field in your content type, perform the following steps:

[Create a content type](../create-content-types/create-a-content-type.md) and add the [**Custom**](../create-content-types/custom.md) field to it.
- Under **Select Extension**, select the “Eloqua” field that you created and set the other properties. You can add other fields as per requirements.
- Finally, click on either **Save **or** Save and Close** to save your changes.
- Next, [create an entry](../../content-managers/author-content/create-an-entry.md) for this content type, and you will see the **Eloqua **field in action.

## More Articles

We have a collection of similar other articles that you may like:
- [Brandfolder](./brandfolder.md)
- [Egnyte](./egnyte.md)
- [Marketo](./marketo-forms.md)
- [External Apps Custom Field guides](../create-custom-fields.md#external-apps-custom-field-guides)

## Common questions

**How do I configure the extension settings?**  
You can either use the extension's **Config Parameters** field while setting up the extension, or use the [field's instance config](../create-content-types/config-parameter-for-custom-fields-only.md).

**What data type should I select for the custom field?**  
Select **JSON**.

**Why is AWS Lambda used in this setup?**  
To protect sensitive information, such as Eloqua Basic Auth Token and to avoid **Cross-Origin Resource Sharing** (**CORS**) issues.

**Where do I get the extension source code?**  
If Extensions are part of your plan, contact our [Support](mailto:support@contentstack.com) team to get the code for the extension. The support team will provide you with the source code (src file).