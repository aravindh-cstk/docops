---
title: "[Extensions] - YouTube"
description: Documentation for creating a YouTube custom field extension to fetch and display YouTube videos in Contentstack entries.
url: https://www.contentstack.com/docs/developers/create-custom-fields/youtube
product: Contentstack
doc_type: developer-guide
audience:
  - developers
  - content-managers
version: legacy-extensions
last_updated: 2026-03-26
---

# [Extensions] - YouTube

This page explains how to create and configure a legacy YouTube custom field extension in Contentstack to fetch videos from a YouTube channel and display them in entries. It is intended for developers setting up custom fields (extensions) and should be used when implementing the legacy extensions approach (as opposed to the Marketplace App).

YouTube

**Note**: This documentation uses the legacy approach with extensions. We have launched YouTube as a Marketplace App. For more information on YouTube, please refer to the [YouTube App Installation Guide](/docs/developers/marketplace-apps/youtube/).

The YouTube extension lets you fetch YouTube videos from your account and display them on your entry page. When you [create an entry](/docs/content-managers/working-with-entries/create-an-entry), you can select only one of the listed videos at a time as the input for that field, and the details of the video will be saved in JSON format in Contentstack.

This step-by-step guide explains how to create a YouTube custom field extension for your content types in Contentstack.
- [Get YouTube API key](#get-youtube-api-key)
- [Get Channel ID](#get-channel-id)
- [Add the "YouTube" custom field extension to your stack](#add-the-youtube-custom-field-extension-to-your-stack)
- [Use your custom field](#use-your-custom-field)

## Get YouTube API key

In order to set up this extension in Contentstack, you will need the YouTube API key.
Follow the steps to get your Youtube API key.

Sign in to **Google Console Cloud** and create a project then goto [API'S and Services](https://console.cloud.google.com/apis).
- Now, select your project and go to the **Library**.
- Go to[ ](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbnpVVmkxQklMeVVQb0dscDJvSW9ab0pCSEUyUXxBQ3Jtc0trQ3RZWVRfOHNEd2pfb29QdTVqajBFMndjYllNa2Q0XzIxUFRKRUhZOERkczhuX2NISlhseTY2MkpHRElHdzIyMnl4SVNoLTZVUUlMRlNLdXNzMmhCdmVabGFvLVlrYzVQOGVSNV9ESUF3c1UyV1N2bw&q=https%3A%2F%2Fconsole.cloud.google.com%2Fapis)**YouTube Data API V3** and click on **Enable YouTube Data API V3**.
- Lastly, click on **Create Credentials and** select **YouTube Data API V3**. Fill in other details and click on **What credentials do I need button**.

This will create your Youtube API Key.

Note down the API Key, as you will need it while configuring the extension in Contentstack (more details in **Step 3**).

## Get Channel ID

While configuring the extension (in **Step 3**), you need to specify the **Youtube** **channel ID **from which you want to fetch and display the videos.

**Note:** Video from any public channel can be displayed, and doesn't need to be yours.

Each YouTube channel has a unique ID. Let’s understand how to get this ID:

Visit the home/landing page of the YouTube channel of your choice on a browser.
- You will see the channel ID in the URL, after the "channel/" part. For example, if the URL is *https://www.youtube.com/channel/ABc1d2E3FgHIj4K-lmnoPQ*, then the channel ID is **ABc1d2E3FgHIj4K-lmnoPQ.******

Now, let's create a custom extension in Contentstack to fetch and display videos from the Youtube channel.

## Add the “YouTube” custom field extension to your stack

To add the YouTube custom field to your stack, log in to your [Contentstack account](https://app.contentstack.com/#!/login) and perform the following steps:

For this guide we have created a sample code, which you can download from our [GitHub](https://github.com/contentstack/extensions/tree/master/youtube) repository. The source code contains the following files:
- **youtube-extension**: Navigate to youtube/build/index.html file. We will upload the code in this file in the extension source code field of our extension in the next step.
- **youtube-extension-popup**: Navigate to youtube-popup/build/index.html, upload this file as an asset in your stack by referring to the [Create/Upload Assets](/docs/content-managers/working-with-assets/create-upload-assets) guide. After uploading this file, make a note of the asset URL. To view the asset URL, open the asset and copy the File URL.
- Go to your [stack](/docs/developers/set-up-stack/about-stack), and click on the “Settings” icon on the left navigation panel and select **Extensions**. You can also use the shortcut keys “alt + X” for Windows OS users, and “option + X” for Mac OS users to access the extensions menu.
- On the **Extensions **page, click on the **+ New Extension** button, and select **Create New**.
- In the **Select Extension Type** window, select **Custom Field**.
- On the **Create New Extension **page, enter values in the fields as given below:

  - **Title ***(required)*: Provide a suitable title, for example “Youtube,” for your custom field. This title will be visible when you select the extension in the [**custom**](/docs/developers/create-content-types/custom)** **field in your content type.
  - **Field data type ***(required)*: Select the data type in which the input data of the field should be saved in Contentstack. In this case, select **JSON**.
  - **Multiple ***(optional)*: Check this field.
  - **Hosting method ***(required)*: Select **Hosted by Contentstack** as the hosting method for this content type.
  - **Extension source code** *(required)*: Enter the downloaded extension source code here. Navigate to youtube/build/ path from the downloaded folder, copy and add the code of the index.html file here.
  - **Config Parameter** *(required)*: Enter the following configuration details as the extension's config parameter:

    **Note**: You must enclose the config parameters in double-quotes. Otherwise, the stack throws an error and does not let you save the extension.

```
{
  "apiKey": ">",
  "channelId": ">",
  "saveFullResponse": "true",
  "redirectUrl": ">"
}
```

**apiKey**: Add the Youtube API Key we got in [step 1](#get-youtube-api-key).
- **channelId**: Add the Youtube channel UID that we got in [step 2](#get-channel-id).
- **saveFullResponse**: If we keep the value of this parameter to "true" then the entire video JSON response will be saved in the entry. If we keep it as "false" then only video IDs will be saved in the entry response. So you can set this parameter as per your requirement.
- **redirectUrl**: The URL of the redirect.html file, which you have uploaded as an asset in the stack.
- **Save **the custom field.

## Use your custom field

Once you have added a custom field, you can use it in your content type like any other field. To add a custom field in your content type, perform the following steps:

[Create a content type](/docs/developers/create-content-types/create-a-content-type) and add the [**Custom**](/docs/developers/create-content-types/custom)** **field to it.
- Under **Select Extension**, select the “Youtube” field that you created and set the other properties. You can add other fields as per requirements.
- Finally, click on either **Save** or **Save and Close** to save your changes.
- Next, [create an entry](/docs/content-managers/working-with-entries/create-an-entry) for this content type, and you will see the **Youtube **field in action. Click the **Choose Video** button to display all the videos of the specified channel ID as follows:
- After clicking **Choose Video**, it will redirect you to a new page which displays a list of videos.
- You can also choose the grid view for easy access. Select the videos you want to add and click on **Add Selected Videos**. The videos will be displayed in your custom field:

**Additional Resource: **You can also refer to our other documents on custom video extensions such as [Ooyala](/docs/developers/create-custom-fields/ooyala), [Brightcove](/docs/developers/create-custom-fields/brightcove), and [Vimeo](/docs/developers/create-custom-fields/vimeo).

## Common questions

**Q: Is this guide for the Marketplace App or the legacy extension approach?**  
A: **Note**: This documentation uses the legacy approach with extensions. We have launched YouTube as a Marketplace App. For more information on YouTube, please refer to the [YouTube App Installation Guide](/docs/developers/marketplace-apps/youtube/).

**Q: What data type should be used for the YouTube custom field extension?**  
A: **Field data type ***(required)*: Select the data type in which the input data of the field should be saved in Contentstack. In this case, select **JSON**.

**Q: What happens if `saveFullResponse` is set to "true" vs "false"?**  
A: **saveFullResponse**: If we keep the value of this parameter to "true" then the entire video JSON response will be saved in the entry. If we keep it as "false" then only video IDs will be saved in the entry response. So you can set this parameter as per your requirement.

**Q: Where do I get the `redirectUrl` used in the config parameter?**  
A: **redirectUrl**: The URL of the redirect.html file, which you have uploaded as an asset in the stack.

<!-- filename: extensions-youtube.md -->