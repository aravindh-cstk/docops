---
title: "[Extensions] - Amazon S3"
description: Amazon S3 custom field extension allows you to fetch your data (documents, images, videos, etc) from your S3 bucket, and display them into a field of a content type in your stack.
url: https://www.contentstack.com/docs/developers/create-custom-fields/amazon-s3
product: Contentstack
doc_type: extension-guide
audience:
  - developers
  - content-managers
version: unknown
last_updated: 2026-03-26
---

# [Extensions] - Amazon S3

This page explains how to create and configure the Amazon S3 custom field extension in Contentstack, so developers can connect an S3 bucket to a custom field and content managers can select or upload S3 assets while creating entries.

Amazon S3

**Amazon S3 **custom field extension allows you to fetch your data (documents, images, videos, etc) from your [S3 bucket](https://aws.amazon.com/s3/), and display them into a [field](../create-content-types/about-fields.md) of a [content type](../create-content-types/about-content-types.md) in your [stack](../set-up-stack/about-stack.md). By using this extension, you can also upload your assets to your S3 bucket directly from the entry page of your content type.

Thus, while creating [entries](../../content-managers/author-content/about-entries.md), you can not only select any of the data (as mentioned above) as the input value for the field but also upload files and other assets to your S3 bucket.

This step-by-step guide explains how to create an Amazon S3 custom field extension for your content types in Contentstack. The steps performed are as follows:
- [Create an Amazon S3 Service account](#create-an-amazon-s3-service-account)
- [Add the Amazon S3 custom field extension to your stack](#add-the-amazon-s3-custom-field-extension-to-your-stack)
- [Use your custom field](#use-your-custom-field)

## Prerequisites
- [Amazon S3 Service account](https://aws.amazon.com/s3/)
- S3 access key ID
- S3 Secret access key
- [Contentstack account](https://app.contentstack.com/#!/login)

## Create an Amazon S3 Service Account

In order to use this extension, you need to create an account with Amazon Web Service.  To do that, follow the steps given below:

Go to [https://aws.amazon.com/s3/](https://aws.amazon.com/s3/) and click on **Get Started with Amazon S3**.
- On the next screen, you'll be asked to log in. If you already have an account, just log in with your credentials. Else, click on **Create a new AWS account**.
- Then, follow the on-screen instructions and get your account created. AWS will notify you by email when your account gets activated and available for you to use.
- Once your account is created, log into it. Select** S3** from the **Services** drop-down. You'll see your dashboard as shown below:
- To start using S3, you need to create a bucket for your account which will hold your objects. To do that, you can click on Create bucket. Then, follow the onscreen instructions and get your bucket created.
- Once that is done, click on the bucket and add your objects. You need to make the objects public. So within the **Objects** tab, select the object(s), then click on the **Actions** drop-down, and select **Make public**.
- Now click on the **Permissions** tab and scroll down to the **Cross-origin resource sharing** (**CORS**) section. Click on **Edit** and then, paste the following inside it:

```
[
    {
        "AllowedHeaders": [
            "*"
        ],
        "AllowedMethods": [
            "HEAD",
            "GET",
            "PUT",
            "POST"
        ],
        "AllowedOrigins": [
            "*"
        ],
        "ExposeHeaders": [
            "ETag",
            "x-amz-meta-custom-header"
        ]
    }
]
```

- Scroll up to the **Block public access** section and ensure all options are unchecked so that your objects remain public. If any option is enabled, click on **Edit** and ensure that it is unchecked as shown below:
- Now, click on the arrow next to your username at the top and select **My Security Credentials** as shown below:
- Then, click on **Access keys (access key ID and secret access key)**.
- Click on **Create New Access Key** and then on **Show Access Key** to view your keys. Ensure that you save the keys. You'll need these keys while setting up your extension in Contentstack.  You can also download the keys by clicking on the **Download Key File** button.

**Additional Resource**: For more information about the features of Amazon S3, its pricing, and FAQs, visit the [Amazon S3 product](https://aws.amazon.com/s3/) page.

## Add the Amazon S3 Custom Field Extension to your Stack

To add the Amazon S3 custom field to your stack, log in to your [Contentstack account](https://app.contentstack.com/) and perform the following steps:

Go to your [stack](../set-up-stack/about-stack.md) and click on the “Settings” icon on the left navigation panel.
- Click on **Extensions**. You can also use the shortcut keys “alt + X” for Windows OS users, and “option + X” for Mac OS users to access the extensions menu.
- On the **Extensions** page, click on the **+ New Extension **button, and select **Create new**.
- In the **Select Extension Type** window, select **Custom Field**.
- On the **Create New Extension** page, enter details in the fields as given below:**Title**: Provide a suitable title. For example, ****“AmazonS3.”
- **Field data type**: Select the data type in which the input data of the field should be saved in Contentstack. Select **JSON** in this case.
- **Multiple**: Keep this option unchecked.
- **Hosting method**: Set the hosting method to **Hosted By Contentstack**.
- **Extension Source Code**:  In this field, you need to enter the extension code. If Extensions are part of your plan, contact our Support team to get the code for the extension. Once you have downloaded the code, copy the code from the `index.html` file located in the root folder and paste it in the **Extension source code** field.

**Note**: In the downloaded code, inside the **root** folder, there's a **aws-browser** HTML file. Upload this file as an asset in Contentstack by following the steps mentioned in the [Create/Upload](../../content-managers/author-content/create-upload-assets.md) asset article. After uploading the file, you'll get a URL in the [asset details](../../content-managers/author-content/create-upload-assets.md#asset-details) section, make note of this URL.
- **Config Parameter**: Enter the following configuration details as the extension's config parameter:

```
{
  "accessKeyId": ">",
  "secretAccessKey": ">",
  "bucketList": [
    ">",
    ">"
    ],
  "widgetUrl": ">"
}
```

The values for **accessKeyId** and **secretAccessKey** are the same that you generated or downloaded previously. Inside the **bucketList** array, provide the name of the bucket or buckets (if you have multiple buckets).
The value for widgetUrl is the URL of the aws-browser HTML file that you just uploaded as an asset.
- Click on **Save**. This creates your custom field.

Now, let’s understand how you can start using this custom field in your content type.

## Use Your Custom Field

Once you have added a custom field, you can use it in your content type like any other field. To add a custom field in your content type, perform the following steps:

[Create a content type](../create-content-types/create-a-content-type.md) and add the **Custom **field to it.
- Under **Select Extension**, select the “AmazonS3” field that you created and set the other properties. You can add other fields as per requirements.
- Finally, click on either **Save **or** Save and Close** to save your changes.
- Next, [create an entry](../../content-managers/author-content/create-an-entry.md) for this content type, and you will see the **Amazon S3 **field on your entry page as shown below:
- Click on** Choose from S3 Bucket**. If you are still logged into Amazon S3, it will open inside your entry page, from where you can select multiple documents, images, videos, etc, and insert them in your entry. You can also upload items to your S3 bucket from here.

**Note**: The number of items that can be selected depends on the size of the JSON that is to be stored, and currently, only 10 KB of data can be stored. This is due to limitation of the JSON data stored via Custom Field. Refer to our [Custom Field Limitation](./limitations-of-custom-fields.md) doc for more detail.

## Common questions

### Do I need to make my S3 objects public for this extension to work?
The steps include making objects public and ensuring **Block public access** options are unchecked so that your objects remain public.

### Where do I get the `widgetUrl` value used in the config parameter?
It is the URL of the **aws-browser** HTML file that you upload as an asset in Contentstack, available in the asset details section.

### What data type should I choose for the custom field?
The instructions specify selecting **JSON** for **Field data type**.

### Is there a limit to how many items I can select from the S3 bucket?
Yes. The note states that currently, only 10 KB of data can be stored due to limitation of the JSON data stored via Custom Field.