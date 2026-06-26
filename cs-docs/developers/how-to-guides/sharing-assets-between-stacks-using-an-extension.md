---
title: "[How-to Guides and Knowledgebase articles] - Sharing Assets Between Stacks Using an Extension"
description: Guide to share and re-use assets between Contentstack stacks by fetching assets from one stack into another using a custom field extension.
url: https://www.contentstack.com/docs/developers/how-to-guides/sharing-assets-between-stacks-using-an-extension
product: Contentstack
doc_type: how-to-guide
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [How-to Guides and Knowledgebase articles] - Sharing Assets Between Stacks Using an Extension

This page explains how to share and re-use assets between two Contentstack stacks by creating and using a custom field extension. It is intended for developers who manage content across multiple stacks and need to fetch assets from a source stack into another stack during entry creation.

## Sharing Assets Between Stacks Using an Extension

**Note: **This page is no longer maintained, and the underlying code may be outdated or unsupported. It may be removed in a future release.

To manage our website content effectively, we often make use of multiple stacks and store content and related assets in respective [stacks](../set-up-stack/about-stack.md).

In this guide, we will discuss how to share and re-use [assets](/docs/content-managers/working-with-assets/about-assets) between stacks. We will create two stacks and by using an extension in one of the stacks, we will fetch assets from the other stack into this stack.

