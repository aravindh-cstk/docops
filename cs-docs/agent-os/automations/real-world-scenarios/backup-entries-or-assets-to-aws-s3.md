---
title: "Backup Entries or Assets to AWS S3"
description: "Backup Entries or Assets to AWS S3"
url: /agent-os/backup-entries-or-assets-to-aws-s3
uid: blta986458b6270d48a
---

# Backup Entries or Assets to AWS S3

## Backup Entries or Assets to AWS S3

The Backup Entries/Assets to S3 use case shows how you can use Contentstack s Automate to automate backing up entries or assets to an AWS S3 bucket.

The AWS Simple Storage Service (S3) is a cloud-based storage service provided by Amazon that allows users to store any amount of data for virtually any use case.

-   [Configure Entry Trigger to Backup Entries or Assets to AWS S3](#configure-entry-trigger-to-backup-entries-or-assets-to-aws-s3)
-   [Add an Asset](#add-an-asset)

Let s look at the steps in more detail.

1.  ## Configure Entry Trigger to Backup Entries or Assets to AWS S3

    1.  Log in to your [Contentstack account](https://app.contentstack.com/#!/login) and click the Automate  icon.
    2.  Click **\+ New Project** to add a new project.
    3.  Click **\+ New Automation**.
    4.  Enter the **Automation Name** and **Description**.
    5.  Click **Create**.
    6.  Click **Configure Trigger** from the left navigation panel.  
        ![Configure-Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1f2711c66edfaa36/63d90bd01d043210df68769f/Configure-Trigger.png)
    7.  Within the **Configure Trigger** step, click the **Contentstack** connector.  
        ![Select_the_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3e8bd5b9927abad3/651ba082ff4a20ae40cb0f8c/Select_the_Trigger.png)  

    8.  Click the **Entry Trigger** event.  
        ![Select-Entry-Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte8a5910dbb80fb10/63d90be2e408254c88fc03a3/Select-Entry-Trigger.png)
    9.  Click **\+ Add New Account** to add your Contentstack account.  
        ![Add-New-Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt53b41f66ab3308ed/63d90bd0071fae111ebfd8b2/Add-New-Account.png)
    10.  Select the **Event** and the **Stack** for which you want to configure the trigger.  
          ![Select-Event-Stack.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9950ac581d6a13b1/63d90be204ee8615186bd5be/Select-Event-Stack.png)
    11.  Once done, click **Proceed**.
    12.  Click **Test Trigger**.  
         ![Test-Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2992ee96e18512ab/63d90be22d94ad4c89edc30c/Test-Trigger.png)
    13.  Click **Save and Exit**.
2.  ## Add an Asset

    The next step requires you to add an asset to the AWS S3 bucket.  
    To add an asset, follow the given instructions:

    1.  Click **Configure Action Step** from the left navigation panel.   
        ![Click-Configure-Action-Step.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd883d64a7b2deb55/63d90bd05c5c9c52a32ed0c9/Click-Configure-Action-Step.png)
    2.  Click **Action Step** to configure third-party services.  
        ![Select-Action-Step.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb329321383833978/63d90bd0bbcc27228d8e0296/Select-Action-Step.png)
    3.  Within the **Configure Action Step**, click the **AWS S3** connector.  

        **Note:** You can sort and search the connector(s) based on the filter.

        ![Select_AWS_S3_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf4eabc525c2c0867/651ba0829f3cb10dcd54f617/Select_AWS_S3_Connector.png)
    4.  Select the **Create New Object** action.  
        ![Select-AWS-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf3eb5c48d093c74b/63d90bd1c9787852a26be72a/Select-AWS-Action.png)
    5.  Click **\+ Add New Account** to add your AWS S3 account.
    6.  Add **Bucket name**, **File Name**, and **Content** details in their respective fields. Once done, click **Proceed**.  
        ![AWS-S3-Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5c8b7124928363d2/63d90bd00cf395166a6e1d86/AWS-S3-Fields.png)  

    7.  Click **Test Action**.  
        ![Test-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3fbe01d8f4c7a879/63d90be2e480c910d1acb664/Test-Action.png)  


    8.  Once the action is successfully executed, click **Save and Exit** to finish the process.  
        ![Save-Exit-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd6cc01a6af064c66/63d90bd099f0c910e171a299/Save-Exit-Action.png)  

    9.  Navigate to your AWS S3 bucket and check for the recently uploaded asset. You can view the details in the Object overview section.  
        ![47.AWS_S3_Bucket.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt4b9a3c97ffd548a6/6370c8bf6237d71069349bb5/47.AWS_S3_Bucket.jpg)  


    This sets the Backup Entries/Assets to **AWS S3** scenario.
