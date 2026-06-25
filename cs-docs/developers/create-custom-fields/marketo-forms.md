---
title: "[Extensions] - Marketo Forms"
description: Documentation for creating and using the Marketo Forms extension (legacy approach with extensions) in Contentstack.
url: https://www.contentstack.com/docs/developers/create-custom-fields/marketo-forms
product: Contentstack
doc_type: developer-guide
audience:
  - developers
version: legacy
last_updated: 2026-03-26
---

# [Extensions] - Marketo Forms

This page explains how to create and use the legacy **Marketo Forms** extension in Contentstack to fetch and display Marketo forms inside a custom field on a content type, intended for developers setting up integrations and custom fields.

## Marketo Forms

**Note**: This documentation uses the legacy approach with extensions. We have launched Marketo Forms as a Marketplace App. For more information on Marketo Forms, please refer to the [Marketo Forms App Installation Guide](../marketplace-apps/marketo-forms.md).

The Marketo Forms extension lets you fetch and display the list of your existing Marketo forms into the [field](../create-content-types/about-fields.md) of your [content type](../create-content-types/about-content-types.md). As a result, while creating [entries](../../content-managers/author-content/about-entries.md), you can view the list of forms, and select the one you want to use on the entry page. In the Contentstack backend, it saves the ID and the metadata (in JSON format) of the Marketo form that you select.

