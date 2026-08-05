---
title: "[Automations guides and connectors] - AWS S3"
description: AWS S3 connector for Automations (Automation Hub) to create, delete, and list files in AWS S3 buckets.
url: https://www.contentstack.com/docs/agent-os/aws-s3
product: Contentstack
doc_type: connector-guide
audience:
  - developers
  - automation-builders
version: v1
last_updated: 2026-03-26
---

# [Automations guides and connectors] - AWS S3

This page explains how to configure and use the AWS S3 connector in Contentstack Automations (Automation Hub). It is intended for developers and automation builders who need to connect an AWS S3 account and set up actions to create, delete, or fetch files from S3 buckets.

## AWS S3

The AWS S3 connector stores files in AWS buckets that you can retrieve later. For example, consider a scenario where you create an entry in the Contentstack CMS. You can create a trigger that activates when you create a new entry and the backup of the created entry gets stored in the AWS bucket. With the AWS S3 Connector, you can fetch the details of all the files and also delete an existing object from your AWS bucket.

## Prerequisites

To use the AWS S3 connector, you first need to add your [AWS S3 account](https://aws.amazon.com/s3/). To do so, follow the steps given below:

### Connect your AWS S3 Account to Automate

- Click **Configure Action Step** from the left navigation panel.
- Click **Action Step **to configure third-party services.
- Within the **Configure Action Step**, click the **AWS S3** connector.![Select_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc31970e34fdb9e35/66822a549b2b7abe05d9790d/Select_Connector.png)
- Under **Choose an Action **tab, select any one action from the list. Here, we are selecting the **Create a New Object** action.![Select_Create_an_Object_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt48b6ee0882d5c5f9/66822a54aaed412f1644d50c/Select_Create_an_Object_Action.png)
- On the **Configure Action **page, click the **+ Add New Account** button to add your AWS S3 account.![Add_Create_Object_Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0db31c3a3a3e6e18/66822a54c8ca776685cdf4f2/Add_Create_Object_Account.png)
- In the **Authorize **modal, enter a **Title**, enter the **Access Key**, **Secret Key**, and the **Region** details. You can generate the **Access** and **Secret Key **by navigating through **Security credentials **> **Access Keys **>** Create New Access Key **in your AWS account.

**Additional Resource:** For more information, refer to the [Managing access keys for IAM users](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) document.

- Then click **Authorize**.![Authorize_Button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7be9c8c0e6292bdf/66822a54e316341f9171da86/Authorize_Button.png)

This sets up your AWS S3 account for the AWS S3 action connector.

## Set up the AWS S3 Connector

Perform the following steps to set up the AWS S3 connector:

- From the left navigation panel, click **Configure Action **Step.
- Then, click **Action Step **to configure third-party services.
- Within the **Configure Action Step**, click the **AWS S3 **connector.

**Note:** You can sort and search the connector(s) based on the filter.

- Under **Choose an Action**, you will see three actions: **Create a New Object**, **Delete an Object**, and **Get All Files**.![Select_Actions.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3593e27c88bc6d6e/66822a54fcee4a845d2e0101/Select_Actions.png)

Once done, you can go ahead and set up your AWS S3 connector.

### Create a New Object

This action lets you create a new object in the AWS S3 bucket.

- Under **Choose an Action t**ab, select the** Create a New Object **action.
- On the** Create a New Object Configure Action** page, enter the details given below:Click **+ Add New Account **button to connect your AWS account as shown in the [Connect your AWS S3 Account to Automate](#connect-your-aws-s3-account-to-automate) step.
- You can select the AWS **Bucket Name** from the **Lookup **list that appears when you click the textbox. The lookup drop-down loads the buckets already defined and present in your AWS S3 account.
- Enter the **File Name **(for example, File01) or/and any value from the values list.
- In the **Source **drop-down, select the Source of the upload (Content or File URL) and the **Input Value **for each source.![Select_Create_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6315dc7f60e20c42/66822a5efcee4a44a62e0109/Select_Create_Fields.png)
- Click the **Show Optional Fields **toggle button to enter the text for the **Tags **and **Metadata **optional fields.![Show_Optional_Fields_Create.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt326c6848c3583552/66822a5eabc51390355d1f4c/Show_Optional_Fields_Create.png)
- Click **Proceed**.
- Check if the details are correct. If yes, click **Test Action**.![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf87279a35e14d708/659d18e62d957dd667fbca50/Test_Action.png)
- Once set, click **Save and Exit**.****![Save_Exit_Create.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd4cd9fdda05d75c0/66822a54ee05f3894a30058f/Save_Exit_Create.png)
- Log into your AWS account and see the list of files in the bucket. In the AWS account’s bucket, you can see the created file.
- Download the file and open it. You can see the content stored in the file.

### Delete an Object

This action lets you delete an existing object from the AWS S3 bucket.

- Under **Choose an Action** tab, select the **Delete an Object** action.
- On the** Delete an Object Configure Action** page, enter the details given below:Click **+ Add New Account **button to connect your AWS S3 account as shown in the [Connect your AWS S3 Account to Automate](#connect-your-aws-s3-account-to-automate) step.
- You can select the AWS **Bucket Name **from the **Lookup **list. The drop-down loads the buckets already defined and present in your AWS S3 account.
- Select the **File Name **from the **Lookup **drop-down. You can select multiple files to delete.![Select_Fields_Delete_Object.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf1cf38f9014a7529/66822a5ebbf7b4e178a762ee/Select_Fields_Delete_Object.png)
- Click **Proceed**.
- Click the **Test Action **button to test the configured action.![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt185dfb5fea1f3561/66822a5eee05f32dcf300593/Test_Action.png)
- Once set, click **Save and Exit**.![Save_Exit_Delete.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8868533759f26a85/66822a54c66c8836a469e0e1/Save_Exit_Delete.png)

### Get All Files

This action lets you fetch the details of all the files from the AWS S3 bucket.

- Under **Choose an Action **tab, select the **Get All Files** action.
- On the **Get All Files Configure Action** page, enter the details given below:Click **+ Add New Account** button to connect your AWS S3 account as shown in the [Connect your AWS S3 Account to Automate](#connect-your-aws-s3-account-to-automate) step.
- Select the AWS **Bucket Name **from the **Lookup **list. The drop-down loads the buckets already defined and present in your AWS S3 account.
- Optionally, enable the **Show Optional Fields **toggle button to display the **Folder Name **field. You can select the folder to fetch all the associated files.

  **Note:** If you do not select any folder name, all the files available in the selected AWS S3 bucket will be fetched.![Select_Fields_Get.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbd73b4b0db27b1b8/66822a5eabc51383dd5d1f48/Select_Fields_Get.png)
- Click **Proceed**.
- Click the **Test Action **button to test the configured action.
- Once set, click **Save and Exit**.![Save_Exit_Get.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0619eacf9e0bb997/66822a54fcee4a54122e0105/Save_Exit_Get.png)

This sets up your **AWS S3** action connector.

## Common questions

### Do I need an AWS account before using the AWS S3 connector?
Yes. To use the AWS S3 connector, you first need to add your [AWS S3 account](https://aws.amazon.com/s3/).

### Which actions are available in the AWS S3 connector?
Under **Choose an Action**, you will see three actions: **Create a New Object**, **Delete an Object**, and **Get All Files**.

### Where do I get the Access Key and Secret Key for authorization?
You can generate the **Access** and **Secret Key **by navigating through **Security credentials **> **Access Keys **>** Create New Access Key **in your AWS account.

### What happens if I don’t select a folder name in “Get All Files”?
If you do not select any folder name, all the files available in the selected AWS S3 bucket will be fetched.

<!-- filename: automations-guides-and-connectors-aws-s3.md -->