## Prerequisites
- [Contentstack Account](https://app.contentstack.com/#!/login)
- [ngrok](https://ngrok.com/download) for creating a secured tunnel

**Process overview**: We will create two stacks: Stack A and Stack B. We will create an [extension](../experience-extensions-overview/about-experience-extensions.md) in one of the [content types](../create-content-types/about-content-types.md) in Stack B and fetch the assets from Stack A through the extension that we have created in Stack B.

The extension will allow us to choose multiple assets from Stack A and save it in an array of a JSON response. It will store the UIDs of the assets (and the assets itself) that you have selected from the Stack A.

## Steps for Execution
- [Download the code](#download-the-code)
- [Create an extension in stack B](#create-an-extension-in-stack-b)
- [Create a build for the extension](#create-a-build-for-the-extension)
- [Create a public URL using ngrok](#create-a-public-url-using-ngrok)
- [Use your custom field extension](#use-your-custom-field-extension)

## Download the Code
For this exercise, we have created a sample extension. The first step is to download the code from our [GitHub repository](https://github.com/contentstack/share-assets-between-stacks-contentstack-extension). We will use this code when we create an extension.

This extension will help us fetch assets from Stack A in one of the content types in Stack B. You can use any code editor of your choice and open this code in it to see how we have structured it. Let's now create an extension in Stack B.

## Create an Extension in Stack B
Log in to your [Contentstack account](https://app.contentstack.com/) and follow the steps given below to create a custom field extension:

In your stack, navigate to the “Settings” icon on the left navigation panel, and select **Extensions**.
- On the **Extensions** page, click on the **+ New Extension** button, and select **Create new**.
- In the **Select Extension Type** window, select **Custom Field**.
- On the **Create New Extension** page, enter values in the fields as given below:**Title**: Provide a suitable title for your custom field. This title will be visible when you select the extension in the [custom field](../create-content-types/custom.md) in your content type.
- **Field data type**: Select the data type in which the input data of the field should be saved in Contentstack. In this case, select **JSON**.
- **Multiple**: You can leave this field unchecked or select it if your custom field will expect multiple values. In such a case, the field will save the input values in an array. For this example, keep this option checked as we will be adding multiple files.
- **Hosting method**: Select the **External hosting** option and we will add the URL where the code is hosted. For now leave this blank, we will add the URL later.
- **Config parameter**: Here, specify the required configuration parameter for your extension. Use the following lines of code as your config parameter:

```
{
    "apiKey": "source stack APIkey",
    "managementToken": "source stack managementToken",
    "baseUrlRegion":   e.g. https://api.contentstack.io/
}
```

**Note:** By default, Contentstack operates in the **North American region**. To use a different region, configure the appropriate API endpoint as follows:

**Europe (default infrastructure):** `https://eu-api.contentstack.io/`
- **Azure – North America:** `https://azure-na-api.contentstack.io/`
- **Azure – Europe:** `https://azure-eu-api.contentstack.io/`
- **GCP – North America:** `https://gcp-na-api.contentstack.io/`
- **GCP – Europe:** `https://gcp-eu-api.contentstack.io/`

In the above code, enter the API key and the management token of the source stack, that is Stack A. As we will be fetching the assets from Stack A, we need access to that stack. That's why we need the API key and Management Token of that stack.- You will not be able to save the changes yet as we have not yet updated the URL. So move on to the next step to creating a production build for the extension.**Note**: if you want to host the extension in Contentstack, then copy the code from the **index.html** file (available as part of the code that you downloaded in step 1) and paste it in **Hosted by Contentstack** in the **Hosting method** section (step 4.3).

## Create a Build for the Extension
To install the production build for the extension, follow the steps given below:
- Fire up your terminal and move inside the project root directory that you have downloaded in the first step.
- Then, install the required dependencies, run the following command, staying inside the project directory:

```
npm install gulp-cli -g
npm install
```

- To create a new build for the extension, run the following command (index.html):

```
gulp build
```

- Now create a server using the Lite Server npm module. Before that, install the Lite Server module by using the following command:

```
npm install -g lite-server
```

- Then, run the lite-server — in the root folder — by using the following command:

```
lite-server
```

After running the above command, you will get the following screen:

Make note of the port no in Access URLs (the localhost URL) as highlighted in the above screenshot.

## Create a Public URL Using ngrok
Next, we need to install ngrok to build secure tunnels from a public endpoint (that is the internet) to a locally running server. To do this, follow the instructions given below:

Open another command prompt, move inside the project root directory that you downloaded in step 1, and install ngrok by using the following command:

```
npm install ngrok -g
```

- Then, issue the following command:

```
ngrok http <>
```

The port number is the one that you generated in the above steps, in our case it is 3000.
- Once you run the above command, the following screen pops up:
- Make note of the forwarding URL. This URL will be one that will provide our extension the public access.
- Now open the extension that we have created earlier and paste this public URL (generated above) in the **External hosting URL** field as shown below:
- Click on **Save** to save your extension's settings.

## Use Your Custom Field Extension
Once you have added a custom field, you can use it in your content type like any other field. Log in to Contentstack and open Stack B. Then, to add a custom field in your content type, perform the following steps:

[Create a content type](../create-content-types/create-a-content-type.md) and add the **Custom** field to it.
- Hover over the **Custom** field and click the “Settings” gear icon.
- Under **Select Extension**, select the extension that we have created for this exercise.
- After adding other relevant fields in your content type, click on either **Save** or **Save and Close** to save your changes
- Next, [create an entry](../../content-managers/author-content/create-an-entry.md) for this content type, and you will see your custom field (the name of our custom field is "asset") in action.
- Click on the **Choose Assets** button as shown in the following screenshot:
- When you click on **Choose Assets**, a window pops up that allows you choose assets from Stack A as shown below:
- As you can see above, multiple assets are fetched from Stack A and in the following screenshot, you can see two images are selected to be saved in our Stack B entry:

This is how you can set up a system that fetches assets from one stack to another using a custom field extension.

## Common questions

### Is this guide still supported?
No. **Note: **This page is no longer maintained, and the underlying code may be outdated or unsupported. It may be removed in a future release.

### What data type should the custom field use for this extension?
**Field data type**: Select the data type in which the input data of the field should be saved in Contentstack. In this case, select **JSON**.

### What credentials are required to fetch assets from the source stack?
In the config parameter, enter the API key and the management token of the source stack, that is Stack A.

### Why is ngrok used in this setup?
ngrok is used to build secure tunnels from a public endpoint (that is the internet) to a locally running server so the extension can be accessed via a public URL.