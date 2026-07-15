---
title: "[Automations guides and connectors] - Backup Entries or Assets to AWS S3"
description: Guide to using Contentstack Automate to back up entries or assets to an AWS S3 bucket.
url: https://www.contentstack.com/docs/agent-os/backup-entries-or-assets-to-aws-s3
product: Contentstack
doc_type: automation-guide
audience:
  - developers
  - content-managers
version: current
last_updated: 2026-03-26
---

# [Automations guides and connectors] - Backup Entries or Assets to AWS S3

This page explains how to use Contentstack Automate to set up an automation that backs up entries or assets to an AWS S3 bucket. It is intended for users configuring Automate projects and connectors, and should be used when you want to store Contentstack content backups in Amazon S3.

## Backup Entries or Assets to AWS S3

The Backup Entries/Assets to S3 use case shows how you can use Contentstack s Automate to automate backing up entries or assets to an AWS S3 bucket.

The AWS Simple Storage Service (S3) is a cloud-based storage service provided by Amazon that allows users to store any amount of data for virtually any use case.

- [Configure Entry Trigger to Backup Entries or Assets to AWS S3](#configure-entry-trigger-to-backup-entries-or-assets-to-aws-s3)
- [Add an Asset](#add-an-asset)

Let s look at the steps in more detail.

## Configure Entry Trigger to Backup Entries or Assets to AWS S3

Log in to your [Contentstack account](https://app.contentstack.com/#!/login) and click the Automate  icon.

- Click **+ New Project** to add a new project.
- Click **+ New Automation**.
- Enter the **Automation Name** and **Description**.
- Click **Create**.
- Click** Configure Trigger** from the left navigation panel.![Configure-Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1f2711c66edfaa36/63d90bd01d043210df68769f/Configure-Trigger.png)
- Within the **Configure Trigger** step, click the **Contentstack** connector.![Select_the_Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3e8bd5b9927abad3/651ba082ff4a20ae40cb0f8c/Select_the_Trigger.png)
- Click the **Entry Trigger **event.![Select-Entry-Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte8a5910dbb80fb10/63d90be2e408254c88fc03a3/Select-Entry-Trigger.png)
- Click **+ Add New Account **to add your Contentstack account.![Add-New-Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt53b41f66ab3308ed/63d90bd0071fae111ebfd8b2/Add-New-Account.png)
- Select the **Event** and the **Stack** for which you want to configure the trigger.![Select-Event-Stack.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9950ac581d6a13b1/63d90be204ee8615186bd5be/Select-Event-Stack.png)
- Once done, click **Proceed**.
- Click **Test Trigger**.![Test-Trigger.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2992ee96e18512ab/63d90be22d94ad4c89edc30c/Test-Trigger.png)
- Click **Save and Exit**.

## Add an Asset

The next step requires you to add an asset to the AWS S3 bucket.  
To add an asset, follow the given instructions:

Click **Configure Action Step** from the left navigation panel.![Click-Configure-Action-Step.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd883d64a7b2deb55/63d90bd05c5c9c52a32ed0c9/Click-Configure-Action-Step.png)

- Click **Action Step** to configure third-party services.![Select-Action-Step.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb329321383833978/63d90bd0bbcc27228d8e0296/Select-Action-Step.png)
- Within the **Configure Action Step**, click the **AWS S3 **connector.

**Note:** You can sort and search the connector(s) based on the filter.

- Select the **Create New Object** action.![Select-AWS-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf3eb5c48d093c74b/63d90bd1c9787852a26be72a/Select-AWS-Action.png)
- Click **+ Add New Account **to add your AWS S3 account.
- Add **Bucket name**, **File Name**, and **Content** details in their respective fields. Once done, click **Proceed**.![AWS-S3-Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5c8b7124928363d2/63d90bd00cf395166a6e1d86/AWS-S3-Fields.png)
- Click **Test Action**.![Test-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3fbe01d8f4c7a879/63d90be2e480c910d1acb664/Test-Action.png)
- Once the action is successfully executed, click **Save and Exit** to finish the process.![Save-Exit-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd6cc01a6af064c66/63d90bd099f0c910e171a299/Save-Exit-Action.png)
- Navigate to your AWS S3 bucket and check for the recently uploaded asset. You can view the details in the Object overview section.![47.AWS_S3_Bucket.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt4b9a3c97ffd548a6/6370c8bf6237d71069349bb5/47.AWS_S3_Bucket.jpg)

This sets the Backup Entries/Assets to **AWS S3** scenario.

## Common questions

**How do I connect my Contentstack account to the automation?**  
Use **+ Add New Account ** in the **Entry Trigger **event configuration to add your Contentstack account.

**Where do I select which stack and event to use for the trigger?**  
In the **Configure Trigger** step, select the **Event** and the **Stack** for which you want to configure the trigger.

**What AWS S3 action is used to upload the asset?**  
Select the **Create New Object** action in the **AWS S3 **connector.

**How can I verify the asset was uploaded to S3?**  
Navigate to your AWS S3 bucket and check for the recently uploaded asset in the Object overview section.