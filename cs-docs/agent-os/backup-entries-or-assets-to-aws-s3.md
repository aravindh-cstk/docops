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
- Click** Configure Trigger** from the left navigation panel.
- Within the **Configure Trigger** step, click the **Contentstack** connector.
- Click the **Entry Trigger **event.
- Click **+ Add New Account **to add your Contentstack account.
- Select the **Event** and the **Stack** for which you want to configure the trigger.
- Once done, click **Proceed**.
- Click **Test Trigger**.
- Click **Save and Exit**.

## Add an Asset

The next step requires you to add an asset to the AWS S3 bucket.  
To add an asset, follow the given instructions:

Click **Configure Action Step** from the left navigation panel.

- Click **Action Step** to configure third-party services.
- Within the **Configure Action Step**, click the **AWS S3 **connector.

**Note:** You can sort and search the connector(s) based on the filter.

- Select the **Create New Object** action.
- Click **+ Add New Account **to add your AWS S3 account.
- Add **Bucket name**, **File Name**, and **Content** details in their respective fields. Once done, click **Proceed**.
- Click **Test Action**.
- Once the action is successfully executed, click **Save and Exit** to finish the process.
- Navigate to your AWS S3 bucket and check for the recently uploaded asset. You can view the details in the Object overview section.

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