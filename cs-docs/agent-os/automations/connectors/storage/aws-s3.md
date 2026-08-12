---
title: "AWS S3"
description: "Use the AWS S3 connector to store your files in the AWS bucket. You can fetch or delete files from your AWS bucket."
url: /agent-os/aws-s3
---

# AWS S3

## AWS S3

The AWS S3 connector stores files in AWS buckets that you can retrieve later. For example, consider a scenario where you create an entry in the Contentstack CMS. You can create a trigger that activates when you create a new entry and the backup of the created entry gets stored in the AWS bucket. With the AWS S3 Connector, you can fetch the details of all the files and also delete an existing object from your AWS bucket.

## Prerequisites

To use the AWS S3 connector, you first need to add your [AWS S3 account](https://aws.amazon.com/s3/). To do so, follow the steps given below:

### Connect your AWS S3 Account

1.  Click **Configure Action Step** from the left navigation panel.
2.  Click **Action Step** to configure third-party services.
3.  Within the **Configure Action Step**, click the **AWS S3** connector.  
    ![Select_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc31970e34fdb9e35/66822a549b2b7abe05d9790d/Select_Connector.png)
4.  Under **Choose an Action** tab, select any one action from the list. Here, we are selecting the **Create a New Object** action.  
    ![Select_Create_an_Object_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt48b6ee0882d5c5f9/66822a54aaed412f1644d50c/Select_Create_an_Object_Action.png)
5.  On the **Configure Action** page, click the **\+ Add New Account** button to add your AWS S3 account.  
    ![Add_Create_Object_Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0db31c3a3a3e6e18/66822a54c8ca776685cdf4f2/Add_Create_Object_Account.png)
6.  In the **Authorize** modal, enter a **Title**, enter the **Access Key**, **Secret Key**, and the **Region** details. You can generate the **Access** and **Secret Key** by navigating through **Security credentials** \> **Access Keys** \> **Create New Access Key** in your AWS account.
    
    ![4.Generate_Access_Key.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt3f5986b454f8b00d/63860091ff8d4a109d0e4216/4.Generate_Access_Key.jpg)
    
    **Additional Resource:** For more information, refer to the [Managing access keys for IAM users](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) document.
    
7.  Then click **Authorize**.  
    ![Authorize_Button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7be9c8c0e6292bdf/66822a54e316341f9171da86/Authorize_Button.png)

This sets up your AWS S3 account for the AWS S3 action connector.

## Set up the AWS S3 Connector

Perform the following steps to set up the AWS S3 connector:

1.  From the left navigation panel, click **Configure Action** Step.
2.  Then, click **Action Step** to configure third-party services.
3.  Within the **Configure Action Step**, click the **AWS S3** connector.  
    ![Select_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc31970e34fdb9e35/66822a549b2b7abe05d9790d/Select_Connector.png)
    
    **Note:** You can sort and search the connector(s) based on the filter.
    
4.  Under **Choose an Action**, you will see three actions: **Create a New Object**, **Delete an Object**, and **Get All Files**.  
    ![Select_Actions.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3593e27c88bc6d6e/66822a54fcee4a845d2e0101/Select_Actions.png)

Once done, you can go ahead and set up your AWS S3 connector.

### Create a New Object

This action lets you create a new object in the AWS S3 bucket.

1.  Under **Choose an Action t**ab, select the **Create a New Object** action.
2.  On the **Create a New Object Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your AWS account as shown in the [Connect your AWS S3 Account](#connect-your-aws-s3-account) step.
    2.  You can select the AWS **Bucket Name** from the **Lookup** list that appears when you click the textbox. The lookup drop-down loads the buckets already defined and present in your AWS S3 account.
    3.  Enter the **File Name** (for example, File01) or/and any value from the values list.
    4.  In the **Source** drop-down, select the Source of the upload (Content or File URL) and the **Input Value** for each source.  
        ![Select_Create_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6315dc7f60e20c42/66822a5efcee4a44a62e0109/Select_Create_Fields.png)
    5.  Click the **Show Optional Fields** toggle button to enter the text for the **Tags** and **Metadata** optional fields.  
        
        ![Show_Optional_Fields_Create.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt326c6848c3583552/66822a5eabc51390355d1f4c/Show_Optional_Fields_Create.png)
3.  Click **Proceed**.
4.  Check if the details are correct. If yes, click **Test Action**.  
    ![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf87279a35e14d708/659d18e62d957dd667fbca50/Test_Action.png)
5.  Once set, click **Save and Exit**.![Save_Exit_Create.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd4cd9fdda05d75c0/66822a54ee05f3894a30058f/Save_Exit_Create.png)
6.  Log into your AWS account and see the list of files in the bucket. In the AWS account’s bucket, you can see the created file.
7.  Download the file and open it. You can see the content stored in the file.  
    

### Delete an Object

This action lets you delete an existing object from the AWS S3 bucket.

1.  Under **Choose an Action** tab, select the **Delete an Object** action.
2.  On the **Delete an Object Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your AWS S3 account as shown in the [Connect your AWS S3 Account](#connect-your-aws-s3-account) step.
    2.  You can select the AWS **Bucket Name** from the **Lookup** list. The drop-down loads the buckets already defined and present in your AWS S3 account.
    3.  Select the **File Name** from the **Lookup** drop-down. You can select multiple files to delete.  
        ![Select_Fields_Delete_Object.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf1cf38f9014a7529/66822a5ebbf7b4e178a762ee/Select_Fields_Delete_Object.png)
3.  Click **Proceed**.
4.  Click the **Test Action** button to test the configured action.  
    ![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt185dfb5fea1f3561/66822a5eee05f32dcf300593/Test_Action.png)
5.  Once set, click **Save and Exit**.  
    ![Save_Exit_Delete.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8868533759f26a85/66822a54c66c8836a469e0e1/Save_Exit_Delete.png)

### Get All Files

This action lets you fetch the details of all the files from the AWS S3 bucket.

1.  Under **Choose an Action** tab, select the **Get All Files** action.
2.  On the **Get All Files Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your AWS S3 account as shown in the [Connect your AWS S3 Account](#connect-your-aws-s3-account) step.
    2.  Select the AWS **Bucket Name** from the **Lookup** list. The drop-down loads the buckets already defined and present in your AWS S3 account.
    3.  Optionally, enable the **Show Optional Fields** toggle button to display the **Folder Name** field. You can select the folder to fetch all the associated files.
        
        **Note:** If you do not select any folder name, all the files available in the selected AWS S3 bucket will be fetched.
        
        ![Select_Fields_Get.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbd73b4b0db27b1b8/66822a5eabc51383dd5d1f48/Select_Fields_Get.png)
3.  Click **Proceed**.
4.  Click the **Test Action** button to test the configured action.  
    ![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt185dfb5fea1f3561/66822a5eee05f32dcf300593/Test_Action.png)
5.  Once set, click **Save and Exit**.  
    ![Save_Exit_Get.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0619eacf9e0bb997/66822a54fcee4a54122e0105/Save_Exit_Get.png)

This sets up your **AWS S3** action connector.
