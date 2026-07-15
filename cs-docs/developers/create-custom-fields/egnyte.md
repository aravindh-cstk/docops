---
title: "[Extensions] - Egnyte"
description: Egnyte extension allows you to fetch the files stored in your Egnyte account and display them into a field in your content type.
url: https://www.contentstack.com/docs/developers/create-custom-fields/egnyte
product: Contentstack
doc_type: extension-guide
audience:
  - developers
version: legacy
last_updated: 2026-03-26
---

# [Extensions] - Egnyte

This page explains how to create and configure the legacy Egnyte custom field extension in Contentstack, intended for developers setting up custom fields that fetch and display Egnyte files while creating entries.

## Egnyte

**Note**: This documentation uses the legacy approach with extensions. We have launched Egnyte as a Marketplace App. For more information on Egnyte, please refer to the [Egnyte App Installation Guide](../marketplace-apps/egnyte.md).

Egnyte extension allows you to fetch the files stored in your Egnyte account and display them into a field in your [content type](../create-content-types/about-content-types.md). Thus, while creating [entries](../../content-managers/author-content/about-entries.md), you can select one or more files as input value for the field.

This step-by-step guide explains how to create an **Egnyte** custom field extension for your content types in Contentstack. The steps performed are as follows:
- [Create an account in Egnyte](#create-an-account-in-egnyte)
- [Register with the Egnyte developer portal](#register-with-the-egnyte-developer-portal)
- [Add the “Egnyte” custom field extension to your stack](#add-the-egnyte-custom-field-extension-to-your-stack)
- [Use the extension](#use-the-extension)

## Prerequisites
- [Contentstack account](https://app.contentstack.com/#!/login)
- [Egnyte account](https://www.egnyte.com/)
- Client ID
- Egnyte domain

## Create an Account in Egnyte

To get started with using this extension, you're required to create an account in Egnyte. Follow the steps given below to create one:

Visit the [Egnyte](https://www.egnyte.com/) official page. To ensure the extension works as expected, it is recommended to purchase one of the plans Egnyte offers.
- So, click on the **PRICING** option at the top and select one of the plans. You will get an official email after the purchase. Follow the instruction to set up your account and Egnyte domain.

  **Note**: Make sure to note the domain as we'll need it while setting up the extension in Contentstack.
- Log in to your Egnyte account and you'll be redirected to your dashboard.
- Start uploading your files on Egnyte and then you'll be asked to share the files. So select the files that you want to share, click **Share**, and then **Share Link**.
- Choose from the available options **Get Link** or **Email Link**. Similarly,Now that you can perform other operations such as making a folder shareable etc.

## Register with the Egnyte Developer Portal

Once you have done this setup and added your files in your account, perform the following steps to register yourself:

Go to the [Egnyte for Developers portal](https://developers.egnyte.com/member/register). Fill in the required details such as your name, email address, company name, Egnyte domain, etc., and complete the registration process.
- Keep the **Registered OAuth Redirect URI** field empty.
- Inside the **SELECT WHICH WEB APIS YOU WILL USE** section, use the “Egnyte Connect API” and not the “Egnyte Protect: Egnyte Protect API.” To do this, just uncheck the **Issue a new key for Egnyte Protect **option.
- After completion of the registration, you will get a “Key” (**client ID**) to use as a config parameter while setting up the extension in Contentstack.

  **Note**: Make sure to note this client ID. Plus, ensure to use the “Key**”** as your **client ID** and not the **secret key**.

Now that we have set up the account in Egnyte and got yourself registered, let's proceed to create an Egnyte extension in Contentstack.

## Add the “Egnyte” Custom Field Extension to your Stack

To add this custom field to your [stack](../set-up-stack/about-stack.md), log in to your [Contentstack account](https://app.contentstack.com/#!/login) and perform the following steps:

Go to your stack and click on the “Settings” icon on the left navigation panel.
- Click on **Extensions**. You can also use the shortcut keys “alt + X” for Windows OS users, and “option + X” for Mac OS users to access the extensions menu.
- On the **Extensions** page, click on the **+ New Extension** button, and select **Create new**![Egnyte_1_Highlighted.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt45124668b3e2d050/60be30ba68689d78c8630a43/Egnyte_1_Highlighted.png)
- Select the Extension type as **Custom Field**.![Egnyte_2_no_highlight.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt56dd93d0873d59f2/60be30c51b32a31d5305b517/Egnyte_2_no_highlight.png)
- On the configuration page, enter details in the fields as given below:

  **Title ***(required)*: Provide a suitable title. For example, “Egnyte.”
- **Field Data Type ***(required)*:** ** Select the data type in which the input data of the field should be saved in Contentstack. Select **JSON** in this case.
- **Multiple ***(optional)*: Leave this checkbox unchecked.
- **Hosting Method ***(required)*: Select **Hosted By Contentstack**.
- **Extension Source Code ***(required)*: In this field, you need to **enter the extension code.** If Extensions are part of your plan, contact our [Support](mailto:support@contentstack.com) team to get the code for the extension.

  **Note**: In the code, locate the `redirect.html` file inside the `**source**` folder, and upload this file as an asset in Contentstack by following the steps mentioned in the [Create/Upload asset](../../content-managers/author-content/create-upload-assets.md) article. After uploading the file, you'll get a URL in the [asset details](../../content-managers/author-content/create-upload-assets.md#asset-details) section, make note of this URL.
- **Config Parameter ***(required)*: Enter the following details as your config parameters:

```
{
    "domain": "",
    "clientId": "",
    "redirectUrl": ""
}
```

Provide the details in the following parameters:

`domain`: Provide the URL that you created while signing up with Egnyte in the [aforementioned step](#create-an-account-in-egnyte).
- `clientID`: Provide the ID that you created when you registered with the Egnyte developer portal
- `redirectUrl`: Provide the URL of the file that you uploaded as an asset in Contentstack.
- Click on **Save**. This will create your custom field.

Now, let’s understand how you can start using this custom field in your content type.

## Use the Extension

Once you have added a custom field, you can use it in your content type like any other field. To add a custom field in your content type, perform the following steps:

[Create a content type](../create-content-types/create-a-content-type.md) and add the [**Custom**](../create-content-types/custom.md) field to it.
- In the **Edit Properties** section, under **Select Extension**, select **Egnyte** from the drop-down and set the other properties of your custom field.![Egnyte_3_Highlighted.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt12d41832af4de139/60be30d736617c1194b6cd04/Egnyte_3_Highlighted.png)
- After adding other relevant fields in your content type, click on either **Save** or **Save and Close** to save your changes.
- Next, [create an entry](../../content-managers/author-content/create-an-entry.md) for this content type, and you will see the **Egnyte **field in action.![Egnyte_4_no_highlight.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt9de2264955f97856/60be30ef324cea0e69782367/Egnyte_4_no_highlight.png)

**Note**: The number of items that can be selected depends on the size of the JSON that is to be stored, and currently, only 10 KB of data can be stored. This is due to the limitation of the JSON data stored via Custom Field. Refer to our [Custom Field Limitation](./limitations-of-custom-fields.md) doc for more detail.

## More Articles

You can also visit our collection of similar other articles:
- [Eloquoa](./eloqua.md)
- [Brandfolder](./brandfolder.md)
- [Marketo](./marketo-forms.md)

## Common questions

### Is this Egnyte documentation current?
**Note**: This documentation uses the legacy approach with extensions. We have launched Egnyte as a Marketplace App. For more information on Egnyte, please refer to the [Egnyte App Installation Guide](../marketplace-apps/egnyte.md).

### What config parameters are required for the extension?
```
{
    "domain": "",
    "clientId": "",
    "redirectUrl": ""
}
```

### Where do I get the client ID for the extension?
After completion of the registration, you will get a “Key” (**client ID**) to use as a config parameter while setting up the extension in Contentstack.

### Why can I only select a limited number of items?
**Note**: The number of items that can be selected depends on the size of the JSON that is to be stored, and currently, only 10 KB of data can be stored. This is due to the limitation of the JSON data stored via Custom Field. Refer to our [Custom Field Limitation](./limitations-of-custom-fields.md) doc for more detail.