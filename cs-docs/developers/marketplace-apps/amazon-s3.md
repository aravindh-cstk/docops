---
title: "[Marketplace guides and apps] - Amazon S3 App Installation Guide"
description: Amazon S3 App Installation Guide
url: https://www.contentstack.com/docs/marketplace/amazon-s3
product: Contentstack
doc_type: marketplace-app-guide
audience:
  - developers
  - admins
version: v1
last_updated: 2026-03-25
---

# [Marketplace guides and apps] - Amazon S3 App Installation Guide

This page explains how to install and configure the Amazon S3 app from the Contentstack Marketplace and then use it inside entries (as a Custom Field or JSON Rich Text Editor plugin). It is intended for Contentstack stack owners/admins who need to connect an Amazon S3 account for uploading, managing, and selecting assets within Contentstack.

## Amazon S3 App Installation Guide

Amazon S3 (**Simple Storage Service**) is a scalable, high-speed, web-based cloud storage service designed for storing and retrieving any amount of data from anywhere. Amazon S3 seamlessly integrates with Contentstack to offer scalable and secure storage for your digital assets.

With this integration, you can upload, store, retrieve, and manage large volumes of media files and documents directly from your Contentstack environment. It ensures high availability and durability, making it ideal for enterprise-grade content management workflows.

By leveraging Amazon S3, teams can enhance performance, reduce latency, and streamline asset delivery across global audiences. Whether you are hosting images, videos, or backups, the combination of Amazon S3 and Contentstack delivers a reliable, efficient, and future-ready content infrastructure for modern digital experiences.

After installing the Amazon S3 app from the Contentstack Marketplace, you can use it within your stack to upload, manage, store, and distribute the digital assets from the Amazon S3 account within your entries.

## Prerequisites