This step-by-step guide explains how to create a **Marketo Forms** extension in Contentstack. The steps to be performed are as follows:
- [Get your Marketo account details](#get-your-marketo-account-details)
- [Deploy Lambda function](#deploy-lambda-function)
- [Add the "Marketo Forms" custom field extension to your stack](#add-the-marketo-forms-custom-field-extension-to-your-stack)
- [Use your custom field](#use-your-custom-field)

## Get your Marketo account details

In order to set up this extension, you will need the following three pieces of information from your Marketo account:

Munchkin Account ID
- Client ID
- Client Secret

To retrieve these details, log in with the Admin Marketo account, and follow the steps outlined below.

### Retrieve Munchkin Account ID

To get your Munchkin Account ID, perform the steps given below:
- Log in to your Admin Marketo account, and click **Admin** in the top right corner.
- On the left-hand side navigation, under **Integration**, click **Munchkin**. A page opens, where you will find the **Munchkin ID**.

### Retrieve Client ID and Client Secret

To get your Client ID and Client Secret, perform the steps given below.

#### Step 1: Create a role that has full API access

- Click **Admin** in the header.
- On the left-hand side navigation panel, under **Security**, click on **Users & Roles**. Then, click on the **Roles** tab, and click **New Role** option.
- Enter the **Role Name** (e.g., API-only User) and **Description*** (optional)*. Expand the **Access API** options in **Permissions**, and select **Read-Only Assets**.
- Click **Create**.

You will now need to create a user to whom you can assign this role.

#### Step 2: Add an API-only user

- Open the **Users** tab and click** Invite New** **User**.
- Fill out the necessary information such as **Email**, **First Name**, and **Last Name** under **Step 1: Info**. Then, click **NEXT**.
- In **Step 2: Permissions**, check the newly created role under **Roles** and check the **API Only** checkbox.
- Click **NEXT** and **Send**.

Now, you need to create a service and assign the user to retrieve the Client ID and Client Secret.

#### Step 3: Create a service in Marketo

- In the left-hand side navigation panel, under **Integration**, click **LaunchPoint**. On the page that opens, click **New** and then **New Service** from the drop-down.
- In the **New Service** window, enter a **Display Name**. Under **Service**, select **Custom**. Enter a **Description** and select the **API Only User** that you invited. This user will have full API access.
- Once you have created the new service, click **View Details** to obtain the Client ID and Client Secret.

By the end of this step, you will have the Munchkin ID, Client ID, and Client Secret of your Marketo account.

## Deploy Lambda function

To protect sensitive information (such as Marketo Client ID and Client Secret) and to avoid Cross-Origin Resource Sharing (CORS) issues, you can use Lambda function for this extension.

**Note:** Please make sure you enable CORS for API Gateway.

After retrieving the credentials, [deploy this code for the lambda function](https://github.com/contentstack/extensions/blob/master/marketo-forms/lambda.js) to AWS Lambda.

In the **Environment Variables** section of AWS Lambda, enter the credentials against the variables as follows:

```
MUNCHKIN_ID= Your Munchkin Account ID
CLIENT_SECRET= Client Secret that you retrieved
CLIENT_ID= Client ID that you retrieved

```

**Note**: Please ensure that the keys i.e., the Environment variables (in upper case) are added exactly as shown above, else your lambda function will not work.

## Add the “Marketo Forms” custom field extension to your stack

To add the Marketo Form custom field extension to your stack, log in to your Contentstack account and perform the following steps:

Go to your [stack](../set-up-stack/about-stack.md), and click on the “Settings” icon on the left navigation panel.
- Click on **Extensions**. You can also use the shortcut keys “alt + X” for Windows OS users, and “option + X” for Mac OS users to access the extensions menu.
- On the **Extensions **page, click on the **+ Add Extension** button, and select **Create new**. If you have not added any extensions in the stack yet, click on the **create a new one** link as shown below.
- In the **Select Extension Type** window, select **Custom Field**.
- On the **Create New Extension **page, enter values in the fields as given below:
**Title ***(required)*: Provide a suitable title, for example “Forms,” for your custom field. This title will be visible when you select the extension in the [**custom**](../create-content-types/custom.md) field in your content type.
- **Field data type ***(required)*: Select the data type in which the input data of the field should be saved in Contentstack. In this case, select **JSON**.
- **Multiple ***(optional)*: Leave this field unchecked.
- **Hosting method ***(required)*: Select **Hosted by Contentstack** as the hosting method for this content type.
- **Extension source code ***(required)*: Specify the extension code here. [Download](https://github.com/contentstack/extensions/tree/master/marketo-forms) the source code and add it to this field.
- **Config Parameter** - Enter the configuration details for the extension. Here, you need to mention the folder ID of the Marketo form that you want to fetch (in the `“folder”` parameter), and the AWS API gateway URL for the lambda function (in the `url` parameter). The `folder` parameter is optional, but the `url` parameter is mandatory.

```
{
    "folder":"629"
    "url":"https://abcde1234.execute-api.us-east-1.amazonaws.com/development/demo-widget"
}
```

- **Save** the custom field.

Now, let’s understand how you can start using this custom field in your content type.

## Use your custom field

Once you have added a custom field, you can use it in your content type like any other field. To add a custom field in your content type, perform the following steps:

[Create a content type](../create-content-types/create-a-content-type.md) and add the [**Custom**](../create-content-types/custom.md) field to it.
- Under **Select Extension**, select the “Marketo” field that you created and set the other properties. You can add other fields as per requirements.
- Finally, click on either **Save **or** Save and Close** to save your changes.
- Next, [create an entry](../../content-managers/author-content/create-an-entry.md) for this content type, and you will see the **Forms **field in action.

## More Articles

We have a collection of similar other articles that you may like:
- [Eloqua](./eloqua.md)
- [Brandfolder](./brandfolder.md)
- [Egnyte](./egnyte.md)

## Common questions

### Is this the recommended way to use Marketo Forms in Contentstack?
No. **Note**: This documentation uses the legacy approach with extensions. We have launched Marketo Forms as a Marketplace App. For more information on Marketo Forms, please refer to the [Marketo Forms App Installation Guide](../marketplace-apps/marketo-forms.md).

### What does the Marketo Forms extension store in Contentstack?
In the Contentstack backend, it saves the ID and the metadata (in JSON format) of the Marketo form that you select.

### Why do I need a Lambda function for this extension?
To protect sensitive information (such as Marketo Client ID and Client Secret) and to avoid Cross-Origin Resource Sharing (CORS) issues, you can use Lambda function for this extension.

### Which config parameters are required when adding the extension?
The `folder` parameter is optional, but the `url` parameter is mandatory.

<!-- filename: extensions-marketo-forms.md -->