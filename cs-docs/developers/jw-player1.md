---
title: "[Extensions] - JW Player1"
description: JW Player custom field extension setup and usage in Contentstack.
url: https://www.contentstack.com/docs/developers/jw-player1
product: Contentstack
doc_type: extension-guide
audience:
  - developers
version: unknown
last_updated: 2026-03-26
---

# [Extensions] - JW Player1

This page explains how to set up and use the JW Player custom field extension in Contentstack to fetch videos from JW Player and display/select them within a field in a content type. It is intended for developers configuring extensions and content types, and should be used when integrating JW Player video selection into entry creation workflows.

### Item 1

#### Article section

##### Heading

JW Player1

##### Content

The JW Player [custom field](./create-custom-fields/about-custom-fields.md) extension allows you to fetch your videos from JW Player and display them into a [field](./create-content-types/about-fields.md) of your [Content type](./create-content-types/about-content-types.md). Thus, while creating [entries](../content-managers/author-content/about-entries.md), you can select one or more videos as the input values for the field.

To create the JW Player custom field extension for your content types, follow the steps given below.

## Steps for Execution
- [Create a JW Player account](#create-a-jw-player-account)
- [Add the JW Player custom field extension to your stack](#add-the-jw-player-custom-field-extension-to-your-stack)
- [Use your custom field](#use-your-custom-field)

## Prerequisites
- [JW Player account](https://www.jwplayer.com/)
- [JW Player API key/ Secret key](https://support.jwplayer.com/articles/how-to-find-your-api-key-and-secret)
- [Contentstack account](https://www.contentstack.com/)

## Create a JW Player account

Firstly, you have to create a JW Player account to use this extension. Follow the steps given below to create and set up you JW Player account:

Go to the [JW Player](https://www.jwplayer.com/) website and create a new account.
- Click on the **Pricing**. Now, select **Try Today** under the **TRIAL SUBSCRIPTION **option.
- To Sign up and validate your profile, enter your email address and click on the **Start for free** button. An activation link will be sent on the email address that you provided. Go to your email account and click on the **ACTIVATE NOW** button and complete the signup process.

  **Note** : If the account activation email is not received then you can re-enter your email address and check for the activation link.
- Configure your JW Player account by providing the necessary details such as **Full Name**, **Country**, and **New Password**. Once you have done that, click on **Create Account**.
- You will be directed to the Complete Your Profile modal. You can provide the required information or you can skip it for now to move to your dashboard.
- You are now ready to upload your videos to JW Player.  To do this, click on the **Upload** or **+ Add** button to start uploading.
- You can either **Drop** your files or click on **select a file **option to upload your videos on JW Player.
- Once the videos are uploaded, click on **Exit**. Your uploaded videos will be seen under **Recent Videos. **To check the **Video Summary **of any video click on the video, scroll down to add** Title** and a suitable **Description** of your video and **Save** it. These details will be visible in the [Custom Field](./create-custom-fields/about-custom-fields.md) of Contentstack.
- Now for Contentstack to fetch videos from your JW Player in the custom field, it requires your accounts  **API Key** and **Secret Key**. To get these, click on the **Settings** gear icon at top right corner and select the **API Credentials** option.
- On the **API Credentials** screen, under the** v****1 ****API Credentials** click on **Show Credentials **to view the API** Key **as shown below.
- Next we proceed to create a** Secret Key **under** v****2**** API Credentials **section. Click on the **Add **button to add a new API key. Enter a suitable **Name **for your API key, select the **Read-Only** option from the **User Role** dropdown, and click on the **Save **button.
- Once you create the API Key, click on **Show Secret **to view the Secret Key as shown below.

  **Note**: Save the **API **key and the **Secret **key we created in the above step, it will be required when we set up an extension in Contentstack.

## Add the JW Player Custom Field Extension to your Stack

To set up an extension in Contentstack, log in to your [Contentstack account](https://app.contentstack.com/#!/login) and follow the steps given:
- Get the code by contacting our [Support](mailto:support@contentstack.com) team. The support team will provide you with the source code that contains the following files:

  jw: Navigate to jw/build/index.html file. We will upload the code in this file in the extension source code field of our extension in the next step.
- jw-popup: Navigate to jw-popup/build/index.html, upload this file as an asset in your stack by referring to the [Create/Upload Assets](../content-managers/author-content/create-upload-assets.md) guide. After uploading this file, make a note of the asset URL. To view the asset URL, open the asset and copy the File URL.
- Go to your [stack](./set-up-stack/about-stack.md), navigate to the “Settings” icon on the left navigation panel.
- Click on **Extensions**.
- Click on the **+ New Extension** button, and select **Create new**.
- Select the **Custom Field** option in the **Select Extension Type **window. This Custom field extension will fetch videos from JW Player to your Contentstack field.
- On the **Create New Extension** page, enter values in the fields as given below:
- **Title** *(required)*: Provide a suitable title, for example “JW Player” for your custom field. This title will be visible when you select the extension in the [custom](./create-content-types/custom.md) field in your content type.
- **Field data type** *(required)*: Select the data type in which the input data of the field should be saved in Contentstack. In this case, select **JSON**.
- **Multiple **: Check this field.
- **Hosting method ***(required)*: Select **Hosted by Contentstack** as the hosting method for this content type.
- **Extension Source Code** (required): Enter the downloaded extension source code here. Navigate to jw/build/ path from the downloaded folder, copy and add the code of the index.html file here.
- **
Config Parameter** (required): Enter the following configuration details as the extension's config parameter:

```
{
  "apiKey": ,
  "apiSecret": ,
  "saveFullResponse": true,
  "redirectUrl":
```

**apiKey**: Add the API Key you generated in step 1.

**apiSecret**: Add the Secret Key you generated in step 1.

**saveFullResponse**: If we keep the value of this parameter to "true" then the entire video JSON response will be saved in the entry. If we keep it as "false" then only video IDs will be saved in the entry response. So you can set this parameter as per your requirement.

**redirectUrl**: The URL of the redirect.html file, which you have uploaded as an asset in the stack.
- Confirm your settings by clicking on the **Save** button.

Now, let's use this custom field in our content-type.

## Use your Custom Field

Once you have added a custom field, you can use it in your content type like any other field.  Perform the following steps to add a custom field

[Create a content type](./create-content-types/create-a-content-type.md) and add the [Custom](./create-content-types/custom.md) field to it.
- Under the **Select Extension** dropdown, select the “JW Player” extension that you created and set the other properties. You can add other fields if required.
- Finally, click on **Save and Close** to save your changes.
- Now [create an entry](../content-managers/author-content/create-an-entry.md) for this content type, and you will see the **JW Player** field in action.
- Under your custom field you will find all the videos that you have uploaded on JW Player when you click on the **Choose Video** button. Select the videos you want to add to this field.

## Common questions

**How do I get the JW Player API Key and Secret Key required by the extension?**  
Use the **Settings** gear icon in JW Player, open **API Credentials**, and use **Show Credentials** for the API Key and **Show Secret** for the Secret Key.

**What does `saveFullResponse` do in the config parameter?**  
If set to `"true"` the entire video JSON response will be saved in the entry; if set to `"false"` then only video IDs will be saved in the entry response.

**Where do I get the `redirectUrl` value?**  
Use the File URL of the uploaded `jw-popup/build/index.html` asset in your stack.

**Where do I paste the extension source code in Contentstack?**  
On the **Create New Extension** page, paste the contents of `jw/build/index.html` into the **Extension Source Code** field.