- [Amazon S3 account](https://aws.amazon.com/)
- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization/Stack as the [Owner](../organization/organization-roles.md#organization-owner)/[Admin](../organization/organization-roles.md#organization-admin)

Let's follow this step-by-step guide to install and configure the Amazon S3 app within your stack.

## Steps for Execution

- [Retrieve the Credentials for your Amazon S3 account](#retrieve-the-credentials-for-your-amazon-s3-account)
- [Install and Configure the Amazon S3 app in Marketplace](#install-and-configure-the-amazon-s3-app-in-marketplace)
- [Use the Amazon S3 app within your entry](#use-the-amazon-s3-app-within-your-entry)

## Retrieve the Credentials for your Amazon S3 account

To authenticate and authorize access to AWS services, the **AWS Access Key ID** and **Secret Access Key** credentials are required during the app configuration in [step 2](#install-and-configure-the-amazon-s3-app-in-marketplace).

The **Access Key ID** is a unique identifier for the user or app and the **Secret Access Key** is used to sign requests and must be kept confidential.

Log into the [AWS Management Console](https://aws.amazon.com/), navigate to the **IAM (Identity and Access Management)** service, and create a new user or access key.

- When you create an **Access Key** pair, you should download and securely store the **Secret Access Key** immediately, as it cannot be retrieved later.

  **Note**: Each user can have up to two access keys at any time. If you lose your **Secret Access Key**, you must delete the access key and create a new one.

If you have any queries, you can contact the Amazon S3 Support team.

## Install and Configure the Amazon S3 app in Marketplace

To install the app in Contentstack, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps below:

From the left-hand side primary navigation, click the **Marketplace** icon.

- Click **Apps** from the left panel.
- Within the Marketplace, you can see the available apps. Hover over the **Amazon S3** app and click **Install**.![marketplace_appswitcher_amazons3.png](https://assets.contentstack.io/spaces/am51d76353d996c1fe/assets/am0abd36c3522ca0ce/e3872cf3c614bebdc2b8af7a/marketplace_appswitcher_amazons3.png?locale=en-us)
- In the pop-up window, select the stack where you want to install the Amazon S3 app, accept the **Terms of Service**, and click the **Install** button.![Amazon-S3-App-Install](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt583329acaa7ad6ac/67f659cb185894eb5ea0aeb4/Amazon-S3-App-Install.png)
- On the **Configuration** screen, enter the following:**AWS S3 Access Key ID**: Enter the Amazon S3 Access Key ID retrieved from your Amazon S3 account in [step 1](#retrieve-the-credentials-for-your-amazon-s3-account).
- **AWS S3 Secret Access Key**: Enter the Amazon S3 Secret Access Key retrieved from your Amazon S3 account in [step 1](#retrieve-the-credentials-for-your-amazon-s3-account).
- **Region Selector**: Select the region from the provided options.![Amazon-S3-Credentials](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt56a278898852704a/67f659cb22f0b32aff34cbfb/Amazon-S3-Credentials.png)
- **Bucket Selector**: Based on the credentials and regions selected, add the desired buckets from the drop-down.![Amazon-S3-Credentials-Bucket-Selector](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcf8d8364c4fba38f/67f659cb1858945829a0aeb0/Amazon-S3-Credentials-Bucket-Selector.png)
- **Choose the Amazon S3 Keys to Save in Entry**: Choose how to save the data fetched from the Amazon S3 account in Contentstack entries.If you select the **All Fields** option, you can select only a limited number of assets in the entry.
- For **Custom Fields**, you can search and add specific Amazon S3 you want to save in entries.**Note**: When you change the settings from **All Fields** to **Custom Fields**, and vice versa, any existing and newly added assets in the entry will store the data according to the updated configuration settings. This is applicable to Custom and JSON RTE fields.

If you select **Custom Fields** then the Amazon S3 Keys drop-down appears. By default, **Key**, **FileType**, **BucketName**, **LastModified**, **Size**, and **SignedUrl** keys are already selected inside the dropdown. If you want to create a new key, click the **+ New Key Field** option.

In the **Add Amazon S3 Key Path** modal, enter the **Amazon S3 Key Path** and click the **Create** button to create a new key.

- Click the **Save** button.
- On the **UI Locations** tab, you can see the predefined app locations. You can use the toggle button corresponding to each UI location to enable or disable it based on your requirements.![Amazon-S3-UI-Locations](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb36ba1d40d06ed40/67f659b77b5c3c86e1c37264/Amazon-S3-UI-Locations.png)

  **Note**: The app requires at least one UI location to be enabled, otherwise you will not be able to save your app configuration settings.
- If the webhook is enabled for your app, you can view the webhook logs under the **Webhook** tab.

  **Additional Resource**: For more information on UI location and webhooks, please refer to the [Installed Apps](../marketplace-platform-guides/installed-apps.md#view-edit-configuration-ui-locations-and-webhook) guide.
- Click **Open Stack** to start using the Amazon S3 app.

## Use the Amazon S3 App within your Entry

To use the Amazon S3 app within an entry of your stack, follow the steps given below:

Go to your stack, click the **Content Models** icon in the left navigation panel, and click the **+ New Content Type** button.

- [Create a content type](../create-content-types/create-a-content-type.md) by adding relevant details as displayed below:![Amazon-S3-Content-Type](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt489ef289b971835c/67f659cb6481d443ff8d1a33/Amazon-S3-Content-Type.png)

There are two ways to use the Amazon S3 app in your entry:

- [Custom Field](#steps-to-use-the-amazon-s3-app-as-a-custom-field)
- [JSON Rich Text Editor Field](#steps-to-use-the-amazon-s3-app-as-a-json-rte-plugin)

### Steps to Use the Amazon S3 App as a Custom Field

- In the **Content Type Builder** page, add a [Custom](../create-content-types/custom.md) field in your content type by clicking the **Insert a field** link represented by a **+** sign.
- Under **Select Extension or App**, select **Amazon S3** and click the **Proceed** button.![Amazon-S3-Custom-Field-Add-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte18f21f917e2126a/67f659cb617c779ca9562964/Amazon-S3-Custom-Field-Add-App.png)This adds Amazon S3 to the custom field.![Amazon-S3-Custom-Field-Added-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte9fed3fadb1c5f80/67f659cb929efb62ebc7d8b7/Amazon-S3-Custom-Field-Added-App.png)
- After adding the app in a custom field, click **Save** or **Save and Close** to save your changes.
- To use the Amazon S3 app, create an entry in this newly created content type. In the left navigation panel, navigate to the **Entries** page, click **+ New Entry** to create a new entry for the above content type, and then click **Proceed**.You can see the Amazon S3 app’s custom fields on your entry page, as shown below:![Amazon-S3-Custom-Field-Sample-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4c31889d1d9ab41b/67f659c016c10fac5d57aade/Amazon-S3-Custom-Field-Sample-Entry.png)
- You can now directly **Upload Assets** in the selected bucket from the custom field using the given steps:Click the **Upload to S3** button.
- Select the **Bucket** from the top-right drop-down and then click **Choose File(s)** to add new assets.![Amazon-S3-Custom-Field-Upload-Assests-Select-Bucket-And-Choose-Files](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb0160be931592a26/67f659bf61ba907164f368dd/Amazon-S3-Custom-Field-Upload-Assests-Select-Bucket-And-Choose-Files.png)

  **Note**: You can add up to 10 assets in one go.
- After selecting the files, click the **Upload** button.![Amazon-S3-Custom-Field-Upload-Assests-Upload-Button](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf6179b8b161104bd/67f659bf301cf14c449835f3/Amazon-S3-Custom-Field-Upload-Assests-Upload-Button.png)
- After uploading the assets successfully, the **Upload Status** bar will be marked as **100%** and you will also get the confirmation message.![Amazon-S3-Custom-Field-Upload-Assests-Uploaded](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc62f2db4eedcb897/67f659bf7b5c3c6dcec37268/Amazon-S3-Custom-Field-Upload-Assests-Uploaded.png)
- Now, click **+ Choose Asset(s)** button.![Amazon-S3-Custom-Field-Choose-Assests](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt388e0ed674a76e7c/67f659bf94d25d3d9a8671ad/Amazon-S3-Custom-Field-Choose-Assests.png)
- Choose the required assets from the Amazon S3 selector page and click **+ Add Assets** to add them to your entry.You can also search for assets in the selected bucket within the Amazon S3 selector page.

**Note:**

Search is case-sensitive.

- In case of renamed or deleted assets, a warning icon is visible along with the notification.
- The assets you select get added to your entry in the thumbnail view.To view the assets in the list view, select the **List** view option from the dropdown.

The assets you select get added to your entry in the list view.

- Hover over the image to view the following options:Click the **Reorder** icon to drag and reorder the asset.
- Click the **Open in New Tab** icon to open the asset in the new tab to preview.
- Click the **Remove** icon to remove the asset.

**Thumbnail View**

**List View**

- After adding the asset(s), **Save** and **Publish** your entry.

### Steps to Use the Amazon S3 App as a JSON RTE Plugin

- In the **Content Type Builder** page, add a [JSON Rich Text Editor](../json-rich-text-editor/about-json-rich-text-editor.md) field in your content type by clicking the **Insert a field** link represented by a **+** sign.
- Under **Select Plugin(s)**, select **Amazon S3**, and then click **Add Plugin(s)**.![Amazon-S3-JSONRTE-Field-Add-Plugin](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt33e2068e9be7beaa/67f659b66500a1238eb76390/Amazon-S3-JSONRTE-Field-Add-Plugin.png)This adds Amazon S3 in the JSON Rich Text Editor.![Amazon-S3-JSONRTE-Field-Added-Plugin](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt88954559cfb99013/67f659b7047ef4c6e237cd2f/Amazon-S3-JSONRTE-Field-Added-Plugin.png)
- After adding the app in a JSON Rich Text Editor field, click **Save** or **Save and Close** to save your changes.
- To use the Amazon S3 app, create an entry for this content type. In the left navigation panel, navigate to the **Entries** page, click **+ New Entry** to create a new entry for the above content type, and then click **Proceed**.You can see the Amazon S3 icon in the JSON Rich Text Editor field on your entry page, as shown below:![Amazon-S3-JSONRTE-Field-Sample-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt59e6885819489bfb/67f659b7f70ebfe503f34d00/Amazon-S3-JSONRTE-Field-Sample-Entry.png)
- Click the **Amazon S3** app icon.![Amazon-S3-JSONRTE-Field-App-Icon](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc198fed65827c08c/67f659b64987446344c83360/Amazon-S3-JSONRTE-Field-App-Icon.png)
- Choose the required assets from the Amazon S3 selector page and click **+ Add Assets** to add them to your entry.You can also search for assets in the selected bucket within the Amazon S3 selector page.

**Note**: Search is case-sensitive.

- The assets you select get added to your entry.![Amazon-S3-JSONRTE-Field-Assets](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt87e1026325f9a650/67f659b75cd51170f2ef468a/Amazon-S3-JSONRTE-Field-Assets.png)
- To resize the image, drag the corner of the image and adjust the size as required. Hover over the image to view the options to **Open in New Tab**, **Edit Properties**, and **Remove** the asset.![Amazon-S3-JSONRTE-Field-Assets-Options](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd4fac1894f8fcafe/67f659b7b62f3b45ff34b5f2/Amazon-S3-JSONRTE-Field-Assets-Options.png)

  **Additional Resource**: You can use alignment and inline asset features to edit the asset placement within the [JSON Rich Text Editor](../json-rich-text-editor/about-json-rich-text-editor.md) field.
- After adding the asset(s), **Save** and **Publish** your entry.

## Common questions

### Who can install the Amazon S3 app in Contentstack?
Access to the Contentstack Organization/Stack as the Owner/Admin is required.

### What credentials are required to configure the app?
The **AWS Access Key ID** and **Secret Access Key** credentials are required during the app configuration.

### Where can the Amazon S3 app be used inside Contentstack entries?
There are two ways to use the Amazon S3 app in your entry: **Custom Field** and **JSON Rich Text Editor Field**.

### Is search case-sensitive in the Amazon S3 selector page?
Yes. Search is case-sensitive.