---
title: "[Extensions] - Brightcove"
description: Brightcove custom field extension setup for Contentstack using AWS Lambda and API Gateway (legacy extensions approach).
url: https://www.contentstack.com/docs/developers/create-custom-fields/brightcove
product: Contentstack
doc_type: integration-guide
audience:
  - developers
version: legacy
last_updated: 2026-03-26
---

# [Extensions] - Brightcove

This page explains how to integrate Brightcove with Contentstack using a legacy Experience Extension-based custom field, including prerequisites and step-by-step setup using AWS Lambda and API Gateway. It is intended for developers configuring Brightcove video selection inside Contentstack content types and should be used when implementing or maintaining the legacy extension approach.

## Brightcove

**Note**: This documentation uses the legacy approach with extensions. We have launched Brightcove as a Marketplace App. For more information on Brightcove, please refer to the [Brightcove App Installation Guide](../marketplace-apps/brightcove.md).

[Brightcove](https://www.brightcove.com/) is a cloud-based video platform that helps businesses to simplify the process of video distribution across digital platforms.

You can integrate Brightcove with Contentstack using our [Experience Extension](../experience-extensions-overview/about-experience-extensions.md). You can add a [Custom Field](./about-custom-fields.md) in your content type to fetch and display Brightcove videos into a [field](../create-content-types/about-fields.md) of your [content type](../create-content-types/about-content-types.md).

Thus, when you create an [entry](../../content-managers/author-content/about-entries.md) for this content type, you can select one or more videos as an input value for the field.

## Prerequisites

- [Contentstack account](https://app.contentstack.com/#!/login)
- [Brightcove account](https://signin.brightcove.com/)
- [AWS account](https://aws.amazon.com/)
- [Working knowledge of AWS lambda and AWS API Gateways](https://docs.aws.amazon.com/lambda/latest/dg/services-apigateway.html)
- Basic knowledge of [Contentstack Experience Extensions](../experience-extensions-overview/about-experience-extensions.md)

This step-by-step guide explains how to create a Brightcove custom field extension for your content types in Contentstack. The steps performed are as follows:

- [Create and set up your Brightcove account](#create-and-set-up-your-brightcove-account)
- [Create the AWS Lambda Function and set up the API Gateway](#set-up-a-lambda-function-and-an-api-gateway)
- [Add the “Brightcove” custom field extension to your stack](#add-the-brightcove-custom-field-extension-to-your-stack)
- [Use your custom field](#use-your-custom-field)

## Create and Set up Your Brightcove Account

To use this extension, you need to create an account in Brightcove. To do that, perform the following steps:

- Go to [Brightcove](https://signin.brightcove.com/) website and create your account by clicking on the **Sign up now** link.![BC_sign_up_page.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltabbc0a7431d31008/6387581a32130110b279e6d7/BC_sign_up_page.jpg)
- On the next page, you can choose from the available options such as **Video Cloud**, **Enterprise Video Suite**, and so on.
- Select the one that suits your requirement, enter your work email address, and click on **GET STARTED**.

  **Note**: You get a free trial to try the platform. However, if you want to use the APIs for integration, the free plan will not work. Therefore, it is suggested to buy one of their plans to have full-fledged access to the API usage.

- Follow the on-screen instructions and set up your account and then log in. You should see your dashboard. Click on the **ADMIN** option at the top-right corner, as shown below, and select **API Authentication**.![Admin_page.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt914ca2fb8dea579f/6137cdca50d82f3b0a7a9bbb/Admin_page.png)
- On the **API Authentication** screen, you need to register your application for using the APIs. To do this, click on **Register New Application**.![API_Authentication.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt7c1197afcd6eafde/6137cdfaec680b43eb02a302/API_Authentication.png)
- On the **Register New Application** screen, provide a **Name** and an optional **Description**. Select the appropriate account from the **Select Accounts for Authorization** option.
- Select all options in **CMS** (under the **Exposed Brightcove APIs** section) as shown below. You can leave all other options unchecked for now and click on the **Save** button.
- A **Copy Your Client Secret** window will pop-up, as shown below. Make a note of the **Client ID** and **Client Secret** as we will need these keys while setting up the lambda function in AWS. Once you have copied the IDs, click on the **Okay, I copied it** button.![Client_Secret_and_ID.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt151882240d8a4975/6137cf06c5e2b142a75a24c5/Client_Secret_and_ID.png)
- Your app is now registered and you can start uploading videos in Brightcove. To do this, click on the **BRIGHTCOVE** icon at top left. You'll get to your dashboard. Click on **HOME**, at the top-left corner, and select **Upload** as shown below:![Upload_Videos.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltc5791e48007e3a37/6137cf3e402ba23dfc2236fb/Upload_Videos.png)
- On the **Upload** screen, you can drag and drop videos, browse videos from your machine, or upload videos using the URL.
- Once the uploading finishes, click on the dropdown next to the **UPLOAD** option and select **Media** to view the list of your uploaded videos.

With these steps, we have successfully created and configured our Brightcove account. Let's move ahead and set up the AWS Lambda function.

## Set up a Lambda Function and an API Gateway

We will create an AWS Lambda Function and set up an API Gateway to trigger the Brightcove extension. To do this, perform the following steps:

- Log in to your [AWS Management Console](https://signin.aws.amazon.com/signin?redirect_uri=https%3A%2F%2Fconsole.aws.amazon.com%2Fconsole%2Fhome%3Fstate%3DhashArgs%2523%26isauthcode%3Dtrue&client_id=arn%3Aaws%3Aiam%3A%3A015428540659%3Auser%2Fhomepage&forceMobileApp=0&code_challenge=eIfp5rbZe_3p9Tw2Tehn2bXwi6w4tXUzcpFAuPKGhU4&code_challenge_method=SHA-256) and select **Lambda** from the **Services** list.
- Click on the **Create function** button and select the **Author from Scratch** option (if not already selected).
- Provide a name to your lambda function inside the **Function name** field, select **Node.js 14.x** or higher as your **Runtime** language, and click on the **Create function** button.
- For this exercise, we have created a sample code that will help you set up the system. If Extensions are part of your plan, contact our [Support team](mailto:support@contentstack.com) to get the code for the extension.
- Once you download the code, you will see the following folders:
  - **brightcove**: It contains the **build** folder that has the **index.html** file. You need to copy the code from this file and paste it inside the **Extension source code** field.
  - **brightcove-popup**: This folder also contains the **build** folder that has another **index.html** file. Upload this file as an asset in Contentstack by following the steps mentioned in the [Create/Upload](../../content-managers/author-content/create-upload-assets.md) asset article. After uploading the file, you'll get a URL in the [asset details](../../content-managers/author-content/create-upload-assets.md#asset-details) section, make note of this URL.
  - **lambda**: We need to install the node modules inside this and then upload the zip file onto AWS lambda function.

To do this, open the command prompt, move inside the lambda directory, and run the following command:

```
npm install
```

Then, build the zip file using the following command:

```
npm run build
```

Once you run the above command, a **brighcove.zip** file will be created.

**Note**: The **npm build** command we discussed above will work for Mac and Linux users. If you are on Windows, the **npm build** command may not work. In that case, after installing the dependencies, you will have to manually zip the code files, name them brightcove.zip, and then upload them as shown below:

- Now in your AWS account, click on the **Code** tab (if not already selected). Inside the **Code source** section, click on the **Upload from** dropdown and select the **.zip file** option.
- In the **Upload a .zip** file modal, click on the **Upload** button and select the zipped file that you just created. Then, click on **Save**.
- In the **Runtime settings** option, keep **Handler** as **index.handler**.
- Scroll up and select the **Configuration** tab. Click on the **Environment variables** option on the left and add the following variables inside it by clicking on **Edit** and then **Add environment variable**.

**clientId**: The value of clientId we generated in the [above steps](#create-and-set-up-your-brightcove-account)  
**clientSecret** - The value of clientId we generated in the [above steps](#create-and-set-up-your-brightcove-account)

- Once added, click on **Save**. Your lambda function is now ready. Scroll up to the **Function** overview section and click on **+ Add trigger**.
- On the **Add trigger** screen, select **API Gateway** from the **Select a trigger** dropdown.
- Select **Create an API**, from the **API dropdown**. Then, select **REST API** inside the **API type** block, **Open** from the **Security** dropdown, and click on **Add**.![API_Gateway_creation.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt863b739c8597f92b/6137d44e282922397db1c9d1/API_Gateway_creation.png)
- An API gets created for your lambda function. Under the **Configuration** tab, click on **Triggers** you will see **API Gateway**.
- Click on the **Details** link, you will find your **API endpoint**. Make a note of it as we will need it while setting up the Brightcove extension in Contentstack.
- We now need to enable CORS for our API Gateway. So click on the **API Gateway** name as shown below:![Enabling_CORS.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt665a637ebc6dac76/6137d4e14ae6cd43e46eaceb/Enabling_CORS.png)
- On the **Amazon API Gateway** screen, click on the **Actions** dropdown and select **Enable CORS**. This is a mandatory step for the successful implementation of this extension.
- On the **Enable CORS** screen, select **DEFAULT 4XX** from the **Gateway Responses for BrightcoveExtension-API API** option and click on **Enable CORS and replace existing CORS headers** as shown below:![Enable_CORS_3.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt583f0fcc7be9fa22/6137d57b876fcf3cb80c33d5/Enable_CORS_3.png)
- Upon receiving the **Confirm method changes pop-up** message, click on **Yes, replace existing values**.![Enable_CORS_4.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltbb2209f0b6261a57/6137d5a7d6b1f5398353d47c/Enable_CORS_4.png)
- After the successful completion of this operation, click on the **Actions** drop-down again and select **Deploy API** inside **API ACTIONS**.![Deploy_API.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt7261c74e3d5cf036/6137d5cc4572ce3df5317402/Deploy_API.png)
- On the **Deploy API** screen, select **[New Stage]** from the **Deployment** **stage** drop-down. Enter **Dev** (or whatever name you would like to name it) as the value for **Stage name**, and an optional description for **Stage description** and **Deployment description**. Click on **Deploy**.
- On the next screen that you will get after clicking on Deploy, you will get an **Invoke URL** as shown below:
- Make note of this URL as we will need it when we set up the configuration parameter for our extension in Contentstack.
- Click on the **Save** button at the bottom.

  **Note**: At the end of the Invoke URL, ensure to append the name of your lambda function. In our case, the name of the lambda function is **BrightcoveExtension**. So the invoke URL for us would be *https://xxxxxxd.xxyyxx-api.us-east-2.amazonaws.com/Dev/BrightcoveExtension*. This complete URL will become the value of our **ProxyURL** config parameter during the [Extension setup](#add-the-brightcove-custom-field-extension-to-your-stack).

With these steps, we have successfully set up our AWS lambda function and the API Gateway. Let's move ahead and create an extension in Contentstack.

## Add the “Brightcove” custom field extension to your stack

To add this extension to your stack, log in to your [Contentstack account](https://app.contentstack.com/#!/login) and perform the following steps:

- Go to your [stack](../set-up-stack/about-stack.md), and click on the **Settings** icon on the left navigation panel.
- Click on **Extensions**. You can also use the shortcut keys “alt + X” for Windows OS users, and “option + X” for Mac OS users to access the extensions menu.
- On the **Extensions **page, click on the **+ New Extension** button, and select **Create new**.![Brightcove_1_Highlighted.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt1ff4061fa675cb39/60bd820df77af428924b908f/Brightcove_1_Highlighted.png)
- In the **Select Extension Type** window, select **Custom Field**.![Brightcove_2_no_highlight.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltd253390db7398553/60bd821c68689d78c8630599/Brightcove_2_no_highlight.png)
- On the **Create New Extension **page, enter values in the fields as given below:
  - **Title ***(required)*: Provide a suitable title, for example “Brightcove,” for your custom field. This title will be visible when you select the extension in the [**custom**](../create-content-types/custom.md) field in your content type.
  - **Field data type ***(required)*: Select the data type in which the input data of the field should be saved in Contentstack. In this case, select **JSON**.
  - **Multiple** (optional): Select this option.
  - **Hosting method ***(required)*: Select **Hosted by Contentstack** as the hosting method for this content type.
  - **Extension Source Code ***(required)*****: Specify the extension code here. Copy the source code from the `**index.html**` file located in the root folder, of the code file you received from our support team, and paste it in the **Extension source code** field.
  - **Config Parameter**: Enter the configuration details in your custom field settings as shown in the example below:

```
{
    "proxyUrl": "Enter the Invoke URL after appending the lambda function name",
    "oauthUrl": "/v4/access_token",
    "brightcoveUrl": "/v1/accounts/{Brightcove User ID}/videos",
   "videocountUrl": "/v1/accounts/{Brightcove User ID}/counts/videos",
   "searchUrl": "/v1/accounts/{Brightcove User ID}/videos?query=",
   "saveFullResponse": false,
   "redirectUrl": "Redirect URL"

}
```

For **Brightcove User ID**, you need to enter your **Brightcove Account ID**. To get it, go to your Brightcove account dashboard, click on **ADMIN** and select **Account Information**. You'll find your Account ID as highlighted in the following screenshot:

For the **redirectURL** parameter, enter the URL of the **index.html** file that you uploaded as an asset.

- **Save **the custom field.

## Use your custom field

Once you have added a custom field, you can use it in your content type like any other field. To add a custom field in your content type, perform the following steps:

- Click on the “Content Models” icon on the left panel and click the **+ New Content Type** button.
- [Create a content type](../create-content-types/create-a-content-type.md) and add the [**Custom**](../create-content-types/custom.md) field to it by clicking on the “Insert a field” link denoted by a **+ **sign.
- Under **Select Extension**, select the “Brightcove” field that you created and set the other properties. You can add other fields as per requirements![Brightcove_3_Highlighted.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt796fdc4cc866bcf1/60bd8229f33fd90fa1ed0386/Brightcove_3_Highlighted.png)
- Finally, click on **Save and Close** to save your changes.
- Next, [create an entry](../../content-managers/author-content/create-an-entry.md) for this content type, and you will see the **Brightcove **field in action.![Brightcove_4_highlighted.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blta7c7b50c7a008321/60bd82503fb413770446e76d/Brightcove_4_highlighted.png)
- Click on **Choose Videos**. Your Brightcove video playlist will appear. Select the videos you want to add in your entry and click on the **Add Selected Videos** button.

**Additional Resource: **You can also refer to our other documents on custom video extensions such as [YouTube](./youtube.md), [Ooyala](./ooyala.md), and [Vimeo](./vimeo.md).

## Common questions

### Is this the recommended way to integrate Brightcove with Contentstack?

No. **Note**: This documentation uses the legacy approach with extensions. We have launched Brightcove as a Marketplace App. For more information on Brightcove, please refer to the [Brightcove App Installation Guide](../marketplace-apps/brightcove.md).

### What value should I use for `proxyUrl`?

Use the **Invoke URL** and append the name of your lambda function, as described in the note under the API Gateway setup section.

### Where do I find the Brightcove User ID used in the config?

For **Brightcove User ID**, you need to enter your **Brightcove Account ID** from **ADMIN** → **Account Information** in Brightcove.

### What should I use for the `redirectUrl` parameter?

For the **redirectURL** parameter, enter the URL of the **index.html** file that you uploaded as an asset.